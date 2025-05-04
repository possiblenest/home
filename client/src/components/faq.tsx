import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to create an account or register?",
    answer: "No, you don't need to create an account or register. Simply reach out to us via SMS or email, and we'll guide you through the process without requiring any personal information."
  },
  {
    question: "How do I pay for the session?",
    answer: "We charge a flat fee of ₹1000 per session. After scheduling, we'll send you payment instructions through your preferred anonymous communication channel. We accept various payment methods that maintain your privacy."
  },
  {
    question: "How is my privacy protected?",
    answer: "We never ask for or store your personal information. Communications are end-to-end encrypted, and you can use a pseudonym throughout the process. We don't keep session records, and all temporary communication is deleted after your session is complete."
  },
  {
    question: "Who are the counselors?",
    answer: "All our counselors are licensed professionals with advanced degrees in psychology, counseling, or related fields. They have extensive experience and specialized training in various areas of mental health. We match you with the most appropriate counselor based on your needs."
  },
  {
    question: "How long are the sessions?",
    answer: "Standard sessions are 30 minutes long. However, if you need more time, we can arrange extended sessions at an additional cost. Most clients find that 30 minutes provides sufficient time to address immediate concerns."
  },
  {
    question: "What if I'm not satisfied with my session?",
    answer: "We stand by our service quality. If you're not satisfied with your session, please let us know, and we'll either arrange a session with a different counselor or offer a refund. Your satisfaction and mental wellbeing are our priorities."
  }
];

export default function Faq() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Common Questions
          </motion.h2>
          <motion.p 
            className="text-[hsl(var(--neutral-medium))] text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Find answers to the most frequently asked questions about our service.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border-b border-[hsl(var(--neutral-light))]">
                  <AccordionTrigger className="text-lg font-heading font-medium text-[hsl(var(--neutral-dark))]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[hsl(var(--neutral-medium))]">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
