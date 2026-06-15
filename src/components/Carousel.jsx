import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71U-BeV3vlL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden">
      <AnimatePresence initial={false} mode='wait'>
        <motion.img
          key={current}
          src={images[current]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
          alt={`Banner ${current}`}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 z-30 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronLeft className="h-6 w-6 text-white md:h-8 md:w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 z-30 -translate-y-1/2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
      >
        <ChevronRight className="h-6 w-6 text-white md:h-8 md:w-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 w-2 rounded-full transition-all ${
              current === i ? "bg-white w-4" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
