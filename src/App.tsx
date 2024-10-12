import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import About from "./About";
import "./App.css";
import Hero from "./Hero";
import Career from "./Career";
import Showcase from "./Showcase";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero />
      <About />
      <Career />
      <Showcase />
    </>
  );
}

export default App;
