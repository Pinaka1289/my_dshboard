import React from "react";
import MyTradesRow from "./MyTradesRow";

const MyTradesTable = ({
  trades,
  calculateTotalGainLoss,
  calculateReturns,
  calculateTargetReached,
}) => {
  return (
    <div className="relative overflow-x-auto max-h-96">
      <table className="min-w-full bg-white">
        <thead className="bg-gradient-to-r from-violet-500 to-violet-800">
          <tr>
            <th className="sticky left-0 top-0 z-20 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              STOCK TICKER
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              NAME OF COMPANY
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              TRADE ENTRY DATE
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              QUANTITY
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              PRICE PER STOCK
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              CURRENT PRICE
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              TARGET PRICE
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              TRADE STRATEGY
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              TRADE TOTAL PRICE
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              PRICE CHANGE
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              PERCENTAGE CHANGE
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              TOTAL GAIN/LOSS
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              RETURNS (%)
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              TARGET REACHED (%)
            </th>
            <th className="sticky top-0 z-10 px-4 py-2 text-left text-white bg-gradient-to-r from-violet-500 to-violet-800">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade, index) => (
            <MyTradesRow
              key={trade.trade_id}
              trade={trade}
              index={index}
              calculateTotalGainLoss={calculateTotalGainLoss}
              calculateReturns={calculateReturns}
              calculateTargetReached={calculateTargetReached}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTradesTable;
