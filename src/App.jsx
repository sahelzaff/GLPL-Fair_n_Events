
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Elevating from './Components/Elevating';
import Section_3 from './Components/Section_3';
import Speacialization from './Components/Speacialization';
import Why_choose from './Components/why_choose';
import Expertise from './Components/Expertise';
import Vision from './Components/Vision';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import { useSmoothScroll } from './Hooks/useSmoothScroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnimatePresence } from 'framer-motion';
import Loading from './Components/Loading'; 
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useSmoothScroll();

  return (
    <AnimatePresence>
      {!isLoaded ? (
        <Loading onComplete={() => setIsLoaded(true)} />
      ) : (
        <>
          <div className='padding'>
            <Navbar />
            <Hero />
            <Elevating />
          </div>
          <Section_3 />
          <Speacialization />
          <Why_choose />
          <Expertise />
          <Vision />
          <Footer />
          <Copyright />
        </>
      )}
    </AnimatePresence>
  );
};

export default App;
