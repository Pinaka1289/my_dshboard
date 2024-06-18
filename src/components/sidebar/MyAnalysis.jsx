import React, { useEffect, useRef, useState, memo } from "react";
import MyAnalysisForm from "../MyAnalysis/MyAnalysisForm";
import MyAnalysisChart from "../MyAnalysis/MyAnalysisChart";
import useFetch from "../../hooks/useFetch";
import apiConfig from "../../config/apiConfig";
import AnalysisFetcher from "../MyAnalysis/AnalysisFetcher"; // Import the AnalysisFetcher component

function MyAnalysis() {
  const [symbol, setSymbol] = useState("");
  const [duration, setDuration] = useState("1mo");
  const [interval, setInterval] = useState("1d");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fetchUrl, setFetchUrl] = useState(""); // State to store the constructed URL
  const container = useRef();

  const { data: stockTickersData } = useFetch(apiConfig.ALL_TICKERS);
  const { data: analysisData, loading, error, refetch } = useFetch(fetchUrl); // Use the useFetch hook with the constructed URL

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
    let url = `http://127.0.0.1:8000/analysis/${symbol}?interval=${interval}`;
    if (duration) {
      url += `&period=${duration}`;
    } else if (startDate && endDate) {
      url += `&start_date=${startDate}&end_date=${endDate}`;
    }
    url += `&unique=${Date.now()}`; // Append a unique timestamp to ensure a fresh fetch
    setFetchUrl(url); // Set the constructed URL
    refetch(); // Trigger the fetch
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <MyAnalysisChart symbol={symbol} container={container} />
      <MyAnalysisForm
        symbol={symbol}
        duration={duration}
        interval={interval}
        startDate={startDate}
        endDate={endDate}
        inputValue={inputValue}
        filteredTickers={filteredTickers}
        handleInputChange={handleInputChange}
        handleTickerSelect={handleTickerSelect}
        handleDurationChange={handleDurationChange}
        handleIntervalChange={handleIntervalChange}
        handleStartDateChange={handleStartDateChange}
        handleEndDateChange={handleEndDateChange}
        handleSubmit={handleSubmit}
        clearDates={clearDates}
      />
      {loading && <p>Loading data...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {fetchUrl && !loading && !error && analysisData && (
        <AnalysisFetcher data={analysisData} />
      )}{" "}
      {/* Pass the analysisData to AnalysisFetcher */}
    </div>
  );
}

export default memo(MyAnalysis);
