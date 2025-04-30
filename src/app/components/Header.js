'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800' 
          : 'py-6 bg-gray-900/70 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="relative z-10">
            <Link href="/" className="flex items-center">
              <div className="relative overflow-hidden">
                <span className="text-4xl font-extrabold bg-gradient-to-r from-primary-teal-light via-primary-blue-light to-primary-indigo-light bg-clip-text text-transparent animate-gradient" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
                  WORK<span className="relative inline-flex overflow-hidden text-primary-green-light" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.4)" }}>
                    <span className="animate-pulse">∞</span>
                  </span>LOOP
                </span>
              </div>
              <span className="ml-2 text-2xl font-light text-gradient gradient-green">Agency</span>
            </Link>
            <div className="mt-1 h-1 w-28 bg-gradient-to-r from-primary-green-dark to-primary-teal-light rounded-full"></div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-primary-green-light font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-primary-teal-light font-medium transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-primary-blue-light font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-primary-indigo-light font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-primary-deepblue-light font-medium transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-primary-green-dark to-primary-teal-light hover:from-primary-green-light hover:to-primary-teal-dark text-white py-2 px-6 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-10 h-8 flex items-center justify-center">
              <span 
                className={`block absolute h-0.5 w-7 bg-white transform transition duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45' : '-translate-y-1.5'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 bg-white transform transition duration-300 ease-in-out ${
                  menuOpen ? 'w-0' : 'w-7'
                }`}
              ></span>
              <span 
                className={`block absolute h-0.5 w-7 bg-white transform transition duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45' : 'translate-y-1.5'
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md shadow-lg py-4 px-4 transform transition-all duration-300 ease-in-out origin-top ${
            menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="text-white hover:text-primary-green-light py-2 font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-primary-teal-light py-2 font-medium transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-primary-blue-light py-2 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-primary-indigo-light py-2 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-primary-deepblue-light py-2 font-medium transition-colors">
              Contact
            </Link>
            <Link href="/contact" className="bg-gradient-to-r from-primary-green-dark to-primary-teal-light text-white py-3 px-6 rounded-full font-medium w-full text-center shadow-lg">
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
