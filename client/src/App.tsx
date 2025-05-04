import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import PrivacyPolicyModal from "./components/privacy-policy-modal";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        
        {/* Fixed Privacy Policy Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <PrivacyPolicyModal 
            trigger={
              <Button 
                size="sm" 
                className="bg-[hsl(var(--primary))] shadow-lg flex items-center space-x-2 px-3 py-1 h-auto rounded-full hover:bg-[hsl(var(--primary-dark))] transition-all group"
              >
                <Shield className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Privacy</span>
              </Button>
            } 
          />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
