import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { FaArrowUp } from "react-icons/fa";

function App() {
  //Sticky back to top btn on scroll
  const [stickyClass, setStickyClass] = React.useState("invisible");
  React.useEffect(() => {
    window.addEventListener("scroll", stickBtn);

    return () => {
      window.removeEventListener("scroll", stickBtn);
    };
  }, []);
  //Stick btn
  const stickBtn = () => {
    if (window !== undefined) {
      const windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass("visible")
        : setStickyClass("invisible");
    }
  };
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* back to top btn */}
      <a
        href="#home"
        className={`${stickyClass} fixed bottom-16 right-6 text-xl text-white bg-violet-500 font-bold shadow-xl w-12 h-12 rounded-full grid place-items-center animate-bounce ease-in-out duration-300 hover:bg-violet-400 z-50`}
      >
        <FaArrowUp />
      </a>
    </div>
  );
}

export default App;
