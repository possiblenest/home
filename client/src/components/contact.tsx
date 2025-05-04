import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Send, CalendarIcon, Clock, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { format } from "date-fns";
import emailjs from "emailjs-com";

// Time slots for the select dropdown
const TIME_SLOTS = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
  "6:00 PM - 7:00 PM",
  "7:00 PM - 8:00 PM",
];

// Age ranges for the select dropdown
const AGE_RANGES = [
  "Under 18",
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65+",
  "Prefer not to say"
];

export default function Contact() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // EmailJS credentials as inline variables
  const EMAILJS_USER_ID = "user_aBcDeFgHiJkLmN123456"; // Replace with your actual values when deploying
  const EMAILJS_SERVICE_ID = "service_123abc"; // Replace with your actual values when deploying
  const EMAILJS_TEMPLATE_ID = "template_abc123"; // Replace with your actual values when deploying

  // Initialize EmailJS with the User ID
  useEffect(() => {
    emailjs.init(EMAILJS_USER_ID);
  }, []);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus("idle");
    
    try {
      // Email template parameters
      const templateParams = {
        from_name: name || "Anonymous Client",
        age_range: age,
        email: email,
        message: message,
        session_date: date ? format(date, "PPP") : "Flexible",
        session_time: timeSlot || "Flexible",
      };
      
      // Send the email using EmailJS with inline credentials
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      setFormStatus("success");
      
      // Clear form fields after successful submission
      if (formRef.current) {
        formRef.current.reset();
        setName("");
        setAge("");
        setEmail("");
        setMessage("");
        setDate(undefined);
        setTimeSlot("");
      }
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormStatus("error");
    } finally {
      setSubmitting(false);
    }
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
            No registration required. Simply fill out this form to begin your journey.
            <span className="block mt-2">All sessions are conducted online for your privacy and convenience.</span>
          </motion.p>
        </div>
        
        <div 
          ref={ref}
          className="max-w-3xl mx-auto"
        >
          <motion.div 
            className="bg-white rounded-lg shadow-md border border-[hsl(var(--neutral-light))] p-6 md:p-8 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
          >
            <h3 className="text-xl font-bold font-heading mb-6">Schedule Your Online Session</h3>
            
            {formStatus === "success" && (
              <motion.div 
                className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md mb-6 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <span>Your message has been sent successfully! We'll contact you shortly to confirm your session.</span>
              </motion.div>
            )}
            
            {formStatus === "error" && (
              <motion.div 
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 flex items-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                <span>There was an error sending your message. Please try again or contact us via email directly.</span>
              </motion.div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name field */}
                <div>
                  <Label htmlFor="name" className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                    Your Name or Pseudonym (Optional)
                  </Label>
                  <Input 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[hsl(var(--neutral-lightest))] border-[hsl(var(--neutral-light))] focus:ring-2 focus:ring-[hsla(var(--primary)/0.5)] focus:border-[hsl(var(--primary))] outline-none" 
                    placeholder="How would you like us to address you?"
                  />
                </div>
              
                {/* Age range field */}
                <div>
                  <Label htmlFor="age" className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                    Age Range
                  </Label>
                  <Select value={age} onValueChange={setAge}>
                    <SelectTrigger id="age" className="w-full bg-[hsl(var(--neutral-lightest))]">
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>
                    <SelectContent>
                      {AGE_RANGES.map((range) => (
                        <SelectItem key={range} value={range}>{range}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Email field */}
              <div>
                <Label htmlFor="email" className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                  Email (For session confirmation)
                </Label>
                <Input 
                  id="email" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[hsl(var(--neutral-lightest))] border-[hsl(var(--neutral-light))] focus:ring-2 focus:ring-[hsla(var(--primary)/0.5)] focus:border-[hsl(var(--primary))] outline-none" 
                  placeholder="Your email address"
                />
                <p className="text-xs text-[hsl(var(--neutral-medium))] mt-1">Your email is only used for session confirmations and will not be shared.</p>
              </div>
              
              {/* Date and time selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Session date */}
                <div>
                  <Label className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                    Preferred Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal bg-[hsl(var(--neutral-lightest))] ${!date ? 'text-muted-foreground' : ''}`}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, 'PPP') : <span>Select a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 2))}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Session time */}
                <div>
                  <Label htmlFor="timeSlot" className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                    Preferred Time
                  </Label>
                  <Select value={timeSlot} onValueChange={setTimeSlot}>
                    <SelectTrigger id="timeSlot" className="w-full bg-[hsl(var(--neutral-lightest))]">
                      <SelectValue placeholder="Select a time slot">
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          {timeSlot || <span>Select a time slot</span>}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {TIME_SLOTS.map((slot) => (
                        <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Message field */}
              <div>
                <Label htmlFor="message" className="block text-[hsl(var(--neutral-dark))] font-medium mb-2">
                  Your Message
                </Label>
                <Textarea 
                  id="message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4} 
                  className="w-full bg-[hsl(var(--neutral-lightest))] border-[hsl(var(--neutral-light))] focus:ring-2 focus:ring-[hsla(var(--primary)/0.5)] focus:border-[hsl(var(--primary))] outline-none" 
                  placeholder="Briefly tell us what you'd like to discuss in your session..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={submitting}
                className="w-full bg-[hsl(var(--primary))] text-white font-medium py-6 rounded-md hover:bg-[hsl(var(--primary-dark))] transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Schedule Session
                  </>
                )}
              </Button>
              
              <p className="text-center text-sm text-[hsl(var(--neutral-medium))]">
                By submitting this form, you agree to our <a href="#" className="text-[hsl(var(--primary))] hover:underline">Terms of Service</a> and <a href="#" className="text-[hsl(var(--primary))] hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
          
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-[hsl(var(--neutral-medium))] mb-2">Or contact us directly:</p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href="mailto:possiblenest@gmail.com?subject=Confidential%20Counseling%20Session&body=I'd%20like%20to%20schedule%20a%20confidential%20counseling%20session" 
              className="block bg-white rounded-lg shadow-sm border border-[hsl(var(--neutral-light))] p-6 hover-lift hover:border-[hsl(var(--primary-light))] transition-all duration-300 text-center flex-1 max-w-md mx-auto"
            >
              <Mail className="h-10 w-10 mx-auto mb-3 text-[hsl(var(--primary))]" />
              <h3 className="text-lg font-bold font-heading mb-1">Email Us</h3>
              <p className="text-[hsl(var(--neutral-medium))] mb-3">Send an email to get started</p>
              <p className="font-medium text-[hsl(var(--primary))]">possiblenest@gmail.com</p>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Add EmailJS script */}
      <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
        (function() {
          emailjs.init('${EMAILJS_USER_ID}');
        })();
      `}} />
    </section>
  );
}
