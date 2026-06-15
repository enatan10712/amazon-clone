import React, { createContext, useContext, useReducer, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const CartContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem('amazon_cart')) || [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (existingItemIndex > -1) {
        const newCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
            : item
        );
        return { ...state, cart: newCart };
      }
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: action.payload.quantity || 1 }] };
    }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY': {
      const newCart = state.cart.map(item =>
        item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
      );
      return { ...state, cart: newCart };
    }
    case 'CLEAR_CART':
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [showToast, setShowToast] = useState(false);
  const [lastAdded, setLastAdded] = useState('');

  useEffect(() => {
    localStorage.setItem('amazon_cart', JSON.stringify(state.cart));
  }, [state.cart]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    setLastAdded(product.title);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const removeFromCart = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const cartTotal = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = state.cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cart: state.cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      cartCount
    }}>
      {children}

      {/* Global Animated Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 z-[100] bg-white border border-green-500 shadow-2xl rounded-md p-4 flex items-center space-x-3 min-w-[300px]"
          >
            <CheckCircle className="h-6 w-6 text-green-500" />
            <div>
              <p className="text-sm font-bold text-gray-900">Added to Cart</p>
              <p className="text-xs text-gray-500 line-clamp-1">{lastAdded}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
