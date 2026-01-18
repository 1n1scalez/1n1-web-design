import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';


const testimonials = [
  {
    name: "Jay Hutch",
    image: "/JayHutchLogo.webp",
    text: "1n1scalez revolutionized my photography business. I stopped chasing clients and started booking high-ticket shoots. My calendar is now consistently filled with qualified leads while I focus on creating.",
    rating: 5
  },
  {
    name: "Zone Constructions",
    image: "/Zonelogo.webp",
    text: "Our schedule for underpinnings and basement finishes is fully booked for the next 6 months. 1n1scalez understood the construction market perfectly and delivered serious, high-value projects.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black relative z-30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-2 text-center relative py-10">

          {/* Gradient Heart Element */}
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[450px] md:h-[450px] pointer-events-none z-0 select-none">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]">
              <defs>
                {/* Purple to Blue Gradient Stroke */}
                <linearGradient id="heartTracerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />  {/* Purple-500 */}
                  <stop offset="100%" stopColor="#3b82f6" /> {/* Blue-500 */}
                </linearGradient>
              </defs>

              {/* Base Track (Subtle) */}
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="#ffffff"
                strokeOpacity="0.05"
                strokeWidth="0.5"
              />

              {/* Animated Tracer */}
              <path
                className="tracer-path"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                stroke="url(#heartTracerGradient)"
                strokeWidth="0.3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="relative z-10 pt-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">People love <span className="font-atkinson tracking-tight">1N1SCALEZ</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">We don't sell promises. We sell predictable revenue infrastructure.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <div className="p-8 h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-white/10" />
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4 flex-grow">"{t.text}"</p>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
