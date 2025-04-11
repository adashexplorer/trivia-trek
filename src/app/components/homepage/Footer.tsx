import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="border-t pt-4 mt-12 text-center text-sm text-gray-500 dark:text-gray-400">
    <div className="flex justify-center space-x-4 mb-2">
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
    </div>
    <p>&copy; {new Date().getFullYear()} TriviaTrek. All rights reserved.</p>
  </footer>
);

export default Footer;