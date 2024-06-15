import React, { useEffect, useRef } from "react";

const TickerTapeWidget = ({ stocks }) => {
  const containerRef = useRef();
  const symbols = stocks.map((stock) => ({
    proName: `BSE:${stock.stock_ticker}`,
    title: stock.stock_ticker,
  }));
  //   console.log(stocks);

  // {trade_id: 15, stock_ticker: 'ADANIPORTS', trade_exchange: 'NSE', trade_entry_date: '2023-12-06', quantity: 20};

  useEffect(() => {
    if (containerRef.current) {
      // Clear previous content to ensure the widget re-renders
      containerRef.current.innerHTML = "";

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        // symbols: [
        //   {
        //     proName: "BITSTAMP:ETHUSD",
        //     title: "Ethereum",
        //   },
        //   {
        //     description: "",
        //     proName: "BSE:VBL",
        //   },
        // ],
        symbols: symbols,
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "adaptive",
        colorTheme: "light",
        locale: "en",
      });

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default TickerTapeWidget;
