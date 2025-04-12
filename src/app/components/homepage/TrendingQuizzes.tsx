'use client';

import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { TrendingQuizzesStyles } from '../../styles/homepage/TrendingQuizzes.styles';

interface Quiz {
  id: string;
  title: string;
  category: string;
  difficulty: 'Beginner' | 'Mid' | 'Pro';
  daysLeft: number;
}

interface TrendingQuizzesProps {
  quizzes: Quiz[];
  search: string;
  setSearch: (value: string) => void;
}

const cardGradients = [
  'from-rose-500 via-pink-500 to-fuchsia-500',
  'from-indigo-500 via-blue-500 to-purple-500',
  'from-emerald-400 via-teal-500 to-cyan-500',
  'from-yellow-400 via-orange-500 to-red-500',
  'from-purple-600 via-indigo-600 to-blue-600',
];

const TrendingQuizzes: React.FC<TrendingQuizzesProps> = ({ quizzes, search, setSearch }) => {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [daysLeftFilter, setDaysLeftFilter] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const filteredQuizzes = quizzes.filter((quiz) => {
    const matchesSearch = quiz.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter ? quiz.category === categoryFilter : true;
    const matchesDifficulty = difficultyFilter ? quiz.difficulty === difficultyFilter : true;
    const matchesStatus = statusFilter ? statusFilter === 'Live' : true;
    const matchesDaysLeft = daysLeftFilter !== null ? quiz.daysLeft <= daysLeftFilter : true;
    return matchesSearch && matchesCategory && matchesDifficulty && matchesStatus && matchesDaysLeft;
  });

  const displayedQuizzes = showAll ? filteredQuizzes : filteredQuizzes.slice(0, 6);

  return (
    <section className={TrendingQuizzesStyles.container}>
      <div className={TrendingQuizzesStyles.headingContainer}>
        <Sparkles className="text-pink-500 animate-pulse" />
        <h2 className={TrendingQuizzesStyles.heading}>Trending Quizzes</h2>
      </div>

      {/* Filters and Search */}
      <div className={TrendingQuizzesStyles.filterContainer}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search quizzes..."
          className={TrendingQuizzesStyles.input}
        />

        <select
          className={TrendingQuizzesStyles.select}
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
          <option value="Technology">Technology</option>
          <option value="Mathmatics">Mathematics</option>
          <option value="Geography">Geography</option>
          <option value="Literature">Literature</option>
          <option value="Arts">Arts</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Music">Music</option>
          <option value="Sports">Sports</option>
        </select>

        <select
          className={TrendingQuizzesStyles.select}
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
        >
          <option value="">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Mid">Mid</option>
          <option value="Pro">Pro</option>
        </select>

        <select
          className={TrendingQuizzesStyles.select}
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Any Status</option>
          <option value="Live">Live</option>
        </select>

        <input
          type="number"
          placeholder="Max days left"
          className={TrendingQuizzesStyles.numberInput}
          value={daysLeftFilter !== null ? daysLeftFilter : ''}
          onChange={(e) => setDaysLeftFilter(e.target.value ? parseInt(e.target.value) : null)}
        />
      </div>

      {/* Cards */}
      <div className={TrendingQuizzesStyles.cardGrid}>
        {displayedQuizzes.map((quiz, idx) => {
          const gradient = cardGradients[idx % cardGradients.length];
          return (
            <motion.div
              key={quiz.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className={`${TrendingQuizzesStyles.card} bg-gradient-to-br ${gradient}`}
            >
              {/* Live Indicator */}
              <div className={TrendingQuizzesStyles.liveIndicator}>
                <span className={TrendingQuizzesStyles.liveDotContainer} />
                <span className={TrendingQuizzesStyles.liveDot} />
                <span className={TrendingQuizzesStyles.liveText}>Live</span>
              </div>

              <div className={TrendingQuizzesStyles.cardContent}>
                <h3 className={TrendingQuizzesStyles.cardTitle}>{quiz.title}</h3>
                <div className={TrendingQuizzesStyles.cardInfo}>
                  <span className={TrendingQuizzesStyles.categoryBadge}>{quiz.category}</span>
                  <span className={TrendingQuizzesStyles.difficultyBadge}>{quiz.difficulty}</span>
                </div>
                <span className={TrendingQuizzesStyles.daysLeft}>{quiz.daysLeft} days left</span>
                <button className={TrendingQuizzesStyles.button}>Join Now</button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Show More / Show Less Button */}
      {filteredQuizzes.length > 6 && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={TrendingQuizzesStyles.showMoreButton}
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingQuizzes;
