import React from "react";

const Balance = ({ trades }) => {
  const calculateTotalCurrentValue = (trades) => {
    return trades.reduce((acc, trade) => {
      const currentPrice = parseFloat(trade.current_price.replace(/₹|,/g, ""));
      return acc + currentPrice * trade.quantity;
    }, 0);
  };

  const calculateDaysPL = (trades) => {
    return trades.reduce((acc, trade) => {
      const priceChange = parseFloat(trade.price_change.replace(/₹|,/g, ""));
      return acc + priceChange * trade.quantity;
    }, 0);
  };

  const calculateTotalReturn = (trades) => {
    return trades.reduce((acc, trade) => {
      const currentPrice = parseFloat(trade.current_price.replace(/₹|,/g, ""));
      const initialInvestment = trade.trade_total_price;
      const totalReturnPerStock =
        currentPrice * trade.quantity - initialInvestment;
      return acc + totalReturnPerStock;
    }, 0);
  };

  const calculateTotalInitialInvestment = (trades) => {
    return trades.reduce((acc, trade) => acc + trade.trade_total_price, 0);
  };

  const totalCurrentValue = calculateTotalCurrentValue(trades);
  const daysPL = calculateDaysPL(trades);
  const totalReturn = calculateTotalReturn(trades);
  const totalInitialInvestment = calculateTotalInitialInvestment(trades);
  const overallRateOfReturn = (totalReturn / totalInitialInvestment) * 100;

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <h2 className="font-bold mb-6 text-2xl text-center">Balance</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-purple-100 p-4 rounded">
          <span className="text-lg font-semibold text-purple-700">
            Initial Investment:
          </span>
          <span className="text-2xl font-bold text-purple-700">
            ₹{totalInitialInvestment.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center bg-blue-100 p-4 rounded">
          <span className="text-lg font-semibold text-blue-700">
            Current Value:
          </span>
          <span className="text-2xl font-bold text-blue-700">
            ₹{totalCurrentValue.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center bg-orange-100 p-4 rounded">
          <span className="text-lg font-semibold text-orange-700">
            Total Return:
          </span>
          <span className="text-2xl font-bold text-orange-700">
            ₹{totalReturn.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between items-center bg-green-100 p-4 rounded">
          <span className="text-lg font-semibold text-green-700">
            Day's P&L:
          </span>
          <span
            className={`text-2xl font-bold ${
              daysPL >= 0 ? "text-green-700" : "text-red-700"
            }`}
          >
            ₹{daysPL.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between items-center bg-teal-100 p-4 rounded">
          <span className="text-lg font-semibold text-teal-700">
            Overall Rate of Return:
          </span>
          <span className="text-2xl font-bold text-teal-700">
            {overallRateOfReturn.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
