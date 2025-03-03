
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Products from '@/components/sections/Products';
import About from '@/components/sections/About';
import Industries from '@/components/sections/Industries';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "ATEX Engineering Systems | ATEX-Certified Industrial Solutions";
    
    // Set meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Official exporter for OSNA Electronics, specializing in ATEX-certified industrial automation solutions for hazardous environments.');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Products />
        <Industries />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
