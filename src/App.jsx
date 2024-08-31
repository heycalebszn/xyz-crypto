import Navbar from "./components/Navbar";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import SupportedCurrencies from "./sections/SupportedCurrencies";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <SupportedCurrencies />
      <Features />
    </div>
  )
}

export default App;