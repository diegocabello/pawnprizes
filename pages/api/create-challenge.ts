import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../generated/prisma';
import { auth0 } from '@/lib/auth0';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handleCreateChallenge(req, res);
  } else if (req.method === 'PUT') {
    return handlePlaceBet(req, res);
  } else if (req.method === 'PATCH') {
    return handleVote(req, res);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}

async function handleCreateChallenge(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { c_target, title, c_description, specific_target } = req.body;

    // Validate required fields
    if (!c_target || !title || !c_description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate c_target is either 'targeted' or 'open'
    if (c_target !== 'targeted' && c_target !== 'open') {
      return res.status(400).json({ error: 'Invalid challenge type' });
    }

    // Validate specific_target for targeted challenges
    if (c_target === 'targeted' && !specific_target) {
      return res.status(400).json({ error: 'Specific target is required for targeted challenges' });
    }

    // Create the challenge with related records
    const challenge = await prisma.challenges.create({
      data: {
        c_target,
        title,
        c_description,
        time_created: new Date(),
        ...(c_target === 'targeted' && {
          targeted_challenges: {
            create: {
              specific_target: "discs",   // ✅ Only this field
            }
          }
        }),
        ...(c_target === 'open' && {
          open_challenges: {
            create: {
              submissions: 0
            }
          }
        })
      },
      include: {
        targeted_challenges: true,
        open_challenges: true
      }
    });

    return res.status(201).json({ success: true, challenge });
  } catch (error) {
    console.error('Error creating challenge:', error);
    return res.status(500).json({
      error: 'Failed to create challenge',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

async function handlePlaceBet(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get user session
    const session = await auth0.getSession(req);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized - No session found' });
    }

    const user = session.user;
    const userId = user.sub;

    if (!userId) {
      return res.status(400).json({ error: 'Invalid user session - missing sub' });
    }

    const { challenge_id, amount, bet_type } = req.body;

    // Validate required fields
    if (!challenge_id || amount === undefined || !bet_type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate bet_type
    if (bet_type !== 'for' && bet_type !== 'against') {
      return res.status(400).json({ error: 'Invalid bet type' });
    }

    // Validate amount
    if (typeof amount !== 'number' || amount <= 0) {
      return res.status(400).json({ error: 'Amount must be a positive number' });
    }

    // Check if user has enough coins
    const userProfile = await prisma.profile.findUnique({
      where: { profile_id: userId }
    });

    if (!userProfile) {
      return res.status(404).json({ error: 'User profile not found' });
    }

    if (userProfile.coins < amount) {
      return res.status(400).json({ error: 'Insufficient coins' });
    }

    // Check if user already has a bet on this challenge
    const existingBet = await prisma.targeted_challenges_bets.findUnique({
      where: {
        bettor_id_challenge_id: {
          bettor_id: userId,
          challenge_id: challenge_id
        }
      }
    });

    if (existingBet) {
      return res.status(400).json({ error: 'You have already placed a bet on this challenge' });
    }

    // Use transaction to ensure atomicity
    const result = await prisma.$transaction(async (tx) => {
      // Deduct coins from user
      await tx.profile.update({
        where: { profile_id: userId },
        data: {
          coins: {
            decrement: amount
          }
        }
      });

      // Create bet record (triggers will automatically update the cached counts)
      await tx.targeted_challenges_bets.create({
        data: {
          challenge_id,
          bet_direction: bet_type,
          bet_magnitude: amount,
          bettor_id: userId
        }
      });

      // Fetch updated challenge
      const updatedChallenge = await tx.targeted_challenges.findUnique({
        where: { challenge_id },
        include: {
          challenges: true
        }
      });

      return updatedChallenge;
    });

    return res.status(200).json({ success: true, challenge: result });
  } catch (error) {
    console.error('Error placing bet:', error);
    return res.status(500).json({
      error: 'Failed to place bet',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

async function handleVote(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get user session
    const session = await auth0.getSession(req);
    if (!session) {
      return res.status(401).json({ error: 'Unauthorized - No session found' });
    }

    const user = session.user;
    const userId = user.sub;

    if (!userId) {
      return res.status(400).json({ error: 'Invalid user session - missing sub' });
    }

    const { challenge_id, vote_type } = req.body;

    // Validate required fields
    if (!challenge_id || !vote_type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Validate vote_type
    if (vote_type !== 'for' && vote_type !== 'against') {
      return res.status(400).json({ error: 'Invalid vote type' });
    }

    // Check if user already voted on this challenge
    const existingVote = await prisma.targeted_challenges_votes.findUnique({
      where: {
        voter_id_challenge_id: {
          voter_id: userId,
          challenge_id: challenge_id
        }
      }
    });

    let result;

    if (existingVote) {
      // Update existing vote if direction changed
      if (existingVote.vote_direction !== vote_type) {
        result = await prisma.targeted_challenges_votes.update({
          where: {
            voter_id_challenge_id: {
              voter_id: userId,
              challenge_id: challenge_id
            }
          },
          data: {
            vote_direction: vote_type
          }
        });
      } else {
        // Same vote, no change needed
        result = existingVote;
      }
    } else {
      // Create new vote (triggers will automatically update the cached counts)
      result = await prisma.targeted_challenges_votes.create({
        data: {
          challenge_id,
          vote_direction: vote_type,
          voter_id: userId
        }
      });
    }

    // Fetch updated challenge
    const updatedChallenge = await prisma.targeted_challenges.findUnique({
      where: { challenge_id },
      include: {
        challenges: true
      }
    });

    return res.status(200).json({ success: true, vote: result, challenge: updatedChallenge });
  } catch (error) {
    console.error('Error voting:', error);
    return res.status(500).json({
      error: 'Failed to vote',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}