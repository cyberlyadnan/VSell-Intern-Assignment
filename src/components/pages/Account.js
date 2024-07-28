import React from 'react';
import user from "../../assets/user.png"

const Account = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-6 pb-20">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-48 p-4 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">My Account</h1>
              <p className="text-sm">Manage your account details and settings</p>
            </div>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="p-6 md:p-8">
          <div className="flex items-center">
            <img
              className="w-24 h-24 rounded-full border-4 border-white -mt-12"
              src={user}
              alt="Profile"
            />
            <div className="ml-6">
              <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
              <p className="text-gray-600">johndoe@example.com</p>
              <p className="text-gray-600">Member Since: January 2020</p>
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="p-6 md:p-8 bg-gray-50">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Order #12345</h4>
                <p className="text-gray-600">Date: 2023-07-15</p>
                <p className="text-gray-600">Total: $45.99</p>
              </div>
              <button className="text-blue-500 hover:text-blue-700">View Details</button>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">Order #12344</h4>
                <p className="text-gray-600">Date: 2023-07-10</p>
                <p className="text-gray-600">Total: $35.50</p>
              </div>
              <button className="text-blue-500 hover:text-blue-700">View Details</button>
            </div>
          </div>
        </div>

        {/* Account Settings Section */}
        <div className="p-6 md:p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h3>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-700">Personal Information</h4>
              <ul className="mt-2 text-gray-600">
                <li><strong>Phone:</strong> +1 123 456 7890</li>
                <li><strong>Address:</strong> 1234 Street Name, City, State, ZIP</li>
              </ul>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-700">Security</h4>
              <ul className="mt-2 text-gray-600">
                <li><strong>Change Password</strong></li>
                <li><strong>Two-Factor Authentication</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
