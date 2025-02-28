import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, Truck, RotateCcw, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { shoes } from '../data/mockData';
import type { Shoe } from '../types';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Shoe | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundProduct = shoes.find(shoe => shoe.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
      setSelectedSize(foundProduct.sizes[0]);
    }
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <img 
              src={selectedImage} 
              alt={product.name} 
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`bg-gray-900 rounded-lg overflow-hidden ${
                  selectedImage === image ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-full h-auto object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">{product.name}</h1>
            <p className="text-xl text-purple-400 mb-4">${product.price}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-5 w-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-600'}`} 
                  fill={i < 4 ? 'currentColor' : 'none'} 
                />
              ))}
              <span className="ml-2 text-gray-400">(42 reviews)</span>
            </div>
            <p className="text-gray-300">{product.description}</p>
          </div>

          {/* Color */}
          <div>
            <h3 className="text-white font-semibold mb-3">Color: {product.color}</h3>
            <div className="flex items-center space-x-3">
              <button className="w-8 h-8 rounded-full bg-black border-2 border-purple-500"></button>
              <button className="w-8 h-8 rounded-full bg-white border border-gray-300"></button>
              <button className="w-8 h-8 rounded-full bg-red-500 border border-gray-300"></button>
            </div>
          </div>

          {/* Size */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold">Select Size</h3>
              <button className="text-purple-400 text-sm">Size Guide</button>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-2 rounded-lg border ${
                    selectedSize === size
                      ? 'border-purple-500 bg-purple-500/20 text-white'
                      : 'border-gray-700 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white text-xl"
              >
                -
              </button>
              <span className="w-10 text-center text-white">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white text-xl"
              >
                +
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
            <Link
              to="/checkout"
              className="flex-1 bg-neon-pink text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
            >
              <span>Buy Now</span>
            </Link>
            <button className="w-12 h-12 rounded-lg border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:border-gray-500 transition-colors">
              <Heart className="h-5 w-5" />
            </button>
          </div>

          {/* Shipping Info */}
          <div className="space-y-4 border-t border-gray-800 pt-6">
            <div className="flex items-start space-x-3">
              <Truck className="h-5 w-5 text-purple-400 mt-0.5" />
              <div>
                <p className="text-white font-medium">Free Shipping</p>
                <p className="text-gray-400 text-sm">Free standard shipping on orders over $100</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <RotateCcw className="h-5 w-5 text-purple-400 mt-0.5" />
              <div>
                <p className="text-white font-medium">Easy Returns</p>
                <p className="text-gray-400 text-sm">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <div className="border-b border-gray-800">
          <div className="flex space-x-8">
            <button className="py-4 border-b-2 border-purple-500 text-white font-medium">
              Description
            </button>
            <button className="py-4 text-gray-400 font-medium">
              Reviews
            </button>
            <button className="py-4 text-gray-400 font-medium">
              Shipping & Returns
            </button>
          </div>
        </div>
        <div className="py-6 text-gray-300">
          <p className="mb-4">
            {product.description} Designed for both performance and style, these sneakers feature advanced cushioning technology for all-day comfort.
          </p>
          <p className="mb-4">
            The {product.name} combines innovative design with premium materials to create a shoe that stands out from the crowd. The breathable upper keeps your feet cool, while the durable outsole provides excellent traction on various surfaces.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Premium synthetic and textile upper</li>
            <li>Cushioned midsole for comfort</li>
            <li>Rubber outsole for durability and traction</li>
            <li>Padded collar and tongue</li>
            <li>Breathable mesh lining</li>
          </ul>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6 text-white">You Might Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shoes.filter(s => s.id !== product.id).map((shoe) => (
            <Link
              key={shoe.id}
              to={`/products/${shoe.id}`}
              className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={shoe.images[0]}
                  alt={shoe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{shoe.name}</h3>
                <p className="text-gray-400">{shoe.brand}</p>
                <p className="text-purple-400 font-bold mt-2">${shoe.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;