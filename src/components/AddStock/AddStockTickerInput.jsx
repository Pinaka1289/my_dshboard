import React from "react";

const AddStockTickerInput = ({
  stockTicker,
  onChange,
  filteredTickers,
  onTickerSelect,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        STOCK TICKER
      </label>
      <div className="relative">
        <input
          type="text"
          name="stock_ticker"
          value={stockTicker}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          required
        />
        {filteredTickers.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg max-h-48 overflow-y-auto">
            {filteredTickers.map((item) => (
              <li
                key={item.ticker}
                onClick={() => onTickerSelect(item.ticker)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              >
                {item.ticker} - {item.company_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddStockTickerInput;
