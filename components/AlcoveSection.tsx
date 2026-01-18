import React from 'react';
import { motion } from 'framer-motion';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { ArrowRight } from 'lucide-react';

export const AlcoveSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-[#050505]">

      {/* --- Background Layers --- */}

      {/* 1. Noise Texture Overlay (Fixed) */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* 2. Slow Aurora Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Top-Left Blue/Purple Glow */}
        <motion.div
          className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-900/10 blur-[120px] rounded-full mix-blend-screen"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Bottom-Right Red/Purple Glow */}
        <motion.div
          className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] bg-purple-900/10 blur-[120px] rounded-full mix-blend-screen"
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        {/* Center Accent (Subtle Red for Brand) */}
        <motion.div
          className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[40vw] h-[40vw] bg-[#b3001b]/5 blur-[100px] rounded-full mix-blend-screen"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>


      {/* --- Main Content --- */}
      <div className="container relative z-30 mx-auto px-4 md:px-6 flex flex-col items-center justify-center max-w-4xl pt-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10 pointer-events-none select-none"
        >
          <img
            src="/1n1scalez.webp"
            alt="1n1scalez Logo"
            className="w-24 md:w-32 h-auto opacity-90"
          />
        </motion.div>

        {/* Editorial Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif-italic tracking-tight text-white/90 text-center leading-[0.95] mb-8"
        >
          Ready to Get <br />
          <span className="font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-white/80">
            5 New Clients?
          </span>
        </motion.h1>

        {/* Minimal Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/50 text-center max-w-xl mb-12 font-light leading-relaxed"
        >
          Automated acquisition systems for service businesses. <br className="hidden md:block" />
          We build the tech. You close the deals.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="relative group"
        >
          <button
            onClick={scrollToContact}
            className="relative px-10 py-4 bg-white text-black text-lg font-medium rounded-full overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Scale My Business
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>

        {/* Dashboard Preview (Subtle / Below) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-20 w-full max-w-3xl opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
        >
          <AnalyticsDashboard />
        </motion.div>

      </div>
    </section>
  );
};

