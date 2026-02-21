import React from 'react'
import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500 mb-4">
          404
        </h1>
        <p className="text-gray-400 mb-6">
          Page not found.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound
