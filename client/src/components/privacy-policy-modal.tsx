import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ShieldIcon } from "lucide-react";

interface PrivacyPolicyModalProps {
  trigger?: React.ReactNode;
  defaultOpen?: boolean;
}

export default function PrivacyPolicyModal({ trigger, defaultOpen = false }: PrivacyPolicyModalProps) {
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
            Privacy Policy
          </Button>
        </DialogTrigger>
      )}
      
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto border-none shadow-xl" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShieldIcon className="h-5 w-5 mr-2 text-[hsl(var(--primary))]" />
              <DialogTitle className="text-xl font-bold">Privacy Policy</DialogTitle>
            </div>
            <DialogClose asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700" aria-label="Close">
                {/* <X className="h-4 w-4" /> */}
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
              At PossibleNest, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our anonymous counseling services.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Information We Collect</h3>
            <p className="mb-3">
              We prioritize your anonymity and minimize the collection of personal information. We may collect:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Optional pseudonym (which you can change at any time)</li>
              <li>Age range (for counselor selection purposes only)</li>
              <li>Email address (only if you choose to provide it for session confirmations)</li>
              <li>Schedule preferences</li>
              <li>General topic areas for counseling</li>
            </ul>
            <p className="mt-3">
              We do NOT require your real name, address, phone number, or other identifying information to use our services.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">How We Use Your Information</h3>
            <p className="mb-3">
              The limited information we collect is used solely for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Scheduling and confirming counseling sessions</li>
              <li>Matching you with appropriate counselors</li>
              <li>Providing you with information about your sessions</li>
              <li>Improving our services</li>
              <li>Ensuring the security of our platform</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Data Security</h3>
            <p>
              We implement strict security measures to protect your information, including encryption, secure servers, regular security audits, and strict access controls. All session content is transmitted using end-to-end encryption, and we do not store session recordings or transcripts.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Data Retention</h3>
            <p>
              We retain minimal scheduling information for up to 90 days after your last session. After this period, this information is permanently deleted from our systems. You may request immediate deletion at any time by contacting us.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Third-Party Services</h3>
            <p>
              We use certain third-party services for scheduling, payment processing, and communication. These providers have been carefully selected based on their commitment to privacy and security, and they only receive the minimum information necessary to provide their services. We never share your counseling content with third parties.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Your Rights</h3>
            <p className="mb-3">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access the limited personal information we hold about you</li>
              <li>Request deletion of your information</li>
              <li>Opt out of communications</li>
              <li>Use our services with varying levels of anonymity</li>
            </ul>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Changes to this Policy</h3>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify users of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-2 text-[hsl(var(--neutral-dark))]">Contact Us</h3>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <a href="mailto:privacy@possiblenest.com" className="text-[hsl(var(--primary))] hover:underline">privacy@possiblenest.com</a>.
            </p>
          </section>
        </div>
        
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button className="bg-[hsl(var(--primary))]">
              I Understand
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}