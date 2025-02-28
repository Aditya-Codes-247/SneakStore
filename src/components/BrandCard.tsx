import React from 'react';
import { Link } from 'react-router-dom';
import type { Brand } from '../types';

interface BrandCardProps {
  brand: Brand;
}

const BrandCard = ({ brand }: BrandCardProps) => {
  return (
    <Link
      to={`/brands/${brand.id}`}
      className="group relative overflow-hidden rounded-xl bg-gray-900 p-6 hover:bg-gray-800 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-75 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10">
        <img
          src={brand.logo}
          alt={brand.name}
          className="h-32 w-32 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-2xl font-bold text-white mb-2">{brand.name}</h3>
        <p className="text-gray-300">{brand.description}</p>
      </div>
    </Link>
  );
};

export default BrandCard;