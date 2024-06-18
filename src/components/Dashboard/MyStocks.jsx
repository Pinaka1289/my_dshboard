import React from "react";
import useFetch from "../../hooks/useFetch";
import MyStocksHeader from "../Header/MyStocksHeader";
import MyStocksLoading from "./MyStocksLoading";
import TickerTapeWidget from "./TickerTapeWidget";
import apiConfig from "../../config/apiConfig"; // Import the configuration

const MyStocks = () => {
  const {
    data: stocks,
    loading: stocksLoading,
    error: stocksError,
    refetch,
  } = useFetch(apiConfig.ALL_STOCKS);

  if (stocksLoading) {
    return <MyStocksLoading />;
  }

  if (stocksError) return <p>Error: {stocksError.message}</p>;

  return (
    <div className="bg-white shadow p-4 rounded">
      <MyStocksHeader />
      {/* <MyStocksCarousel stocks={stocks} refetch={refetch} /> */}
      <TickerTapeWidget stocks={stocks} />
    </div>
  );
};

export default MyStocks;
