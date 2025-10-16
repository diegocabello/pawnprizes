import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { auth0 } from '@/lib/auth0'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[user-challenges] Request received:', {
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });

  try {
    const session = await auth0.getSession(req);

    if (!session) {
      console.warn('[user-challenges] No session found - returning 401');
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = session.user;
    const sub = user.sub;

    console.log('[user-challenges] Session validated:', {
      sub,
      hasUser: !!user
    });

    if (!sub) {
      console.error('[user-challenges] Missing sub from user session:', { user });
      return res.status(400).json({ error: 'Invalid user session - missing sub' });
    }

    if (req.method === 'GET') {
      console.log('[user-challenges] GET - Fetching challenges for user:', sub);

      const challenges = await prisma.challenges.findMany({
        where: { creator_id: sub },
        include: {
          targeted_challenges: true,
          open_challenges: true,
        },
        orderBy: {
          time_created: 'desc'
        }
      });

      console.log('[user-challenges] GET - Found challenges:', challenges.length);
      return res.status(200).json({ challenges });
    }

    console.warn('[user-challenges] Method not allowed:', req.method);
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('[user-challenges] Error occurred:', {
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
