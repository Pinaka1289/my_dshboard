import React from "react";

const ResearchPortal = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Research Portal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          className="bg-gray-200 p-4 rounded cursor-pointer hover:bg-gray-300 flex items-center"
          onClick={() =>
            handleCardClick("https://www.tradingview.com/chart/wGAB9FS0/")
          }
        >
          <img
            src="https://s3.tradingview.com/branding/static2/img/tradingview-logo-social.png"
            alt="TradingView Logo"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">TradingView</h2>
            <p>View detailed charts and analysis on TradingView.</p>
          </div>
        </div>
        <div
          className="bg-gray-200 p-4 rounded cursor-pointer hover:bg-gray-300 flex items-center"
          onClick={() => handleCardClick("https://www.moneycontrol.com/")}
        >
          <img
            src="https://images.moneycontrol.com/images/mc_nav_new/moneycontrol_logo.jpg"
            alt="Moneycontrol Logo"
            className="w-12 h-12 mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">Moneycontrol</h2>
            <p>Access financial news and market updates on Moneycontrol.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPortal;
