// src/config/apiConfig.js

const API_BASE_URL = "http://localhost:8000";

const apiConfig = {
  STOCKS: `${API_BASE_URL}/stocks`,
  LOGIN: `${API_BASE_URL}/login`,
  ALL_STOCKS: `${API_BASE_URL}/stocks/all`,
  ALL_TICKERS: `${API_BASE_URL}/stocks/stock_tickers`,
  // Add more endpoints as needed
};

export default apiConfig;
