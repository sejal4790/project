// src/pages/Dashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl text-center border border-amber-300">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">🎉 Welcome to Dashboard</h1>
        <p className="text-lg text-amber-700 mb-8">
          You are logged in successfully!
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-xl"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
