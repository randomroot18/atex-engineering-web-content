
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomButton from "@/components/ui/CustomButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container-custom text-center max-w-2xl opacity-0 animate-fade-in">
          <h1 className="text-6xl md:text-9xl font-bold text-atex mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6">Page Not Found</h2>
          <p className="text-foreground/70 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <CustomButton 
            variant="primary"
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            Return to Home
          </CustomButton>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
