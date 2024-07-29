import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from "../../../assets/error.png"

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500">404</h1>
        <h2 className="text-4xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mt-2 mb-6">
          Oops! The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="px-6 py-3 text-lg font-semibold text-white bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 transition-colors duration-300">
          Go to Home
        </Link>
      </div>
      <div className="mt-10 w-full max-w-md">
        <img
          src={errorImage}
          alt="Error Illustration"
          className="w-full rounded-lg shadow-lg border border-gray-200"
        />
      </div>
    </div>
  );
};

export default Error;
