import React from "react";
import MyTradesRow from "./MyTradesRow";
import MyTradesHeader from "./MyTradesHeader";

const MyTradesTable = ({
  trades,
  calculateTotalGainLoss,
  calculateReturns,
  calculateTargetReached,
  onDelete,
  onEdit,
}) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <MyTradesHeader />
      <tbody>
        {trades.map((trade, index) => (
          <MyTradesRow
            key={trade.trade_id}
            trade={trade}
            index={index}
            calculateTotalGainLoss={calculateTotalGainLoss}
            calculateReturns={calculateReturns}
            calculateTargetReached={calculateTargetReached}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MyTradesTable;
