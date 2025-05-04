import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, FileText } from "lucide-react";

interface TermsOfServiceModalProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

export default function TermsOfServiceModal({ trigger, defaultOpen = false }: TermsOfServiceModalProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button variant="link" className="p-0 h-auto font-normal text-inherit hover:underline">
            Terms of Service
          </Button>
        </DialogTrigger>
      )}
      
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto border-none shadow-xl" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-[hsl(var(--primary))]" />
              <DialogTitle className="text-xl font-bold">Terms of Service</DialogTitle>
            </div>
            <DialogClose asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700" aria-label="Close">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
          <DialogDescription>
            Last updated: May 1, 2025
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4 text-[hsl(var(--neutral-medium))]">
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Introduction</h3>
            <p>
              Welcome to PossibleNest. By accessing or using our anonymous counseling services, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Service Description</h3>
            <p>
              PossibleNest provides an online platform connecting individuals with professional counselors for confidential counseling sessions. Our services are designed to provide a secure, anonymous environment for users to seek guidance and support for various personal concerns.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">User Eligibility</h3>
            <p>
              Our services are available to individuals who are 18 years of age or older. If you are under 18, you may only use our services with the involvement and consent of a parent or legal guardian. We reserve the right to request proof of age at any time.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Anonymous Use</h3>
            <p>
              While our platform allows for anonymous use, you are responsible for maintaining your own anonymity if that is your preference. We recommend using pseudonyms and being cautious about sharing personally identifiable information during sessions if you wish to remain anonymous.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Session Booking and Payment</h3>
            <p className="mb-3">
              The current fee for each counseling session is ₹1000, which is non-refundable except in cases where:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The counselor fails to attend the scheduled session</li>
              <li>Technical issues on our end prevent the session from taking place</li>
              <li>The session is canceled at least 24 hours in advance</li>
            </ul>
            <p className="mt-3">
              Payment must be made at the time of booking. All transactions are processed securely through our payment processor.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Counselor Qualifications</h3>
            <p>
              All counselors on our platform are qualified professionals with appropriate credentials and experience. However, PossibleNest serves as a connection platform and does not directly employ the counselors. Each counselor is responsible for maintaining their own professional standards, ethics, and licensing requirements.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Limitations of Service</h3>
            <p className="mb-3">
              Our services are not suitable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Emergency or crisis situations requiring immediate intervention</li>
              <li>Individuals with severe mental health conditions requiring intensive treatment</li>
              <li>Mandatory or court-ordered counseling</li>
              <li>Diagnosis or treatment of specific mental health disorders</li>
            </ul>
            <p className="mt-3">
              If you are experiencing a mental health emergency, please contact emergency services immediately or visit your nearest emergency room.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">User Conduct</h3>
            <p className="mb-3">
              Users must not:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use our services for illegal purposes</li>
              <li>Harass, threaten, or abuse counselors</li>
              <li>Share explicit, violent, or inappropriate content</li>
              <li>Attempt to contact counselors outside the platform</li>
              <li>Use our services to harm themselves or others</li>
            </ul>
            <p className="mt-3">
              Violation of these rules may result in immediate termination of your access to our services.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Privacy and Confidentiality</h3>
            <p>
              We take your privacy seriously. All sessions are conducted with strict confidentiality according to our Privacy Policy. However, counselors are mandated reporters and may need to break confidentiality in specific situations, such as when there is a risk of harm to yourself or others, suspicion of abuse of vulnerable individuals, or when required by law.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Limitation of Liability</h3>
            <p>
              PossibleNest provides a connection platform only and is not responsible for the content of counseling sessions or the actions of counselors or users. We make no guarantees regarding the outcomes or effectiveness of counseling sessions for individual users.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Changes to Terms</h3>
            <p>
              We may modify these Terms of Service at any time. Any changes will be effective immediately upon posting the updated terms on our website. Your continued use of our services after such changes constitutes your acceptance of the new terms.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Contact Us</h3>
            <p>
              If you have any questions or concerns about these Terms of Service, please contact us at <a href="mailto:terms@possiblenest.com" className="text-[hsl(var(--primary))] hover:underline">terms@possiblenest.com</a>.
            </p>
          </section>
        </div>
        
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button className="bg-[hsl(var(--primary))]">
              I Accept
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}