import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ user }) => {
  return (
    <aside className="w-full md:w-64 bg-purple-100 p-4 bg-white shadow rounded">
      <div className="flex flex-col items-center mb-8">
        <img
          src={user?.image || "https://via.placeholder.com/100"}
          alt="User"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h3 className="text-purple-700 font-bold">
          {user?.name || "User Name"}
        </h3>
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
            <a href="#" className="text-purple-700 hover:text-purple-900">
              Portfolio
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-purple-700 hover:text-purple-900">
              Trading & Market
            </a>
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
            <a href="#" className="text-purple-700 hover:text-purple-900">
              Wallet Transfer Pay
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-purple-700 hover:text-purple-900">
              Reporting & Transaction
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="text-purple-700 hover:text-purple-900">
              Tutorial
            </a>
          </li>
          <li className="mt-auto">
            <a href="#" className="text-purple-700 hover:text-purple-900">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;