import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-amazon_blue-light mt-10">
      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#37475a] hover:bg-[#485769] text-white py-4 text-sm font-medium transition-colors"
      >
        Back to top
      </button>

      {/* Footer Links */}
      <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div>
            <h3 className="font-bold mb-4">Get to Know Us</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Blog</li>
              <li className="hover:underline cursor-pointer">About Amazon</li>
              <li className="hover:underline cursor-pointer">Investor Relations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Make Money with Us</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Sell products on Amazon</li>
              <li className="hover:underline cursor-pointer">Sell on Amazon Business</li>
              <li className="hover:underline cursor-pointer">Become an Affiliate</li>
              <li className="hover:underline cursor-pointer">Advertise Your Products</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Amazon Payment Products</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Amazon Business Card</li>
              <li className="hover:underline cursor-pointer">Shop with Points</li>
              <li className="hover:underline cursor-pointer">Reload Your Balance</li>
              <li className="hover:underline cursor-pointer">Amazon Currency Converter</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Let Us Help You</h3>
            <ul className="text-sm space-y-2 text-gray-300">
              <li className="hover:underline cursor-pointer">Amazon and COVID-19</li>
              <li className="hover:underline cursor-pointer">Your Account</li>
              <li className="hover:underline cursor-pointer">Your Orders</li>
              <li className="hover:underline cursor-pointer">Shipping Rates & Policies</li>
              <li className="hover:underline cursor-pointer">Help</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-8 bg-amazon_blue flex flex-col items-center">
        <div className="flex items-center space-x-6 mb-6">
          <Link to="/" className="flex items-center">
            <span className="text-white font-bold text-xl">amazon</span>
            <span className="text-amazon_yellow font-bold text-xs">.clone</span>
          </Link>
          <div className="flex items-center border border-gray-500 rounded-sm px-3 py-1 text-gray-300 text-xs">
            English
          </div>
        </div>

        <div className="text-center text-[11px] text-gray-300 space-y-1">
          <div className="flex space-x-4 justify-center">
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
