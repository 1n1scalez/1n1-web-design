import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Clock } from 'lucide-react';


const props = [
  {
    icon: <Users className="text-blue-400" />,
    title: "The Referral Trap",
    description: "You can’t pay qualified staff with \"hope.\" Referrals are inconsistent. We install a predictable faucet of leads that flows on demand.",
    bgColor: "bg-blue-400/10"
  },
  {
    icon: <TrendingUp className="text-[#b3001b]" />,
    title: "The Revenue Ceiling",
    description: "Stuck at $30k/mo? We break your ceiling by taking your winning offer and broadcasting it to thousands of fresh, qualified prospects.",
    bgColor: "bg-[#b3001b]/10"
  },
  {
    icon: <Clock className="text-purple-400" />,
    title: "CRM & Tech Control",
    description: "Leads mean nothing if they slip through the cracks. We set up your entire CRM, automation, and follow-up infrastructure so no opportunity is lost.",
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
              className="h-full"
            >
              <div className="h-full bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col hover:bg-white/10 transition-colors">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${p.bgColor}`}>
                  {p.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-gray-400 leading-relaxed flex-grow">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
