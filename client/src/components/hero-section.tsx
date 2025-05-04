import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LockIcon, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Apply parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[hsla(var(--primary-light)/0.1)] to-[hsla(var(--secondary-light)/0.2)] overflow-hidden"
    >
      <div 
        ref={parallaxRef} 
        className="absolute inset-0 -z-10 opacity-20"
      >
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center mb-3 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full">
            <LockIcon className="h-4 w-4 text-[hsl(var(--primary))] mr-2" />
            <span className="text-sm font-medium text-[hsl(var(--neutral-dark))]">100% Confidential</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-[hsl(var(--neutral-dark))]">
            Speak Freely – <span className="text-[hsl(var(--primary))]">100% Confidential</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-6 text-[hsl(var(--neutral-medium))]">
            No signup – Just send a message. Connect with professional counselors anonymously for a flat ₹1000 per session.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#contact">
              <Button 
                size="lg"
                className="w-full sm:w-auto px-6 py-3 bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary-dark))] shadow-md transition-all transform hover:scale-105 flex items-center justify-center"
              >
                <ChevronDown className="h-5 w-5 mr-2" />
                Get Started
              </Button>
            </a>
            
            <a href="#how-it-works">
              <Button 
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-6 py-3 bg-white text-[hsl(var(--primary))] hover:bg-[hsl(var(--neutral-light))] shadow-sm transition-colors"
              >
                How It Works
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 rounded-lg overflow-hidden shadow-xl transform md:translate-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21" 
            alt="Confidential counseling session" 
            className="w-full h-auto" 
          />
        </motion.div>
      </div>
    </section>
  );
}
