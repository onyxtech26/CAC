import { useState } from 'react';
import PremiumBackground from './components/ui/PremiumBackground';
import InquiryLogModal from './components/ui/InquiryLogModal';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import StatsBar from './components/sections/StatsBar';
import About from './components/sections/About';
import Services from './components/sections/Services';
import InvestmentOutlook from './components/sections/InvestmentOutlook';
import Timeline from './components/sections/Timeline';
import WhyCAC from './components/sections/WhyCAC';
import Contact from './components/sections/Contact';

export default function App() {
  const [isInquiryLogOpen, setIsInquiryLogOpen] = useState(false);

  const handleBookConsultation = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenInquiryLog = () => {
    setIsInquiryLogOpen(true);
  };

  const handleViewOutlook = () => {
    const el = document.getElementById('investment');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquirySubmitted = () => {
    // We can show optional confirmation or trigger modal refreshes
  };

  return (
    <div className="min-h-screen bg-transparent text-on-surface font-sans selection:bg-secondary selection:text-surface">
      {/* Static premium land-survey graphic background (site-wide) */}
      <PremiumBackground />

      {/* Dynamic Floating Glass Navbar */}
      <Navbar
        onBookConsultation={handleBookConsultation}
        onOpenInquiryLog={handleOpenInquiryLog}
      />

      {/* Hero Section containing the WebGL Shader background */}
      <Hero
        onBookConsultation={handleBookConsultation}
        onViewOutlook={handleViewOutlook}
      />

      {/* Counts Portfolio houses, portfolio value, net profit & capital sought */}
      <StatsBar />

      {/* Firm Overview Section */}
      <About />

      {/* 6 Capabilities with expandable forensics drawer */}
      <Services />

      {/* Detailed Investment properties table with search and dynamic sorting */}
      <InvestmentOutlook />

      {/* Interactive Process Stepper with system outputs */}
      <Timeline />

      {/* Why Choose CAC and Vision/Mission offset grid */}
      <WhyCAC />

      {/* Consultation form & Mohaan Specialist details */}
      <Contact onInquirySubmitted={handleInquirySubmitted} />

      {/* Brand Disclaimer & Columns Footer */}
      <Footer />

      {/* Dialog Modals */}
      <InquiryLogModal
        isOpen={isInquiryLogOpen}
        onClose={() => setIsInquiryLogOpen(false)}
      />

    </div>
  );
}
