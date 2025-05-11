'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import dynamic from 'next/dynamic';

// Dynamically import components that use browser APIs with SSR disabled
const AnimatedHero = dynamic(() => import('./components/AnimatedHero'), { ssr: false });
const AnimatedServices = dynamic(() => import('./components/AnimatedServices'), { ssr: false });
const HorizontalScroller = dynamic(() => import('./components/HorizontalScroller'), { ssr: false });

export default function Home() {
  // Animation controls
  const controls = useAnimation();
  const statsRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const statsInView = useInView(statsRef, { once: false, amount: 0.3 });
  const processInView = useInView(processRef, { once: false, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsRef, { once: false, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: false, amount: 0.3 });
  
  // Update animations when elements are in view
  useEffect(() => {
    if (statsInView) controls.start('statsVisible');
    if (processInView) controls.start('processVisible');
    if (testimonialsInView) controls.start('testimonialsVisible');
    if (ctaInView) controls.start('ctaVisible');
  }, [controls, statsInView, processInView, testimonialsInView, ctaInView]);
  
  // Project data for horizontal scroller
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A comprehensive online shopping platform with integrated inventory and payment management",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/portfolio"
    },
    {
      title: "Healthcare App",
      description: "Mobile application for patients to schedule appointments and access medical records",
      tags: ["React Native", "Firebase", "Redux"],
      link: "/portfolio"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time data visualization platform for financial metrics with predictive analytics",
      tags: ["Next.js", "D3.js", "AWS"],
      link: "/portfolio"
    },
    {
      title: "Logistics Management System",
      description: "End-to-end platform for tracking shipments and optimizing delivery routes",
      tags: ["Angular", "Node.js", "Google Maps API"],
      link: "/portfolio"
    },
    {
      title: "Smart Home App",
      description: "Control smart home devices and monitor energy usage from your mobile device",
      tags: ["Flutter", "IoT", "Firebase"],
      link: "/portfolio"
    },
    {
      title: "AI Customer Service Bot",
      description: "Intelligent chatbot that handles customer inquiries and provides recommendations",
      tags: ["Python", "TensorFlow", "NLP"],
      link: "/portfolio"
    }
  ];
  
  // Stats counters with animation
  const stats = [
    { value: 100, label: "Projects Completed", symbol: "+" },
    { value: 85, label: "Satisfied Clients", symbol: "%" },
    { value: 12, label: "Industries Served", symbol: "+" },
    { value: 24, label: "Awards Won", symbol: "+" }
  ];
  
  // State for count animation
  const [countState, setCountState] = useState({
    projects: 0,
    clients: 0,
    industries: 0,
    awards: 0
  });
  
  // Update counter animation when stats are in view
  useEffect(() => {
    if (statsInView) {
      const interval = setInterval(() => {
        setCountState(prev => {
          const newState = { ...prev };
          
          // Increment projects if not at target
          if (newState.projects < stats[0].value) {
            newState.projects = Math.min(stats[0].value, newState.projects + Math.ceil(stats[0].value / 30));
          }
          
          // Increment clients if not at target
          if (newState.clients < stats[1].value) {
            newState.clients = Math.min(stats[1].value, newState.clients + Math.ceil(stats[1].value / 30));
          }
          
          // Increment industries if not at target
          if (newState.industries < stats[2].value) {
            newState.industries = Math.min(stats[2].value, newState.industries + Math.ceil(stats[2].value / 30));
          }
          
          // Increment awards if not at target
          if (newState.awards < stats[3].value) {
            newState.awards = Math.min(stats[3].value, newState.awards + Math.ceil(stats[3].value / 30));
          }
          
          // If all counters are at targets, clear interval
          if (
            newState.projects === stats[0].value &&
            newState.clients === stats[1].value &&
            newState.industries === stats[2].value &&
            newState.awards === stats[3].value
          ) {
            clearInterval(interval);
          }
          
          return newState;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [statsInView, stats]);
  
  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and requirements.",
      gradient: "from-primary-green-light to-primary-blue-light"
    },
    {
      number: "02",
      title: "Planning",
      description: "We develop a detailed roadmap and select the right technologies.",
      gradient: "from-primary-teal-light to-primary-blue-light"
    },
    {
      number: "03",
      title: "Design",
      description: "Our designers create wireframes and prototypes for your solution.",
      gradient: "from-primary-blue-light to-primary-indigo-light"
    },
    {
      number: "04",
      title: "Development",
      description: "Our developers bring the designs to life with clean, efficient code.",
      gradient: "from-primary-indigo-light to-primary-deepblue-light"
    },
    {
      number: "05",
      title: "Testing",
      description: "We thoroughly test every aspect to ensure quality and performance.",
      gradient: "from-primary-deepblue-light to-primary-green-light"
    },
    {
      number: "06",
      title: "Deployment",
      description: "We launch your project with a smooth transition to production.",
      gradient: "from-primary-green-light to-primary-blue-light"
    }
  ];
  
  // Testimonials data
  const testimonials = [
    {
      quote: "WorkLoopAgency transformed our business with a custom web application. Their team exceeded our expectations at every stage.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      gradient: "from-primary-green-dark to-primary-green-light",
      delay: 0
    },
    {
      quote: "Their expertise in mobile development was invaluable. The app they built has transformed how our customers interact with our services.",
      author: "David Chen",
      position: "CTO, MobileFirst Solutions",
      gradient: "from-primary-teal-dark to-primary-teal-light",
      delay: 0.2
    },
    {
      quote: "Their DevOps expertise revolutionized our development process. Deployment times were reduced by 70%, and our team is much more productive.",
      author: "Maria Rodriguez",
      position: "VP Engineering, CloudScale",
      gradient: "from-primary-blue-dark to-primary-blue-light",
      delay: 0.4
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <AnimatedHero />
      
      {/* Stats Counter Section */}
      <section ref={statsRef} className="py-20 bg-gray-900 relative overflow-hidden" style={{ backgroundColor: "#151515" }}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-green-dark to-primary-blue-dark"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue-dark to-primary-indigo-dark"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-center text-3xl font-bold bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent mb-12" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Our Impact by the Numbers
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-5xl font-bold mb-2">
                <span className="text-primary-green-light">{countState.projects}</span>
                <span className="text-primary-teal-light">+</span>
              </div>
              <p className="text-gray-300">{stats[0].label}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-5xl font-bold mb-2">
                <span className="text-primary-teal-light">{countState.clients}</span>
                <span className="text-primary-blue-light">%</span>
              </div>
              <p className="text-gray-300">{stats[1].label}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-5xl font-bold mb-2">
                <span className="text-primary-blue-light">{countState.industries}</span>
                <span className="text-primary-indigo-light">+</span>
              </div>
              <p className="text-gray-300">{stats[2].label}</p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-5xl font-bold mb-2">
                <span className="text-primary-indigo-light">{countState.awards}</span>
                <span className="text-primary-deepblue-light">+</span>
              </div>
              <p className="text-gray-300">{stats[3].label}</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <AnimatedServices />
      
      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent mb-4" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
              Our Development Process
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary-green-light to-primary-blue-light rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
              We follow a streamlined process to ensure your project is delivered on time and exceeds expectations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700 overflow-hidden group"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary-green-light to-primary-blue-light rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="mb-4 text-6xl font-bold bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent opacity-80">{step.number}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Showcase */}
      <HorizontalScroller title="Featured Projects" items={projects} />
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent mb-4" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>
              What Our Clients Say
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary-green-light to-primary-blue-light rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
              Don't just take our word for it - hear what our clients have to say
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-gray-900 rounded-xl shadow-lg p-8 border border-gray-700 h-full"
              >
                <div className={`absolute -top-5 left-10 w-10 h-10 rounded-full bg-gradient-to-r from-primary-green-light to-primary-blue-light flex items-center justify-center text-white`} style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <div className="pt-4">
                  <p className="text-white italic mb-6">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-r from-primary-green-light to-primary-blue-light mr-4 flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white">{testimonial.author}</h4>
                      <p className="text-gray-300">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-primary-green-light to-primary-blue-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white">Let's work together to create a solution that transforms your business. Our team is ready to help.</p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-300 border border-gray-700">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
