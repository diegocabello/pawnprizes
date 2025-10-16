'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRequireRegistration } from '@/hooks/useRequireRegistration';

export default function Profile() {
  const router = useRouter();
  const { user, isLoading, checked } = useRequireRegistration();
  const [profileData, setProfileData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (checked && user) {
      fetchProfile();
    }
  }, [checked, user]);

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
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
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

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>

        {profileData && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 space-y-4">
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
      </div>
    </div>
  );
}