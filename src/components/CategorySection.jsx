import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  { name: "electronics", image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" },
  { name: "jewelery", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" },
  { name: "men's clothing", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
  { name: "women's clothing", image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" },
];

const CategorySection = () => {
  return (
    <div className="p-2 sm:p-4 bg-gray-100 -mt-8 sm:-mt-10 md:-mt-20 lg:-mt-32 relative z-40 overflow-hidden">
      <div className="flex overflow-x-auto space-x-2 sm:space-x-4 pb-4 scrollbar-hide">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex-shrink-0 w-56 sm:w-80 bg-white p-4 sm:p-6 shadow-sm cursor-pointer group rounded-sm"
          >
            <Link to={`/category/${cat.name}`}>
              <h2 className="text-lg sm:text-xl font-bold mb-4 capitalize group-hover:text-amazon_text transition-colors truncate">
                {cat.name}
              </h2>
              <div className="h-36 sm:h-48 flex items-center justify-center overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={cat.image}
                  alt={cat.name}
                  className="h-full object-contain transition-transform duration-300"
                />
              </div>
              <p className="text-amazon_text text-[10px] sm:text-sm mt-4 group-hover:underline">Shop now</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
