
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-widest mb-8"
        >
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          Loved by 2,000+ creators
        </motion.div>

        {/* Hook */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto"
        >
          The ultimate space for your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">creative flow.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Curate, organize, and analyze your digital workspace without the noise. Built for designers, developers, and thinkers who demand pure focus.
        </motion.p>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-all hover:pr-10">
            Start Creating Free
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
          </button>
          <button className="px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 rounded-full font-bold text-lg transition-all">
            See it in Action
          </button>
        </motion.div>

        {/* Hero Visual Block */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 h-full" />
          <div className="relative p-1 bg-gradient-to-b from-white/20 to-transparent rounded-2xl">
            <img 
              src="https://picsum.photos/1200/800?grayscale" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full border border-white/5 shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
