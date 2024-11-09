import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const PageNotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-200">
      <div className="text-center p-8 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <p className="text-xl text-gray-300 mb-6">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-700 text-lg font-semibold transition-colors"
        >
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
