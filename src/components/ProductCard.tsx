import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import type { Shoe } from '../types';

interface ProductCardProps {
  shoe: Shoe;
}

const ProductCard = ({ shoe }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <Link
      to={`/products/${shoe.id}`}
      className="group bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={shoe.images[0]}
          alt={shoe.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-1">{shoe.name}</h3>
        <p className="text-gray-400 mb-2">{shoe.brand}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-purple-400">${shoe.price}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(shoe, shoe.sizes[0]);
            }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;