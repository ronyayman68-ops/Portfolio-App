import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "min-h-screen bg-gradient-to-br from-[#0F0A1F] via-[#140D2A] to-[#1E1B4B]"
          : "min-h-screen bg-gradient-to-br from-[#fdf2f8] via-[#eef2ff] to-[#ecfeff]"
      }
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
