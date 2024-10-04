import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CallToAction from "./sections/CallToAction";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import SupportedCurrencies from "./sections/SupportedCurrencies";
import Updates from "./sections/Updates";
import SignUpCTA from "./sections/SignUpCTA";
import Pricing from "./sections/Pricing";
import MarketHighlights from "./sections/MarketHighlights";
import StockFeatures from "./sections/StockFeatures";

const App = () => {
  return (
    <div className="flex flex-col">
    <Navbar />
      <Hero />
      <SupportedCurrencies />
      <Features />
      <Reviews />
      <Pricing />
      <Updates />
      <CallToAction />
      <SignUpCTA />
      <div className="flex flex-col gap-10">
      <MarketHighlights />
      <StockFeatures />
      </div>
      <Footer />
    </div>
  )
}

export default App;