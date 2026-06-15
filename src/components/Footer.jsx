import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { title: "Get to Know Us", items: ["Careers", "Blog", "About Amazon", "Investor Relations"] },
    { title: "Make Money with Us", items: ["Sell products on Amazon", "Sell on Amazon Business", "Become an Affiliate", "Advertise Your Products"] },
    { title: "Amazon Payment Products", items: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"] },
    { title: "Let Us Help You", items: ["Amazon and COVID-19", "Your Account", "Your Orders", "Shipping Rates & Policies", "Help"] },
  ];

  return (
    <footer className="bg-amazon_blue-light mt-10">
      {/* Back to Top */}
      <motion.button
        whileHover={{ backgroundColor: '#485769' }}
        onClick={scrollToTop}
        className="w-full bg-[#37475a] text-white py-4 text-sm font-medium transition-colors"
      >
        Back to top
      </motion.button>

      {/* Footer Links */}
      <div className="max-w-screen-xl mx-auto py-10 px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          {footerLinks.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-bold mb-4 text-sm sm:text-base">{section.title}</h3>
              <ul className="text-xs sm:text-sm space-y-2 text-gray-300">
                {section.items.map((item, i) => (
                  <motion.li
                    key={i}
                    whileHover={{ x: 5, color: '#febd69' }}
                    className="cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8 bg-amazon_blue flex flex-col items-center px-4">
        <div className="flex items-center space-x-4 sm:space-x-6 mb-6">
          <Link to="/" className="flex items-center">
            <span className="text-white font-bold text-xl">amazon</span>
            <span className="text-amazon_yellow font-bold text-xs">.clone</span>
          </Link>
          <div className="flex items-center border border-gray-500 rounded-sm px-3 py-1 text-gray-300 text-xs cursor-pointer hover:border-gray-300 transition-colors">
            English
          </div>
        </div>

        <div className="text-center text-[10px] sm:text-[11px] text-gray-300 space-y-2 sm:space-y-1">
          <div className="flex flex-wrap space-x-2 sm:space-x-4 justify-center">
            <span className="hover:underline cursor-pointer">Conditions of Use</span>
            <span className="hover:underline cursor-pointer">Privacy Notice</span>
            <span className="hover:underline cursor-pointer">Interest-Based Ads</span>
          </div>
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates - Clone by Jules</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
