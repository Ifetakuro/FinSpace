import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Partners from "./components/Partners/index.js";
import LandingPage from "./containers/LandingPage/index.js";
import Service from "./containers/Service/index.js";
import Testimonials from "./containers/Testimonials/index.js";
import { animateScroll as scroll } from "react-scroll";
import arrow from "../src/assets/images/top.png";
import Contact from "./containers/Contact/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    setShowScrollButton(window.scrollY > 100);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <LandingPage />
        <Partners />
        <Service />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      {showScrollButton && (
        <span className="scroll-to-top" onClick={scrollToTop}>
          <img src={arrow} alt="arrow" />
        </span>
      )}
    </div>
  );
}

export default App;
