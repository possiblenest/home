import { Link } from "wouter";
import { ShieldCheck, Lock, Heart, MessageCircle, Globe, Mail, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerLinks = [
    { name: "Home", href: "#" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Benefits", href: "#benefits" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ];

  const features = [
    { icon: <Lock className="h-4 w-4" />, text: "100% Secure & Private" },
    { icon: <Shield className="h-4 w-4" />, text: "End-to-End Encryption" },
    { icon: <Heart className="h-4 w-4" />, text: "Professional Support" },
    { icon: <MessageCircle className="h-4 w-4" />, text: "Online Sessions" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[hsl(var(--neutral-dark))] to-[hsl(var(--neutral-dark)/0.9)] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 lg:col-span-2">
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white/10 p-2 rounded-xl mr-3">
                <ShieldCheck className="h-8 w-8 text-[hsl(var(--primary-light))]" />
              </div>
              <h2 className="text-2xl font-bold font-heading">PossibleNest</h2>
            </motion.div>

            <motion.p 
              className="mt-4 text-white/80 max-w-md leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Anonymous, confidential counseling services designed to provide a safe space for anyone seeking support. 
              No login required, complete privacy guaranteed.
            </motion.p>

            <motion.div
              className="mt-6 grid grid-cols-2 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center text-white/80 hover:text-white transition-colors"
                >
                  <div className="mr-2 text-[hsl(var(--primary-light))]">
                    {feature.icon}
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Quick Links */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold font-heading mb-4 pb-2 border-b border-white/10">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="text-[hsl(var(--primary-light))] mr-2">&rsaquo;</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Additional Links */}
          <motion.div 
            className="col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold font-heading mb-4 pb-2 border-b border-white/10">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.slice(4).map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors flex items-center"
                  >
                    <span className="text-[hsl(var(--primary-light))] mr-2">&rsaquo;</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <a 
                href="mailto:possiblenest@gmail.com" 
                className="flex items-center text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 mr-2 text-[hsl(var(--primary-light))]" />
                possiblenest@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PossibleNest. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-3">
            <span className="text-white/60 text-sm flex items-center">
              <Lock className="h-3 w-3 mr-1" />
              SSL Secured
            </span>
            <span className="mx-2 text-white/30">|</span>
            <span className="text-white/60 text-sm flex items-center">
              <Shield className="h-3 w-3 mr-1" />
              HIPAA Compliant
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
