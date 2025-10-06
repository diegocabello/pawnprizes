'use client';

import { useState, useEffect, MouseEvent } from 'react';

type Challenge = {
  id: number;
  c_target: 'targeted' | 'open';
  title: string;
  c_description: string;
  time_created: string;
  targeted_challenges?: {
    value_bet_for: number;
    value_bet_against: number;
    specific_target: string;
  };
  open_challenges?: {
    submissions: number;
  };
};

type BrowseChallengesProps = {
  coins: number;
  setCoins: (coins: number) => void;
};

export default function BrowseChallenges({ coins, setCoins }: BrowseChallengesProps) {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [betPopup, setBetPopup] = useState<{
    challengeId: number;
    betType: 'for' | 'against';
    x: number;
    y: number;
  } | null>(null);
  const [betAmount, setBetAmount] = useState<string>('');
  const [betError, setBetError] = useState<string>('');

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const res = await fetch('/api/browse-challenges');
      if (!res.ok) {
        throw new Error('Failed to fetch challenges');
      }
      const data = await res.json();
      setChallenges(data.challenges);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBetClick = (e: MouseEvent, challengeId: number, betType: 'for' | 'against') => {
    e.stopPropagation();
    setBetPopup({
      challengeId,
      betType,
      x: e.clientX,
      y: e.clientY
    });
    setBetAmount('');
    setBetError('');
  };

  const handlePlaceBet = async () => {
    const amount = parseInt(betAmount);

    if (isNaN(amount) || amount <= 0) {
      setBetError('Please enter a valid amount');
      return;
    }

    if (amount > coins) {
      setBetError('Insufficient coins');
      return;
    }

    if (!betPopup) return;

    try {
      const res = await fetch('/api/create-challenge', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challenge_id: betPopup.challengeId,
          amount,
          bet_type: betPopup.betType
        })
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to place bet');
      }

      // Deduct coins
      setCoins(coins - amount);

      // Refresh challenges
      await fetchChallenges();

      // Close popup
      setBetPopup(null);
      setBetAmount('');
      setBetError('');
    } catch (err: any) {
      setBetError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-white p-8">
        <div className="text-center">Loading challenges...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-white p-8">
        <div className="text-center text-red-600 dark:text-red-400">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Browse Challenges</h1>

        {challenges.length === 0 ? (
          <p className="text-gray-500">No challenges found.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge) => (
              <div
                key={challenge.id}
                className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-semibold">{challenge.title}</h2>
                  <span className={`text-xs px-2 py-1 rounded ${
                      challenge.c_target === 'targeted' 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                        : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                    }`}>
                    {challenge.c_target}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {challenge.c_description}
                </p>

                {/* Targeted Challenge Info */}
                {challenge.c_target === 'targeted' && challenge.targeted_challenges && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Target:</span>
                      <span className="font-medium">{challenge.targeted_challenges.specific_target}</span>
                    </div>
                    <div className="pb-4">
                      <span className="text-gray-500"><u>Betting Spread:</u></span>
                    </div>
                    <div className="flex justify-between items-center text-gray-500 text-xs">
                      <span
                        className="cursor-pointer hover:text-blue-600"
                        title="Bet For"
                        onClick={(e) => handleBetClick(e, challenge.id, 'for')}
                      >
                        For
                      </span>
                      <span
                        className="cursor-pointer hover:text-red-600"
                        title="Bet Against"
                        onClick={(e) => handleBetClick(e, challenge.id, 'against')}
                      >
                        Against
                      </span>
                    </div>
                    {(() => {
                      const betFor = challenge.targeted_challenges.value_bet_for;
                      const betAgainst = challenge.targeted_challenges.value_bet_against;
                      const total = betFor + betAgainst;
                      const forPercent = total === 0 ? 50 : (betFor / total) * 100;
                      const againstPercent = total === 0 ? 50 : (betAgainst / total) * 100;

                      return (
                        <div className="flex rounded-full overflow-hidden h-8 text-white text-xs font-medium">
                          <div
                            className="bg-blue-500 flex items-center justify-start pl-2 cursor-pointer hover:bg-blue-600 transition-colors"
                            style={{ width: `${forPercent}%` }}
                            title="Bet For"
                            onClick={(e) => handleBetClick(e, challenge.id, 'for')}
                          >
                            {betFor}
                          </div>
                          <div
                            className="bg-red-500 flex items-center justify-end pr-2 cursor-pointer hover:bg-red-600 transition-colors"
                            style={{ width: `${againstPercent}%` }}
                            title="Bet Against"
                            onClick={(e) => handleBetClick(e, challenge.id, 'against')}
                          >
                            {betAgainst}
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                )}

                {/* Open Challenge Info */}
                {challenge.c_target === 'open' && challenge.open_challenges && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Submissions:</span>
                      <span className="font-medium">{challenge.open_challenges.submissions}</span>
                    </div>
                  </div>
                )}

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400">
                  {new Date(challenge.time_created).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bet Popup */}
        {betPopup && (
          <>
            {/* Backdrop to close popup */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setBetPopup(null)}
            />
            {/* Popup */}
            <div
              className="fixed z-50 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 w-64"
              style={{
                left: `${betPopup.x}px`,
                top: `${betPopup.y}px`,
                transform: 'translate(-50%, 10px)'
              }}
            >
              <h3 className="text-sm font-semibold mb-2">
                Bet {betPopup.betType === 'for' ? 'For' : 'Against'}
              </h3>
              <input
                type="number"
                value={betAmount}
                onChange={(e) => setBetAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-black dark:text-white mb-2"
                autoFocus
              />
              {betError && (
                <p className="text-red-500 text-xs mb-2">{betError}</p>
              )}
              <div className="flex gap-2">
                <button
                  onClick={handlePlaceBet}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm"
                >
                  Place Bet
                </button>
                <button
                  onClick={() => setBetPopup(null)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 py-1 px-3 rounded text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}