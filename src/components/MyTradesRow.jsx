import React from "react";
import MyTradesCell from "./MyTradesCell";

const MyTradesRow = ({
  trade,
  index,
  calculateTotalGainLoss,
  calculateReturns,
  calculateTargetReached,
  onEdit,
  onDelete,
}) => {
  const currentPrice = parseFloat(trade.current_price.replace(/₹|,/g, ""));
  const totalGainLoss = calculateTotalGainLoss(
    trade.trade_total_price,
    trade.quantity,
    currentPrice
  );

  const returns = calculateReturns(totalGainLoss, trade.trade_total_price);
  const targetReached = calculateTargetReached(
    currentPrice,
    trade.price_per_stock,
    trade.target_price
  );

  // Limit the targetReached percentage to 100 for the progress bar width
  const targetReachedPercentage = Math.min(targetReached, 100);

  return (
    <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
      <MyTradesCell
        value={trade.stock_ticker}
        className="sticky left-0 bg-white z-10"
      />
      <MyTradesCell value={trade["NAME OF COMPANY"]} />
      <MyTradesCell value={trade.trade_entry_date} />
      <MyTradesCell value={trade.quantity} />
      <MyTradesCell value={`₹${trade.price_per_stock}`} />
      <MyTradesCell value={`${trade.current_price}`} />
      <MyTradesCell value={`₹${trade.target_price}`} />
      <MyTradesCell value={trade.trade_strategy} />
      <MyTradesCell value={`₹${trade.trade_total_price}`} />
      <MyTradesCell
        value={`₹${trade.price_change}`}
        className={
          parseFloat(trade.price_change) > 0 ? "text-green-500" : "text-red-500"
        }
      />
      <MyTradesCell
        value={trade.percentage_change}
        className={
          parseFloat(trade.percentage_change) > 0
            ? "text-green-500"
            : "text-red-500"
        }
      />
      <MyTradesCell
        value={`₹${totalGainLoss.toFixed(2)}`}
        className={totalGainLoss > 0 ? "text-green-500" : "text-red-500"}
      />
      <MyTradesCell
        value={`${returns.toFixed(2)}%`}
        className={returns > 0 ? "text-green-500" : "text-red-500"}
      />
      <MyTradesCell>
        <div className="relative w-full h-4 bg-gray-300 rounded">
          <div
            className={`absolute top-0 left-0 h-4 ${
              targetReached >= 100
                ? "bg-green-500"
                : targetReached >= 0
                ? "bg-yellow-500"
                : "bg-red-500"
            } rounded`}
            // style={{ width: `${targetReachedPercentage}%` }}
            style={{ width: `${Math.abs(targetReachedPercentage)}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-700">
          {targetReached.toFixed(2)}%
        </span>
      </MyTradesCell>
      {/* <MyTradesCell>
        <div className="relative w-full h-4 bg-gray-300 rounded">
          <div
            className={`absolute top-0 left-0 h-4 ${
              targetReached >= 1 ? "bg-green-500" : "bg-red-500"
            } rounded`}
            // style={{ width: `${Math.abs(targetReached)}%` }}
            style={{ width: `${targetReachedPercentage}%` }}
          ></div>
        </div>
        <span className="text-xs text-gray-700">
          {targetReached.toFixed(2)}%
        </span>
      </MyTradesCell> */}
      <MyTradesCell>
        <button
          className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
          onClick={() => onEdit(trade)}
        >
          Edit
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => onDelete(trade.id)}
        >
          Delete
        </button>
      </MyTradesCell>
    </tr>
  );
};

export default MyTradesRow;
