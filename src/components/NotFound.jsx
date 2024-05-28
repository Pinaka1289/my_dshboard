import React from "react";
import { useNavigate, Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <div className="mt-6">
        <button
          onClick={handleBackClick}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
        >
          Go Back
        </button>
        <Link
          to="/dashboard"
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
