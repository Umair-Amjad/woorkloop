'use client';

import { useState, useEffect } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

export default function ClientLayout({ children }) {
  const [pageLoaded, setPageLoaded] = useState(false);
  
  useEffect(() => {
    // Set a timeout to simulate loading and ensure CSS is fully applied
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {!pageLoaded && <Loader />}
      <Header />
      <main className="pt-24 bg-white">
        {children}
      </main>
      <Footer />
    </>
  );
}
