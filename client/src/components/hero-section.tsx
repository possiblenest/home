import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LockIcon, ChevronDown, Shield, Clock, Heart, MessageCircle } from "lucide-react";

export default function HeroSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Features with icons that will animate
  const features = [
    {
      icon: <Shield className="h-5 w-5" />,
      title: "100% Confidential",
      description: "Your identity remains completely anonymous throughout the process."
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Online Sessions",
      description: "Convenient counseling from the comfort of your own space."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Flexible Scheduling",
      description: "Book sessions at times that work best for your schedule."
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Expert Counselors",
      description: "Connect with licensed professionals specialized in various areas."
    }
  ];
  
  // Rotate through features every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [features.length]);

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
      ref={containerRef}
      className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[hsla(var(--primary-light)/0.1)] to-[hsla(var(--secondary-light)/0.2)] overflow-hidden"
    >
      <motion.div 
        ref={parallaxRef} 
        style={{ y, opacity }}
        className="absolute inset-0 -z-10 opacity-20"
      >
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" 
          alt="" 
          className="w-full h-full object-cover" 
        />
      </motion.div>
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-[hsla(var(--primary)/0.05)] blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-[10%] w-72 h-72 rounded-full bg-[hsla(var(--secondary)/0.05)] blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">
        <motion.div 
          className="md:w-1/2 mb-12 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center mb-3 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-full hover:bg-white/90 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <LockIcon className="h-4 w-4 text-[hsl(var(--primary))] mr-2" />
            <span className="text-sm font-medium text-[hsl(var(--neutral-dark))]">100% Confidential</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-heading mb-4 text-[hsl(var(--neutral-dark))] leading-tight">
            Speak Freely – <span className="text-[hsl(var(--primary))] relative">
              100% Confidential
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[hsl(var(--primary))] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-[hsl(var(--neutral-medium))] max-w-xl">
            No signup – Just send a message. Connect with professional counselors anonymously for a flat ₹1000 per online session.
          </p>
          
          {/* Animated features */}
          <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm max-w-md">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeFeature}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex items-start"
              >
                <div className="bg-[hsl(var(--primary))] text-white p-2 rounded-full mr-3">
                  {features[activeFeature].icon}
                </div>
                <div>
                  <h3 className="text-[hsl(var(--neutral-dark))] font-semibold text-lg">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-[hsl(var(--neutral-medium))]">
                    {features[activeFeature].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-3 space-x-1">
              {features.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-2 h-2 rounded-full transition-all ${activeFeature === index ? 'bg-[hsl(var(--primary))] scale-125' : 'bg-[hsl(var(--neutral-light))]'}`}
                  aria-label={`View feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg"
                  className="w-full sm:w-auto px-6 py-3 bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary-dark))] shadow-md transition-all flex items-center justify-center"
                >
                  <ChevronDown className="h-5 w-5 mr-2 animate-bounce" />
                  Get Started
                </Button>
              </motion.div>
            </a>
            
            <a href="#how-it-works">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 py-3 bg-white/80 backdrop-blur-sm text-[hsl(var(--primary))] hover:bg-white shadow-sm transition-colors"
                >
                  How It Works
                </Button>
              </motion.div>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-1/2 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21" 
            alt="Confidential counseling session" 
            className="w-full h-auto" 
          />
        </motion.div>
      </div>
      
      {/* Subtle scroll indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs font-medium text-[hsl(var(--neutral-dark))] mb-1">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5 text-[hsl(var(--primary))]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
