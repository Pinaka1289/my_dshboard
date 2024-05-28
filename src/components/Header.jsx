import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
        <h1 className="text-xl font-bold mb-2 md:mb-0 mr-4">Foxstocks</h1>
        <input
          type="text"
          placeholder="Search for stocks and more"
          className="border p-2 rounded w-full md:w-64"
        />
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <span className="mr-4">Hello Matt,</span>
        <img
          src="path_to_profile_image" // Replace with actual image path
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
