
import React from 'react';
import { motion } from 'framer-motion';
import { AnalyticsDashboard } from './AnalyticsDashboard';
import { ArrowRight } from 'lucide-react';

export const AlcoveSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">

      {/* --- Background Layers --- */}

      {/* 1. Static Noise Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          transform: 'scale(1)',
        }}
      />

      {/* 2. Subtle Radial Gradients (Animated) - RED COSMIC THEME */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Red/Crimson Glow (Top Left) */}
        <motion.div
          className="absolute top-[-20%] left-[20%] w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] rounded-full bg-red-900/20 blur-[80px] md:blur-[120px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orange/Gold Accent Glow (Bottom Right) */}
        <motion.div
          className="absolute bottom-[-10%] right-[20%] w-[90vw] h-[90vw] md:w-[700px] md:h-[700px] rounded-full bg-[#b3001b]/10 blur-[60px] md:blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, -40, 0], opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>


      {/* --- Content Container --- */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center text-center max-w-4xl pt-20">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10 md:mb-12"
        >
          <img src="/logo.png" alt="1n1scalez" className="w-48 md:w-64 h-auto opacity-90 mx-auto" />
        </motion.div>

        {/* Editorial Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.05] md:leading-[1.1]">
          <span className="block mb-2">Ready to Book 5-10 Qualified</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 font-bold">
            Sales Calls This Month?
          </span>
        </h1>

        {/* Minimal Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          We build custom client acquisition systems with CRM automation, lead funnels, and website infrastructure—<br className="hidden md:block" />
          everything you need to scale without burning out.
        </motion.p>

        {/* Visual / Dashboard (Acting as Social Proof) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full max-w-5xl mb-16"
        >
          <AnalyticsDashboard />
        </motion.div>

        {/* Primary CTA - RED BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-16"
        >
          <button
            onClick={scrollToContact}
            className="px-10 py-4 bg-[#b3001b] hover:bg-[#920016] text-white rounded-lg text-lg font-medium transition-all shadow-cosmic hover:scale-105 flex items-center gap-2 group"
          >
            Get My Free Roadmap
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
