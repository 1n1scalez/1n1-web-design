
import React from 'react';
import { motion } from 'framer-motion';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { ArrowRight } from 'lucide-react';

export const AlcoveSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-visible pt-8 pb-16 md:pt-12 md:pb-20">

      {/* --- Cosmic Brand Background Effects (#b3001b) --- */}

      {/* 1. Main Horizon Glow (The "sunrise" effect at the bottom) */}
      <div className="absolute bottom-[-45%] md:bottom-[-60%] left-1/2 -translate-x-1/2 w-[250%] md:w-[220%] h-[1000px] pointer-events-none z-0">

        {/* The Curved "Planet" Edge */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[100%] rounded-[100%] bg-black shadow-[0_-20px_60px_rgba(179,0,27,0.4)] md:shadow-[0_-20px_100px_rgba(179,0,27,0.5)] border-t border-[#b3001b]/50 overflow-hidden">
          {/* Inner glow for volume */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[50px] bg-[#b3001b]/20 blur-[15px] md:blur-[30px]" />
        </div>


        {/* Core intense atmospheric glow behind the curve */}
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-[#b3001b]/30 blur-[60px] md:blur-[120px] rounded-full mix-blend-screen" />

        {/* Secondary softer wide glow */}
        <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-[#b3001b]/20 to-transparent blur-[50px] md:blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center flex flex-col items-center">

        {/* Icon / Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 md:mb-12 relative"
        >
          {/* Glow behind logo REMOVED */}
          <img
            src="/1n1scalez.webp"
            alt="1n1scalez Logo"
            className="relative w-32 md:w-56 h-auto mx-auto drop-shadow-sm"
          />
        </motion.div>

        {/* Heading with Blur Reveal Animation */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] md:leading-[1.1] text-white max-w-5xl">
          <BlurReveal delay={0.2}>
            Ready to Get 5 New Clients
          </BlurReveal>
          <br className="hidden md:block" />
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="bg-gradient-to-r from-[#60a5fa] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent inline-block pb-1"
          >
            Within the Next 30 Days?
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(5px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light mb-12"
        >
          We build automated acquisition systems & CRM infrastructure for service businesses. You handle the appointments; we bring the qualified leads and set up the tech to nurture them.
        </motion.p>

        {/* Analytics Dashboard Visual - Now above CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mt-12 mb-12 w-full max-w-5xl px-4"
        >
          <AnalyticsDashboard />
        </motion.div>

        {/* CTA Buttons & Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col items-center gap-6 relative z-20"
        >
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#b3001b] hover:bg-[#8e0016] text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(179,0,27,0.3)] hover:shadow-[0_0_30px_rgba(179,0,27,0.5)] flex items-center justify-center gap-2 group"
            >
              Scale My Business
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>


        </motion.div>
      </div>

    </section>
  );
};

// Helper component for the staggering blur reveal effect
const BlurReveal: React.FC<{ children: string; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const words = children.split(" ");

  return (
    <span className={`inline-flex flex-wrap justify-center gap-x-3 md:gap-x-4 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, filter: "blur(12px)", y: 15, scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: delay + (i * 0.15),
            ease: [0.2, 0.65, 0.3, 0.9]
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

