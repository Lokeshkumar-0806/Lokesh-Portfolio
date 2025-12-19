import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);
  return (
    <motion.nav
      ref={navRef}
      className="bg-black fixed top-0 left-0 w-full text-white shadow-md z-50"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Lokesh.</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#Home" className="hover:text-green-400 transition-colors font-medium">Home</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors font-medium">Skills</a>
          <a href="#Experience" className="hover:text-yellow-400 transition-colors font-medium">Experience</a>
          <a href="#education" className="hover:text-pink-400 transition-colors font-medium">Education</a>
        </div>
        <button
          className="px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 rounded-full font-semibold ml-6"
          onClick={() => window.open("https://www.linkedin.com/in/lokesh-kumar-7546091a7/", "_blank")}
        >
          Connect me
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="md:hidden bg-[#18181b] border-t border-[#23233a] px-4 pb-4 flex flex-col gap-4"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <a href="#Home" className="hover:text-green-400 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#Experience" className="hover:text-yellow-400 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#education" className="hover:text-pink-400 transition-colors font-medium" onClick={() => setMenuOpen(false)}>Education</a>
            <button
              className="mt-2 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full font-semibold w-full"
              onClick={() => { setMenuOpen(false); window.open("https://www.linkedin.com/in/lokesh-kumar-7546091a7/", "_blank"); }}
            >
              Connect me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
