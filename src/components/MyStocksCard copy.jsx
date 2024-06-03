import React from "react";

const MyStocksCard = ({ stock, index }) => {
  const colors = [
    "bg-red-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-orange-100",
    "bg-teal-100",
    "bg-indigo-100",
  ];

  return (
    <div
      className={`${
        colors[index % colors.length]
      } p-4 rounded-lg shadow-lg mx-2 flex flex-col justify-between`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {stock.LogoURL ? (
            <img
              src={stock.LogoURL}
              alt={`${stock["NAME OF COMPANY"]} logo`}
              className="w-8 h-8 mr-2"
            />
          ) : (
            <span className="font-bold text-sm">{stock.stock_ticker}</span>
          )}
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-400">Change</p>
          <p
            className={`text-xs ${
              stock.price_change > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {stock.price_change} ({stock.percentage_change})
          </p>
        </div>
      </div>
      <div className="my-4 text-center">
        <p className="text-sm font-semibold text-gray-400">Current Value</p>
        <p className="text-xl font-bold">{stock.current_price}</p>
      </div>
    </div>
  );
};

export default MyStocksCard;
