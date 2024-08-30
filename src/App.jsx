import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";

const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default App;