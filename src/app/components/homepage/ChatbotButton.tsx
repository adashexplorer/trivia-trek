"use client";

import React from 'react';
import { FaRobot } from 'react-icons/fa';

const ChatbotButton = () => {
  return (
    <a
      href="/chatbot"
      className="fixed z-40 bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
      title="Open Chatbot"
    >
      <FaRobot size={24} />
    </a>
  );
};

export default ChatbotButton;
