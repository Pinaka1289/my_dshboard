import React from "react";
import MyStocks from "./MyStocks";
import Balance from "./Balance";
import MyTopDayMovers from "./MyTopDayMovers";
import MyTopPortfolioMovers from "./MyTopPortfolioMovers";
import Snapshot from "./Snapshot";
import PortfolioAnalytics from "./PortfolioAnalytics";
import MyWatchlist from "./MyWatchlist";
import { useNavigate } from "react-router-dom";
import MyTrades from "./MyTrades";
import useFetch from "../hooks/useFetch";
import apiConfig from "../config/apiConfig";
import LoadingSpinner from "./LoadingSpinner";

const Dashboard = () => {
  const {
    data: trades,
    loading: tradesLoading,
    error: tradesError,
    refetch: refetchTrades,
  } = useFetch(apiConfig.ALL_STOCKS);

  const {
    data: stocks,
    loading: stocksLoading,
    error: stocksError,
    refetch: refetchStocks,
  } = useFetch(apiConfig.ALL_STOCKS);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-3">
        {stocksLoading ? (
          <div className="bg-white shadow p-4 rounded h-64 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : stocksError ? (
          <p>Error: {stocksError.message}</p>
        ) : (
          <MyStocks stocks={stocks} refetch={refetchStocks} />
        )}
      </div>
      <div className="lg:col-span-2">
        {tradesLoading ? (
          <div className="bg-white shadow p-4 rounded h-64 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : tradesError ? (
          <p>Error: {tradesError.message}</p>
        ) : (
          <MyTrades trades={trades} refetch={refetchTrades} />
        )}
      </div>
      {tradesLoading ? (
        <div className="bg-white shadow p-4 rounded h-32 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : tradesError ? (
        <p>Error: {tradesError.message}</p>
      ) : (
        <Balance trades={trades} />
      )}
      {tradesLoading ? (
        <div className="bg-white shadow p-4 rounded h-64 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : tradesError ? (
        <p>Error: {tradesError.message}</p>
      ) : (
        <MyTopDayMovers trades={trades} />
      )}
      {tradesLoading ? (
        <div className="bg-white shadow p-4 rounded h-64 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      ) : tradesError ? (
        <p>Error: {tradesError.message}</p>
      ) : (
        <MyTopPortfolioMovers trades={trades} />
      )}
      {/* <div className="lg:col-span-3">
        <Snapshot />
      </div>
      <PortfolioAnalytics /> */}
      <MyWatchlist />
      <button
        onClick={handleLogout}
        className="w-full px-4 py-2 mt-4 bg-secondary text-white rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
