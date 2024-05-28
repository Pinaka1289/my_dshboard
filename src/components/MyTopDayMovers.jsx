import React from "react";

const MyTopDayMovers = ({ trades }) => {
  const sortedTrades = [...trades].sort((a, b) => {
    const aChange = parseFloat(a.percentage_change.replace(/[%+]/g, ""));
    const bChange = parseFloat(b.percentage_change.replace(/[%+]/g, ""));
    return bChange - aChange;
  });

  const topGainers = sortedTrades.slice(0, 5);
  const topLosers = sortedTrades.slice(-5).reverse();

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold mb-4 text-center text-xl sm:text-2xl">
        Day Movers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-green-500 font-bold mb-2">Top 5 Gainers</h3>
          <ul>
            {topGainers.map((trade) => (
              <li key={trade.trade_id} className="flex justify-between text-sm">
                <span className="tooltip relative group">
                  {trade.stock_ticker}
                  <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                    {trade["NAME OF COMPANY"]}
                  </span>
                </span>
                <span className="tooltip relative group">
                  <span className="text-green-500">
                    {trade.percentage_change}
                  </span>
                  <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                    ₹{trade.price_change}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-red-500 font-bold mb-2">Top 5 Losers</h3>
          <ul>
            {topLosers.map((trade) => (
              <li key={trade.trade_id} className="flex justify-between text-sm">
                <span className="tooltip relative group">
                  {trade.stock_ticker}
                  <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                    {trade["NAME OF COMPANY"]}
                  </span>
                </span>
                <span className="tooltip relative group">
                  <span className="text-red-500">
                    {trade.percentage_change}
                  </span>
                  <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                    ₹{trade.price_change}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTopDayMovers;
