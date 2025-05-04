import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Smartphone, Mail, Send } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would handle the form submission here
    // For now, we'll just open an email client
    const emailSubject = "Confidential Counseling Session";
    const emailBody = `${message}\n\n${name ? `- ${name}` : ""}`;
    window.location.href = `mailto:possiblenest@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Get Started Now
          </motion.h2>
          <motion.p 
            className="text-[hsl(var(--neutral-medium))] text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            No registration required. Simply send us a message to begin your journey.
          </motion.p>
        </div>
        
        <div 
          ref={ref}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            className="bg-[hsl(var(--neutral-lightest))] rounded-lg shadow-sm border border-[hsl(var(--neutral-light))] p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold font-heading mb-4">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Label htmlFor="name" className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                  Your Name or Pseudonym (Optional)
                </Label>
                <Input 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-[hsl(var(--neutral-light))] rounded-md focus:ring-2 focus:ring-[hsla(var(--primary)/0.5)] focus:border-[hsl(var(--primary))] outline-none" 
                  placeholder="How would you like us to address you?"
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                  Your Message
                </Label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4} 
                  className="w-full px-4 py-2 border border-[hsl(var(--neutral-light))] rounded-md focus:ring-2 focus:ring-[hsla(var(--primary)/0.5)] focus:border-[hsl(var(--primary))] outline-none" 
                  placeholder="Briefly tell us what you'd like to discuss..."
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-[hsl(var(--primary))] text-white font-medium py-3 rounded-md hover:bg-[hsl(var(--primary-dark))] transition-colors flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[hsl(var(--neutral-medium))] mb-2">Or simply contact us directly:</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="sms:8709222590?body=I'd%20like%20to%20schedule%20a%20confidential%20counseling%20session" 
              className="block bg-white rounded-lg shadow-sm border border-[hsl(var(--neutral-light))] p-6 hover:shadow-md transition-shadow text-center"
            >
              <Smartphone className="h-10 w-10 mx-auto mb-3 text-[hsl(var(--primary))]" />
              <h3 className="text-lg font-bold font-heading mb-1">Text Us (SMS)</h3>
              <p className="text-[hsl(var(--neutral-medium))] mb-3">Send a text message to start the process</p>
              <p className="font-medium text-[hsl(var(--primary))]">8709222590</p>
            </a>
            
            <a 
              href="mailto:possiblenest@gmail.com?subject=Confidential%20Counseling%20Session&body=I'd%20like%20to%20schedule%20a%20confidential%20counseling%20session" 
              className="block bg-white rounded-lg shadow-sm border border-[hsl(var(--neutral-light))] p-6 hover:shadow-md transition-shadow text-center"
            >
              <Mail className="h-10 w-10 mx-auto mb-3 text-[hsl(var(--primary))]" />
              <h3 className="text-lg font-bold font-heading mb-1">Email Us</h3>
              <p className="text-[hsl(var(--neutral-medium))] mb-3">Send an email to get started</p>
              <p className="font-medium text-[hsl(var(--primary))]">possiblenest@gmail.com</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
