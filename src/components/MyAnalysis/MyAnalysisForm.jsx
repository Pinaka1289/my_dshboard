import React from "react";

function MyAnalysisForm({
  inputValue,
  filteredTickers,
  duration,
  interval,
  startDate,
  endDate,
  handleInputChange,
  handleTickerSelect,
  handleDurationChange,
  handleIntervalChange,
  handleStartDateChange,
  handleEndDateChange,
  handleSubmit,
  clearDates,
}) {
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
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
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
  );
}

export default MyAnalysisForm;
