
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ValueProps } from './components/ValueProps';
import { AlcoveSection } from './components/AlcoveSection';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { StarField } from './components/StarField';
import { ArchitectSection } from './components/ArchitectSection';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Background Star Animation */}
      <StarField />

      {/* Navigation - REMOVED */}
      {/* <Header /> */}

      <main className="relative z-10">
        {/* Replicated Alcove Section - Now at the start */}
        <AlcoveSection />

        {/* Value Propositions */}
        <ValueProps />

        {/* Architect Section (Added below Value Props) */}
        <ArchitectSection />

        {/* Secondary Feature Highlight Section - REMOVED */}
        {/* <Hero /> */}

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* Conversion Section with Form */}
        <ContactForm />

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
