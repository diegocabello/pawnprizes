'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRequireRegistration } from '@/hooks/useRequireRegistration';

type TabType = 'details' | 'challenges' | 'submissions';

export default function Profile() {
  const router = useRouter();
  const { user, isLoading, checked } = useRequireRegistration();
  const [activeTab, setActiveTab] = useState<TabType>('details');
  const [profileData, setProfileData] = useState<Record<string, unknown> | null>(null);
  const [challenges, setChallenges] = useState<Record<string, unknown>[]>([]);
  const [submissions, setSubmissions] = useState<Record<string, unknown>[]>([]);
  const [bets, setBets] = useState<Record<string, unknown>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (checked && user) {
      fetchProfile();
    }
  }, [checked, user]);

  useEffect(() => {
    if (checked && user && activeTab !== 'details') {
      fetchTabData();
    }
  }, [activeTab, checked, user]);

  const fetchProfile = async () => {
    try {
      const res = await fetch('/api/profile', {
        method: 'GET',
        credentials: 'include',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch profile');
      }

      const data = await res.json();
      setProfileData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchTabData = async () => {
    try {
      if (activeTab === 'challenges') {
        const res = await fetch('/api/user-challenges', {
          method: 'GET',
          credentials: 'include',
        });
        if (res.ok) {
          const data = await res.json();
          setChallenges(data.challenges || []);
        }
      } else if (activeTab === 'submissions') {
        const res = await fetch('/api/user-submissions', {
          method: 'GET',
          credentials: 'include',
        });
        if (res.ok) {
          const data = await res.json();
          setSubmissions(data.submissions || []);
        }
      } else if (activeTab === 'bets') {
        // Bets tab is a placeholder for now
        setBets([]);
      }
    } catch (err: any) {
      console.error('Error fetching tab data:', err);
    }
  };

  if (isLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
        <div className="text-center">Loading profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
        <div className="text-center text-red-600 dark:text-red-400">Error: {error}</div>
      </div>
    );
  }

  const tabs: { id: TabType; label: string }[] = [
    { id: 'details', label: 'Details' },
    { id: 'bets', label: 'Bets' },
    { id: 'challenges', label: 'Challenges Created' },
    { id: 'submissions', label: 'Challenge Submissions' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>

        {/* Tabbed Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {/* Details Tab */}
            {activeTab === 'details' && profileData && (
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">First Name</label>
                      <p className="text-lg font-medium">{profileData.first_name || 'N/A'}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Last Name</label>
                      <p className="text-lg font-medium">{profileData.last_name || 'N/A'}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Email</label>
                      <p className="text-lg font-medium">{profileData.email || 'N/A'}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
                      <p className="text-lg font-medium">{profileData.phone_number || 'N/A'}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Gender</label>
                      <p className="text-lg font-medium capitalize">{profileData.gender || 'N/A'}</p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Date of Birth</label>
                      <p className="text-lg font-medium">
                        {profileData.date_of_birth
                          ? new Date(profileData.date_of_birth).toLocaleDateString()
                          : 'N/A'}
                      </p>
                    </div>

                    <div>
                      <label className="text-sm text-gray-600 dark:text-gray-400">Coins</label>
                      <p className="text-lg font-medium">💰 {profileData.coins || 0}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => router.push('/edit-profile')}
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded font-medium transition-colors"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            )}

            {/* Bets Tab */}
            {activeTab === 'bets' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">My Bets</h2>
                {bets.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">You haven't placed any bets yet.</p>
                ) : (
                  <div className="space-y-3">
                    {bets.map((bet: any) => (
                      <div
                        key={bet.id}
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{bet.challenge_title}</h3>
                          <span className={`text-xs px-2 py-1 rounded ${
                            bet.bet_type === 'for'
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                              : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                          }`}>
                            {bet.bet_type === 'for' ? 'For' : 'Against'}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Amount: 💰 {bet.amount}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                          {new Date(bet.time_placed).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Challenges Created Tab */}
            {activeTab === 'challenges' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">Challenges I've Created</h2>
                {challenges.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">You haven't created any challenges yet.</p>
                ) : (
                  <div className="space-y-3">
                    {challenges.map((challenge: any) => (
                      <div
                        key={challenge.id}
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold">{challenge.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded ${
                            challenge.c_target === 'targeted'
                              ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                              : 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200'
                          }`}>
                            {challenge.c_target}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          {challenge.c_description}
                        </p>
                        {challenge.c_target === 'targeted' && challenge.targeted_challenges && (
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            <p>Target: {challenge.targeted_challenges.specific_target}</p>
                            <p>Bets For: 💰 {challenge.targeted_challenges.value_bet_for}</p>
                            <p>Bets Against: 💰 {challenge.targeted_challenges.value_bet_against}</p>
                          </div>
                        )}
                        {challenge.c_target === 'open' && challenge.open_challenges && (
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Submissions: {challenge.open_challenges.submissions}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
                          Created: {new Date(challenge.time_created).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Submissions Tab */}
            {activeTab === 'submissions' && (
              <div>
                <h2 className="text-xl font-semibold mb-4">My Challenge Submissions</h2>
                {submissions.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">You haven't submitted to any challenges yet.</p>
                ) : (
                  <div className="space-y-3">
                    {submissions.map((submission: any) => (
                      <div
                        key={submission.id}
                        className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900"
                      >
                        <h3 className="font-semibold mb-2">{submission.challenge_title}</h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          {submission.submission_data || 'No submission data'}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Submitted: {new Date(submission.time_submitted).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}