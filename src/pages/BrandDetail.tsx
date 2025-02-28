import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { brands, shoes } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import type { Brand, Shoe } from '../types';

const BrandDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [brand, setBrand] = useState<Brand | null>(null);
  const [brandProducts, setBrandProducts] = useState<Shoe[]>([]);

  useEffect(() => {
    const foundBrand = brands.find(b => b.id === id);
    if (foundBrand) {
      setBrand(foundBrand);
      const products = shoes.filter(shoe => shoe.brand === foundBrand.name);
      setBrandProducts(products);
    }
  }, [id]);

  if (!brand) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Brand Hero */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-75" />
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {brand.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {brand.description}
            </p>
          </div>
        </div>
      </div>

      {/* Brand History */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Brand History
        </h2>
        <div className="bg-gray-900 rounded-xl p-8">
          <p className="text-gray-300 text-lg leading-relaxed">
            {brand.history}
          </p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">
                {brand.name} has been at the forefront of footwear innovation, constantly pushing the boundaries of design and technology.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Heritage</h3>
              <p className="text-gray-300">
                With decades of experience, {brand.name} has built a legacy of quality and performance that continues to inspire athletes worldwide.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">Culture</h3>
              <p className="text-gray-300">
                Beyond sports, {brand.name} has made an indelible mark on fashion and popular culture, becoming a symbol of self-expression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Products */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          {brand.name} Collection
        </h2>
        {brandProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandProducts.map((shoe) => (
              <ProductCard key={shoe.id} shoe={shoe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-900 rounded-xl">
            <p className="text-gray-300 text-lg">No products available at the moment.</p>
          </div>
        )}
      </section>

      {/* Brand Values */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Brand Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Sustainability</h3>
            <p className="text-gray-300">
              {brand.name} is committed to reducing its environmental footprint through innovative manufacturing processes and sustainable materials.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
            <p className="text-gray-300">
              Supporting athletes at all levels, {brand.name} invests in community programs that promote sports participation and active lifestyles.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
            <p className="text-gray-300">
              Through continuous research and development, {brand.name} creates products that help athletes perform at their best.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Inclusivity</h3>
            <p className="text-gray-300">
              {brand.name} believes that sports are for everyone, designing products that cater to athletes of all abilities and backgrounds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandDetail;