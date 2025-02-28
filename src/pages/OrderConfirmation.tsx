import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `SNK-${Math.floor(100000 + Math.random() * 900000)}`;
  
  // Generate estimated delivery date (5-7 days from now)
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5 + Math.floor(Math.random() * 3));
  const formattedDeliveryDate = deliveryDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Order Confirmed!
        </h1>
        <p className="text-xl text-gray-300">
          Thank you for your purchase. Your order has been received.
        </p>
      </div>

      <div className="bg-gray-900 rounded-xl p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-8 border-b border-gray-800">
          <div>
            <p className="text-gray-400 mb-1">Order Number</p>
            <p className="text-2xl font-bold text-white">{orderNumber}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start">
            <Package className="h-6 w-6 text-purple-400 mt-1 mr-3" />
            <div>
              <h3 className="font-semibold text-white mb-1">Order Status</h3>
              <p className="text-gray-300">Processing</p>
            </div>
          </div>
          <div className="flex items-start">
            <Truck className="h-6 w-6 text-purple-400 mt-1 mr-3" />
            <div>
              <h3 className="font-semibold text-white mb-1">Shipping Method</h3>
              <p className="text-gray-300">Standard Shipping</p>
            </div>
          </div>
          <div className="flex items-start">
            <Calendar className="h-6 w-6 text-purple-400 mt-1 mr-3" />
            <div>
              <h3 className="font-semibold text-white mb-1">Estimated Delivery</h3>
              <p className="text-gray-300">{formattedDeliveryDate}</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white mb-4">Order Details</h2>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Air Max Pulse"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-white font-medium">Air Max Pulse</h3>
                <p className="text-gray-400 text-sm">Size: 9 | Qty: 1</p>
              </div>
              <span className="text-purple-400 font-bold">$159.99</span>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Subtotal</span>
              <span className="text-white">$159.99</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">Shipping</span>
              <span className="text-white">$5.99</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-800 mt-2">
              <span className="text-white">Total</span>
              <span className="text-purple-400">$165.98</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">What's Next?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Order Confirmation</h3>
            <p className="text-gray-300">
              You will receive an email confirmation with your order details.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Order Processing</h3>
            <p className="text-gray-300">
              We'll prepare your items and notify you when they're shipped.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Delivery</h3>
            <p className="text-gray-300">
              Track your package and receive updates on its journey to you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;