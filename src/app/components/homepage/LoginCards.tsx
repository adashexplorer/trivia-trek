import React from 'react';
import Link from 'next/link';

interface LoginOption {
  title: string;
  login: string;
  signup: string;
}

interface LoginCardsProps {
  options: LoginOption[];
}

const LoginCards: React.FC<LoginCardsProps> = ({ options }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
    {options.map((opt, idx) => (
      <div key={idx} className="p-6 border rounded-xl bg-white dark:bg-gray-800 shadow">
        <h2 className="text-xl font-semibold mb-2">{opt.title} Portal</h2>
        <div className="flex gap-4">
          <Link href={opt.login} className="text-indigo-600 hover:underline">Login</Link>
          <Link href={opt.signup} className="text-indigo-600 hover:underline">Register</Link>
        </div>
      </div>
    ))}
  </div>
);

export default LoginCards;
