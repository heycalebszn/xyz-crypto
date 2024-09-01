import Footer from "./components/Footer";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import SupportedCurrencies from "./sections/SupportedCurrencies";

const App = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <SupportedCurrencies />
      <Features />
      <Reviews />
    </div>
  )
}

export default App;