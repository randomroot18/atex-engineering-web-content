
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Globe, Shield } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Safety & Compliance",
    description: "Our products meet rigorous ATEX and IECEx standards, ensuring the highest safety levels in explosive environments.",
    icon: Shield
  },
  {
    id: 2,
    title: "Engineering Excellence",
    description: "Leveraging OSNA Electronics' 30+ years of engineering expertise to deliver reliable and innovative solutions.",
    icon: CheckCircle
  },
  {
    id: 3,
    title: "Customer-Centric Approach",
    description: "Dedicated support teams ensuring customized solutions and responsive service for every client.",
    icon: Users
  },
  {
    id: 4,
    title: "Global Reach",
    description: "Exporting high-quality industrial automation solutions to Europe, Middle East, Asia and beyond.",
    icon: Globe
  }
];

const About = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const childElements = sectionRef.current.querySelectorAll('.feature-card');
    childElements.forEach((el) => observer.observe(el));
    
    return () => {
      childElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6 opacity-0 animate-fade-in">
              <h2 className="text-sm uppercase tracking-wider text-atex mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Innovative Solutions for Hazardous Environments
              </h3>
            </div>
            
            <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <p className="text-foreground/80">
                ATEX Engineering Systems was founded with the vision to provide cutting-edge industrial automation 
                solutions to global markets. As the official exporter for OSNA Electronics, we specialize in 
                ATEX-certified safety products, ensuring compliance and reliability for hazardous environments.
              </p>
              
              <p className="text-foreground/80">
                Our technical expertise and commitment to quality have made us a trusted partner for industries 
                where safety and reliability cannot be compromised. We combine German engineering precision with 
                global service capabilities to deliver solutions that meet the most demanding industrial requirements.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <div 
                  key={feature.id}
                  className="feature-card p-6 rounded-xl border border-border bg-white subtle-shadow opacity-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg w-10 h-10 flex items-center justify-center bg-atex-light mb-4">
                    <Icon className="text-atex h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-foreground/70 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="text-center">
            <p className="text-4xl font-bold text-atex mb-2">30+</p>
            <p className="text-sm text-foreground/70">Years Experience</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-atex mb-2">1000+</p>
            <p className="text-sm text-foreground/70">Products</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-atex mb-2">50+</p>
            <p className="text-sm text-foreground/70">Countries Served</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-atex mb-2">500+</p>
            <p className="text-sm text-foreground/70">Satisfied Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
