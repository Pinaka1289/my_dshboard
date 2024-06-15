// src/config/apiConfig.js

const API_BASE_URL = "http://localhost:8000";

const apiConfig = {
  STOCKS: `${API_BASE_URL}/stocks`,
  LOGIN: `${API_BASE_URL}/login`,
  SIGN_UP: `${API_BASE_URL}/signup`,
  ALL_STOCKS: `${API_BASE_URL}/stocks/all`,
  ALL_TICKERS: `${API_BASE_URL}/stocks/stock_tickers`,
  MAIN_INDICES: `${API_BASE_URL}/market_movers/main_indices`,
  HOLIDAY_CALENDAR: `${API_BASE_URL}/market_movers/holiday_calendar`,
  // Add more endpoints as needed
};

export default apiConfig;
