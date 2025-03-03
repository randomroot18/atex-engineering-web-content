
import React, { useState } from 'react';
import { ArrowRight, Shield, Cpu, Zap, Box, Settings, Activity } from 'lucide-react';
import { cn } from '@/lib/utils';
import CustomButton from '../ui/CustomButton';

const products = [
  {
    id: 1,
    title: "Signal Isolator Barriers",
    description: "Advanced isolators that provide intrinsic safety in hazardous areas by limiting energy transfer.",
    icon: Shield,
    color: "bg-blue-50"
  },
  {
    id: 2,
    title: "NAMUR Proximity Switches",
    description: "Reliable sensing devices designed specifically for explosion-hazardous environments.",
    icon: Cpu,
    color: "bg-indigo-50"
  },
  {
    id: 3,
    title: "Zener Barriers",
    description: "Passive safety barriers using zener diodes to limit voltage and current to safe levels.",
    icon: Zap,
    color: "bg-purple-50"
  },
  {
    id: 4,
    title: "Explosion-Proof Enclosures",
    description: "Robust housings designed to contain an explosion without causing ignition in the surrounding area.",
    icon: Box,
    color: "bg-red-50"
  },
  {
    id: 5,
    title: "Earth Relay Units",
    description: "Specialized relays for monitoring and controlling ground connections in hazardous environments.",
    icon: Settings,
    color: "bg-amber-50"
  },
  {
    id: 6,
    title: "Static Discharge Devices",
    description: "Human body static discharge protection for personnel working in explosive atmosphere zones.",
    icon: Activity,
    color: "bg-green-50"
  }
];

const ProductCard = ({ product, index }) => {
  const Icon = product.icon;
  
  return (
    <div 
      className={cn(
        "p-6 rounded-xl hover-scale glass-card group transition-all duration-300",
        "opacity-0 animate-slide-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className={cn("p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4", product.color)}>
        <Icon className="text-foreground h-6 w-6" />
      </div>
      <h3 className="text-lg font-medium mb-2">{product.title}</h3>
      <p className="text-foreground/70 text-sm mb-4">{product.description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-atex text-sm group-hover:text-atex-dark transition-colors duration-300"
      >
        Learn more
        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

const Products = () => {
  return (
    <section id="products" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-atex mb-3">Our Products</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced ATEX-Certified Solutions for Industrial Safety & Automation
          </h3>
          <p className="text-foreground/70 mb-0">
            Explore our comprehensive range of explosion-proof equipment and safety solutions
            designed for the most demanding industrial environments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <CustomButton variant="primary">
            View All Products
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Products;
