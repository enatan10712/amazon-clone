import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { DetailSkeleton } from '../components/Skeleton';
import ProductCard from '../components/ProductCard';
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const prodRes = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(prodRes.data);

        const relRes = await axios.get(`https://fakestoreapi.com/products/category/${prodRes.data.category}`);
        setRelatedProducts(relRes.data.filter(p => p.id !== parseInt(id)).slice(0, 4));
      } catch (error) {
        // Error handling
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y, show: true });
  };

  if (loading) return <DetailSkeleton />;

  if (!product) return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Product not found</h1>
    </div>
  );

  return (
    <main className="max-w-screen-2xl mx-auto p-4 md:p-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col md:flex-row bg-white p-6 md:p-10 shadow-sm rounded-sm"
      >
        {/* Image with Hover Zoom */}
        <div className="flex justify-center md:w-1/2 mb-10 md:mb-0 relative group overflow-hidden bg-white">
          <div
            className="relative cursor-crosshair h-[300px] sm:h-[400px] w-full flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomPos({ ...zoomPos, show: false })}
          >
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full object-contain"
            />

            {/* Zoom Overlay */}
            <AnimatePresence>
              {zoomPos.show && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 pointer-events-none hidden lg:block z-50 bg-white"
                  style={{
                    backgroundImage: `url(${product.image})`,
                    backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                    backgroundSize: '200%',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Details */}
        <div className="md:w-1/2 md:pl-10">
          <motion.h1
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-xl sm:text-2xl md:text-3xl font-medium mb-2 text-[#0F1111]"
          >
            {product.title}
          </motion.h1>
          <p className="text-amazon_text hover:underline cursor-pointer text-sm mb-2 capitalize">
            Visit the {product.category} store
          </p>

          <div className="flex items-center mb-4 border-b pb-4">
             <div className="flex">
                {Array(Math.floor(product.rating?.rate || 5)).fill().map((_, i) => (
                  <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
                ))}
             </div>
             <span className="ml-2 text-xs sm:text-sm text-amazon_text">{product.rating?.count} ratings</span>
          </div>

          <div className="mb-4 text-amazon_text_blue">
             <span className="text-sm align-top">$</span>
             <span className="text-3xl font-medium">{product.price.toFixed(2).split('.')[0]}</span>
             <span className="text-sm align-top">{product.price.toFixed(2).split('.')[1]}</span>
          </div>

          <div className="mb-6 text-sm text-gray-700 leading-relaxed">
            <h3 className="font-bold mb-1 text-black">About this item</h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {product.description}
            </motion.p>
          </div>

          <div className="flex items-center mb-6">
            <span className="mr-4 text-sm">Quantity:</span>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="p-1 border bg-gray-100 rounded-md focus:outline-none cursor-pointer hover:bg-gray-200 transition-colors text-sm"
            >
              {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => addToCart({ ...product, quantity })}
            className="w-full md:w-auto px-10 button text-sm font-medium"
          >
            Add to Cart
          </motion.button>
        </div>
      </motion.div>

      {/* Related Products */}
      <div className="mt-10 bg-white p-4 sm:p-6 shadow-sm overflow-hidden rounded-sm">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 border-b pb-2">Related Products</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {relatedProducts.map((p, index) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[200px] sm:min-w-[250px] flex-shrink-0"
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
