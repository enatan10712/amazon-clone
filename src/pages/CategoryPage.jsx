import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { ProductSkeleton } from '../components/Skeleton';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
        setProducts(response.data);
      } catch (error) {
        // Error handling
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <main className="max-w-screen-2xl mx-auto p-2 sm:p-4">
      <div className="bg-white p-4 sm:p-6 shadow-sm mb-4 sm:mb-6 rounded-sm">
        <h1 className="text-xl sm:text-3xl font-medium capitalize">{categoryName}</h1>
        <p className="text-xs sm:text-sm text-gray-500 mt-1">{products.length} results</p>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4">
        {loading ? (
          Array(4).fill().map((_, i) => <ProductSkeleton key={i} />)
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </main>
  );
};

export default CategoryPage;
