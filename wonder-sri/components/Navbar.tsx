"use client";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track the state of the mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-500 z-50">
      {/* Container for Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#3785f3] rounded-full flex items-center justify-center">
                <img src="./Logo.png" alt="WonderSri" className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-[#fbfbfb] ml-2">WonderSri</h3>
            </div>
          </div>
     
          </motion.div>
        {/* Navigation Links (Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
        <div className="hidden sm:flex gap-6 items-center">
          <a href="#home" className="text-white hover:text-yellow-400 transition-colors text-bold">
            Home
          </a>
          <a href="#about" className="text-white hover:text-yellow-400 transition-colors text-bold">
            About
          </a>
          <a href="#services" className="text-white hover:text-yellow-400 transition-colors text-bold">
            Services
          </a>
          <a href="#contact" className="text-white hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </div>
        
     
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button className="text-white text-2xl focus:outline-none" onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-blue-800 py-4 px-6">
          <a href="#home" className="block text-white hover:text-yellow-400 py-2 transition-colors">
            Home
          </a>
          <a href="#about" className="block text-white hover:text-yellow-400 py-2 transition-colors">
            About
          </a>
          <a href="#services" className="block text-white hover:text-yellow-400 py-2 transition-colors">
            Services
          </a>
          <a href="#contact" className="block text-white hover:text-yellow-400 py-2 transition-colors">
            Contact
          </a>
        </div>
      )}
    
    </nav>
  );
};

export default Navbar;
