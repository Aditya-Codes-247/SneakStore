import React from 'react';

const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Shipping Information
      </h1>

      <div className="space-y-8">
        <section className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Shipping Methods</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
              <div>
                <h3 className="font-semibold text-white">Standard Shipping</h3>
                <p className="text-gray-300">3-5 business days</p>
              </div>
              <span className="text-xl font-bold text-purple-400">$5.99</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
              <div>
                <h3 className="font-semibold text-white">Express Shipping</h3>
                <p className="text-gray-300">1-2 business days</p>
              </div>
              <span className="text-xl font-bold text-purple-400">$14.99</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
              <div>
                <h3 className="font-semibold text-white">Next Day Delivery</h3>
                <p className="text-gray-300">Next business day</p>
              </div>
              <span className="text-xl font-bold text-purple-400">$24.99</span>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Tracking Your Order</h2>
          <p className="text-gray-300 mb-4">
            Once your order ships, you'll receive a tracking number via email. You can also track your order by:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Logging into your account</li>
            <li>Checking your order confirmation email</li>
            <li>Contacting our customer service team</li>
          </ul>
        </section>

        <section className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">International Shipping</h2>
          <p className="text-gray-300 mb-4">
            We ship to most countries worldwide. International shipping rates and delivery times vary by location. Customs fees and import duties may apply.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white font-semibold">Free International Shipping</p>
            <p className="text-gray-300">Available on orders over $200</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shipping;