"use client";

import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeToggleButtonStyles } from '@/app/styles/homepage/ThemeToggle.styles';

const ThemeToggle = ({ darkMode, toggleTheme }: { darkMode: boolean; toggleTheme: () => void }) => {
  return (
    <button
      onClick={toggleTheme}
      className={ThemeToggleButtonStyles.themeToggleButton}
      title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
