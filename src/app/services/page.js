'use client';

import { useState, useEffect } from 'react';

export default function Services() {
  // Animation state for elements
  const [isVisible, setIsVisible] = useState({
    heading: false,
    overview: false,
    services: false,
    process: false,
    cta: false
  });

  // Set elements to visible with delay for animation
  useEffect(() => {
    setIsVisible({ heading: true });
    
    const timeouts = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, overview: true })), 300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, services: true })), 600),
      setTimeout(() => setIsVisible(prev => ({ ...prev, process: true })), 900),
      setTimeout(() => setIsVisible(prev => ({ ...prev, cta: true })), 1200)
    ];
    
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  // Services data
  const services = [
    {
      title: "Web Development",
      description: "We build custom, responsive websites and web applications that look great on any device and provide seamless user experience.",
      details: [
        "Custom web application development",
        "E-commerce solutions",
        "Progressive Web Apps (PWAs)",
        "Website redesign and migration",
        "Content Management Systems"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      gradient: "from-primary-green-light to-primary-green-dark"
    },
    {
      title: "Mobile App Development",
      description: "We create native and cross-platform mobile applications that provide exceptional user experiences and drive business growth.",
      details: [
        "iOS application development",
        "Android application development",
        "Cross-platform development (React Native, Flutter)",
        "App maintenance and support",
        "App Store optimization"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      gradient: "from-primary-teal-light to-primary-teal-dark"
    },
    {
      title: "UI/UX Design",
      description: "We design intuitive, engaging user interfaces that enhance user satisfaction and improve conversion rates.",
      details: [
        "User experience research",
        "Wireframing and prototyping",
        "Responsive design",
        "Brand identity design",
        "Usability testing"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      ),
      gradient: "from-primary-blue-light to-primary-blue-dark"
    },
    {
      title: "Cloud & DevOps",
      description: "We help businesses leverage cloud technologies and implement efficient DevOps practices to accelerate development and deployment.",
      details: [
        "Cloud infrastructure setup (AWS, GCP, Azure)",
        "CI/CD pipeline implementation",
        "Docker containerization",
        "Kubernetes orchestration",
        "Infrastructure as Code (IaC)"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
      ),
      gradient: "from-primary-indigo-light to-primary-indigo-dark"
    },
    {
      title: "Maintenance & Support",
      description: "We provide comprehensive maintenance and support services to ensure your digital products remain secure, updated, and optimized.",
      details: [
        "Regular updates and security patches",
        "Performance optimization",
        "24/7 technical support",
        "Bug fixes and issue resolution",
        "Backup and disaster recovery"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      ),
      gradient: "from-primary-deepblue-light to-primary-deepblue-dark"
    },
    {
      title: "AI Solutions & Chatbot Development",
      description: "We leverage the latest AI technologies to create intelligent solutions that automate processes and enhance customer interactions.",
      details: [
        "Custom chatbot development",
        "Natural Language Processing (NLP) solutions",
        "Recommendation systems",
        "Predictive analytics",
        "Machine learning integration"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      gradient: "from-primary-green-light to-primary-blue-light"
    }
  ];

  // Development process steps
  const processSteps = [
    {
      title: "Discovery",
      description: "We begin by understanding your business, goals, and requirements to create a clear project vision."
    },
    {
      title: "Planning",
      description: "We develop a detailed roadmap, define milestones, and select the right technologies for your project."
    },
    {
      title: "Design",
      description: "Our designers create wireframes and prototypes to visualize the user interface and experience."
    },
    {
      title: "Development",
      description: "Our developers bring the designs to life, writing clean, efficient code to build your solution."
    },
    {
      title: "Testing",
      description: "We thoroughly test every aspect of your project to ensure it works flawlessly across all devices."
    },
    {
      title: "Deployment",
      description: "We launch your project, ensuring a smooth transition to production with minimal downtime."
    },
    {
      title: "Support",
      description: "We provide ongoing maintenance and support to keep your project running optimally."
    }
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* Page Header */}
      <section className={`relative py-20 bg-gradient-to-r from-primary-blue-light to-primary-blue-dark text-white transition-all duration-1000 transform ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ textShadow: "0 0 20px rgba(0,0,0,0.4)" }}>Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">Comprehensive technology solutions tailored to your business needs</p>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white fill-current">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </section>

      {/* Services Overview */}
      <section className={`py-20 bg-gray-900 transition-all duration-1000 transform ${isVisible.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.4)" }}>Tailored Solutions for Modern Businesses</h2>
              <p className="text-gray-300 mb-6">
                At WorkLoopAgency, we understand that every business has unique challenges and requirements. That's why we offer a comprehensive range of services that can be customized to meet your specific needs. Our team of experts works closely with you to understand your business goals and create solutions that help you achieve them.
              </p>
              <p className="text-gray-300">
                Whether you need a new website, a mobile app, cloud infrastructure, or ongoing technical support, we have the expertise and experience to deliver high-quality solutions that drive your business forward. Our focus is on creating technology that not only looks great but also performs exceptionally well and delivers real results.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-green-dark to-primary-green-light flex items-center justify-center text-white mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Fast Delivery</h3>
                  <p className="text-gray-300">Quick turnaround without compromising quality</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-teal-dark to-primary-teal-light flex items-center justify-center text-white mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Secure Solutions</h3>
                  <p className="text-gray-300">Built with security as a core consideration</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-blue-dark to-primary-blue-light flex items-center justify-center text-white mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Quality Focus</h3>
                  <p className="text-gray-300">Premium solutions with attention to detail</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-primary-indigo-dark to-primary-indigo-light flex items-center justify-center text-white mb-4">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Dedicated Support</h3>
                  <p className="text-gray-300">Responsive team ready to assist you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className={`py-20 bg-gray-800 transition-all duration-1000 transform ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-teal-light to-primary-blue-light bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.4)" }}>What We Offer</h2>
          
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-700`}>
                <div className={`md:w-2/5 p-10 md:p-16 bg-gradient-to-r ${service.gradient} text-white flex flex-col justify-center h-full`}>
                  <div className="mb-6 w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-lg opacity-90">{service.description}</p>
                  <button className="mt-8 bg-white text-gray-800 font-bold py-3 px-6 rounded-full inline-block self-start hover:bg-opacity-90 transition-all duration-300">
                    Get a Quote
                  </button>
                </div>
                <div className="md:w-3/5 p-8 md:p-16">
                  <h4 className="text-xl font-bold mb-6">What's Included:</h4>
                  <ul className="space-y-4">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`w-6 h-6 mr-3 text-gradient-to-r ${service.gradient} bg-clip-text`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "2px rgba(255,255,255,0.15)" }}>Our Development Process</h2>
          
          <div className="relative">
            {/* Process Steps */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-primary-green-light to-primary-blue-light rounded"></div>
            
            <div className="space-y-20">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'}`}>
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg inline-block border border-gray-700">
                      <h3 className="text-2xl font-bold mb-3 text-white">{index + 1}. {step.title}</h3>
                      <p className="text-gray-300">{step.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 justify-center relative">
                    <div className="absolute w-8 h-8 bg-gray-800 rounded-full border-4 border-primary-blue-light flex items-center justify-center">
                      <span className="text-primary-blue-light font-bold">{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-gradient-to-r from-primary-green-light to-primary-blue-light text-white transition-all duration-1000 transform ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">Get in touch with our team to schedule a free consultation and learn how we can help you achieve your business goals.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-300 border border-gray-700">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
