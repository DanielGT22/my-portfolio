import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark text-white">
      <Navigation />
      <div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
