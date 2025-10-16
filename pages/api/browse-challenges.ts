import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const challenges = await prisma.challenges.findMany({
      take: 15,
      orderBy: {
        time_created: 'desc'
      },
      include: {
        targeted_challenges: true,
        open_challenges: true
      }
    });

    return res.status(200).json({ challenges });
  } catch (error) {
    console.error('Error fetching challenges:', error);
    return res.status(500).json({
      error: 'Failed to fetch challenges',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}