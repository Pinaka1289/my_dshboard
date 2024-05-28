import React, { useState } from "react";
import AddStockButton from "./AddStockButton";
import MyTradesTable from "./MyTradesTable";
import EditTradeForm from "./EditTradeForm";
import axios from "axios";
import apiConfig from "../config/apiConfig";

const MyTrades = ({ trades, refetch }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleDelete = async (tradeId) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`${apiConfig.STOCKS}/${tradeId}`, config);
      refetch();
    } catch (error) {
      console.error("Error deleting trade:", error);
    }
  };

  const handleEdit = (trade) => {
    setSelectedTrade(trade);
  };

  const handleEditSubmit = async (updatedTrade) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put(
        `${apiConfig.STOCKS}/${updatedTrade.trade_id}`,
        updatedTrade,
        config
      );
      refetch();
      setSelectedTrade(null);
    } catch (error) {
      console.error("Error updating trade:", error);
    }
  };

  const calculateTotalGainLoss = (totalPrice, quantity, currentPrice) => {
    const gainLoss = currentPrice * quantity - totalPrice;
    return gainLoss;
  };

  const calculateReturns = (totalGainLoss, totalPrice) => {
    const returns = (totalGainLoss / totalPrice) * 100;
    return returns;
  };

  const calculateTargetReached = (currentPrice, buyPrice, targetPrice) => {
    const percentage =
      ((currentPrice - buyPrice) / (targetPrice - buyPrice)) * 100;
    return percentage;
  };

  return (
    <div
      className={`bg-white shadow p-4 rounded-lg overflow-x-auto ${
        isExpanded ? "fixed inset-0 z-50 p-8 bg-white" : ""
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-xl sm:text-2xl">My Trades</h2>
        <button
          onClick={toggleExpand}
          className="px-4 py-2 bg-black text-white rounded"
        >
          {isExpanded ? "Close" : "Expand"}
        </button>
      </div>
      <AddStockButton onStockAdded={refetch} />
      <div
        className={`overflow-y-auto ${
          isExpanded ? "max-h-screen" : "max-h-96"
        }`}
      >
        <MyTradesTable
          trades={trades}
          calculateTotalGainLoss={calculateTotalGainLoss}
          calculateReturns={calculateReturns}
          calculateTargetReached={calculateTargetReached}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
      {selectedTrade && (
        <EditTradeForm
          trade={selectedTrade}
          onClose={() => setSelectedTrade(null)}
          onSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
};

export default MyTrades;
