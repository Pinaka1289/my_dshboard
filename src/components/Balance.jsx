import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { parseISO, differenceInDays } from "date-fns";

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

  const calculateCAGR = (initialInvestment, currentTotalValue, trades) => {
    const xirr = (values, dates) => {
      const xnpv = (rate, values, dates) => {
        return values.reduce((sum, value, i) => {
          const diffDays = differenceInDays(
            parseISO(dates[i]),
            parseISO(dates[0])
          );
          return sum + value / Math.pow(1 + rate, diffDays / 365);
        }, 0);
      };

      const guess = 0.1;
      const tol = 1e-6;
      let rate = guess;
      let iteration = 0;
      while (iteration < 100) {
        const xnpvRate = xnpv(rate, values, dates);
        const xnpvRatePlusTol = xnpv(rate + tol, values, dates);
        const deriv = (xnpvRatePlusTol - xnpvRate) / tol;
        const newRate = rate - xnpvRate / deriv;
        if (Math.abs(newRate - rate) < tol) return newRate;
        rate = newRate;
        iteration++;
      }
      return rate;
    };

    const cashFlows = trades.map((trade) => -trade.trade_total_price);
    cashFlows.push(currentTotalValue);
    const tradeDates = trades.map((trade) => trade.trade_entry_date);
    tradeDates.push(format(new Date(), "yyyy-MM-dd"));

    // console.log("Cash Flows: ", cashFlows);
    // console.log("Trade Dates: ", tradeDates);

    return xirr(cashFlows, tradeDates);
  };

  const totalCurrentValue = calculateTotalCurrentValue(trades);
  const daysPL = calculateDaysPL(trades);
  const totalReturn = calculateTotalReturn(trades);
  const totalInitialInvestment = calculateTotalInitialInvestment(trades);
  const overallRateOfReturn = (totalReturn / totalInitialInvestment) * 100;
  const cagr = calculateCAGR(totalInitialInvestment, totalCurrentValue, trades);

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

        <div className="flex justify-between items-center bg-yellow-100 p-4 rounded">
          <span className="text-lg font-semibold text-yellow-700">CAGR:</span>
          <span className="text-2xl font-bold text-yellow-700">
            {(cagr * 100).toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Balance;
