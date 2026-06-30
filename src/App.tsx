import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Services from './components/Services';
import InvestmentOutlook from './components/InvestmentOutlook';
import Timeline from './components/Timeline';
import WhyCAC from './components/WhyCAC';
import Contact from './components/Contact';
import InquiryLogModal from './components/InquiryLogModal';
import Footer from './components/Footer';

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
    <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-secondary selection:text-surface">
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
