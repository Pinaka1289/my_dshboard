import React, { useEffect, useRef, memo } from "react";
import html2canvas from "html2canvas";

function MyAnalysis({ symbol = "IOC" }) {
  const container = useRef();

  useEffect(() => {
    if (container.current) {
      // Clear previous content to ensure the widget re-renders
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

  const captureScreenshot = async () => {
    if (container.current) {
      // Adding a delay to ensure the widget loads fully
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const canvas = await html2canvas(container.current);
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = `tradingview-screenshot-${symbol}.png`;
      link.click();
    }
  };

  return (
    <div>
      <div className="tradingview-widget-container" ref={container}>
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
      <button
        onClick={captureScreenshot}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Capture Screenshot
      </button>
    </div>
  );
}

export default memo(MyAnalysis);
