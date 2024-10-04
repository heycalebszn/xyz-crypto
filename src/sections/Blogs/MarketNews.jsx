import { useEffect } from "react";

const MarketNews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "all_symbols",
      isTransparent: false,
      displayMode: "regular",
      width: "500",
      height: "550",
      colorTheme: "dark",
      locale: "en",
    });
    document.getElementById("tradingview-widget")?.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview-widget"></div>
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
  );
};

export default MarketNews;
