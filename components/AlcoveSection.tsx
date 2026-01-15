
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const AlcoveSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Replicating the soft eye-catching luminescence */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[400px] bg-white/[0.03] blur-[120px] rounded-[100%]" />
      </div>
      
      <div className="container relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-12"
        >
          <img 
            src="https://framerusercontent.com/images/Z0uikyX7ZP9ZUDE1GGlLX2tIZtQ.png" 
            alt="Alcove Logo" 
            className="w-40 md:w-48 h-auto mx-auto drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-8 leading-[0.9]"
        >
          A <span className="opacity-60">quiet</span> place to <br />
          <span className="font-serif-italic">see what's new.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light mb-12"
        >
          Alcove is the best way to keep up with your favourite websites, newsletters, and subscriptions, without the noise.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-8"
        >
           <div className="max-w-md w-full p-1 bg-white/5 border border-white/10 rounded-full flex backdrop-blur-sm focus-within:border-white/20 transition-all">
              <input 
                type="email" 
                placeholder="Join the quiet revolution..." 
                className="bg-transparent border-none outline-none flex-1 px-6 py-3 text-white placeholder:text-white/20 text-sm md:text-base"
              />
              <button className="bg-white text-black px-6 md:px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-all whitespace-nowrap">
                Get Early Access
              </button>
           </div>
           <p className="text-xs text-white/30 tracking-widest uppercase font-bold">No spam • No noise • Pure focus</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 animate-bounce"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};
