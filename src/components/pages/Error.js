import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screenp-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 transition-colors duration-300">
          Go to Home
        </Link>
      </div>
      <div className="mt-10 w-full max-w-md">
        <img src="https://via.placeholder.com/400x300" alt="Error Illustration" className="w-full rounded-lg shadow-md" />
      </div>
    </div>
  );
};

export default Error;
