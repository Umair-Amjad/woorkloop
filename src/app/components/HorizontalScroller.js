'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HorizontalScroller({ title, items }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    // Only run on the client side and when carousel ref is available
    if (typeof window !== 'undefined' && carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-20 overflow-hidden bg-gray-800" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="container mx-auto px-4 mb-12">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent mb-4" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>{title}</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-primary-green-dark to-primary-teal-light rounded-full"></div>
      </div>
      
      <motion.div ref={carousel} className="cursor-grab overflow-hidden" whileTap={{ cursor: "grabbing" }}>
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-8 px-8"
        >
          {items.map((item, index) => (
            <motion.div 
              key={index}
              className="min-w-[350px] sm:min-w-[450px] bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-teal-light"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-primary-blue-dark to-primary-indigo-dark rounded-xl flex items-center justify-center mb-6 overflow-hidden relative">
                {item.image ? (
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-4xl font-bold text-white">{item.title.charAt(0)}</div>
                )}
                <div className="absolute inset-0 bg-black opacity-40 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-primary-indigo-dark to-primary-indigo-light bg-clip-text text-transparent">{item.title}</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags && item.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm">{tag}</span>
                ))}
              </div>
              <a href={item.link || '#'} className="inline-flex items-center text-primary-green-light hover:text-primary-teal-light font-medium transition-colors duration-300">
                View Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto px-4 mt-10 flex justify-center">
        <div className="flex items-center text-gray-300">
          <svg className="w-5 h-5 mr-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          <span>Drag to explore more projects</span>
          <svg className="w-5 h-5 ml-2 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
