import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="text-white bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-xl shadow-lg transition-all duration-200"
      >
        Go to Home
      </Link>
    </div>
  );
}
