'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export default function AnimatedServices() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const services = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Web Development",
      description: "We build responsive, scalable web applications using cutting-edge technologies that deliver exceptional user experiences.",
      gradient: "from-primary-green-dark to-primary-green-light",
      delay: 0
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that provide seamless experiences across all devices and platforms.",
      gradient: "from-primary-teal-dark to-primary-teal-light",
      delay: 0.2
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      ),
      title: "UI/UX Design",
      description: "Intuitive, engaging user interfaces that enhance user satisfaction and improve conversion rates.",
      gradient: "from-primary-blue-dark to-primary-blue-light",
      delay: 0.4
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      ),
      title: "Cloud & DevOps",
      description: "Leverage cloud technologies and implement efficient DevOps practices to accelerate development and deployment.",
      gradient: "from-primary-indigo-dark to-primary-indigo-light",
      delay: 0.6
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: "AI Solutions",
      description: "Intelligent solutions that automate processes, enhance customer interactions, and provide data-driven insights.",
      gradient: "from-primary-deepblue-dark to-primary-deepblue-light",
      delay: 0.8
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      title: "Maintenance & Support",
      description: "Comprehensive maintenance and support services to ensure your digital products remain secure, updated, and optimized.",
      gradient: "from-primary-green-dark to-primary-blue-dark",
      delay: 1.0
    }
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-24 bg-gray-900" ref={ref} style={{ backgroundColor: "#121212" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent mb-4" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
            Our Expertise
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-primary-green-dark to-primary-teal-light rounded-full mx-auto mb-6"
            initial={{ width: 0 }}
            animate={controls}
            variants={{
              visible: { width: 96, transition: { duration: 0.8, delay: 0.3 } },
              hidden: { width: 0 }
            }}
          ></motion.div>
          <motion.p 
            className="text-xl text-white max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { duration: 0.6, delay: 0.4 } },
              hidden: { opacity: 0 }
            }}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            We offer a comprehensive range of IT services to help businesses succeed in the digital era
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={service.delay}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-700"
            >
              <div className={`bg-gradient-to-r ${service.gradient} p-6 text-white`}>
                <div className="w-16 h-16 bg-black bg-opacity-30 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">{service.description}</p>
                <a 
                  href="/services" 
                  className={`inline-flex items-center font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  Learn More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
