import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handleCreateChallenge(req, res);
  } else if (req.method === 'PUT') {
    return handlePlaceBet(req, res);
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
              value_bet_for: 0,
              value_bet_against: 0,
              specific_target
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

    // Update the targeted_challenges bet value
    const fieldToUpdate = bet_type === 'for' ? 'value_bet_for' : 'value_bet_against';

    const updatedChallenge = await prisma.targeted_challenges.update({
      where: { challenge_id },
      data: {
        [fieldToUpdate]: {
          increment: amount
        }
      },
      include: {
        challenges: true
      }
    });

    return res.status(200).json({ success: true, challenge: updatedChallenge });
  } catch (error) {
    console.error('Error placing bet:', error);
    return res.status(500).json({
      error: 'Failed to place bet',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}