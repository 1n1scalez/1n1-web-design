
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'
        }`}
    >
      <div className="container mx-auto px-6">
        <nav className={`flex items-center justify-center transition-all duration-500 ${isScrolled
          ? 'bg-brand-black/60 backdrop-blur-xl border border-white/5 rounded-full px-6 py-3 max-w-4xl mx-auto shadow-glass'
          : 'bg-transparent'
          }`}>
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="1N1SCALEZ" className="h-14 md:h-24 w-auto object-contain" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
