import React, { forwardRef, useEffect, useState } from 'react';
import assets from '../../public/assets/assets';
import './Components.css';
import { motion } from 'framer-motion';

const Navbar = forwardRef((props, ref) => {
  const [isFixed, setIsFixed] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  let hideTimeout = null;

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > 10) {
      setIsFixed(true);

      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    } else {
      setIsFixed(false);
      setShowNavbar(true);
    }

    if (isFixed) {
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        setShowNavbar(false);
      }, 5000);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(hideTimeout);
    };
  }, [lastScrollTop, isFixed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className={`bg-white w-full p-3 transition-transform duration-300 ease-in-out ${
        isFixed ? 'fixed top-0 left-0 right-0 z-50 p-4' : 'static'
      } ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}
      ref={ref}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex space-x-3 items-center">
          <motion.img
            src={assets.fair_events_logo}
            alt="Fair & Events Logo"
            className="w-14"
          />
          <h1 className="hidden md:block font-outfit text-2xl text-black font-bold">
            Goodrich Fairs & Events
          </h1>
        </div>

        <div className="flex items-center gap-10">
          <div className="hidden md:flex">
            <ul className="flex space-x-7">
              <li
                className="text-[16px] font-poppins font-normal text-black cursor-pointer hover:translate-y-[-3px] hover:translate-x-[-1px] transition-transform duration-300 ease-in-out"
                onClick={() => scrollToSection('home')}
              >
                Home
              </li>
              <li
                className="text-[16px] font-poppins font-normal text-black cursor-pointer hover:translate-y-[-3px] hover:translate-x-[-1px] transition-transform duration-300 ease-in-out"
                onClick={() => scrollToSection('services')}
              >
                Services
              </li>
              <li
                className="text-[16px] font-poppins font-normal text-black cursor-pointer hover:translate-y-[-3px] hover:translate-x-[-1px] transition-transform duration-300 ease-in-out"
                onClick={() => scrollToSection('about')}
              >
                About us
              </li>
              <li
                className="text-[16px] font-poppins font-normal text-black cursor-pointer hover:translate-y-[-3px] hover:translate-x-[-1px] transition-transform duration-300 ease-in-out"
                onClick={() => scrollToSection('expertise')}
              >
                Expertise
              </li>
            </ul>
          </div>

          <div>
            <button>
              <span>Inquire Now</span>
              <svg
                fill="#ffffff"
                height="20px"
                width="20px"
                viewBox="0 0 330 330"
              >
                <path
                  d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default Navbar;
