import React, { useEffect, useRef } from "react";

const MyAnalysis = () => {
  const chartContainerRef = useRef(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/tv.js";
      script.async = true;
      script.onload = () => {
        new window.TradingView.widget({
          width: 980,
          height: 610,
          symbol: "NASDAQ:AAPL",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_abcdef",
        });
      };
      chartContainerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={chartContainerRef}>
      <div id="tradingview_abcdef"></div>
    </div>
  );
};

export default MyAnalysis;
