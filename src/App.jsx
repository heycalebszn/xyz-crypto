import Footer from "./components/Footer";
import CallToAction from "./sections/CallToAction";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import SupportedCurrencies from "./sections/SupportedCurrencies";
import Updates from "./sections/Updates";
import SignUpCTA from "./sections/SignUpCTA";

const App = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <SupportedCurrencies />
      <Features />
      <Reviews />
      <Updates />
      <CallToAction />
      <SignUpCTA />
      <Footer />
    </div>
  )
}

export default App;