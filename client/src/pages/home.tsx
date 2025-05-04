import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import Faq from "@/components/faq";
import PrivacyGuarantee from "@/components/privacy-guarantee";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  // Handle animations on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-animate]");
      const windowHeight = window.innerHeight;
      
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Add intersection observer for advanced animation triggers
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const animation = el.dataset.animation || 'fade-in';
          const delay = el.dataset.delay || '0';
          
          setTimeout(() => {
            el.classList.add(animation);
            el.style.opacity = '1';
          }, parseInt(delay));
          
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    
    animatedElements.forEach(el => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--neutral-lightest))]">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Faq />
        <PrivacyGuarantee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
