import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { id, title, price, description, category, image, rating } = product;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative flex flex-col m-5 bg-white z-30 p-10 shadow-sm hover:shadow-lg transition-shadow duration-200 rounded-sm"
    >
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 capitalize">{category}</p>

      <Link to={`/product/${id}`} className="flex justify-center">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={title}
          className="h-48 w-48 object-contain cursor-pointer"
        />
      </Link>

      <h4 className="my-3 font-medium line-clamp-2 hover:text-amazon_text cursor-pointer">
        <Link to={`/product/${id}`}>{title}</Link>
      </h4>

      <div className="flex">
        {Array(Math.floor(rating?.rate || 5))
          .fill()
          .map((_, i) => (
            <Star key={i} className="h-5 text-yellow-500 fill-current" />
          ))}
        <span className="ml-2 text-sm text-amazon_text">{rating?.count || 0}</span>
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5 font-bold text-lg text-amazon_text_blue">
        ${price.toFixed(2)}
      </div>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => addToCart(product)}
        className="mt-auto button"
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default ProductCard;
