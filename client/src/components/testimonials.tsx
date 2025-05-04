import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "I was able to discuss issues I've never told anyone before. The anonymity made all the difference, and the counselor was incredibly understanding without judgment.",
    rating: 5
  },
  {
    text: "The simple pricing and clear process made it easy to get help. My counselor gave me practical techniques that have already made a difference in how I handle stress.",
    rating: 5
  },
  {
    text: "As someone who values privacy, this service was perfect. No accounts to create, no personal details shared, just genuine professional help when I needed it most.",
    rating: 5
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
    <section className="py-16 md:py-24 bg-[hsla(var(--primary)/0.05)]">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Client Experiences
          </motion.h2>
          <motion.p 
            className="text-[hsl(var(--neutral-medium))] text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Read what others have shared about their anonymous counseling sessions.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm border border-[hsl(var(--neutral-light))]"
              variants={itemVariants}
            >
              <div className="flex mb-4">
                <div className="text-[hsl(var(--accent))]">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 inline-block fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[hsl(var(--neutral-medium))] italic mb-4">"{testimonial.text}"</p>
              <p className="font-medium text-[hsl(var(--neutral-dark))]">— Anonymous Client</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
