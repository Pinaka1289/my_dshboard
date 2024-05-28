import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const MyStocksLoading = () => {
  return (
    <div className="bg-white shadow p-4 rounded flex justify-center items-center h-96">
      <LoadingSpinner />
    </div>
  );
};

export default MyStocksLoading;
