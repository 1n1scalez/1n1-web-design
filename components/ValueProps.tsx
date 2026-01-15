
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Sparkles } from 'lucide-react';

const props = [
  {
    icon: <Zap className="text-yellow-400" />,
    title: "Instant Integration",
    description: "Connect to every RSS feed, social profile, and newsletter with a single click. No manual sorting required.",
    bgColor: "bg-yellow-400/10"
  },
  {
    icon: <Shield className="text-blue-400" />,
    title: "Privacy First",
    description: "We don't track your reads or sell your habits. Your data stays on your device, always encrypted.",
    bgColor: "bg-blue-400/10"
  },
  {
    icon: <Sparkles className="text-purple-400" />,
    title: "AI Analysis",
    description: "Get smart summaries and trending insights across your entire feed using our locally-hosted LLM models.",
    bgColor: "bg-purple-400/10"
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
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all hover:bg-white/10"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${p.bgColor}`}>
                {p.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
