import React from 'react';

export const ProductSkeleton = () => (
  <div className="flex flex-col m-5 bg-white p-10 animate-pulse">
    <div className="h-48 w-48 bg-gray-200 self-center mb-4" />
    <div className="h-4 bg-gray-200 w-3/4 mb-2" />
    <div className="h-4 bg-gray-200 w-1/2 mb-2" />
    <div className="h-6 bg-gray-200 w-1/4 mb-4" />
    <div className="h-10 bg-gray-200 w-full" />
  </div>
);

export const DetailSkeleton = () => (
  <div className="max-w-screen-2xl mx-auto p-10 animate-pulse flex flex-col md:flex-row">
    <div className="h-96 w-96 bg-gray-200 mb-10 md:mr-10" />
    <div className="flex-grow">
      <div className="h-8 bg-gray-200 w-3/4 mb-4" />
      <div className="h-4 bg-gray-200 w-full mb-2" />
      <div className="h-4 bg-gray-200 w-full mb-2" />
      <div className="h-4 bg-gray-200 w-full mb-2" />
      <div className="h-10 bg-gray-200 w-32 mb-4" />
      <div className="h-12 bg-gray-200 w-full" />
    </div>
  </div>
);
