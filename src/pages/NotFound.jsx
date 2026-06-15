import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 flex flex-col items-center text-center">
      <div className="mb-8">
        <Link to="/" className="flex items-center justify-center">
          <span className="text-black font-bold text-4xl">amazon</span>
          <span className="text-amazon_yellow font-bold text-xl">.clone</span>
        </Link>
      </div>

      <div className="bg-white p-8 border border-gray-200 rounded-md shadow-sm max-w-md w-full">
        <h1 className="text-amazon_text text-xl font-bold mb-4">Looking for something?</h1>
        <p className="text-sm mb-6">
          We're sorry. The Web address you entered is not a functioning page on our site.
        </p>
        <p className="text-sm font-bold mb-6">
          Go to Amazon Clone's <Link to="/" className="text-amazon_text hover:text-orange-700 underline">Home</Link> Page
        </p>
      </div>

      <div className="mt-12">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/error/52._TTD_.jpg"
          alt="Dogs of Amazon"
          className="mx-auto rounded-md shadow-md max-w-xs"
        />
        <p className="text-xs text-gray-500 mt-4 italic">Meet the dogs of Amazon</p>
      </div>
    </div>
  );
};

export default NotFound;
