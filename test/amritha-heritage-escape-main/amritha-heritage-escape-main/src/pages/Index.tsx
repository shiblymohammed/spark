import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import AccommodationSection from '@/components/AccommodationSection';
import ParallaxHero from '@/components/ParallaxHero';
import DiningSection from '@/components/DiningSection';
import DestinationsSection from '@/components/DestinationsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <AccommodationSection />
        <ParallaxHero />
        <DiningSection />
        <DestinationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
