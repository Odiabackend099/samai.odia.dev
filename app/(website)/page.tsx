import Hero from '@/components/sections/HeroSection';
import ReptilianSection from '@/components/sections/ReptilianSection';
import LimbicSection from '@/components/sections/LimbicSection';
import CortexSection from '@/components/sections/CortexSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTA from '@/components/sections/FinalCTA';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <ReptilianSection />
      <LimbicSection />
      <CortexSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
