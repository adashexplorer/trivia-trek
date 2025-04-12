import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="relative mt-12 px-6 py-8 text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Quick Links</h3>
                    <ul className="space-y-1">
                        <li><a href="#login" className="hover:text-indigo-600 transition">Login</a></li>
                        <li><a href="#trendingQuizzes" className="hover:text-indigo-600 transition">TrendingQuizes</a></li>
                        <li><a href="#blogAndFaqs" className="hover:text-indigo-600 transition">BlogsFAQa</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div className="text-center sm:text-right">
                    <h3 className="font-semibold mb-2 text-gray-700 dark:text-gray-200">Follow Us</h3>
                    <div className="flex justify-center sm:justify-end space-x-4 text-xl">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-xs border-t border-gray-200 dark:border-gray-700 pt-4">
                <p>&copy; {new Date().getFullYear()} TriviaTrek. All rights reserved.</p>
                <button
                    onClick={scrollToTop}
                    className="mt-2 sm:mt-0 text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition"
                >
                    <FaArrowUp /> Back to top
                </button>
            </div>
        </footer>
    );
};

export default Footer;

