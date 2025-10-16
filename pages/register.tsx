import { Prisma } from '@/generated/prisma';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

export default function UserForm() {
  const router = useRouter();

  const [formData, setFormData] = useState<Prisma.profileUncheckedCreateInput>({
    profile_id: '',
    first_name: '',
    last_name: '',
    gender: 'male',
    phone_number: '',
    email: '',
    date_of_birth: new Date(),
  });

  const [showMessage, setShowMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'date_of_birth' ? new Date(value) : value,
    }));

    // Reset error states
    setShowMessage(false);
    setApiError('');
    setSubmitSuccess(false);
  };

  const isFormValid = () => {
    return (
      formData.first_name &&
      formData.last_name &&
      formData.gender &&
      formData.phone_number &&
      formData.phone_number.length >= 10 &&
      formData.date_of_birth
      // formData.email
    );
  };

  const getMissingFieldMessage = () => {
    if (!formData.first_name) return "First name not filled in";
    if (!formData.last_name) return "Last name not filled in";
    if (!formData.gender) return "Gender not selected";
    if (!formData.phone_number) return "Phone number not filled in";
    if (formData.phone_number.length < 10) return "Phone number must be at least 10 digits";
    // if (!formData.email) return "Email not filled in";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid()) {
      setShowMessage(true);
      return;
    }

    setIsSubmitting(true);
    setShowMessage(false);
    setApiError('');

    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => router.push('/'), 500);
      } else {
        setApiError(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
      setApiError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formValid = isFormValid();
  const errorMessage = getMissingFieldMessage();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-80 mx-auto p-8">
      <h1 className="text-3xl text-gray-900 dark:text-gray-100 md:text-left text-center">Register</h1>

      {/* First Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="first_name" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
          First Name
        </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Enter your first name"
        />
      </div>

      {/* Last Name */}
      <div className="flex flex-col gap-1">
        <label htmlFor="last_name" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
          Last Name
        </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Enter your last name"
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col gap-1">
        <label htmlFor="gender" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender || ''}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          
        </select>
      </div>

      {/* Phone Number */}
      <div className="flex flex-col gap-1">
        <label htmlFor="phone_number" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
          Phone Number
        </label>
        <input
          type="tel"
          pattern="\d*" 
          inputMode="numeric"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Enter your phone number"
        />
      </div>

      {/* Email */}
      {/* <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Enter your email"
        />
      </div> */}

      {/* Date of Birth */}
      <div className="flex flex-col gap-1">
        <label htmlFor="date_of_birth" className="text-gray-700 dark:text-gray-300 font-medium text-sm">
          Date of Birth
        </label>
        <input
          type="date"
          id="date_of_birth"
          name="date_of_birth"
          value={formData.date_of_birth instanceof Date ? formData.date_of_birth.toISOString().split('T')[0] : formData.date_of_birth}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </div>

      {/* Messages */}
      {submitSuccess && (
        <div className="text-green-600 text-sm text-center bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
          Registration successful!
        </div>
      )}
      {apiError && (
        <div className="text-red-500 text-sm text-center bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
          {apiError}
        </div>
      )}
      {showMessage && !formValid && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!formValid || isSubmitting}
        className={`w-full py-3 px-4 font-medium rounded-lg transition-colors duration-200 mt-2 ${
          formValid && !isSubmitting
            ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
            : 'bg-green-200 text-green-400 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? 'Registering...' : 'Register'}
      </button>
    </form>
  );
}
