import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";

export default function PrivacyGuarantee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <section className="py-12 md:py-16 bg-[hsla(var(--primary)/0.05)]">
      <div className="container mx-auto px-6">
        <motion.div 
          ref={ref}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-[hsl(var(--primary))] p-6 text-white flex items-center justify-center">
              <div className="text-center">
                <ShieldCheck className="h-16 w-16 mx-auto mb-4" />
                <h3 className="text-xl font-bold font-heading mb-1">Our Guarantee</h3>
                <p className="text-white/80">Complete privacy and satisfaction</p>
              </div>
            </div>
            <div className="md:w-2/3 p-6 md:p-8">
              <h3 className="text-2xl font-bold font-heading mb-4">Privacy & Satisfaction Guarantee</h3>
              <div className="space-y-4 text-[hsl(var(--neutral-medium))]">
                <p>
                  <strong className="font-medium text-[hsl(var(--neutral-dark))]">100% Privacy:</strong> We do not store your personal data or session details. All communication is encrypted and confidential.
                </p>
                <p>
                  <strong className="font-medium text-[hsl(var(--neutral-dark))]">Satisfaction Guarantee:</strong> If you're not completely satisfied with your counseling session, we'll offer a complimentary follow-up or refund your payment.
                </p>
                <p>
                  <strong className="font-medium text-[hsl(var(--neutral-dark))]">Secure Payments:</strong> All transactions are processed through secure channels with no personally identifiable information stored.
                </p>
              </div>
              <div className="mt-6">
                <a 
                  href="#" 
                  className="text-[hsl(var(--primary))] hover:text-[hsl(var(--primary-dark))] font-medium flex items-center"
                >
                  <span>Read our full Privacy Policy</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
