"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaLinkedin, FaRobot, FaSun, FaMoon } from 'react-icons/fa';
import { Sparkles, Users, Star, CalendarClock, LoaderCircle } from 'lucide-react';

const Homepage = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const toggleTheme = () => setDarkMode(!darkMode);

  const loginOptions = [
    { title: 'Candidate', login: '/candidate-login', signup: '/candidate-register' },
    { title: 'Organiser', login: '/organiser-login', signup: '/organiser-register' },
  ];

  const quizzes = [
    { title: 'React Basics', category: 'Technology', daysLeft: 3 },
    { title: 'History Challenge', category: 'History', daysLeft: 5 },
    { title: 'Math Marathon', category: 'Mathematics', daysLeft: 2 },
    { title: 'Science Sprint', category: 'Science', daysLeft: 4 }
  ];

  const testimonials = [
    { name: 'John Doe', img: 'https://randomuser.me/api/portraits/men/1.jpg', text: 'Fantastic experience. Loved the challenges!' },
    { name: 'Sarah Lee', img: 'https://randomuser.me/api/portraits/women/2.jpg', text: 'Very interactive and smooth interface.' },
    { name: 'Mike Chan', img: 'https://randomuser.me/api/portraits/men/3.jpg', text: 'Absolutely recommend this to anyone!' }
  ];

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
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscribeMessage('Please enter a valid email.');
      return;
    }
    setSubscribeMessage('Thank you for subscribing!');
    setEmail('');
  };

  const themeClass = darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-800';

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoaderCircle className="animate-spin text-indigo-600" size={60} />
      </div>
    );
  }

  return (
    <div className={`font-sans ${themeClass} px-4 py-8 relative min-h-screen overflow-x-hidden transition-colors duration-500`}>
      <button onClick={toggleTheme} className="fixed top-4 right-4 z-50 p-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      <a href="/chatbot" className="fixed z-40 bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition">
        <FaRobot size={24} />
      </a>

      <header className="flex flex-col items-center gap-2 mb-12">
        <img src="/logo.png" alt="TriviaTrek Logo" className="h-16 animate-pulse" />
        <h1 className="text-4xl font-extrabold tracking-tight text-indigo-700">TriviaTrek</h1>
      </header>

      <section className="flex flex-col md:flex-row justify-center gap-10 mb-20">
        {loginOptions.map((option) => (
          <motion.div
            key={option.title}
            whileHover={{ scale: 1.1 }}
            className="bg-gradient-to-r from-indigo-300 via-white to-indigo-200 border-2 border-indigo-400 p-12 rounded-3xl shadow-2xl text-center w-96 hover:shadow-indigo-500 transition-shadow duration-300 animate__animated animate__fadeInUp"
          >
            <Users size={70} className="mx-auto text-indigo-800 mb-4 animate-bounce" />
            <h2 className="text-4xl font-bold mb-6 text-indigo-900">{option.title}</h2>
            <a href={option.login} className="bg-indigo-700 text-white py-2 px-6 rounded-full block mb-4 hover:bg-indigo-800">Login</a>
            <a href={option.signup} className="bg-white text-indigo-900 border border-indigo-700 py-2 px-6 rounded-full block hover:bg-indigo-100">Create Account</a>
          </motion.div>
        ))}
      </section>

      {/* Live Quizzes Section */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold flex items-center gap-2 mb-6"><Sparkles /> Live Quizzes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {quizzes.map((quiz, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-tr from-yellow-100 to-white p-6 rounded-2xl shadow-xl border border-yellow-300 text-center"
            >
              <div className="text-green-600 font-bold animate-pulse mb-2">🟢 Live</div>
              <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                <Star size={18} className="inline-block mr-1" /> Category: <strong>{quiz.category}</strong>
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                <CalendarClock size={18} className="inline-block mr-1" /> Time Left: <strong>{quiz.daysLeft} Days</strong>
              </p>
              <a href={`/quiz/${quiz.title.replace(/\s+/g, '-').toLowerCase()}`} className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition">Join Quiz</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What Users Say Section */}
      <section className="py-16 bg-indigo-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">💬 What Users Say</h2>
        <motion.div
          key={testimonialIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <img
            src={testimonials[testimonialIndex].img}
            alt={testimonials[testimonialIndex].name}
            className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-indigo-400"
          />
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">"{testimonials[testimonialIndex].text}"</p>
          <p className="font-semibold text-indigo-700">{testimonials[testimonialIndex].name}</p>
        </motion.div>
      </section>

      {/* Blog/FAQ Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">📚 Blog & FAQs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">How to Prepare for a Quiz?</h3>
            <p className="text-gray-600 dark:text-gray-300">Explore tips and strategies to maximize your score in competitive quizzes.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="font-bold text-lg mb-2">Can I organize my own quiz?</h3>
            <p className="text-gray-600 dark:text-gray-300">Yes, register as an organiser and start creating your own quiz competitions easily.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-8 rounded-t-3xl border-t border-gray-200 dark:border-gray-700">
        <div>
          <h3 className="text-lg font-bold mb-2">Subscribe to Weekly Letter</h3>
          <input
            className="w-full p-2 rounded-lg text-black dark:text-white dark:bg-gray-700 mb-2"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-700 text-white"
          >
            Subscribe
          </button>
          {subscribeMessage && <p className="mt-2 text-sm text-indigo-500">{subscribeMessage}</p>}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-sm mb-2">Email: <a href="mailto:support@triviatrek.com" className="underline">support@triviatrek.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+1234567890" className="underline">+1 234 567 890</a></p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex gap-4 mt-2">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} className="hover:text-blue-400 transition-transform hover:scale-125 cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="hover:text-pink-400 transition-transform hover:scale-125 cursor-pointer" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-blue-600 transition-transform hover:scale-125 cursor-pointer" />
            </a>
          </div>
        </div>
        <div className="col-span-full text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} TriviaTrek. All rights reserved. | <a href="/privacy-policy" className="underline">Privacy Policy</a> | <a href="/terms" className="underline">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
