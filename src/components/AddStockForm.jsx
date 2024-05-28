import React, { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import apiConfig from "../config/apiConfig"; // Import the configuration
import AddStockTickerInput from "./AddStockTickerInput";
import AddStockFormInputs from "./AddStockFormInputs";
import AddStockFormButtons from "./AddStockFormButtons";

const AddStockForm = ({ onClose, onStockAdded }) => {
  const [formData, setFormData] = useState({
    stock_ticker: "",
    trade_exchange: "NSE", // Default exchange
    trade_entry_date: "",
    quantity: 0,
    price_per_stock: 0,
    trade_total_price: 0,
    target_price: 0,
    trade_strategy: "",
  });

  const {
    data: stockTickersData,
    loading: tickersLoading,
    error: tickersError,
  } = useFetch(apiConfig.ALL_TICKERS);

  const [filteredTickers, setFilteredTickers] = useState([]);

  useEffect(() => {
    if (formData.stock_ticker) {
      setFilteredTickers(
        stockTickersData?.data.filter(
          (item) =>
            item.ticker
              .toLowerCase()
              .includes(formData.stock_ticker.toLowerCase()) ||
            item.company_name
              .toLowerCase()
              .includes(formData.stock_ticker.toLowerCase())
        ) || []
      );
    } else {
      setFilteredTickers([]);
    }
  }, [formData.stock_ticker, stockTickersData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      [
        "quantity",
        "price_per_stock",
        "trade_total_price",
        "target_price",
      ].includes(name)
    ) {
      if (value === "" || /^\d*\.?\d*$/.test(value)) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleTickerSelect = (ticker) => {
    setFormData((prevData) => ({
      ...prevData,
      stock_ticker: ticker,
    }));
    setFilteredTickers([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(apiConfig.STOCKS, formData, config);

      if (response.status === 201) {
        onStockAdded();
        onClose();
      } else {
        console.error("Error adding stock:", response.data);
      }
    } catch (error) {
      console.error("Error adding stock:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Add New Stock</h2>
        <form onSubmit={handleSubmit}>
          <AddStockTickerInput
            stockTicker={formData.stock_ticker}
            onChange={handleChange}
            filteredTickers={filteredTickers}
            onTickerSelect={handleTickerSelect}
          />
          <AddStockFormInputs formData={formData} onChange={handleChange} />
          <AddStockFormButtons onClose={onClose} />
        </form>
      </div>
    </div>
  );
};

export default AddStockForm;
