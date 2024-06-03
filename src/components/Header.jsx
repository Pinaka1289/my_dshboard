import React from "react";
// import MyHeaderInfo from "./MyHeaderInfo";
import MyHeaderInfo from "./MyHeaderInfo";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row items-center w-full md:w-auto">
        <h1 className="text-xl font-bold mb-2 md:mb-0 mr-4">MyKubera</h1>
        <input
          type="text"
          placeholder="Search for stocks and more"
          className="border p-2 rounded w-full md:w-64"
        />
      </div>
      <MyHeaderInfo />
    </header>
  );
};

export default Header;
