import React, { useEffect, useRef, useMemo } from "react";

const StockFeatures = () => {
  const containerRef = useRef(null);

  const widgetConfig = useMemo(() => ({
    width: "100%",
    height: 550,
    defaultColumn: "overview",
    screener_type: "crypto_mkt",
    displayCurrency: "USD",
    colorTheme: "dark",
    locale: "en",
  }), []);

  useEffect(() => {
    // Check if the widget is already initialized to prevent duplicates
    if (containerRef.current && containerRef.current.childNodes.length === 0) {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
      script.async = true;
      script.innerHTML = JSON.stringify(widgetConfig);

      containerRef.current.appendChild(script);
    }
  }, [widgetConfig]);

  return (
    <div className="tradingview-widget-container w-full mt-[50px] px-[50px]">
      <h1 className="text-[35px] font-bold pb-[10px]">Stock Features</h1>
      <div ref={containerRef} className="m-auto"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text"></span>
        </a>
      </div>
    </div>
  );
};

export default StockFeatures;
