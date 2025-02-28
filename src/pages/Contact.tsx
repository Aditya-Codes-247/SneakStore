import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Contact Us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-purple-400 mr-3" />
                <span className="text-gray-300">support@sneakr.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-purple-400 mr-3" />
                <span className="text-gray-300">1-800-SNEAKR</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-purple-400 mr-3" />
                <span className="text-gray-300">123 Sneaker Street, NY 10001</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-white">Business Hours</h2>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 9:00 AM - 8:00 PM EST</p>
              <p>Saturday: 10:00 AM - 6:00 PM EST</p>
              <p>Sunday: 12:00 PM - 5:00 PM EST</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-white">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;