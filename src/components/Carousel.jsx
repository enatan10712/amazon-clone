import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71U-QZ9WXnL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  useEffect(() => {
    const autoScroll = setInterval(nextSlide, 5000);
    return () => clearInterval(autoScroll);
  }, [current]);

  return (
    <div className="relative overflow-hidden group">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img key={i} src={img} alt="banner" className="w-full object-cover max-h-[600px]" />
        ))}
      </div>

      <div className="absolute top-0 w-full h-32 bg-gradient-to-b from-gray-100 to-transparent bottom-0 z-20" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/3 z-30 p-2 bg-transparent hover:border-white border-2 border-transparent transition-all"
      >
        <ChevronLeft className="h-10 w-10 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/3 z-30 p-2 bg-transparent hover:border-white border-2 border-transparent transition-all"
      >
        <ChevronRight className="h-10 w-10 text-white" />
      </button>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full cursor-pointer border border-white ${current === i ? 'bg-white' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
