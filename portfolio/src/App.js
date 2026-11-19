import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [lightMode] = useState(true);

  return (
    <div
      className={
        lightMode
          ? "bg-[#0b0d1f] text-white min-h-screen selection:bg-pink-500 selection:text-white"
          : "bg-[#f8f7ff] text-[#1e1b4b] min-h-screen"
      }
    >
      <Navbar lightMode={lightMode} />
      <Hero lightMode={lightMode} />
      <About lightMode={lightMode} />
      <Skills lightMode={lightMode} />
      <Projects lightMode={lightMode} />
      <Contact lightMode={lightMode} />
      <Footer lightMode={lightMode} />
    </div>
  );
}
