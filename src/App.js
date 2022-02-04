import { useState, useEffect } from "react";
import "./App.css";
import _Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import About from "./components/About/About.js";
import Projects from "./components/Projects/Projects.js";
import Resume from "./components/Resume/Resume.js";
import ContactForm from "./components/ContactForm/ContactForm.js";
import Footer from "./components/Footer/Footer.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div id={load ? "preloader" : "preloader-none"}></div>
      <div>
        <_Navbar />
        <Home />
        <About />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
