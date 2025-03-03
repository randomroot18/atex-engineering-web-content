
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import CustomButton from '../ui/CustomButton';

const Hero = () => {
  return (
    <section className="pt-20 pb-12 md:pt-28 md:pb-20 overflow-hidden">
      <div className="container-custom relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[30%] -left-[10%] w-[500px] h-[500px] rounded-full bg-atex-light blur-[80px] opacity-30"></div>
          <div className="absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] rounded-full bg-atex-light blur-[100px] opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-atex-light text-atex-dark rounded-full text-sm font-medium opacity-0 animate-fade-in">
            Official Exporter for OSNA Electronics
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-text-focus">
            Reliable ATEX-Certified Industrial Solutions
          </h1>
          
          <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-0 animate-fade-in stagger-1">
            Delivering world-class explosion-proof automation products, designed for safety and efficiency in hazardous environments.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 animate-fade-in stagger-2">
            <CustomButton 
              variant="primary"
              size="lg"
              className="w-full sm:w-auto group"
            >
              Request a Quote
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </CustomButton>
            
            <CustomButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto group"
            >
              Download Catalog
              <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </CustomButton>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-slide-up stagger-3">
            <div className="p-4 bg-white rounded-lg subtle-shadow">
              <p className="font-medium text-foreground/70">ISO 9001</p>
              <p className="text-sm text-foreground/60">Certified</p>
            </div>
            <div className="p-4 bg-white rounded-lg subtle-shadow">
              <p className="font-medium text-foreground/70">ATEX</p>
              <p className="text-sm text-foreground/60">Compliant</p>
            </div>
            <div className="p-4 bg-white rounded-lg subtle-shadow">
              <p className="font-medium text-foreground/70">IECEx</p>
              <p className="text-sm text-foreground/60">Standards</p>
            </div>
            <div className="p-4 bg-white rounded-lg subtle-shadow">
              <p className="font-medium text-foreground/70">Global</p>
              <p className="text-sm text-foreground/60">Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
