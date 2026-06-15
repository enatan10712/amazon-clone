import React from 'react';
import { motion } from 'framer-motion';

const Shimmer = () => (
  <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: '100%' }}
    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10"
  />
);

export const ProductSkeleton = () => (
  <div className="relative flex flex-col m-5 bg-white p-10 overflow-hidden shadow-sm">
    <Shimmer />
    <div className="h-48 w-48 bg-gray-200 self-center mb-4 rounded-sm" />
    <div className="h-4 bg-gray-200 w-3/4 mb-2 rounded-sm" />
    <div className="h-4 bg-gray-200 w-1/2 mb-2 rounded-sm" />
    <div className="h-6 bg-gray-200 w-1/4 mb-4 rounded-sm" />
    <div className="h-10 bg-gray-200 w-full rounded-sm" />
  </div>
);

export const DetailSkeleton = () => (
  <div className="max-w-screen-2xl mx-auto p-10 flex flex-col md:flex-row relative overflow-hidden">
    <Shimmer />
    <div className="h-96 w-full md:w-96 bg-gray-200 mb-10 md:mr-10 rounded-sm" />
    <div className="flex-grow">
      <div className="h-8 bg-gray-200 w-3/4 mb-4 rounded-sm" />
      <div className="h-4 bg-gray-200 w-full mb-2 rounded-sm" />
      <div className="h-4 bg-gray-200 w-full mb-2 rounded-sm" />
      <div className="h-4 bg-gray-200 w-full mb-2 rounded-sm" />
      <div className="h-10 bg-gray-200 w-32 mb-4 rounded-sm" />
      <div className="h-12 bg-gray-200 w-full rounded-sm" />
    </div>
  </div>
);
