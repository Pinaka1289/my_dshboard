import React from "react";

const MyTradesHeader = () => {
  return (
    <thead className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 left-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-20">
          Stock Ticker
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Company Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Trade Date
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Quantity
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Buy Price
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Current Price
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Target Price
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Trade Strategy
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Total Price
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Price Change
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Percentage Change
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Total Gain/Loss
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Returns (%)
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Target Reached
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider sticky top-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white z-10">
          Actions
        </th>
      </tr>
    </thead>
  );
};

export default MyTradesHeader;
