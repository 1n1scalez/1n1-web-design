
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const StarField: React.FC = () => {
  const stars = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
      <motion.div
        className="absolute inset-0 flex"
        style={{ willChange: 'transform' }}
        animate={{
          x: ["0%", "-100%"]
        }}
        transition={{
          duration: 240,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="relative w-full h-full flex-shrink-0">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute bg-white rounded-full"
              style={{
                width: star.size,
                height: star.size,
                top: star.top,
                left: star.left,
                opacity: star.opacity * 0.8, // Reduced opacity for subtlety
                boxShadow: star.size > 2 ? '0 0 10px white' : 'none'
              }}
            />
          ))}
        </div>
        <div className="relative w-full h-full flex-shrink-0">
          {stars.map((star) => (
            <div
              key={`repeat-${star.id}`}
              className="absolute bg-white rounded-full"
              style={{
                width: star.size,
                height: star.size,
                top: star.top,
                left: star.left,
                opacity: star.opacity * 0.8,
                boxShadow: star.size > 2 ? '0 0 10px white' : 'none'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Soft luminescence overlay as requested */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/50 to-brand-dark pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full h-1/2 bg-glow-cosmic blur-[150px] rounded-full pointer-events-none opacity-40" />
    </div>
  );
};
