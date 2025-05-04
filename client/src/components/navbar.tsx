import { useState, useEffect } from "react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Menu, X } from "lucide-react";

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
  { name: "Our Counselors", href: "#counselors" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to add shadow to navbar when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full bg-white bg-opacity-95 z-50 transition-shadow duration-300",
        scrolled ? "shadow-md" : ""
      )}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center">
            <ShieldCheck className="h-8 w-8 text-[hsl(var(--primary))]" />
            <h1 className="ml-2 text-xl font-bold font-heading text-[hsl(var(--primary))]">
              PossibleNest
            </h1>
          </a>
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact">
                <Button 
                  className="bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary-dark))]"
                >
                  Get Started
                </Button>
              </a>
            </li>
          </ul>
        </nav>
        
        <button 
          className="md:hidden text-[hsl(var(--neutral-medium))]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="px-4 py-3 bg-white md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="block text-[hsl(var(--neutral-medium))] hover:text-[hsl(var(--primary))]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a 
                href="#contact" 
                className="block w-full"
                onClick={() => setIsOpen(false)}
              >
                <Button 
                  className="w-full bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary-dark))]"
                >
                  Get Started
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
