
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">ATEX Engineering</h3>
            <p className="text-foreground/70 text-sm mb-6">
              Official exporter for OSNA Electronics, specializing in ATEX-certified industrial automation solutions for hazardous environments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-atex transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-atex transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-atex transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-atex transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Home</a>
              </li>
              <li>
                <a href="/#about" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">About Us</a>
              </li>
              <li>
                <a href="/#products" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Our Products</a>
              </li>
              <li>
                <a href="/#industries" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Industries</a>
              </li>
              <li>
                <a href="/#contact" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Signal Isolator Barriers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">NAMUR Proximity Switches</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Zener Barriers</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Explosion-Proof Enclosures</a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-atex text-sm transition-colors link-underline">Earth Relay Units</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-atex mr-3 flex-shrink-0" />
                <span className="text-foreground/70 text-sm">info@atex-engineering.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-atex mr-3 flex-shrink-0" />
                <span className="text-foreground/70 text-sm">+49 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-atex mr-3 flex-shrink-0" />
                <span className="text-foreground/70 text-sm">Industriestrasse 45, 21614 Hamburg, Germany</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} ATEX Engineering Systems. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-foreground/60 hover:text-atex text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-atex text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-foreground/60 hover:text-atex text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
