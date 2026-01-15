
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 max-w-4xl mx-auto' 
            : 'bg-transparent'
        }`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center">
              <span className="text-black font-black text-xs">A</span>
            </div>
            <span className="text-xl font-bold tracking-tight">ALCOVE</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Stories</a>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition-all">
              Sign Up
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4 text-center">
              <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Stories</a>
              <button className="bg-white text-black px-6 py-3 rounded-full font-semibold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
