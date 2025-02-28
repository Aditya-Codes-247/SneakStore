import React from 'react';
import { brands, shoes } from '../data/mockData';
import BrandCard from '../components/BrandCard';
import ProductCard from '../components/ProductCard';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-75" />
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Step into the Future
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover the latest in sneaker innovation and style
            </p>
          </div>
        </div>
      </div>

      {/* Brands Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Brands
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <BrandCard key={brand.id} brand={brand} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Trending Now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {shoes.map((shoe) => (
            <ProductCard key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;