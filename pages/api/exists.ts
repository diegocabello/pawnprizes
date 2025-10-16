import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { auth0 } from '@/lib/auth0'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[exists] Request received:', {
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });

  try {
    const session = await auth0.getSession(req);

    if (!session) {
      console.warn('[exists] No session found - returning 403');
      return res.status(403).json("Forbidden");
    }

    const user = session.user;
    const sub = user.sub;

    console.log('[exists] Session validated:', {
      sub,
      hasUser: !!user
    });

    if (!sub) {
      console.error('[exists] Missing sub from user session:', { user });
      return res.status(400).json({ error: 'Invalid user session - missing sub' });
    }

    if (req.method === 'GET') {
      console.log('[exists] Querying profile for sub:', sub);

      const search = await prisma.profile.findUnique({
        where: { profile_id: sub },
      });

      if (!search) {
        console.log('[exists] Profile not found for sub:', sub);
        return res.status(404).json({ exists: false });
      }

      console.log('[exists] Profile found for sub:', sub);
      return res.status(204).end();
    }

    console.warn('[exists] Method not allowed:', req.method);
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('[exists] Error occurred:', {
      error,
      message: errorMessage,
      stack: errorStack,
      timestamp: new Date().toISOString()
    });

    res.status(500).json({
      error: errorMessage,
      message: errorMessage,
      timestamp: new Date().toISOString()
    });
  }
}

// export default withApiAuthRequired(handler) -- todo fix this for app router

export default handler