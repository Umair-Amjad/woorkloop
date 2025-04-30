'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [emailSubscribe, setEmailSubscribe] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailSubscribe) {
      setSubscribed(true);
      setEmailSubscribe('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-gray-900">
      {/* Wave Background */}
      <div className="absolute top-0 left-0 right-0 h-20 overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto">
          <path fill="#151515" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,176C384,160,480,96,576,96C672,96,768,160,864,165.3C960,171,1056,117,1152,101.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="relative bg-gray-900 pt-20">
        <div className="container mx-auto px-4">
          {/* Pre-Footer with Subscribe */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-16 w-full max-w-4xl">
            <div className="bg-gradient-to-r from-primary-indigo-dark to-primary-blue-dark rounded-xl shadow-2xl p-8 mx-4 border border-gray-700">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
                  <p className="text-white text-opacity-90">Subscribe to our newsletter for the latest tech insights and updates</p>
                </div>
                <form onSubmit={handleSubscribe} className="w-full md:w-auto">
                  <div className="flex">
                    <input
                      type="email"
                      value={emailSubscribe}
                      onChange={(e) => setEmailSubscribe(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-4 py-3 rounded-l-full focus:outline-none focus:ring-2 focus:ring-primary-green-light bg-gray-800 text-white border border-gray-700"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-primary-green-light to-primary-teal-light text-white font-medium px-6 py-3 rounded-r-full hover:shadow-lg transition-all duration-300"
                    >
                      {subscribed ? 'Subscribed!' : 'Subscribe'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
            <div>
              <div className="mb-6">
                <Link href="/" className="inline-block">
                  <span className="text-3xl font-extrabold bg-gradient-to-r from-primary-teal-light via-primary-blue-light to-primary-indigo-light bg-clip-text text-transparent" style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.1)" }}>
                    WORK<span className="text-primary-green-light">∞</span>LOOP
                  </span>
                  <span className="block text-xl font-light text-gradient gradient-green">Agency</span>
                </Link>
                <div className="mt-1 h-1 w-20 bg-gradient-to-r from-primary-green-dark to-primary-teal-light rounded-full"></div>
              </div>
              <p className="text-gray-300 mb-6">
                We create cutting-edge digital solutions that help businesses thrive in the modern world.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-blue-dark to-primary-blue-light flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-teal-dark to-primary-teal-light flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-indigo-dark to-primary-indigo-light flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-deepblue-dark to-primary-deepblue-light flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient gradient-blue">Services</h3>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-gray-300 hover:text-primary-blue-light transition-colors duration-300">Web Development</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-primary-blue-light transition-colors duration-300">Mobile App Development</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-primary-blue-light transition-colors duration-300">UI/UX Design</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-primary-blue-light transition-colors duration-300">Cloud & DevOps</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-primary-blue-light transition-colors duration-300">AI Solutions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient gradient-teal">Company</h3>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-gray-300 hover:text-primary-teal-light transition-colors duration-300">About Us</Link></li>
                <li><Link href="/portfolio" className="text-gray-300 hover:text-primary-teal-light transition-colors duration-300">Portfolio</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-primary-teal-light transition-colors duration-300">Team</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-primary-teal-light transition-colors duration-300">Careers</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-primary-teal-light transition-colors duration-300">Blog</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 text-gradient gradient-indigo">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-indigo-light mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-300">123 Tech Avenue, Silicon Valley, CA 94123</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-indigo-light mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-indigo-light mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-300">info@workloopagency.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} WorkLoopAgency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-primary-blue-light transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-primary-blue-light transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-primary-blue-light transition-colors duration-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
