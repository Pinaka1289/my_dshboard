import React from "react";
import useFetch from "../hooks/useFetch";
import MyStocksCarousel from "./MyStocksCarousel";
import MyStocksHeader from "./MyStocksHeader";
import MyStocksLoading from "./MyStocksLoading";
import apiConfig from "../config/apiConfig"; // Import the configuration

const MyStocks = () => {
  const {
    data: stocks,
    loading: stocksLoading,
    error: stocksError,
    refetch,
  } = useFetch(apiConfig.ALL_STOCKS); // Replace with your actual endpoint

  if (stocksLoading) {
    return <MyStocksLoading />;
  }

  if (stocksError) return <p>Error: {stocksError.message}</p>;

  return (
    <div className="bg-white shadow p-4 rounded">
      <MyStocksHeader />
      <MyStocksCarousel stocks={stocks} refetch={refetch} />
    </div>
  );
};

export default MyStocks;
