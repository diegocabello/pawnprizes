import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { auth0 } from '@/lib/auth0'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[user-submissions] Request received:', {
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });

  try {
    const session = await auth0.getSession(req);

    if (!session) {
      console.warn('[user-submissions] No session found - returning 401');
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = session.user;
    const sub = user.sub;

    console.log('[user-submissions] Session validated:', {
      sub,
      hasUser: !!user
    });

    if (!sub) {
      console.error('[user-submissions] Missing sub from user session:', { user });
      return res.status(400).json({ error: 'Invalid user session - missing sub' });
    }

    if (req.method === 'GET') {
      console.log('[user-submissions] GET - Fetching submissions for user:', sub);

      const submissions = await prisma.challenge_submissions.findMany({
        where: { user_id: sub },
        include: {
          challenges: {
            select: {
              id: true,
              title: true,
              c_description: true,
              c_target: true,
            }
          }
        },
        orderBy: {
          time_submitted: 'desc'
        }
      });

      // Transform the data to include challenge title at top level
      const formattedSubmissions = submissions.map(sub => ({
        id: sub.id,
        challenge_id: sub.challenge_id,
        challenge_title: sub.challenges.title,
        challenge_description: sub.challenges.c_description,
        submission_data: sub.submission_data,
        time_submitted: sub.time_submitted,
      }));

      console.log('[user-submissions] GET - Found submissions:', formattedSubmissions.length);
      return res.status(200).json({ submissions: formattedSubmissions });
    }

    console.warn('[user-submissions] Method not allowed:', req.method);
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('[user-submissions] Error occurred:', {
      error,
      message: errorMessage,
      stack: errorStack,
      timestamp: new Date().toISOString()
    });

    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessage,
      timestamp: new Date().toISOString()
    });
  }
}

export default handler
