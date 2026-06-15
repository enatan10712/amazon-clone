import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { DetailSkeleton } from '../components/Skeleton';
import ProductCard from '../components/ProductCard';
import { Star } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

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

  if (loading) return <DetailSkeleton />;

  if (!product) return (
    <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold">Product not found</h1>
    </div>
  );

  return (
    <main className="max-w-screen-2xl mx-auto p-4 md:p-10">
      <div className="flex flex-col md:flex-row bg-white p-6 md:p-10 shadow-sm">
        {/* Image */}
        <div className="flex justify-center md:w-1/2 mb-10 md:mb-0">
          <img src={product.image} alt={product.title} className="max-h-96 object-contain" />
        </div>

        {/* Details */}
        <div className="md:w-1/2 md:pl-10">
          <h1 className="text-2xl md:text-3xl font-medium mb-2">{product.title}</h1>
          <p className="text-amazon_text hover:underline cursor-pointer text-sm mb-2 capitalize">
            Visit the {product.category} store
          </p>

          <div className="flex items-center mb-4 border-b pb-4">
             <div className="flex">
                {Array(Math.floor(product.rating?.rate || 5)).fill().map((_, i) => (
                  <Star key={i} className="h-5 text-yellow-500 fill-current" />
                ))}
             </div>
             <span className="ml-2 text-sm text-amazon_text">{product.rating?.count} ratings</span>
          </div>

          <div className="mb-4 text-amazon_text_blue">
             <span className="text-sm align-top">$</span>
             <span className="text-3xl font-medium">{product.price.toFixed(2).split('.')[0]}</span>
             <span className="text-sm align-top">{product.price.toFixed(2).split('.')[1]}</span>
          </div>

          <div className="mb-6">
            <h3 className="font-bold mb-1">About this item</h3>
            <p className="text-sm text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity:</span>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="p-1 border bg-gray-100 rounded-md focus:outline-none cursor-pointer"
            >
              {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
            </select>
          </div>

          <button
            onClick={() => addToCart({ ...product, quantity })}
            className="w-full md:w-auto px-10 button"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10 bg-white p-6 shadow-sm overflow-hidden">
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Related Products</h2>
        <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {relatedProducts.map(p => (
            <div key={p.id} className="min-w-[250px] flex-shrink-0">
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
