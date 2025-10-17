import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { auth0 } from '@/lib/auth0'

async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('[user-votes] Request received:', {
    method: req.method,
    url: req.url,
    timestamp: new Date().toISOString()
  });

  try {
    const session = await auth0.getSession(req);

    if (!session) {
      console.warn('[user-votes] No session found - returning 401');
      return res.status(401).json({ error: "Unauthorized" });
    }

    const user = session.user;
    const sub = user.sub;

    console.log('[user-votes] Session validated:', {
      sub,
      hasUser: !!user
    });

    if (!sub) {
      console.error('[user-votes] Missing sub from user session:', { user });
      return res.status(400).json({ error: 'Invalid user session - missing sub' });
    }

    if (req.method === 'GET') {
      console.log('[user-votes] GET - Fetching votes for user:', sub);

      const votes = await prisma.targeted_challenges_votes.findMany({
        where: { voter_id: sub },
        include: {
          targeted_challenges: {
            include: {
              challenges: {
                select: {
                  id: true,
                  title: true,
                  c_description: true,
                  c_target: true,
                }
              }
            }
          }
        },
        orderBy: {
          vote_id: 'desc'
        }
      });

      // Transform the data to include challenge info at top level
      const formattedVotes = votes.map(vote => ({
        vote_id: vote.vote_id,
        challenge_id: vote.challenge_id,
        challenge_title: vote.targeted_challenges.challenges.title,
        challenge_description: vote.targeted_challenges.challenges.c_description,
        vote_direction: vote.vote_direction,
        specific_target: vote.targeted_challenges.specific_target,
      }));

      console.log('[user-votes] GET - Found votes:', formattedVotes.length);
      return res.status(200).json({ votes: formattedVotes });
    }

    console.warn('[user-votes] Method not allowed:', req.method);
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    const errorStack = error instanceof Error ? error.stack : undefined;

    console.error('[user-votes] Error occurred:', {
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
