import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";

const Sidebar = () => {
  const { username, logout } = useContext(AuthContext);

  const handleSignOut = () => {
    logout();
  };

  return (
    <aside className="w-full md:w-64 bg-purple-100 p-4 bg-white shadow rounded">
      <div className="flex flex-col items-center mb-8">
        <img
          src={"https://via.placeholder.com/100"}
          alt="User"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-purple-700 font-bold">{username || "User Name"}</h3>
        <button
          onClick={handleSignOut}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Sign Out
        </button>
      </div>
      <nav>
        <ul className="flex flex-col h-full">
          <li className="mb-4">
            <Link
              to="/dashboard"
              className="text-purple-700 font-bold hover:text-purple-900"
            >
              Dashboard
            </Link>
          </li>

          <li className="mb-4">
            <Link
              to="/research"
              className="text-purple-700 hover:text-purple-900"
            >
              Research Portal
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/market-movers"
              className="text-purple-700 hover:text-purple-900"
            >
              Market Movers
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/my-analysis"
              className="text-purple-700 hover:text-purple-900"
            >
              My Analysis
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/market-calendar"
              className="text-purple-700 hover:text-purple-900"
            >
              Market Calendar
            </Link>
          </li>
          <li className="mb-4">
            <a href="#" className="text-purple-700 hover:text-purple-900">
              Reporting & Transaction
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
