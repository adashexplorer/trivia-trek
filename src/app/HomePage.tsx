// app/page.tsx (formerly HomePage.tsx)
'use client';

import React, { useState, useEffect } from 'react';
import Header from './components/homepage/Header';
import LoginCards from './components/homepage/LoginCards';
import TrendingQuizzes from './components/homepage/TrendingQuizzes';
import Testimonials from './components/homepage/Testimonials';
import Newsletter from './components/homepage/NewsLetter';
import ContactUs from './components/homepage/ContactUs';
import Footer from './components/homepage/Footer';
import ThemeToggle from './components/homepage/ThemeToggle';
import ChatbotButton from './components/homepage/Chatbot';
import LoadingScreen from './components/homepage/LoadingScreen';
import BlogAndFAQs from './components/homepage/BlogAndFAQs';
import { loginOptions, quizzes, testimonials } from './data/data';

const HomePage = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleSubscribe = () => {
    if (!email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  const themeClass = darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800';

  if (loading) return <LoadingScreen />;

  return (
    <div className={`font-sans ${themeClass} px-4 py-8 relative min-h-screen overflow-x-hidden transition-colors duration-500`}>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      <ChatbotButton />
      <Header/>
      <LoginCards options={loginOptions} />
      <TrendingQuizzes quizzes={quizzes} search={search} setSearch={setSearch} />
      <Testimonials testimonials={testimonials} index={testimonialIndex} setIndex={setTestimonialIndex} />
      <BlogAndFAQs></BlogAndFAQs>
      <Newsletter
        email={email}
        setEmail={setEmail}
        message={message}
        handleSubscribe={handleSubscribe}
      />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
