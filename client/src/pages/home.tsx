import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Benefits from "@/components/benefits";
import Counselors from "@/components/counselors";
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

  return (
    <div className="min-h-screen bg-[hsl(var(--neutral-lightest))]">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Counselors />
        <Testimonials />
        <Faq />
        <PrivacyGuarantee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
