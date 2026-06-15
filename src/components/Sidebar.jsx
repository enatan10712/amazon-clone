import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, ChevronRight } from 'lucide-react';
import { useSidebar } from '../context/SidebarContext';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  const menuItems = [
    { title: "Trending", items: ["Best Sellers", "New Releases", "Movers & Shakers"] },
    { title: "Digital Content & Devices", items: ["Prime Video", "Amazon Music", "Echo & Alexa", "Kindle E-readers"] },
    { title: "Shop By Department", items: ["Electronics", "Computers", "Smart Home", "Arts & Crafts"] },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/70 z-[100] cursor-pointer"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-[300px] sm:w-[350px] bg-white z-[110] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-amazon_blue-light text-white p-4 flex items-center space-x-3">
              <User className="h-8 w-8" />
              <p className="font-bold text-lg">Hello, Sign in</p>
            </div>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeSidebar}
              className="absolute top-2 -right-12 text-white hover:text-gray-300"
            >
              <X className="h-10 w-10" />
            </motion.button>

            {/* Menu Content */}
            <div className="flex-grow overflow-y-auto">
              {menuItems.map((section, idx) => (
                <div key={idx} className="border-b border-gray-200 py-4 px-8">
                  <h3 className="font-bold text-lg mb-3">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center justify-between text-gray-700 hover:bg-gray-100 -mx-8 px-8 py-2 cursor-pointer transition-colors"
                      >
                        <span className="text-sm">{item}</span>
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="py-4 px-8">
                <Link to="/" onClick={closeSidebar} className="text-sm font-bold text-amazon_text hover:underline">
                  Home
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
