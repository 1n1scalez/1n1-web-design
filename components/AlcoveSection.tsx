
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

      {/* --- Alcove News Style Background (Blue/Purple/White) --- */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden bg-[#0a0a0a]">

        {/* 1. Subtle Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` }}
        />

        {/* 2. Static Star Field (CSS Gradient) */}
        <div className="absolute inset-0 opacity-30"
          style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        {/* 3. Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#1a1b26]/20" />

        {/* 4. Planet Horizon - Bottom Centered */}
        <div className="absolute bottom-[-60%] md:bottom-[-70%] left-1/2 -translate-x-1/2 w-[200%] md:w-[150%] aspect-square rounded-[100%] bg-black z-10 overflow-hidden shadow-[0_-20px_100px_rgba(59,130,246,0.2)] border-t border-white/20">
          {/* 4a. Bright Rim Light (White/Pale Blue) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[3px] bg-gradient-to-r from-transparent via-white to-transparent blur-[2px] opacity-70" />

          {/* 4b. Atmosphere Glow (Blue/Purple) */}
          <div className="absolute -top-[120px] left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-blue-500/20 blur-[80px] md:blur-[120px] rounded-full mix-blend-screen" />

          {/* 4c. Inner Planet Texture (Subtle) */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1e1b4b]/20 to-black" />
        </div>
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

