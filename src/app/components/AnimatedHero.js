'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBrowser, setIsBrowser] = useState(false);
  
  // Initialize browser detection
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  // Handle mouse movement only in the browser
  useEffect(() => {
    if (!isBrowser) return;
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isBrowser]);
  
  // Safe transform calculation
  const calculateTransform = (axis) => {
    if (!isBrowser) return 0;
    
    const viewportWidth = isBrowser ? window.innerWidth : 1;
    const viewportHeight = isBrowser ? window.innerHeight : 1;
    
    const value = axis === 'x' 
      ? mousePosition.x / viewportWidth - 0.5 
      : mousePosition.y / viewportHeight - 0.5;
    
    return value * 20; // Adjust intensity of movement
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark-section" style={{ backgroundColor: "#121212" }}>
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-primary-blue-dark to-primary-indigo-dark opacity-30 blur-3xl"
          animate={{ 
            x: [0, 100, 200, 100, 0],
            y: [0, 50, 100, 50, 0],
            scale: [1, 1.1, 1.2, 1.1, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ top: '20%', left: '15%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-primary-green-dark to-primary-green-light opacity-30 blur-3xl"
          animate={{ 
            x: [0, -100, -200, -100, 0],
            y: [0, 100, 200, 100, 0],
            scale: [1, 1.2, 1.4, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ top: '40%', right: '15%' }}
        />
        <motion.div 
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-primary-teal-dark to-primary-teal-light opacity-30 blur-3xl"
          animate={{ 
            x: [0, 50, 100, 50, 0],
            y: [0, -50, -100, -50, 0],
            scale: [1, 1.1, 1.2, 1.1, 1],
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ bottom: '20%', left: '25%' }}
        />
        <motion.div 
          className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-primary-deepblue-dark to-primary-deepblue-light opacity-30 blur-3xl"
          animate={{ 
            x: [0, -50, -100, -50, 0],
            y: [0, -100, -200, -100, 0],
            scale: [1, 1.2, 1.3, 1.2, 1],
          }}
          transition={{ 
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          style={{ bottom: '15%', right: '20%' }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      </div>

      {/* Hero content with text shadow for better visibility */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            style={{ 
              transform: `perspective(1000px) rotateX(${calculateTransform('y')}deg) rotateY(${calculateTransform('x')}deg)`
            }}
            transition={{ duration: 0.1 }}
          >
            <div className="relative">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>
                <span className="relative">
                  <span className="inline-block bg-gradient-to-r from-primary-teal-light via-primary-blue-light to-primary-indigo-light bg-clip-text text-transparent animate-gradient" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>
                    WORK<span className="animate-pulse text-primary-green-light" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.3)" }}>∞</span>LOOP
                  </span>
                  <span className="absolute inset-0 blur-sm bg-gradient-to-r from-primary-teal-light via-primary-blue-light to-primary-indigo-light bg-clip-text text-transparent animate-gradient opacity-70" style={{ transform: "scale(1.02)" }}>
                    WORK<span className="animate-pulse">∞</span>LOOP
                  </span>
                </span>
                <span className="block mt-2 text-gradient gradient-green text-4xl md:text-5xl lg:text-6xl font-light" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>Agency</span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-primary-green-dark to-primary-teal-light rounded-full mx-auto mb-8"></div>
            </div>
            
            <motion.p 
              className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
            >
              Innovative IT Solutions That Power Your Business for the Digital Age
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className="bg-gradient-to-r from-primary-green-light to-primary-teal-light text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform transition hover:scale-105 duration-300">
                Explore Our Work
              </button>
              <button className="bg-transparent border-2 border-primary-blue-light text-white font-bold py-4 px-10 rounded-full hover:bg-primary-blue-dark/20 transform transition hover:scale-105 duration-300 shadow-lg">
                View Our Portfolio
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scrolling indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0] 
        }}
        transition={{ 
          delay: 1.2,
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
