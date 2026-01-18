import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, TrendingUp } from 'lucide-react';


const props = [
  {
    icon: <Users className="text-blue-400" />,
    problem: "You're stuck relying on referrals and word-of-mouth. It works... until it doesn't.",
    solution: "We build predictable lead generation systems that deliver qualified prospects every week—no more feast or famine.",
    bgColor: "bg-blue-400/10"
  },
  {
    icon: <Settings className="text-purple-400" />,
    problem: "Your leads slip through the cracks because you're juggling spreadsheets, sticky notes, and half-built systems.",
    solution: "We set up complete CRM automation and follow-up workflows so every lead is nurtured and nothing falls through.",
    bgColor: "bg-purple-400/10"
  },
  {
    icon: <TrendingUp className="text-[#b3001b]" />,
    problem: "You're working 60-hour weeks but still can't break past your revenue ceiling.",
    solution: "We scale your lead flow with proven systems and infrastructure—more clients without more hustle.",
    bgColor: "bg-[#b3001b]/10"
  }
];

export const ValueProps: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {props.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${p.bgColor}`}>
                  {p.icon}
                </div>
                <p className="text-white font-semibold text-lg mb-4 leading-snug">
                  {p.problem}
                </p>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {p.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
