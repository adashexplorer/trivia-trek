"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {TestimonialsStyles} from "@/app/styles/homepage/Testimonials.styles";

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
  <section className={TestimonialsStyles.sectionStyles}>
    <h2 className="text-2xl font-bold mb-6">What Our Users Say</h2>
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
        className={TestimonialsStyles.cardStyles}
      >
        <img
          src={testimonials[index].img}
          alt={`Photo of ${testimonials[index].name}`}
          className={TestimonialsStyles.avatarStyles}
        />
        <p className={TestimonialsStyles.quoteStyles}>{testimonials[index].text}</p>
        <h3 className={TestimonialsStyles.nameStyles}>{testimonials[index].name}</h3>
      </motion.div>
    </AnimatePresence>

    <div className={TestimonialsStyles.dotContainerStyles}>
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          aria-label={`View testimonial ${i + 1}`}
          className={TestimonialsStyles.dotStyles(i === index)}
        />
      ))}
    </div>
  </section>
);

export default Testimonials;
