import React from 'react';

const Returns = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Returns & Exchanges
      </h1>

      <div className="space-y-8">
        <section className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Return Policy</h2>
          <p className="text-gray-300 mb-4">
            We want you to be completely satisfied with your purchase. If you're not happy with your order, you can return it within 30 days of delivery.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Items must be unworn and in original condition</li>
            <li>Original tags must be attached</li>
            <li>Original packaging must be included</li>
            <li>Proof of purchase is required</li>
          </ul>
        </section>

        <section className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">How to Return</h2>
          <ol className="space-y-4 text-gray-300">
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white mr-4">1</span>
              <p>Log into your account and go to your orders</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white mr-4">2</span>
              <p>Select the item you want to return and follow the prompts</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white mr-4">3</span>
              <p>Print the return label and attach it to your package</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-600 text-white mr-4">4</span>
              <p>Drop off the package at any authorized shipping location</p>
            </li>
          </ol>
        </section>

        <section className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Refund Process</h2>
          <p className="text-gray-300">
            Once we receive your return, we'll inspect the item and process your refund within 3-5 business days. The refund will be issued to your original payment method.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Returns;