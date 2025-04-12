"use client";

import React, { useEffect, useState } from "react";
import { FaRobot, FaTimes, FaStar, FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useSound from "use-sound";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);
  const [chatEnded, setChatEnded] = useState(false);
  const [rating, setRating] = useState<number | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [play] = useSound("/chat-start.mp3", { volume: 0.5 });

  useEffect(() => {
    play();
  }, []);

  const toggleChat = () => {
    if (isOpen) resetChat();
    setIsOpen((prev) => !prev);
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([
          "👋 Hi there! I'm TikTik, your trivia buddy!",
          `Hello ${name}, how may I help you today?`,
        ]);
        setSubmitted(true);
        setIsTyping(false);
        play(); // Play sound AFTER user interaction (name submit)
      }, 1000);
    }
  };

  const handleUserMessage = (text = input) => {
    if (text.trim()) {
      setMessages((prev) => [...prev, `You: ${text}`]);
      setInput("");
      setIsTyping(true);
      setTimeout(() => {
        setMessages((prev) => [...prev, "TikTik: I'm still learning. Would you like a trivia question?"]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleEndChat = () => {
    setChatEnded(true);
  };

  const resetChat = () => {
    setName("");
    setSubmitted(false);
    setInput("");
    setMessages([]);
    setChatEnded(false);
    setRating(null);
    setIsTyping(false);
  };

  const suggestedReplies = ["Yes, give me a trivia!", "Not now", "Tell me a fun fact"];

  return (
    <div className={darkMode ? "dark" : ""}>
      <button
        onClick={toggleChat}
        className="fixed z-40 bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition"
        title="Open Chatbot"
      >
        {isOpen ? <FaTimes size={20} /> : <FaRobot size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            className="fixed z-50 bottom-20 right-6 w-80 bg-white dark:bg-gray-900 shadow-2xl rounded-xl overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between bg-indigo-600 text-white px-4 py-3 font-semibold">
              <div className="flex items-center gap-2">
                <FaRobot />
                TikTik - Trivia Assistant
              </div>
              <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>

            <div className="p-4 h-64 overflow-y-auto text-sm space-y-3">
              {!submitted ? (
                <motion.p className="text-gray-700 dark:text-gray-300">What&#39;s your name? 👋</motion.p>
              ) : !chatEnded ? (
                <>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className={`text-left ${
                        msg.startsWith("You:") ? "text-right text-indigo-500" : "text-gray-800 dark:text-gray-100"
                      }`}
                    >
                      {msg.startsWith("You:") ? (
                        msg.slice(5)
                      ) : (
                        <div className="flex items-start gap-2">
                          <img
                            src="/tiktik-avatar.png"
                            alt="TikTik Bot"
                            className="w-6 h-6 rounded-full mt-1"
                          />
                          <span>{msg.replace("TikTik: ", "")}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {isTyping && <p className="italic text-gray-400">TikTik is typing...</p>}

                  <div className="flex flex-wrap gap-2 mt-2">
                    {suggestedReplies.map((text) => (
                      <button
                        key={text}
                        onClick={() => handleUserMessage(text)}
                        className="bg-gray-100 dark:bg-gray-700 text-xs text-gray-700 dark:text-white px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
                      >
                        {text}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center text-gray-700 dark:text-gray-300 space-y-3">
                  <p>Thanks for chatting with TikTik! 💬</p>
                  <p>How would you rate this experience?</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`cursor-pointer text-xl transition ${
                          rating && star <= rating
                            ? "text-yellow-400"
                            : "text-gray-400 hover:text-yellow-400"
                        }`}
                        onClick={() => setRating(star)}
                      />
                    ))}
                  </div>
                  {rating && <p className="text-sm mt-1">You rated: {rating}/5</p>}
                  <button
                    onClick={() => {
                      resetChat();
                      setIsOpen(true);
                    }}
                    className="mt-2 text-indigo-600 text-sm underline hover:text-indigo-800 transition"
                  >
                    Start a new chat
                  </button>
                </div>
              )}
            </div>

            {!chatEnded && (
              <div className="border-t border-gray-200 dark:border-gray-700 p-3 flex gap-2">
                {!submitted ? (
                  <>
                    <input
                      type="text"
                      className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm focus:outline-none"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleNameSubmit()}
                    />
                    <button
                      onClick={handleNameSubmit}
                      className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
                    >
                      Start Chatting
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      className="flex-1 border border-gray-300 dark:border-gray-600 rounded px-2 py-1 text-sm focus:outline-none"
                      placeholder="Type a message..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
                    />
                    <button
                        onClick={() => handleUserMessage()}
                      className="bg-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-indigo-700"
                    >
                      Send
                    </button>
                    <button
                      onClick={handleEndChat}
                      className="text-xs bg-white text-indigo-600 px-2 py-1 rounded hover:bg-indigo-100 transition"
                    >
                      End Chat
                    </button>
                  </>
                )}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
