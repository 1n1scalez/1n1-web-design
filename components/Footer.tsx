
import React from 'react';
import { Twitter, Instagram, Github, Youtube } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-black/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
              <span className="text-black font-black text-[10px]">A</span>
            </div>
            <span className="text-lg font-bold tracking-tight">ALCOVE</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>

          <div className="flex gap-6 text-gray-400">
            <Twitter size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Github size={20} className="hover:text-white cursor-pointer transition-colors" />
            <Youtube size={20} className="hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-gray-600">
          © 2025 Alcove Inc. All rights reserved. Designed for peace of mind.
        </div>
      </div>
    </footer>
  );
};
