import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "I was able to discuss issues I've never told anyone before. The anonymity made all the difference, and the counselor was incredibly understanding without judgment.",
    rating: 5,
    date: "May 2025"
  },
  {
    text: "The simple pricing and clear process made it easy to get help. My counselor gave me practical techniques that have already made a difference in how I handle stress.",
    rating: 5,
    date: "April 2025"
  },
  {
    text: "As someone who values privacy, this service was perfect. No accounts to create, no personal details shared, just genuine professional help when I needed it most.",
    rating: 5,
    date: "April 2025"
  },
  {
    text: "Finally found a counseling service that respects my need for privacy. The sessions were online but felt very personal. I'm grateful for the support I received.",
    rating: 5,
    date: "March 2025"
  },
  {
    text: "Booking was simple and the session time was flexible. I was paired with a counselor who truly understood my anxiety issues and offered practical coping mechanisms.",
    rating: 5,
    date: "March 2025"
  },
  {
    text: "I was hesitant about online counseling, but the session exceeded my expectations. My counselor was attentive and provided insights that have been truly transformative.",
    rating: 5,
    date: "February 2025"
  },
  {
    text: "The ability to talk openly without fear of judgment was liberating. My counselor helped me navigate through a difficult relationship situation with clarity.",
    rating: 5,
    date: "February 2025"
  },
  {
    text: "PossibleNest delivered exactly what they promised - confidential, judgment-free counseling. The session helped me gain new perspectives on long-standing issues.",
    rating: 5,
    date: "January 2025"
  },
  {
    text: "After trying several counseling services, this is the first one where I felt truly safe to express myself. The anonymity aspect is handled perfectly.",
    rating: 5,
    date: "January 2025"
  },
  {
    text: "I appreciate how the counselor focused on practical solutions rather than just theory. I walked away with actionable steps that have already improved my situation.",
    rating: 5,
    date: "December 2024"
  },
  {
    text: "The flat fee structure was transparent and fair. No hidden costs or pressure to book more sessions, though I chose to continue because the counseling was so helpful.",
    rating: 5,
    date: "December 2024"
  },
  {
    text: "My anxiety about online counseling disappeared within minutes of starting the session. The counselor created a safe space and provided valuable guidance.",
    rating: 5,
    date: "November 2024"
  },
  {
    text: "I've been to in-person therapy before, but this anonymous format allowed me to open up about issues I'd never discussed. A truly transformative experience.",
    rating: 5,
    date: "November 2024"
  },
  {
    text: "Having the option to message beforehand helped ease my nerves. The counselor was patient, knowledgeable, and offered insights that resonated deeply with me.",
    rating: 5,
    date: "October 2024"
  },
  {
    text: "I was dealing with work-related stress and received practical advice that I could immediately apply. The results have been noticeable to both me and my colleagues.",
    rating: 5,
    date: "October 2024"
  },
  {
    text: "The session helped me break through emotional barriers I'd been struggling with for years. I feel like I can finally move forward with clarity and purpose.",
    rating: 5,
    date: "September 2024"
  },
  {
    text: "Being able to discuss my issues without revealing my identity was exactly what I needed. The counselor was professional and insightful throughout the session.",
    rating: 5,
    date: "September 2024"
  },
  {
    text: "I was skeptical about how effective a single session could be, but I gained more insight in that hour than I had in months of trying to work through things alone.",
    rating: 5,
    date: "August 2024"
  },
  {
    text: "The counselor asked thoughtful questions that helped me see patterns I hadn't noticed before. This new awareness has been the key to making positive changes.",
    rating: 5,
    date: "August 2024"
  },
  {
    text: "I appreciated the focus on practical solutions alongside emotional support. The balanced approach helped me address both immediate concerns and underlying issues.",
    rating: 5,
    date: "July 2024"
  },
  {
    text: "The counselor's expertise in my specific issue was evident. They provided a framework for understanding what I was experiencing that has been incredibly helpful.",
    rating: 5,
    date: "July 2024"
  },
  {
    text: "I've recommended PossibleNest to several friends. The combination of professionalism, privacy, and effectiveness makes it stand out among counseling options.",
    rating: 5,
    date: "June 2024"
  },
  {
    text: "After just one session, I had clarity about issues I'd been confused about for years. The counselor asked exactly the right questions to guide me to valuable insights.",
    rating: 5,
    date: "June 2024"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentPage, setCurrentPage] = useState(0);
  const testimonialPerPage = 6;
  const totalPages = Math.ceil(testimonials.length / testimonialPerPage);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % totalPages);
    }, 10000); // Change page every 10 seconds
    
    return () => clearInterval(interval);
  }, [totalPages]);
  
  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  
  const goToNextPage = () => {
    setCurrentPage(prev => (prev + 1) % totalPages);
  };
  
  const goToPrevPage = () => {
    setCurrentPage(prev => (prev - 1 + totalPages) % totalPages);
  };
  
  const displayedTestimonials = testimonials.slice(
    currentPage * testimonialPerPage, 
    (currentPage + 1) * testimonialPerPage
  );
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[hsla(var(--primary)/0.05)]">
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
            <span className="block mt-2 text-sm">
              Over 500 satisfied clients since 2023
            </span>
          </motion.p>
        </div>
        
        <motion.div 
          ref={ref}
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-sm border border-[hsl(var(--neutral-light))] hover-lift transition-all duration-300"
                variants={itemVariants}
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="text-[hsl(var(--accent))]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 inline-block fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-[hsl(var(--neutral-medium))]">{testimonial.date}</span>
                </div>
                <p className="text-[hsl(var(--neutral-medium))] italic mb-4 min-h-[120px]">"{testimonial.text}"</p>
                <p className="font-medium text-[hsl(var(--neutral-dark))]">— Anonymous Client</p>
              </motion.div>
            ))}
          </div>
          
          {/* Pagination controls */}
          <div className="flex justify-center mt-10 items-center space-x-2">
            <button 
              onClick={goToPrevPage}
              className="p-2 rounded-full bg-white text-[hsl(var(--primary))] border border-[hsl(var(--neutral-light))] hover:bg-[hsl(var(--neutral-light))] transition-colors"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentPage === index ? 'bg-[hsl(var(--primary))] scale-125' : 'bg-[hsl(var(--neutral-light))]'}`}
                  aria-label={`Go to page ${index + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={goToNextPage}
              className="p-2 rounded-full bg-white text-[hsl(var(--primary))] border border-[hsl(var(--neutral-light))] hover:bg-[hsl(var(--neutral-light))] transition-colors"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
