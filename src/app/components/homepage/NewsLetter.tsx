"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { NewsLetterStyles } from '@/app/styles/homepage/NewsLetter.styles';

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
  const isSuccess = message.toLowerCase().includes("thank");

  return (
    <motion.section
      className={NewsLetterStyles.container}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={NewsLetterStyles.heading}>Subscribe to Our Newsletter</h2>

      <p className={NewsLetterStyles.description}>
        Get the latest trivia challenges, tips, and updates directly to your inbox!
      </p>

      <div className={NewsLetterStyles.inputGroup}>
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={NewsLetterStyles.input}
          aria-label="Enter your email address"
        />
        <button
          onClick={handleSubscribe}
          disabled={!isValidEmail}
          className={NewsLetterStyles.button}
        >
          Subscribe
        </button>
      </div>

      {message && (
        <p className={isSuccess ? NewsLetterStyles.messageSuccess : NewsLetterStyles.messageError}>
          {message}
        </p>
      )}
    </motion.section>
  );
};

export default Newsletter;
