
import React from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll reach out soon.");
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-purple-500/20 blur-[80px] rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageSquare className="text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">Let's talk about your space.</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you have a team to onboard or just want to suggest a feature, we're all ears. Expect a reply within 24 hours.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  Currently onboarding new users
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  24/7 technical support available
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-white/30 transition-all outline-none" 
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Company</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-white/30 transition-all outline-none" 
                    placeholder="Acme Inc."
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-white/30 transition-all outline-none" 
                  placeholder="jane@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Message</label>
                <textarea 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-4 focus:border-white/30 transition-all outline-none h-32 resize-none" 
                  placeholder="What's on your mind?"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
