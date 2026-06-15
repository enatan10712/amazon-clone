import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, MapPin, Menu, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { cartCount } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Trigger animation when cartCount changes
  useEffect(() => {
    if (cartCount === 0) return;
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [cartCount]);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-amazon_blue flex items-center p-1 flex-grow py-2">
        {/* Logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Link to="/" className="cursor-pointer px-2 py-1 border border-transparent hover:border-white rounded-sm transition-all">
            <span className="text-white font-bold text-2xl">amazon</span>
            <span className="text-amazon_yellow font-bold text-sm">.clone</span>
          </Link>
        </div>

        {/* Deliver To */}
        <div className="hidden md:flex text-white items-center text-xs space-x-1 px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer ml-2 transition-all">
           <MapPin className="h-4 w-4" />
           <div className="flex flex-col">
              <span className="text-gray-300">Deliver to</span>
              <span className="font-extrabold text-sm">Worldwide</span>
           </div>
        </div>

        {/* Search */}
        <motion.div
          animate={isSearchFocused ? { scale: 1.01 } : { scale: 1 }}
          className={`hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer ${isSearchFocused ? 'ring-2 ring-amazon_yellow' : ''} bg-amazon_yellow hover:bg-yellow-500 ml-4 transition-all`}
        >
          <input
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            placeholder="Search Amazon Clone"
          />
          <Search className="h-12 p-4" />
        </motion.div>

        {/* Right Section */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="group relative px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer transition-all">
            <p>Hello, Sign in</p>
            <p className="font-extrabold md:text-sm flex items-center">Account & Lists <ChevronDown className="h-4 w-4 ml-1" /></p>

            {/* Dropdown with animation */}
            <div className="hidden group-hover:block absolute top-full right-0 w-64 bg-white text-black p-4 shadow-xl z-50 border border-gray-200">
               <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
               >
                 <div className="flex flex-col items-center border-b pb-3 mb-3">
                   <button className="bg-[#FFD814] hover:bg-[#F7CA00] w-full py-1 rounded-md text-sm font-medium border border-[#FCD200]">Sign in</button>
                   <p className="text-[10px] mt-1">New customer? <span className="text-amazon_text hover:text-orange-700 hover:underline">Start here.</span></p>
                 </div>
                 <div className="flex justify-between">
                   <div className="flex flex-col space-y-2 border-r pr-4">
                     <h3 className="font-bold text-sm">Your Lists</h3>
                     <p className="hover:text-amazon_text hover:underline text-xs">Create a List</p>
                     <p className="hover:text-amazon_text hover:underline text-xs">Find a List or Registry</p>
                   </div>
                   <div className="flex flex-col space-y-2 pl-4">
                     <h3 className="font-bold text-sm">Your Account</h3>
                     <p className="hover:text-amazon_text hover:underline text-xs">Account</p>
                     <p className="hover:text-amazon_text hover:underline text-xs">Orders</p>
                     <p className="hover:text-amazon_text hover:underline text-xs">Recommendations</p>
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>

          <div className="px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer transition-all">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <Link to="/cart" className="relative flex items-center px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer transition-all">
            <motion.span
              animate={isAnimating ? { scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] } : {}}
              className="absolute top-0 right-6 md:right-10 h-4 w-4 bg-amazon_yellow text-center rounded-full text-black font-bold flex items-center justify-center text-[10px]"
            >
              {cartCount}
            </motion.span>
            <ShoppingCart className="h-10 w-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ml-1">Cart</p>
          </Link>
        </div>
      </div>

      {/* Bottom Header */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="flex items-center cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">
          <Menu className="h-6 mr-1" /> All
        </p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Today's Deals</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Customer Service</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Registry</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Gift Cards</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Sell</p>
      </div>
    </header>
  );
};

export default Header;
