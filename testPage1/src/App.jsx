import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="background">
      <div className=" blur-bg">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
