import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = () => {
  const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();
  const tax = cartTotal * 0.08;
  const total = cartTotal + tax;

  return (
    <main className="max-w-screen-2xl mx-auto p-4 md:flex gap-6">
      {/* Left: Cart Items */}
      <div className="flex-grow bg-white p-6 shadow-sm mb-6 md:mb-0 min-h-[400px]">
        <h1 className="text-3xl font-medium border-b pb-4 mb-4">Shopping Cart</h1>

        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-10"
          >
            <h2 className="text-xl mb-4">Your Amazon Cart is empty.</h2>
            <Link to="/" className="text-amazon_text hover:underline">
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-6">
            <AnimatePresence initial={false}>
              {cart.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
                  className="flex flex-col sm:flex-row border-b pb-6 last:border-0"
                >
                  <div className="flex-shrink-0 w-44 h-44 mx-auto sm:mx-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                  </div>

                  <div className="flex-grow sm:ml-6 mt-4 sm:mt-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium hover:text-amazon_text cursor-pointer">
                        <Link to={`/product/${item.id}`}>{item.title}</Link>
                      </h3>
                      <p className="font-bold text-lg ml-4">${item.price.toFixed(2)}</p>
                    </div>
                    <p className="text-green-600 text-xs mt-1">In Stock</p>
                    <p className="text-gray-500 text-xs mt-1 capitalize">Category: {item.category}</p>

                    <div className="flex items-center mt-4 space-x-4">
                      <div className="flex items-center border rounded-md bg-gray-100">
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-1 hover:bg-gray-200 rounded-l-md"
                        >
                          <Minus className="h-4 w-4" />
                        </motion.button>
                        <motion.span
                          key={item.quantity}
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          className="px-4 py-1 text-sm font-medium inline-block"
                        >
                          {item.quantity}
                        </motion.span>
                        <motion.button
                          whileTap={{ scale: 0.8 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-200 rounded-r-md"
                        >
                          <Plus className="h-4 w-4" />
                        </motion.button>
                      </div>

                      <div className="h-6 w-px bg-gray-300" />

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-amazon_text text-xs hover:underline flex items-center"
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Remove
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Right: Order Summary */}
      {cart.length > 0 && (
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:w-80 flex-shrink-0"
        >
          <div className="bg-white p-6 shadow-sm sticky top-24">
            <div className="flex items-center text-sm text-green-700 mb-4">
               <span className="mr-1">✓</span>
               <p>Your order qualifies for FREE Shipping.</p>
            </div>

            <p className="text-lg mb-4">
              Subtotal ({cart.reduce((a,c) => a + c.quantity, 0)} items): <span className="font-bold">${cartTotal.toFixed(2)}</span>
            </p>

            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <div className="flex justify-between">
                <span>Estimated Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full button py-3 font-medium"
            >
              Proceed to Checkout
            </motion.button>
          </div>

          <div className="mt-4 bg-white p-4 shadow-sm border rounded-md">
            <p className="text-xs font-bold mb-1">Frequently bought together</p>
            <p className="text-xs text-gray-500">Add gift options during checkout.</p>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Cart;
