
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Rivera",
    handle: "@arivera_creative",
    image: "https://picsum.photos/100/100?random=1",
    text: "Alcove has completely changed my morning routine. I can finally see the news that matters without being bombarded by ads and algorithms.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    handle: "@sarahc_dev",
    image: "https://picsum.photos/100/100?random=2",
    text: "The cleanest interface I've ever used. The focus mode is a game changer for deep research sessions.",
    rating: 5
  },
  {
    name: "Marcus Thorne",
    handle: "@mthorne_design",
    image: "https://picsum.photos/100/100?random=3",
    text: "Finally, a reader that respects my privacy and my eyes. The dark mode is impeccably designed.",
    rating: 5
  },
  {
    name: "Jordan Vance",
    handle: "@jvance_news",
    image: "https://picsum.photos/100/100?random=4",
    text: "If you care about information quality, you need Alcove. It's the only place I trust for my daily digest.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    handle: "@erossi_art",
    image: "https://picsum.photos/100/100?random=5",
    text: "Minimalism done right. No noise, just the content I chose to subscribe to. Simply beautiful.",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16 text-center">
           <div className="relative mb-8">
              <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full" />
              <Heart className="relative text-red-500 fill-red-500" size={48} />
           </div>
           <h2 className="text-4xl md:text-5xl font-bold mb-6">People love the silence.</h2>
           <p className="text-gray-400 max-w-xl mx-auto">Join thousands of curators who have already switched to a more peaceful way of experiencing the web.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="break-inside-avoid bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full ring-2 ring-white/10" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-xs text-purple-400 font-semibold">{t.handle}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">"{t.text}"</p>
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
