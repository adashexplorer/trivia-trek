// components/homepage/TrendingQuizzes.tsx
"use client";

import React from 'react';

interface Quiz {
  id: string;
  title: string;
  category: string;
  daysLeft: number;
}

interface TrendingQuizzesProps {
  quizzes: Quiz[];
  search: string;
  setSearch: (value: string) => void;
}

const TrendingQuizzes: React.FC<TrendingQuizzesProps> = ({ quizzes, search, setSearch }) => {
  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Live Quizzes</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search quizzes..."
        aria-label="Search quizzes"
        className="mb-4 p-2 w-full border rounded"
      />
      <div className="grid sm:grid-cols-2 gap-6">
        {filteredQuizzes.map((quiz) => (
          <div key={quiz.id} className="p-4 bg-white dark:bg-gray-800 border rounded shadow">
            <h3 className="text-lg font-semibold">{quiz.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{quiz.category}</p>
            <span className="text-sm text-indigo-500">{quiz.daysLeft} days left</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingQuizzes;
