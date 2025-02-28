import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Your Cart is Empty
        </h1>
        <p className="text-gray-300 mb-8">Start shopping to add items to your cart!</p>
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Shopping Cart
      </h1>

      <div className="space-y-8">
        {items.map((item) => (
          <div
            key={`${item.product.id}-${item.size}`}
            className="bg-gray-900 rounded-lg p-6 flex items-center gap-6"
          >
            <img
              src={item.product.images[0]}
              alt={item.product.name}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white">{item.product.name}</h3>
              <p className="text-gray-300">Size: {item.size}</p>
              <p className="text-purple-400">${item.product.price}</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => updateQuantity(item.product.id, Math.max(0, item.quantity - 1))}
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-white w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                className="p-2 text-gray-300 hover:text-white transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}

        <div className="bg-gray-900 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-300">Subtotal</span>
            <span className="text-white">${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-300">Shipping</span>
            <span className="text-white">$5.99</span>
          </div>
          <div className="border-t border-gray-700 pt-4 flex justify-between items-center">
            <span className="text-xl font-semibold text-white">Total</span>
            <span className="text-xl font-bold text-purple-400">
              ${(total + 5.99).toFixed(2)}
            </span>
          </div>
          <button className="w-full mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;