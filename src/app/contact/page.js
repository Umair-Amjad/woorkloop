'use client';

import { useState, useEffect } from 'react';

export default function Contact() {
  // Animation state for elements
  const [isVisible, setIsVisible] = useState({
    heading: false,
    contact: false,
    form: false,
    map: false
  });

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  // Set elements to visible with delay for animation
  useEffect(() => {
    setIsVisible({ heading: true });
    
    const timeouts = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, contact: true })), 300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, form: true })), 600),
      setTimeout(() => setIsVisible(prev => ({ ...prev, map: true })), 900)
    ];
    
    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        error: true,
        message: 'Please enter a valid email address.'
      });
      return;
    }
    
    // Simulate form submission success
    // In a real application, you would send this data to your backend
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message! We will get back to you soon.'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  // Contact info data
  const contactInfo = [
    {
      title: "Email Us",
      content: "info@workloopagency.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Call Us",
      content: "+1 (555) 123-4567",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      )
    },
    {
      title: "Our Office",
      content: "123 Tech Avenue, Silicon Valley, CA 94123",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      )
    },
    {
      title: "Business Hours",
      content: "Monday - Friday: 9AM - 6PM",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* Page Header */}
      <section className={`relative py-20 bg-gradient-to-r from-primary-green-dark to-primary-blue-dark text-white transition-all duration-1000 transform ${isVisible.heading ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ textShadow: "0 0 20px rgba(0,0,0,0.4)" }}>Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">Get in touch with our team to discuss your project or answer any questions.</p>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white fill-current">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,133.3C960,128,1056,96,1152,74.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div> */}
      </section>

      {/* Contact Info Section */}
      <section className={`py-20 bg-gray-900 transition-all duration-1000 transform ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-700">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-blue-dark to-primary-blue-light flex items-center justify-center text-white">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{info.title}</h3>
                <p className="text-gray-300">{info.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-16">
            {/* Contact Form */}
            <div className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible.form ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-primary-green-light to-primary-teal-light bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.4)", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Send Us a Message</h2>
              
              {formStatus.submitted && (
                <div className={`p-4 mb-8 rounded-lg ${formStatus.error ? 'bg-red-900/30 text-red-300 border border-red-700' : 'bg-green-900/30 text-green-300 border border-green-700'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal-light focus:border-transparent bg-gray-900 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Your Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal-light focus:border-transparent bg-gray-900 text-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal-light focus:border-transparent bg-gray-900 text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-teal-light focus:border-transparent resize-none bg-gray-900 text-white"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit" 
                    className="bg-gradient-to-r from-primary-green-light to-primary-teal-light text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Map */}
            <div className={`lg:w-1/2 transition-all duration-1000 transform ${isVisible.map ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-primary-blue-light to-primary-indigo-light bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.4)" }}>Our Location</h2>
              
              <div className="bg-gray-900 p-4 rounded-lg shadow-lg border border-gray-700">
                <div className="w-full h-96 bg-gray-800 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-blue-dark to-primary-blue-light opacity-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-xl font-bold text-white">Google Map would be embedded here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-green-dark to-primary-blue-dark bg-clip-text text-transparent" style={{ textShadow: "0 0 20px rgba(0,0,0,0.4)" }}>Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">What is your typical project timeline?</h3>
              <p className="text-gray-300">Our project timelines vary depending on complexity, but typically range from 2-12 weeks. We provide detailed timelines during the initial consultation.</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">How do you determine project pricing?</h3>
              <p className="text-gray-300">We offer fixed-price quotes based on project scope and requirements. For larger projects, we may use a milestone-based payment structure.</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Do you provide ongoing maintenance?</h3>
              <p className="text-gray-300">Yes, we offer various maintenance plans to ensure your website or application remains secure, up-to-date, and functions properly.</p>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Can you work with clients remotely?</h3>
              <p className="text-gray-300">Absolutely! We work with clients from around the world. We use modern collaboration tools and have established processes for effective remote work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-indigo-light to-primary-blue-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>Ready to Start Your Project?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300">Contact us today to schedule a free consultation and discover how we can help bring your vision to life.</p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-300 border border-gray-700">
            Contact Us Today
          </button>
        </div>
      </section>
    </main>
  );
}
