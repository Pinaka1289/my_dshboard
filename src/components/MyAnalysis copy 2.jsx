import React, { useEffect, useRef, useState, memo } from "react";
import html2canvas from "html2canvas";
import useFetch from "../hooks/useFetch";
import apiConfig from "../config/apiConfig";

function MyAnalysis() {
  const [symbol, setSymbol] = useState("");
  const [duration, setDuration] = useState("1d");
  const [interval, setInterval] = useState("1d");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const container = useRef();

  const {
    data: stockTickersData,
    loading: tickersLoading,
    error: tickersError,
  } = useFetch(apiConfig.ALL_TICKERS);
  const [filteredTickers, setFilteredTickers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (stockTickersData?.data?.length > 0 && !symbol) {
      const initialSymbol = stockTickersData.data[0].ticker;
      setSymbol(initialSymbol);
      setInputValue(initialSymbol);
    }
  }, [stockTickersData, symbol]);

  useEffect(() => {
    if (container.current) {
      container.current.innerHTML = "";

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "width": "100%",
          "height": "610",
          "symbol": "BSE:${symbol}",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "1",
          "locale": "en",
          "withdateranges": true,
          "range": "YTD",
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "details": true,
          "hotlist": false,
          "calendar": false,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "watchlist": [
            "BSE:VBL"
          ],
          "studies": [
            "STD;EMA",
            "STD;SMA",
            "STD;RSI"
          ],
          "support_host": "https://www.tradingview.com"
        }`;
      container.current.appendChild(script);
    }
  }, [symbol]);

  useEffect(() => {
    if (inputValue) {
      setFilteredTickers(
        stockTickersData?.data.filter(
          (item) =>
            item.ticker.toLowerCase().includes(inputValue.toLowerCase()) ||
            item.company_name.toLowerCase().includes(inputValue.toLowerCase())
        ) || []
      );
    } else {
      setFilteredTickers([]);
    }
  }, [inputValue, stockTickersData]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTickerSelect = (ticker) => {
    setSymbol(ticker);
    setInputValue(ticker);
    setFilteredTickers([]);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    setStartDate("");
    setEndDate("");
  };

  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  const handleStartDateChange = (e) => {
    const value = e.target.value;
    setStartDate(value);
    if (value) {
      setDuration("");
    }
  };

  const handleEndDateChange = (e) => {
    const value = e.target.value;
    setEndDate(value);
    if (value) {
      setDuration("");
    }
  };

  const clearDates = () => {
    setStartDate("");
    setEndDate("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Ticker:", symbol);
    console.log("Selected Duration:", duration);
    console.log("Selected Interval:", interval);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  const durationOptions = [
    "1d",
    "5d",
    "1mo",
    "3mo",
    "6mo",
    "1y",
    "2y",
    "5y",
    "10y",
    "ytd",
    "max",
  ];

  const intervalOptions = [
    "1m",
    "2m",
    "5m",
    "15m",
    "30m",
    "60m",
    "90m",
    "1h",
    "1d",
    "5d",
    "1wk",
    "1mo",
    "3mo",
  ];

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-CA");
  };

  const today = new Date().toLocaleDateString("en-CA");

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="tradingview-widget-container mb-6" ref={container}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          <a
            href="https://www.tradingview.com/"
            rel="noopener nofollow"
            target="_blank"
          >
            <span className="blue-text">Track all markets on TradingView</span>
          </a>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md"
      >
        <div className="grid grid-cols-6 gap-4 items-center mb-4">
          <label className="text-center font-medium">Ticker</label>
          <label className="text-center font-medium">Duration</label>
          <label className="text-center font-medium">Interval</label>
          <label className="text-center font-medium">Start Date</label>
          <label className="text-center font-medium">End Date</label>
          <div></div>
        </div>
        <div className="grid grid-cols-6 gap-4 items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="px-4 py-2 bg-gray-200 text-black rounded w-full text-center"
              placeholder="Search ticker..."
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
          <div className="flex-1">
            <select
              id="duration"
              value={duration}
              onChange={handleDurationChange}
              className="px-4 py-2 bg-gray-200 text-black rounded w-full text-center"
              disabled={startDate || endDate}
            >
              {durationOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <select
              id="interval"
              value={interval}
              onChange={handleIntervalChange}
              className="px-4 py-2 bg-gray-200 text-black rounded w-full text-center"
            >
              {intervalOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <input
              type="date"
              value={startDate ? formatDate(startDate) : ""}
              onChange={handleStartDateChange}
              className="px-4 py-2 bg-gray-200 text-black rounded w-full text-center"
              max={today}
            />
          </div>
          <div className="flex-1">
            <input
              type="date"
              value={endDate ? formatDate(endDate) : ""}
              onChange={handleEndDateChange}
              max={today}
              className="px-4 py-2 bg-gray-200 text-black rounded w-full text-center"
            />
          </div>
          <div className="flex justify-center space-x-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Start Analysis
            </button>
            <button
              type="button"
              onClick={clearDates}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Clear Dates
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default memo(MyAnalysis);
