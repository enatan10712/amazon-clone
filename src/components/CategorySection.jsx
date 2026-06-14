import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: "electronics", image: "https://fakestoreapi.com/img/61mtL65D4pL._AC_SX679_.jpg" },
  { name: "jewelery", image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg" },
  { name: "men's clothing", image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" },
  { name: "women's clothing", image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" },
];

const CategorySection = () => {
  return (
    <div className="flex overflow-x-auto space-x-6 px-6 -mt-16 md:-mt-48 relative z-30 scrollbar-hide pb-4">
      {categories.map((cat) => (
        <div key={cat.name} className="bg-white p-6 shadow-sm min-w-[280px] md:min-w-[320px] flex-shrink-0">
          <h2 className="text-xl font-bold mb-4 capitalize">{cat.name}</h2>
          <div className="h-64 mb-4">
            <img src={cat.image} alt={cat.name} className="w-full h-full object-contain" />
          </div>
          <Link to={`/category/${cat.name}`} className="text-amazon_text hover:text-orange-700 text-sm">
            Shop now
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
