// components/homepage/Newsletter.tsx
"use client";

import React from 'react';

interface NewsletterProps {
  email: string;
  setEmail: (value: string) => void;
  message: string;
  handleSubscribe: () => void;
}

const Newsletter: React.FC<NewsletterProps> = ({
  email,
  setEmail,
  message,
  handleSubscribe,
}) => {
  const isValidEmail = email.includes('@');

  return (
    <section className="mb-12 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>

      <div className="flex flex-col sm:flex-row items-center gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="p-2 border rounded w-full"
          aria-label="Enter your email address"
        />
        <button
          onClick={handleSubscribe}
          disabled={!isValidEmail}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Subscribe
        </button>
      </div>

      {message && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-300">{message}</p>
      )}
    </section>
  );
};

export default Newsletter;
