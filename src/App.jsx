import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TemplatesGallery from './components/TemplatesGallery';
import ProcessSection from './components/ProcessSection';
import PricingSection from './components/PricingSection';
import FAQAccordion from './components/FAQAccordion';
import Footer from './components/Footer';
import PremiumTemplate from './components/PremiumTemplate';
import DemoTemplate2 from './components/DemoTemplate2';
import DemoTemplate3 from './components/DemoTemplate3';
import DemoTemplate4 from './components/DemoTemplate4';
import DemoTemplate5 from './components/DemoTemplate5';
import DemoTemplate6 from './components/DemoTemplate6';
import DemoTemplate7 from './components/DemoTemplate7';
import DemoTemplate8 from './components/DemoTemplate8';
import DemoTemplate9 from './components/DemoTemplate9';
import { PersonalizationProvider } from './context/PersonalizationContext';
import PersonalizerSidebar from './components/PersonalizerSidebar';

function App() {
  const isDemoRoute = window.location.pathname.startsWith('/demo');
  const AppContent = () => {
    if (window.location.pathname === '/demo') return <PremiumTemplate />;
    if (window.location.pathname === '/demo2') return <DemoTemplate2 />;
    if (window.location.pathname === '/demo3') return <DemoTemplate3 />;
    if (window.location.pathname === '/demo4') return <DemoTemplate4 />;
    if (window.location.pathname === '/demo5') return <DemoTemplate5 />;
    if (window.location.pathname === '/demo6') return <DemoTemplate6 />;
    if (window.location.pathname === '/demo7') return <DemoTemplate7 />;
    if (window.location.pathname === '/demo8') return <DemoTemplate8 />;
    if (window.location.pathname === '/demo9') return <DemoTemplate9 />;

    return (
      <>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <TemplatesGallery />
        <ProcessSection />
        <PricingSection />
        <FAQAccordion />
        <Footer />
      </>

    );
  };

  return (
    <PersonalizationProvider>
      {isDemoRoute && <PersonalizerSidebar />}
      <AppContent />
    </PersonalizationProvider>
  );
}

export default App;
