// components/homepage/Testimonials.tsx
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  name: string;
  text: string;
  img: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  index: number;
  setIndex: (index: number) => void;
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, index, setIndex }) => (
  <section className="mb-12 text-center">
    <h2 className="text-2xl font-bold mb-6">What Our Users Say</h2>
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow"
      >
        <img
          src={testimonials[index].img}
          alt={`Photo of ${testimonials[index].name}`}
          className="w-16 h-16 rounded-full mx-auto mb-4"
        />
        <p className="text-lg italic">"{testimonials[index].text}"</p>
        <h3 className="mt-2 font-semibold">{testimonials[index].name}</h3>
      </motion.div>
    </AnimatePresence>

    <div className="mt-4 flex justify-center space-x-2">
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          aria-label={`View testimonial ${i + 1}`}
          className={`w-3 h-3 rounded-full ${i === index ? 'bg-indigo-600' : 'bg-gray-400'}`}
        />
      ))}
    </div>
  </section>
);

export default Testimonials;
