import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  PhoneIcon, 
  ClockIcon, 
  MessageSquareIcon, 
  DollarSignIcon, 
  LockIcon 
} from "lucide-react";

const processSteps = [
  {
    title: "1. Reach Out",
    description: "Text or email us without creating an account or sharing personal details.",
    icon: PhoneIcon
  },
  {
    title: "2. Schedule",
    description: "We respond promptly to arrange a convenient time for your session.",
    icon: ClockIcon
  },
  {
    title: "3. Attend Session",
    description: "Connect via phone or chat for a private 30-minute counseling session.",
    icon: MessageSquareIcon
  },
  {
    title: "4. Payment",
    description: "Pay a flat fee of ₹1000 per session with secure, anonymous payment options.",
    icon: DollarSignIcon
  }
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Simple Process, Complete Privacy
          </motion.h2>
          <motion.p 
            className="text-[hsl(var(--neutral-medium))] text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            No personal information needed - just four easy steps to connect with a professional counselor.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {processSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-[hsl(var(--neutral-lightest))] rounded-lg p-6 shadow-sm border border-[hsl(var(--neutral-light))] transition-all hover:shadow-md"
              variants={itemVariants}
            >
              <div className="w-14 h-14 bg-[hsla(var(--primary)/0.1)] rounded-full flex items-center justify-center mb-4">
                <step.icon className="h-7 w-7 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
              <p className="text-[hsl(var(--neutral-medium))]">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="inline-block bg-[hsla(var(--primary)/0.1)] text-[hsl(var(--primary))] px-4 py-2 rounded-lg font-semibold">
            <LockIcon className="h-5 w-5 inline-block mr-2" />
            Your identity remains anonymous throughout the entire process
          </p>
        </motion.div>
      </div>
    </section>
  );
}
