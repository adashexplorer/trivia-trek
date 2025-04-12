'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserCircle2, LogIn, UserPlus } from 'lucide-react';
import {LoginCardStyles} from '@/app/styles/homepage/LoginCards.styles';

interface LoginOption {
  title: string;
  login: string;
  signup: string;
}

interface LoginCardsProps {
  options: LoginOption[];
}

const dancingAnimation = {
  animate: {
    rotate: [0, -10, 10, -10, 10, 0],
    y: [0, -5, 0, -5, 0],
    transition: {
      repeat: Infinity,
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const LoginCards: React.FC<LoginCardsProps> = ({ options }) => (
  <div id="login" className={LoginCardStyles.containerClass}>
    <div className={LoginCardStyles.gridClass}>
      {options.map((opt, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6, ease: 'easeOut' }}
          whileHover={{ scale: 1.05, rotate: 1 }}
          className={LoginCardStyles.cardClass}
        >
          <div className={LoginCardStyles.glowClass}></div>

          <div className={LoginCardStyles.cardContentClass}>
            <motion.div {...dancingAnimation}>
              <UserCircle2 className="text-white drop-shadow-xl" size={48} />
            </motion.div>
            <h2 className="text-2xl font-extrabold tracking-wide drop-shadow-sm">
              {opt.title} Portal
            </h2>
            <div className="flex gap-3 mt-4 flex-wrap justify-center">
              <Link href={opt.login} className={LoginCardStyles.buttonLoginClass}>
                <LogIn size={16} />
                Login
              </Link>
              <Link href={opt.signup} className={LoginCardStyles.buttonRegisterClass}>
                <UserPlus size={16} />
                Register
              </Link>
            </div>
          </div>

          <div className={LoginCardStyles.shimmerClass}></div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default LoginCards;
