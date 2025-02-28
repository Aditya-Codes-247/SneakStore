import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

interface ShippingInfo {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
}

const initialShippingInfo: ShippingInfo = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'United States',
  phone: '',
};

const Checkout = () => {
  const { items, total } = useCart();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>(initialShippingInfo);
  const [shippingMethod, setShippingMethod] = useState<string>('standard');
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/payment');
  };

  const shippingCost = shippingMethod === 'express' ? 14.99 : shippingMethod === 'nextDay' ? 24.99 : 5.99;
  const orderTotal = total + shippingCost;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Your Cart is Empty
        </h1>
        <p className="text-gray-300 mb-8">Add some items to your cart before proceeding to checkout.</p>
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Checkout
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Shipping and Billing Info */}
        <div className="lg:col-span-2 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Shipping Information */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Truck className="mr-2 h-6 w-6 text-purple-400" />
                Shipping Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={shippingInfo.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={shippingInfo.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-gray-300 mb-2">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-gray-300 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-gray-300 mb-2">
                    State/Province *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={shippingInfo.state}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-gray-300 mb-2">
                    ZIP/Postal Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={shippingInfo.zipCode}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-gray-300 mb-2">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="phone" className="block text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={shippingInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>

            {/* Shipping Method */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-white mb-6">Shipping Method</h2>
              <div className="space-y-4">
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="standard"
                    checked={shippingMethod === 'standard'}
                    onChange={() => setShippingMethod('standard')}
                    className="h-5 w-5 text-purple-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-white font-medium">Standard Shipping</p>
                    <p className="text-gray-400 text-sm">3-5 business days</p>
                  </div>
                  <span className="text-purple-400 font-bold">$5.99</span>
                </label>
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="express"
                    checked={shippingMethod === 'express'}
                    onChange={() => setShippingMethod('express')}
                    className="h-5 w-5 text-purple-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-white font-medium">Express Shipping</p>
                    <p className="text-gray-400 text-sm">1-2 business days</p>
                  </div>
                  <span className="text-purple-400 font-bold">$14.99</span>
                </label>
                <label className="flex items-center p-4 bg-gray-800 rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    name="shippingMethod"
                    value="nextDay"
                    checked={shippingMethod === 'nextDay'}
                    onChange={() => setShippingMethod('nextDay')}
                    className="h-5 w-5 text-purple-600"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-white font-medium">Next Day Delivery</p>
                    <p className="text-gray-400 text-sm">Next business day</p>
                  </div>
                  <span className="text-purple-400 font-bold">$24.99</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="space-y-6">
          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={`${item.product.id}-${item.size}`} className="flex items-center gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{item.product.name}</h3>
                    <p className="text-gray-400 text-sm">Size: {item.size} | Qty: {item.quantity}</p>
                  </div>
                  <span className="text-purple-400 font-bold">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-800 pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-300">Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Shipping</span>
                <span className="text-white">${shippingCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-gray-800 pt-2 mt-2">
                <span className="text-white font-bold">Total</span>
                <span className="text-xl font-bold text-purple-400">${orderTotal.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Secure Checkout</h2>
            <div className="flex items-center gap-3 text-gray-300">
              <ShieldCheck className="h-5 w-5 text-green-500" />
              <span>Your payment information is secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;