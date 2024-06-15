import React from "react";

const MyTickerDropdown = ({ tickers, onSelect }) => {
  return (
    <select
      onChange={(e) => onSelect(e.target.value)}
      className="p-2 border rounded"
    >
      {tickers.map((ticker) => (
        <option key={ticker} value={ticker}>
          {ticker}
        </option>
      ))}
    </select>
  );
};

export default MyTickerDropdown;
