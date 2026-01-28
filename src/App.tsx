import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PaymentIntegrations from "./pages/services/PaymentIntegrations";
import Websites from "./pages/services/Websites";
import MobileApps from "./pages/services/MobileApps";
import BookingAutomation from "./pages/services/BookingAutomation";
import WhatsAppAutomation from "./pages/services/WhatsAppAutomation";
import MaintenanceSupport from "./pages/services/MaintenanceSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Analytics />
      <SpeedInsights />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Service Pages */}
          <Route path="/payment-integrations" element={<PaymentIntegrations />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/mobile-apps" element={<MobileApps />} />
          <Route path="/booking-automation" element={<BookingAutomation />} />
          <Route path="/whatsapp-automation" element={<WhatsAppAutomation />} />
          <Route path="/maintenance-support" element={<MaintenanceSupport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
