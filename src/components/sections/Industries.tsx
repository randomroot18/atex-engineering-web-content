
import React from 'react';
import { cn } from '@/lib/utils';
import { DropletIcon, FlaskConical, Factory, Lightbulb, Flame, HardHat } from 'lucide-react';

const industries = [
  {
    id: 1,
    name: "Oil & Gas",
    description: "Safety solutions for upstream, midstream, and downstream operations in explosive environments.",
    icon: Flame
  },
  {
    id: 2,
    name: "Chemical & Petrochemical",
    description: "Explosion-proof equipment for handling flammable materials and hazardous processes.",
    icon: FlaskConical
  },
  {
    id: 3,
    name: "Manufacturing",
    description: "Industrial automation solutions ensuring safety in manufacturing plants with combustible dust.",
    icon: Factory
  },
  {
    id: 4,
    name: "Pharmaceutical",
    description: "Compliant safety equipment for sterile environments with potentially volatile compounds.",
    icon: DropletIcon
  },
  {
    id: 5,
    name: "Power & Energy",
    description: "Reliable equipment for power generation and distribution in hazardous locations.",
    icon: Lightbulb
  },
  {
    id: 6,
    name: "Mining",
    description: "Robust solutions for subterranean operations with methane and coal dust concerns.",
    icon: HardHat
  }
];

const IndustryCard = ({ industry, index }) => {
  const Icon = industry.icon;
  
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-xl p-6 bg-white border border-border hover-scale group",
        "opacity-0 animate-slide-up"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute top-0 right-0 h-24 w-24 -mr-8 -mt-8 bg-atex-light/20 rounded-full transition-transform duration-500 group-hover:scale-150"></div>
      
      <div className="relative">
        <div className="p-3 rounded-lg w-12 h-12 flex items-center justify-center bg-atex-light/50 mb-4">
          <Icon className="text-atex h-6 w-6" />
        </div>
        <h3 className="text-lg font-medium mb-2">{industry.name}</h3>
        <p className="text-foreground/70 text-sm">{industry.description}</p>
      </div>
    </div>
  );
};

const Industries = () => {
  return (
    <section id="industries" className="py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-atex mb-3">Industries We Serve</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Trusted by Industry Leaders for ATEX-Certified Safety Solutions
          </h3>
          <p className="text-foreground/70 mb-0">
            Our specialized solutions provide safety and reliability across
            diverse industrial environments where explosion hazards exist.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.id} industry={industry} index={index} />
          ))}
        </div>
        
        <div className="mt-16 p-6 rounded-xl bg-atex-light/20 border border-atex-light/30 opacity-0 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-medium mb-3">Looking for a custom solution?</h3>
              <p className="text-foreground/80 mb-0">
                Our engineering team can develop tailored ATEX-certified products
                to meet your specific industrial requirements and safety challenges.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-atex text-white rounded-md hover:bg-atex-dark transition-colors duration-300"
              >
                Discuss Your Requirements
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
