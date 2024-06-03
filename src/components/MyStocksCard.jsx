import React from "react";

const MyStocksCard = ({ stock }) => {
  const isPositive = stock.price_change >= 0;
  const changePercent = /\(.*%\)/.test(stock.percentage_change)
    ? stock.percentage_change
    : `(${stock.percentage_change}%)`;
  const changeColor = isPositive ? "text-green-500" : "text-red-500";

  return (
    <div className="p-2 rounded-lg shadow-lg mx-1 flex flex-col justify-between">
      <h2 className="text-sm font-bold text-center">{stock.stock_ticker}</h2>
      <p className="text-xs font-bold text-center">{stock.current_price}</p>
      <p className={`${changeColor} text-sm text-center`}>
        {stock.price_change} {changePercent}
      </p>
    </div>
  );
};

export default MyStocksCard;
