import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Feedbacks from "./components/Feedbacks";
import Background from "./components/Background";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
        <Background />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
