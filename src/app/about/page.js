'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function About() {
  // Animation state for elements
  const [isVisible, setIsVisible] = useState({
    heading: false,
    story: false,
    team: false,
    values: false,
    tech: false
  });

  // Set elements to visible with delay for animation
  useEffect(() => {
    setIsVisible({ heading: true });

    const timeouts = [
      setTimeout(() => setIsVisible(prev => ({ ...prev, story: true })), 300),
      setTimeout(() => setIsVisible(prev => ({ ...prev, team: true })), 600),
      setTimeout(() => setIsVisible(prev => ({ ...prev, values: true })), 900),
      setTimeout(() => setIsVisible(prev => ({ ...prev, tech: true })), 1200)
    ];

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  // Team members data
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      bio: "With over 15 years of experience in software development and business management, Jane leads our company vision.",
      image: "/team-1.jpg"
    },
    {
      name: "John Smith",
      role: "CTO",
      bio: "John is an expert in cloud infrastructure and has led development at several prominent tech companies.",
      image: "/team-2.jpg"
    },
    {
      name: "Emily Wilson",
      role: "Lead Designer",
      bio: "Emily brings her artistic vision and UX expertise to create beautiful, functional designs for our clients.",
      image: "/team-3.jpg"
    },
    {
      name: "Michael Brown",
      role: "Lead Developer",
      bio: "Michael specializes in full-stack development with expertise in React, Node.js, and cloud services.",
      image: "/team-4.jpg"
    }
  ];

  // Core values data
  const coreValues = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We are committed to delivering exceptional quality in every project we undertake.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients to ensure their vision becomes reality.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
      )
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all our business dealings and client relationships.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>
      )
    }
  ];

  // Tech stack data
  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Python", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "GraphQL", category: "API" },
    { name: "Redux", category: "State Management" },
    { name: "TailwindCSS", category: "CSS" }
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* Page Header */}
      <section className="relative py-20 bg-gradient-to-r from-primary-indigo-light to-primary-blue-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>About Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-white" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>Learn more about our mission, our team, and what makes us different.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className={`py-20 bg-gray-900 transition-all duration-1000 transform ${isVisible.story ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary-green-light to-primary-teal-light bg-clip-text " style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Our Story</h2>
              <p className="text-gray-300 mb-6">
                Woorkloop is more than just a workspace—it's your smart partner in productivity, powered by the intelligence of AI.
                We’re building the future of work by combining clean design, collaborative tools, and AI-driven features that help you think faster, organize smarter, and execute with precision. From automating repetitive tasks to offering intelligent suggestions, Woorkloop adapts to the way you work and helps you do it better
              </p>
              <p className="text-gray-300 mb-6">
                Whether you're managing complex projects, brainstorming ideas, or collaborating across teams, Woorkloop uses artificial intelligence to streamline workflows, eliminate bottlenecks, and boost efficiency—so you can focus on what matters most: creating, building, and growing
                </p>
                <p className="text-gray-300">
                  oin the new era of work.
                  Welcome to Woorkloop—where AI meets productivity.

                </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="w-full h-80 bg-gray-800 rounded-lg shadow-lg relative overflow-hidden border border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-green-light to-primary-blue-light opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8)" }}>Est. 2018</h3>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-r from-primary-green-light to-primary-blue-light shadow-lg"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-r from-primary-blue-light to-primary-indigo-light shadow-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className={`py-20 bg-gray-800 transition-all duration-1000 transform ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 " style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="h-56 bg-gray-800 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-teal-light to-primary-blue-light opacity-30"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
                  <p className="text-primary-teal-light font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300">{member.bio}</p>
                  <div className="mt-6 flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-primary-teal-light transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-teal-light transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary-teal-light transition-colors duration-300">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className={`py-20 bg-gray-900 transition-all duration-1000 transform ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-green-light to-primary-blue-light bg-clip-text " style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 border border-gray-700">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-primary-blue-light to-primary-indigo-light flex items-center justify-center text-white">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Stack */}
      <section className={`py-20 bg-gray-800 transition-all duration-1000 transform ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-primary-blue-light to-primary-indigo-light bg-clip-text" style={{ textShadow: "0 0 20px rgba(0,0,0,0.7)", WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}>Technologies We Work With</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center border border-gray-700">
                <h3 className="text-lg font-bold mb-2 text-white">{tech.name}</h3>
                <p className="text-sm text-gray-300">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-green-light to-primary-blue-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6" style={{ textShadow: "0 0 30px rgba(0,0,0,0.7)" }}>Join Our Growing Team</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white">We're always looking for talented individuals to join our team. Check out our career opportunities or drop us a line.</p>
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105 duration-300 border border-gray-700">
            View Career Opportunities
          </button>
        </div>
      </section>
    </main>
  );
}

