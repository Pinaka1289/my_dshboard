import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import apiConfig from "../config/apiConfig"; // Import the configuration

const EditTradeForm = ({ trade, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({ ...trade });

  const {
    data: stockTickers,
    loading: tickersLoading,
    error: tickersError,
  } = useFetch(apiConfig.ALL_TICKERS);

  const [filteredTickers, setFilteredTickers] = useState([]);

  useEffect(() => {
    setFormData({ ...trade });
  }, [trade]);

  useEffect(() => {
    if (formData.stock_ticker && stockTickers && stockTickers.data) {
      setFilteredTickers(
        stockTickers.data.filter(
          (ticker) =>
            ticker.ticker
              .toLowerCase()
              .includes(formData.stock_ticker.toLowerCase()) ||
            ticker.company_name
              .toLowerCase()
              .includes(formData.stock_ticker.toLowerCase())
        ) || []
      );
    } else {
      setFilteredTickers([]);
    }
  }, [formData.stock_ticker, stockTickers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTickerSelect = (ticker) => {
    setFormData((prevData) => ({
      ...prevData,
      stock_ticker: ticker,
    }));
    setFilteredTickers([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const editableFields = [
    "stock_ticker",
    "trade_exchange",
    "trade_entry_date",
    "quantity",
    "price_per_stock",
    "trade_total_price",
    "target_price",
    "trade_strategy",
  ];

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit Trade</h2>
        <form onSubmit={handleSubmit}>
          {editableFields.map((key) => (
            <div className="mb-4" key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {key.replace(/_/g, " ").toUpperCase()}
              </label>
              {key === "stock_ticker" ? (
                <div className="relative">
                  <input
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                  />
                  {filteredTickers.length > 0 && (
                    <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded-md shadow-lg max-h-48 overflow-y-auto">
                      {filteredTickers.map((ticker) => (
                        <li
                          key={ticker.ticker}
                          onClick={() => handleTickerSelect(ticker.ticker)}
                          className="px-3 py-2 cursor-pointer hover:bg-gray-200"
                        >
                          {ticker.ticker} - {ticker.company_name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <input
                  type={key === "trade_entry_date" ? "date" : "text"}
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              )}
            </div>
          ))}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-300 text-black rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTradeForm;
