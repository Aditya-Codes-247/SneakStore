import React from 'react';
import { careers } from '../data/mockData';

const Careers = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Join Our Team
      </h1>

      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-white">Why Work With Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Innovation</h3>
            <p className="text-gray-300">Be part of a team that's reshaping the future of e-commerce</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Growth</h3>
            <p className="text-gray-300">Continuous learning and career development opportunities</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-white mb-2">Benefits</h3>
            <p className="text-gray-300">Competitive salary, health insurance, and employee discounts</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Open Positions</h2>
        {careers.map((career) => (
          <div key={career.id} className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-white">{career.title}</h3>
                <p className="text-gray-300">{career.department} · {career.location}</p>
              </div>
              <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm">
                {career.type}
              </span>
            </div>
            <p className="text-gray-300 mb-4">{career.description}</p>
            <div className="mb-4">
              <h4 className="font-semibold text-white mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {career.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Posted: {new Date(career.posted).toLocaleDateString()}</span>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;