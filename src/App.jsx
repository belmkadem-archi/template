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

function App() {
  const isDemo = window.location.pathname === '/demo';
  const isDemo2 = window.location.pathname === '/demo2';
  const isDemo3 = window.location.pathname === '/demo3';
  const isDemo4 = window.location.pathname === '/demo4';
  const isDemo5 = window.location.pathname === '/demo5';
  const isDemo6 = window.location.pathname === '/demo6';
  const isDemo7 = window.location.pathname === '/demo7';
  const isDemo8 = window.location.pathname === '/demo8';
  const isDemo9 = window.location.pathname === '/demo9';

  if (isDemo) return <PremiumTemplate />;
  if (isDemo2) return <DemoTemplate2 />;
  if (isDemo3) return <DemoTemplate3 />;
  if (isDemo4) return <DemoTemplate4 />;
  if (isDemo5) return <DemoTemplate5 />;
  if (isDemo6) return <DemoTemplate6 />;
  if (isDemo7) return <DemoTemplate7 />;
  if (isDemo8) return <DemoTemplate8 />;
  if (isDemo9) return <DemoTemplate9 />;

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
}

export default App;
