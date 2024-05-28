import React from "react";

const MyTopPortfolioMovers = ({ trades }) => {
  const calculateTotalReturn = (trade) => {
    const currentPrice = parseFloat(trade.current_price.replace(/₹|,/g, ""));
    const totalReturn = currentPrice * trade.quantity - trade.trade_total_price;
    const percentageReturn = (totalReturn / trade.trade_total_price) * 100;
    return { totalReturn, percentageReturn };
  };

  const sortedTrades = [...trades]
    .map((trade) => ({
      ...trade,
      ...calculateTotalReturn(trade),
    }))
    .sort((a, b) => b.totalReturn - a.totalReturn);

  const topGainers = sortedTrades.slice(0, 5);

  const topLosers = sortedTrades
    .filter((trade) => trade.totalReturn < 0)
    .sort((a, b) => a.totalReturn - b.totalReturn)
    .slice(0, 5);

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="font-bold mb-4 text-center text-xl sm:text-2xl">
        Portfolio Movers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-green-500 font-bold mb-2">Top Gainers</h3>
          <ul>
            {topGainers.map((trade) => (
              <li key={trade.trade_id} className="flex justify-between text-sm">
                <span className="tooltip relative group">
                  {trade.stock_ticker}
                  <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                    {trade["NAME OF COMPANY"]}
                  </span>
                </span>
                <span className=" tooltip relative group">
                  <span className="text-green-500">
                    {trade.percentageReturn.toFixed(2)}%
                  </span>
                  <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                    ₹{trade.totalReturn.toFixed(2)}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        {topLosers.length > 0 && (
          <div>
            <h3 className="text-red-500 font-bold mb-2">Top Losers</h3>
            <ul>
              {topLosers.map((trade) => (
                <li
                  key={trade.trade_id}
                  className="flex justify-between text-sm"
                >
                  <span className="tooltip relative group">
                    {trade.stock_ticker}
                    <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                      {trade["NAME OF COMPANY"]}
                    </span>
                  </span>
                  <span className="tooltip relative group">
                    <span className="text-red-500">
                      {trade.percentageReturn.toFixed(2)}%
                    </span>
                    <span className="tooltiptext absolute bottom-full mb-2 hidden w-48 p-2 text-xs text-white bg-black rounded opacity-75 group-hover:block whitespace-normal">
                      ₹{trade.totalReturn.toFixed(2)}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTopPortfolioMovers;
