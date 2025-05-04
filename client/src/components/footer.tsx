import { Link } from "wouter";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--neutral-dark))] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <ShieldCheck className="h-8 w-8 text-white" />
              <h2 className="ml-2 text-xl font-bold font-heading">PossibleNest</h2>
            </div>
            <p className="mt-2 text-white/70 max-w-md">
              Anonymous, confidential counseling services. No login required, complete privacy guaranteed.
            </p>
          </div>
          
          <div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#faq" className="text-white/70 hover:text-white transition-colors">
                FAQ
              </a>
            </div>
            
            <div className="mt-4 flex items-center justify-center">
              <span className="text-white/70 flex items-center text-sm">
                <ShieldCheck className="h-4 w-4 mr-1" />
                Secure &amp; Encrypted
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} PossibleNest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
