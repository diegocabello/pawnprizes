'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { useRequireRegistration } from '@/hooks/useRequireRegistration';


type ProfileData = {
  profile_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
  coins: number;
};

export default function CreateChallenge() {
  const router = useRouter();
  const [challengeType, setChallengeType] = useState<'targeted' | 'open'>('targeted');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [specificTarget, setSpecificTarget] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const { user, isLoading, checked } = useRequireRegistration();

  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      // Measure the width of "targeted" text + padding (16px left + 16px right) + arrow space (24px)
      setDropdownWidth(measureRef.current.offsetWidth + 40);
    }
  }, []);

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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!profileData) {
      setError('fuck');
      return;
    }
    
    try {
      const payload = {
        c_target: challengeType,
        title,
        c_description: description,
        creator_id: profileData.profile_id,  // ✅ include this line
        ...(challengeType === 'targeted' && { specific_target: specificTarget })
      };

      const res = await fetch('/api/create-challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to create challenge');
      }

      // Show success message
      alert('Creation success');

      // Redirect to index
      router.push('/browse-challenges');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Create Challenge</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Hidden element to measure text width */}
          <span
            ref={measureRef}
            className="invisible absolute p-2"
            style={{
              whiteSpace: 'nowrap',
              font: 'inherit'
            }}
          >
            Targeted
          </span>

          {/* Challenge Type Dropdown */}
          <div>
            <label htmlFor="challengeType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Challenge Type
            </label>
            <select
              id="challengeType"
              value={challengeType}
              onChange={(e) => setChallengeType(e.target.value as 'targeted' | 'open')}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ width: dropdownWidth > 0 ? `${dropdownWidth}px` : 'auto' }}
              required
            >
              <option value="targeted">Targeted</option>
              <option value="open">Open</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={64}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{title.length}/64 characters</p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={280}
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description.length}/280 characters</p>
          </div>

          {/* Specific Target (only for targeted challenges) */}
          {challengeType === 'targeted' && (
            <div>
              <label htmlFor="specificTarget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Specific Target
              </label>
              <input
                id="specificTarget"
                type="text"
                value={specificTarget}
                onChange={(e) => setSpecificTarget(e.target.value)}
                maxLength={50}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{specificTarget.length}/50 characters</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-200 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-auto px-12 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded font-medium transition-colors"
            >
              {loading ? 'Creating...' : 'Create Challenge'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}