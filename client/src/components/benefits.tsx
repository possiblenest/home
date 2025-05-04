import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  EyeOffIcon, 
  DollarSignIcon, 
  UsersIcon, 
  ClockIcon, 
  ShieldIcon, 
  AwardIcon 
} from "lucide-react";

const benefits = [
  {
    title: "Complete Anonymity",
    description: "We never ask for your real name or personal details. Use a pseudonym – we respect your privacy completely.",
    icon: EyeOffIcon
  },
  {
    title: "Transparent Pricing",
    description: "Flat ₹1000 per session with no hidden fees or subscription commitments. Pay only for what you need.",
    icon: DollarSignIcon
  },
  {
    title: "Licensed Professionals",
    description: "All our counselors are licensed therapists with years of experience in various specialties.",
    icon: UsersIcon
  },
  {
    title: "Quick Response",
    description: "Most sessions can be scheduled within 24 hours of your initial contact. No long waiting lists.",
    icon: ClockIcon
  },
  {
    title: "Secure Communication",
    description: "All sessions use end-to-end encrypted channels to ensure your conversations remain completely private.",
    icon: ShieldIcon
  },
  {
    title: "Satisfaction Guarantee",
    description: "If you're not satisfied with your session, we'll offer a complimentary follow-up or refund your payment.",
    icon: AwardIcon
  }
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="benefits" className="py-16 md:py-24 bg-[hsl(var(--neutral-lightest))]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Why Choose PossibleNest
          </motion.h2>
          <motion.p 
            className="text-[hsl(var(--neutral-medium))] text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We've built our service around your privacy, comfort, and accessibility needs.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-[hsl(var(--neutral-light))] transition-all hover:shadow-md"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-[hsla(var(--primary)/0.1)] rounded-full flex items-center justify-center mb-4">
                <benefit.icon className="h-6 w-6 text-[hsl(var(--primary))]" />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
              <p className="text-[hsl(var(--neutral-medium))]">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
