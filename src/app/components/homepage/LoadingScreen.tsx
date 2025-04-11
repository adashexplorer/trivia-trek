// components/homepage/LoadingScreen.tsx
"use client";

import React from 'react';
import { LoaderCircle } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoaderCircle className="animate-spin text-indigo-600" size={60} />
    </div>
  );
};

export default LoadingScreen;
