import React from 'react';
import { currentUser } from '../data/mockData';
import { User, Package, CreditCard, Settings, LogOut } from 'lucide-react';

const Profile = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg p-6 text-center">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-white">{currentUser.name}</h2>
            <p className="text-gray-300">{currentUser.email}</p>
          </div>

          <nav className="bg-gray-900 rounded-lg p-4">
            <ul className="space-y-2">
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-white bg-purple-600 rounded-lg">
                  <User className="h-5 w-5" />
                  Profile
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  <Package className="h-5 w-5" />
                  Orders
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white transition-colors">
                  <Settings className="h-5 w-5" />
                  Settings
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:text-red-300 transition-colors">
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    defaultValue="John"
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    defaultValue="Doe"
                    className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={currentUser.email}
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  defaultValue="+1 (555) 123-4567"
                  className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
              >
                Save Changes
              </button>
            </form>
          </div>

          <div className="bg-gray-900 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Recent Orders</h2>
            <div className="text-gray-300 text-center py-8">
              <Package className="h-12 w-12 mx-auto mb-4 text-gray-500" />
              <p>No recent orders</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;