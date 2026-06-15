import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, MapPin, Menu, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSidebar } from '../context/SidebarContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { cartCount } = useCart();
  const { toggleSidebar } = useSidebar();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    if (cartCount === 0) return;
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [cartCount]);

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Header */}
      <div className="bg-amazon_blue flex items-center p-2 sm:p-1 flex-grow py-2">
        {/* Logo */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          <Link to="/" className="cursor-pointer px-2 py-1 border border-transparent hover:border-white rounded-sm transition-all">
            <span className="text-white font-bold text-xl sm:text-2xl">amazon</span>
            <span className="text-amazon_yellow font-bold text-xs sm:text-sm">.clone</span>
          </Link>
        </motion.div>

        {/* Deliver To */}
        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          className="hidden lg:flex text-white items-center text-xs space-x-1 px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer ml-2 transition-all"
        >
           <MapPin className="h-4 w-4" />
           <div className="flex flex-col">
              <span className="text-gray-300">Deliver to</span>
              <span className="font-extrabold text-sm">Worldwide</span>
           </div>
        </motion.div>

        {/* Search */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={navItemVariants}
          className="flex-grow flex-shrink mx-2 sm:mx-4"
        >
          <motion.div
            animate={isSearchFocused ? { scale: 1.005 } : { scale: 1 }}
            className={`flex items-center h-10 rounded-md cursor-pointer ${isSearchFocused ? 'ring-2 ring-amazon_yellow' : ''} bg-amazon_yellow hover:bg-yellow-500 transition-all`}
          >
            <input
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-sm"
              type="text"
              placeholder="Search Amazon Clone"
            />
            <Search className="h-10 w-10 sm:h-12 sm:w-12 p-3 sm:p-4" />
          </motion.div>
        </motion.div>

        {/* Right Section */}
        <div className="text-white flex items-center text-xs space-x-2 sm:space-x-6 mx-2 sm:mx-6 whitespace-nowrap">
          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className="group relative px-1 sm:px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer transition-all hidden sm:block"
          >
            <p>Hello, Sign in</p>
            <p className="font-extrabold md:text-sm flex items-center">Account <ChevronDown className="h-4 w-4 ml-1" /></p>

            <div className="hidden group-hover:block absolute top-full right-0 w-64 bg-white text-black p-4 shadow-xl z-50 border border-gray-200">
               <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
               >
                 <div className="flex flex-col items-center border-b pb-3 mb-3">
                   <motion.button
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="bg-[#FFD814] hover:bg-[#F7CA00] w-full py-1 rounded-md text-sm font-medium border border-[#FCD200]"
                   >
                     Sign in
                   </motion.button>
                   <p className="text-[10px] mt-1">New customer? <span className="text-amazon_text hover:text-orange-700 hover:underline">Start here.</span></p>
                 </div>
                 <div className="flex justify-between text-left">
                   <div className="flex flex-col space-y-2 border-r pr-4">
                     <h3 className="font-bold text-sm">Your Lists</h3>
                     <p className="hover:text-amazon_text hover:underline text-xs">Create a List</p>
                     <p className="hover:text-amazon_text hover:underline text-xs">Find a List</p>
                   </div>
                   <div className="flex flex-col space-y-2 pl-4">
                     <h3 className="font-bold text-sm">Your Account</h3>
                     <p className="hover:text-amazon_text hover:underline text-xs">Account</p>
                     <p className="hover:text-amazon_text hover:underline text-xs">Orders</p>
                   </div>
                 </div>
               </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className="px-1 sm:px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer transition-all hidden md:block"
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </motion.div>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
          >
            <Link to="/cart" className="relative flex items-center px-1 sm:px-2 py-1 border border-transparent hover:border-white rounded-sm cursor-pointer transition-all">
              <motion.span
                animate={isAnimating ? { scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] } : {}}
                className="absolute top-0 right-4 sm:right-10 h-4 w-4 bg-amazon_yellow text-center rounded-full text-black font-bold flex items-center justify-center text-[10px]"
              >
                {cartCount}
              </motion.span>
              <ShoppingCart className="h-8 w-8 sm:h-10 sm:w-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2 ml-1 text-white">Cart</p>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex items-center space-x-2 sm:space-x-3 p-2 pl-4 sm:pl-6 bg-amazon_blue-light text-white text-xs sm:text-sm overflow-x-auto scrollbar-hide whitespace-nowrap"
      >
        <motion.p
          onClick={toggleSidebar}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all"
        >
          <Menu className="h-5 sm:h-6 mr-1" /> All
        </motion.p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Today's Deals</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Customer Service</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all hidden sm:block">Registry</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all hidden sm:block">Gift Cards</p>
        <p className="cursor-pointer hover:border-white border border-transparent p-1 rounded-sm transition-all">Sell</p>
      </motion.div>
    </header>
  );
};

export default Header;
