import React, { useState } from 'react';
import { faqs } from '../data/mockData';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Frequently Asked Questions
      </h1>

      <div className="flex justify-center space-x-4 mb-8">
        {['all', 'orders', 'shipping', 'returns', 'general'].map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredFaqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
            <p className="text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;