import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";

const counselors = [
  {
    name: "Dr. A",
    title: "Clinical Psychologist",
    description: "10+ years experience specializing in anxiety, depression, and trauma recovery.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    specialties: ["Anxiety", "Depression", "Trauma"]
  },
  {
    name: "Dr. R",
    title: "Relationship Therapist",
    description: "Specializing in relationship issues, family conflicts, and personal growth.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
    specialties: ["Relationships", "Family", "Growth"]
  },
  {
    name: "Dr. S",
    title: "Stress Management Expert",
    description: "Helping clients navigate work stress, burnout, and life transitions.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    specialties: ["Stress", "Burnout", "Transitions"]
  }
];

export default function Counselors() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="counselors" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            Our Professional Team
          </motion.h2>
          <motion.p 
            className="text-[hsl(var(--neutral-medium))] text-lg"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Connect with experienced, licensed counselors specialized in various areas.
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {counselors.map((counselor, index) => (
            <motion.div 
              key={index}
              className="bg-[hsl(var(--neutral-lightest))] rounded-lg overflow-hidden shadow-sm border border-[hsl(var(--neutral-light))] transition-all hover:shadow-md"
              variants={itemVariants}
            >
              <img 
                src={counselor.image} 
                alt={`${counselor.name} - ${counselor.title}`} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-1">{counselor.name}</h3>
                <p className="text-[hsl(var(--primary))] mb-3 font-medium">{counselor.title}</p>
                <p className="text-[hsl(var(--neutral-medium))] mb-4">{counselor.description}</p>
                <div className="flex flex-wrap items-center gap-2">
                  {counselor.specialties.map((specialty, i) => (
                    <Badge 
                      key={i} 
                      variant="outline"
                      className="bg-[hsla(var(--secondary)/0.1)] text-[hsl(var(--secondary-dark))] border-[hsla(var(--secondary)/0.2)]"
                    >
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-[hsl(var(--neutral-medium))]">
            Our counselors maintain anonymity to focus on your needs. <br/>
            You'll be matched with the professional best suited to your situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
