import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ScrollReveal from 'scrollreveal'; // Import ScrollReveal

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const appStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    transition: "background-color 1s ease",
    minHeight: "100vh",
  };

  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal('.reveal', {
      delay: 200,
      distance: '50px',
      duration: 1000,
      easing: 'ease-in-out',
      opacity: 0,
      scale: 0.85,
      reset: true,
    });

    ScrollReveal().reveal('.reveal-fade', {
      delay: 300,
      distance: '30px',
      duration: 1000,
      opacity: 0,
      easing: 'ease-in-out',
      reset: true,
    });

    ScrollReveal().reveal('.reveal-up', {
      delay: 200,
      distance: '30px',
      duration: 1000,
      opacity: 0,
      easing: 'ease-out',
      reset: true,
      origin: 'bottom',
    });

  }, []);

  return (
    <Router>
      <div style={appStyles}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <div className="reveal fade-in">
          <About />
        </div>

        <div className="reveal-up">
          <Services isDarkMode={isDarkMode} />
        </div>

        <div className="reveal-up">
          <Projects />
        </div>

        <div className="reveal-up">
          <Contact />
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
