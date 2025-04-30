'use client';

import { useState, useEffect } from 'react';

export default function Portfolio() {
  // Animation state for elements
  const [isVisible, setIsVisible] = useState({
    heading: true,
    overview: false,
    projects: false,
    testimonials: true
  });

  // Set elements to visible with delay for animation
  useEffect(() => {    
    const timeouts = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, overview: true })), 300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, projects: true })), 600),
      // setTimeout(() => setIsVisible(prev => ({ ...prev, testimonials: true })), 900)
    ];
    
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  // Filter state
  const [activeFilter, setActiveFilter] = useState('all');

  // Project data
  const projects = [
    {
      title: "E-Commerce Platform",
      client: "FashionRetail Inc.",
      category: "web",
      description: "A comprehensive e-commerce solution with inventory management, payment processing, and customer analytics.",
      challenge: "Creating a scalable platform that could handle seasonal traffic spikes and integrate with multiple third-party services.",
      solution: "Implemented a microservices architecture with AWS infrastructure for automatic scaling and built custom APIs for seamless integration.",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe API"],
      results: ["40% increase in conversion rate", "60% reduction in page load time", "Successful handling of 200K+ concurrent users during sales events"],
      image: "/portfolio-1.jpg",
      gradient: "from-primary-green-dark to-primary-green-light"
    },
    {
      title: "Healthcare Management App",
      client: "MedConnect",
      category: "mobile",
      description: "A mobile application for patients to schedule appointments, access medical records, and communicate with healthcare providers.",
      challenge: "Ensuring HIPAA compliance while delivering a seamless user experience across iOS and Android platforms.",
      solution: "Developed a cross-platform solution using React Native with end-to-end encryption and secure authentication protocols.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
      results: ["Reduced appointment scheduling time by 70%", "97% patient satisfaction rate", "Adopted by 45+ healthcare facilities"],
      image: "/portfolio-2.jpg",
      gradient: "from-primary-teal-dark to-primary-teal-light"
    },
    {
      title: "Financial Dashboard",
      client: "InvestPro Financial",
      category: "web",
      description: "A real-time financial analytics dashboard with predictive modeling and data visualization.",
      challenge: "Processing and visualizing large amounts of financial data in real-time while ensuring accuracy and performance.",
      solution: "Implemented a robust data processing pipeline with WebSocket connections and optimized visualization components.",
      technologies: ["Next.js", "D3.js", "Python", "TensorFlow", "AWS Lambda"],
      results: ["85% reduction in decision-making time", "Real-time updates with <100ms latency", "Predictive models with 92% accuracy"],
      image: "/portfolio-3.jpg",
      gradient: "from-primary-blue-dark to-primary-blue-light"
    },
    {
      title: "Logistics Management System",
      client: "GlobalShip Logistics",
      category: "web",
      description: "An end-to-end logistics management platform for tracking shipments, managing inventory, and optimizing delivery routes.",
      challenge: "Integrating with multiple shipping providers and creating a system that could handle complex routing algorithms.",
      solution: "Developed a modular system with a robust API layer and implemented advanced route optimization using machine learning.",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Google Maps API", "Docker"],
      results: ["30% reduction in delivery times", "22% cost savings on fuel", "50% decrease in manual data entry"],
      image: "/portfolio-4.jpg",
      gradient: "from-primary-indigo-dark to-primary-indigo-light"
    },
    {
      title: "Smart Home Mobile App",
      client: "HomeTech Solutions",
      category: "mobile",
      description: "A mobile application for controlling smart home devices, setting automation rules, and monitoring energy usage.",
      challenge: "Creating a unified interface for diverse smart home devices with different communication protocols.",
      solution: "Built a flexible middleware layer to standardize device communication and implemented an intuitive interface with voice control.",
      technologies: ["Flutter", "Dart", "Firebase", "IoT protocols", "Voice recognition"],
      results: ["Supports 200+ smart home devices", "40% increase in user adoption", "20% energy savings for average users"],
      image: "/portfolio-5.jpg",
      gradient: "from-primary-deepblue-dark to-primary-deepblue-light"
    },
    {
      title: "AI-Powered Customer Service Chatbot",
      client: "ServiceFirst Corp",
      category: "ai",
      description: "An intelligent chatbot that handles customer inquiries, provides product recommendations, and escalates complex issues to human agents.",
      challenge: "Creating a natural language understanding system that could accurately interpret customer intent and provide helpful responses.",
      solution: "Implemented advanced NLP with custom training on company-specific data and integrated with existing CRM systems.",
      technologies: ["Python", "TensorFlow", "NLP", "AWS", "WebSocket"],
      results: ["75% reduction in support ticket volume", "90% customer satisfaction with bot interactions", "24/7 support coverage without increased staff"],
      image: "/portfolio-6.jpg",
      gradient: "from-primary-green-dark to-primary-blue-dark"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "The team at WorkLoopAgency delivered our e-commerce platform ahead of schedule and exceeded our expectations. The platform has been a game-changer for our business, significantly increasing our online sales and improving customer satisfaction.",
      author: "Jessica Thompson",
      position: "CMO, FashionRetail Inc.",
      image: "/testimonial-1.jpg"
    },
    {
      quote: "Their expertise in mobile development and healthcare compliance was invaluable. The app they built for us has transformed how our patients interact with our services and has set us apart from competitors.",
      author: "Dr. Robert Chen",
      position: "CEO, MedConnect",
      image: "/testimonial-2.jpg"
    },
    {
      quote: "The financial dashboard WorkLoopAgency created has become an essential tool for our analysts and clients. The real-time data processing and visualization capabilities have given us a significant competitive advantage.",
      author: "Michael Grant",
      position: "CTO, InvestPro Financial",
      image: "/testimonial-3.jpg"
    }
  ];

  // Filtered projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="w-full overflow-hidden">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-primary-blue-light to-primary-indigo-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto text-white" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>Discover how we've helped businesses transform their digital presence and achieve remarkable results</p>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-gray-900 fill-current">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg> */}
        {/* </div> */}
      </section>

      {/* Portfolio Overview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-green-light to-primary-teal-light bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>Featured Projects</h2>
            <p className="text-white mb-6 text-xl font-semibold" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
              Explore our case studies to see how we've helped businesses solve their technology challenges.
            </p>
            <p className="text-gray-300">
              We've partnered with clients across various industries to deliver digital solutions that drive real business results. Each project represents our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center mb-12 space-x-2">
            <button 
              className={`px-6 py-2 rounded-full mb-3 transition-all duration-300 ${activeFilter === 'all' ? 'bg-gradient-to-r from-primary-green-light to-primary-teal-light text-white shadow-lg' : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'}`}
              onClick={() => setActiveFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-6 py-2 rounded-full mb-3 transition-all duration-300 ${activeFilter === 'web' ? 'bg-gradient-to-r from-primary-green-light to-primary-teal-light text-white shadow-lg' : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'}`}
              onClick={() => setActiveFilter('web')}
            >
              Web Development
            </button>
            <button 
              className={`px-6 py-2 rounded-full mb-3 transition-all duration-300 ${activeFilter === 'mobile' ? 'bg-gradient-to-r from-primary-green-light to-primary-teal-light text-white shadow-lg' : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'}`}
              onClick={() => setActiveFilter('mobile')}
            >
              Mobile Apps
            </button>
            <button 
              className={`px-6 py-2 rounded-full mb-3 transition-all duration-300 ${activeFilter === 'ai' ? 'bg-gradient-to-r from-primary-green-light to-primary-teal-light text-white shadow-lg' : 'bg-gray-800 text-white hover:bg-gray-700 border border-gray-700'}`}
              onClick={() => setActiveFilter('ai')}
            >
              AI/ML
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={`py-20 bg-gray-900 transition-all duration-1000 transform ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
                <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-8 relative`}>
                  <div className="absolute inset-0 opacity-20 bg-pattern-dots"></div>
                  <h3 className="text-2xl font-bold text-white text-center relative z-10">{project.title}</h3>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block bg-gray-800 text-gray-300 rounded-full px-3 py-1 text-sm font-semibold mr-2">
                      {project.category === 'web' ? 'Web Development' : 
                       project.category === 'mobile' ? 'Mobile App' : 
                       project.category === 'ai' ? 'AI/ML' : 
                       'Other'}
                    </span>
                    <span className="inline-block bg-gray-800 text-gray-300 rounded-full px-3 py-1 text-sm font-semibold">
                      {project.client}
                    </span>
                  </div>
                  <p className="text-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap mb-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-full px-3 py-1 text-xs font-semibold mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-blue-dark to-primary-blue-light text-white font-medium py-2 rounded-lg hover:shadow-lg transition-all duration-300 border border-gray-700">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700 relative">
                <div className="absolute top-0 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-green-light to-primary-blue-light flex items-center justify-center text-white text-3xl font-bold" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>
                    "
                  </div>
                </div>
                <div className="pt-8">
                  <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-green-light to-primary-blue-light flex items-center justify-center text-white font-bold">
                      {testimonial.author[0]}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-white">{testimonial.author}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green-light to-primary-blue-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white">Let's work together to create a digital solution that meets your unique business needs.</p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-300 border border-gray-700">
            Schedule a Free Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
