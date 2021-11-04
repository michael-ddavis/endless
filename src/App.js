import "./App.css";
import HowItWorks from "./components/HowItWorks";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  );
}

export default App;
