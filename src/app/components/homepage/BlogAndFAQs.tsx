import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BlogAndFAQs = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: 'How to Get Started with TriviaTrek',
      date: 'April 1, 2025',
      content:
        'In this blog post, we will walk you through how to begin your journey with TriviaTrek and start exploring the fun challenges and quizzes.',
    },
    {
      id: 2,
      title: '5 Tips for Winning Trivia Quizzes',
      date: 'April 10, 2025',
      content:
        'Get ready to master TriviaTrek with these tips and tricks to boost your quiz performance and get to the top of the leaderboard.',
    },
    {
      id: 3,
      title: 'Why Trivia Quizzes are Beneficial',
      date: 'April 12, 2025',
      content:
        'Trivia quizzes are not only fun, but they also stimulate your brain and improve memory retention. Read more about their cognitive benefits in this post.',
    },
  ];

  const faqs = [
    {
      id: 1,
      question: 'How do I create an account on TriviaTrek?',
      answer:
        'Creating an account is easy. Just click on the "Sign Up" button on the homepage and follow the instructions to register.',
    },
    {
      id: 2,
      question: 'Can I create my own quizzes?',
      answer:
        'Yes! You can create your own quizzes and share them with others. Just head to the "Create Quiz" section and start building your quiz.',
    },
    {
      id: 3,
      question: 'Are the quizzes free?',
      answer:
        'Yes! All quizzes on TriviaTrek are completely free to play. We offer a variety of topics to explore.',
    },
  ];

  return (
    <section className="mb-20 px-4 max-w-4xl mx-auto">
      {/* Blog Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 mb-10 text-center">
          Blog
        </h2>
        <div className="grid gap-8">
        {blogPosts.map((post) => (
            <motion.div
                key={post.id}
                className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
            <h3 className="text-2xl font-bold text-indigo-700">{post.title}</h3>
            <p className="text-sm text-gray-400 mt-1">{post.date}</p>
            <p className="mt-3 text-gray-700 leading-relaxed">
                {post.content}
            </p>
        </motion.div>
        ))}
        </div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400 mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm p-5"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActiveFAQ(activeFAQ === faq.id ? null : faq.id)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                {activeFAQ === faq.id ? (
                  <ChevronUp className="text-indigo-500" />
                ) : (
                  <ChevronDown className="text-indigo-500" />
                )}
              </div>
              <AnimatePresence>
                {activeFAQ === faq.id && (
                  <motion.p
                    className="mt-3 text-gray-600"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BlogAndFAQs;

