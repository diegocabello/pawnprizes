import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { Prisma } from '@/generated/prisma';
import { auth0 } from '@/lib/auth0'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[profile] Request received:', {
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });

  try {
    const session = await auth0.getSession(req);

    if (!session) {
      console.warn('[profile] No session found - returning 401');
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = session.user;
    const sub = user.sub;
    const email = user.email;

    console.log('[profile] Session validated:', {
      sub,
      email,
      hasUser: !!user
    });

    if (!sub) {
      console.error('[profile] Missing sub from user session:', { user });
      return res.status(400).json({ error: 'Invalid user session - missing sub' });
    }

    if (req.method === 'GET') {
      console.log('[profile] GET - Fetching profile for sub:', sub);

      const userData = await prisma.profile.findUnique({
        where: { profile_id: sub },
        include: {

        }
      });

      if (!userData) {
        console.log('[profile] GET - Profile not found for sub:', sub);
        return res.status(404).json({ error: 'User not found' });
      }

      console.log('[profile] GET - Profile found for sub:', sub);
      return res.status(200).json(userData);
    }

    if (req.method === 'POST') {
      console.log('[profile] POST - Creating new profile for sub:', sub);
      console.log('[profile] POST - Request body:', req.body);

      const newUserData = await prisma.profile.create({
        data: { ...req.body, profile_id: sub, email: email }
      });

      console.log('[profile] POST - Profile created successfully for sub:', sub);
      return res.status(201).json(newUserData);
    }

    if (req.method === 'PATCH') {
      console.log('[profile] PATCH - Updating profile for sub:', sub);
      console.log('[profile] PATCH - Request body:', req.body);

      const existingUser = await prisma.profile.findUnique({
        where: { profile_id: sub }
      });

      if (!existingUser) {
        console.log('[profile] PATCH - Profile not found for sub:', sub);
        return res.status(404).json({ error: 'User not found' });
      }

      const { first_name, last_name, date_of_birth, phone_number, gender, checked_matches } = req.body;

      // Only allow these fields
      const updateData: Prisma.profileUpdateInput = {};

      if (phone_number) {
        if (phone_number.length < 10) {
          console.warn('[profile] PATCH - Invalid phone number length:', phone_number.length);
          return res.status(400).json({ error: 'Phone number must be at least 10 digits' });
        }
        updateData.phone_number = phone_number;
      }

      if (first_name) updateData.first_name = first_name;
      if (last_name) updateData.last_name = last_name;
      if (gender) updateData.gender = gender;
      if (date_of_birth) {
        try {
          // if it's already a Date object, use it; otherwise convert string to Date
          const dob = date_of_birth instanceof Date ? date_of_birth : new Date(date_of_birth);
          updateData.date_of_birth = dob.toISOString();
        } catch (dateError) {
          console.error('[profile] PATCH - Invalid date format:', { date_of_birth, dateError });
          return res.status(400).json({
            error: 'Invalid date format',
            message: dateError instanceof Error ? dateError.message : 'Unknown date parsing error'
          });
        }
      }

      if (Object.keys(updateData).length === 0) {
        console.warn('[profile] PATCH - No valid fields to update');
        return res.status(400).json({ error: 'No valid fields to update' });
      }

      console.log('[profile] PATCH - Update data:', updateData);

      const updatedUser = await prisma.profile.update({
        where: { profile_id: sub },
        data: updateData
      });

      console.log('[profile] PATCH - Profile updated successfully for sub:', sub);
      return res.status(200).json(updatedUser);
    }

    console.warn('[profile] Method not allowed:', req.method);
    res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('[profile] Error occurred:', {
      error,
      message: errorMessage,
      stack: errorStack,
      timestamp: new Date().toISOString()
    });

    return res.status(500).json({
      error: errorMessage,
      message: errorMessage,
      timestamp: new Date().toISOString()
    });
  }
}

export default handler
