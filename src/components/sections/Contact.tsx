
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import CustomButton from '../ui/CustomButton';
import { cn } from '@/lib/utils';
import { useToast } from '@/components/ui/use-toast';

// Update the component props to include the style prop
const ContactCard = ({ icon: Icon, title, content, className, style }) => {
  return (
    <div className={cn("p-6 rounded-xl bg-white subtle-shadow flex items-start space-x-4", className)} style={style}>
      <div className="p-2 rounded-lg bg-atex-light flex-shrink-0">
        <Icon className="h-5 w-5 text-atex" />
      </div>
      <div>
        <h3 className="text-base font-medium mb-1">{title}</h3>
        <p className="text-sm text-foreground/70">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    productInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your message. We'll respond to you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        productInterest: '',
        message: ''
      });
    }, 1000);
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-wider text-atex mb-3">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Get in Touch with Our Experts
          </h3>
          <p className="text-foreground/70 mb-0">
            Have questions about our ATEX-certified products or need a customized solution?
            Our team is ready to assist you.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <ContactCard 
              icon={Mail} 
              title="Email Us" 
              content="info@atex-engineering.com"
              className="opacity-0 animate-fade-in"
            />
            <ContactCard 
              icon={Phone} 
              title="Call Us" 
              content="+49 123 456 7890"
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '100ms' }}
            />
            <ContactCard 
              icon={MapPin} 
              title="Visit Us" 
              content="Industriestrasse 45, 21614 Hamburg, Germany"
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            />
            
            <div className="p-6 rounded-xl bg-atex-light/30 opacity-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-base font-medium mb-3">Trusted Globally</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Our ATEX-certified products are trusted by industry leaders across Europe, 
                Middle East, and Asia for their reliability and compliance with international standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-white/70 px-2 py-1 rounded-full">Oil & Gas</span>
                <span className="text-xs bg-white/70 px-2 py-1 rounded-full">Petrochemical</span>
                <span className="text-xs bg-white/70 px-2 py-1 rounded-full">Manufacturing</span>
                <span className="text-xs bg-white/70 px-2 py-1 rounded-full">Pharmaceutical</span>
                <span className="text-xs bg-white/70 px-2 py-1 rounded-full">Power</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-xl bg-white subtle-shadow border border-border opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-medium mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border px-4 py-2 text-foreground focus:border-atex focus:outline-none focus:ring-1 focus:ring-atex/30 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground/80 mb-1">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border px-4 py-2 text-foreground focus:border-atex focus:outline-none focus:ring-1 focus:ring-atex/30 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border px-4 py-2 text-foreground focus:border-atex focus:outline-none focus:ring-1 focus:ring-atex/30 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="productInterest" className="block text-sm font-medium text-foreground/80 mb-1">
                  Product Interest
                </label>
                <select
                  id="productInterest"
                  name="productInterest"
                  value={formData.productInterest}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border px-4 py-2 text-foreground focus:border-atex focus:outline-none focus:ring-1 focus:ring-atex/30 transition-colors"
                >
                  <option value="">Select a product category</option>
                  <option value="signal-isolators">Signal Isolator Barriers</option>
                  <option value="proximity-switches">NAMUR Proximity Switches</option>
                  <option value="zener-barriers">Zener Barriers</option>
                  <option value="enclosures">Explosion-Proof Enclosures</option>
                  <option value="relay-units">Earth Relay Units</option>
                  <option value="static-discharge">Static Discharge Devices</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-border px-4 py-2 text-foreground focus:border-atex focus:outline-none focus:ring-1 focus:ring-atex/30 transition-colors"
                />
              </div>
              
              <div>
                <CustomButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </CustomButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
