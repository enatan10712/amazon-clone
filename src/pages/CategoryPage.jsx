import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header';
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
        console.error("Error fetching category products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [categoryName]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="max-w-screen-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold capitalize mb-6 ml-4 border-b pb-2">
          {categoryName}
        </h1>

        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-4">
          {loading ? (
            Array(4).fill().map((_, i) => <ProductSkeleton key={i} />)
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

export default CategoryPage;
