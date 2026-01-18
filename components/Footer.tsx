import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md flex items-center justify-center overflow-hidden">
              <img src="/1n1scalez.webp" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-bold tracking-tight text-white font-atkinson">1N1SCALEZ</span>
          </div>

          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="flex gap-6 text-gray-400">
            <a href="https://www.instagram.com/1n1scalez?igsh=aWhra2d6aHBtNHBq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/1BS5V9ujY1/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-gray-600">
          © 2025 1n1scalez. All rights reserved. Built for scale.
        </div>
      </div>
    </footer>
  );
};
