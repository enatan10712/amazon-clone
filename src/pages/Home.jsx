import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CategorySection from '../components/CategorySection';
import ProductCard from '../components/ProductCard';
import { ProductSkeleton } from '../components/Skeleton';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Carousel />
        <CategorySection />

        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4 p-4">
          {loading ? (
            Array(8).fill().map((_, i) => <ProductSkeleton key={i} />)
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
