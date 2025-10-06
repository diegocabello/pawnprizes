'use client';

import { useState, FormEvent, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function CreateChallenge() {
  const router = useRouter();
  const [challengeType, setChallengeType] = useState<'targeted' | 'open'>('targeted');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [specificTarget, setSpecificTarget] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dropdownWidth, setDropdownWidth] = useState<number>(0);

  const measureRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (measureRef.current) {
      // Measure the width of "targeted" text + padding (16px left + 16px right) + arrow space (24px)
      setDropdownWidth(measureRef.current.offsetWidth + 40);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const payload = {
        c_target: challengeType,
        title,
        c_description: description,
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
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-custom-dark text-black dark:text-white p-8">
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
            <label htmlFor="challengeType" className="block text-sm font-medium mb-2">
              Challenge Type
            </label>
            <select
              id="challengeType"
              value={challengeType}
              onChange={(e) => setChallengeType(e.target.value as 'targeted' | 'open')}
              className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
              style={{ width: dropdownWidth > 0 ? `${dropdownWidth}px` : 'auto' }}
              required
            >
              <option value="targeted">Targeted</option>
              <option value="open">Open</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={64}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
              required
            />
            <p className="text-xs text-gray-500 mt-1">{title.length}/64 characters</p>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={280}
              rows={4}
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
              required
            />
            <p className="text-xs text-gray-500 mt-1">{description.length}/280 characters</p>
          </div>

          {/* Specific Target (only for targeted challenges) */}
          {challengeType === 'targeted' && (
            <div>
              <label htmlFor="specificTarget" className="block text-sm font-medium mb-2">
                Specific Target
              </label>
              <input
                id="specificTarget"
                type="text"
                value={specificTarget}
                onChange={(e) => setSpecificTarget(e.target.value)}
                maxLength={50}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800"
                required
              />
              <p className="text-xs text-gray-500 mt-1">{specificTarget.length}/50 characters</p>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-3 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-auto px-12 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded font-medium"
            >
              {loading ? 'Creating...' : 'Create Challenge'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}