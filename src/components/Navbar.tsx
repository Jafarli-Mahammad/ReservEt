'use client';

import React from 'react';
import { Calendar, Search, LayoutDashboard, Shield, Sparkles } from 'lucide-react';
import { Role } from '../types';
import { Language } from '../lib/i18n';

interface NavbarProps {
  role: Role;
  setRole: (role: Role) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenRegister: () => void;
  onLogoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  role,
  setRole,
  lang,
  setLang,
  onOpenRegister,
  onLogoClick,
}) => {
  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        
        {/* BRAND LOGO */}
        <div onClick={onLogoClick} className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-600 to-cyan-400 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-sky-400">
              Rezerv<span className="text-sky-400">.az</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider font-semibold uppercase -mt-1">
              Booking Engine
            </span>
          </div>
        </div>

        {/* ROLE TOGGLE SWITCHER */}
        <div className="hidden md:flex items-center p-1 rounded-xl bg-[#151C2C] border border-gray-800">
          <button
            onClick={() => setRole('customer')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              role === 'customer' ? 'bg-sky-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            Müştəri (Axtarış)
          </button>
          <button
            onClick={() => setRole('professional')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              role === 'professional' ? 'bg-sky-500 text-white shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            Mütəxəssis Kabineti
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              role === 'admin' ? 'bg-purple-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            Super Admin
          </button>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#151C2C] border border-gray-800 rounded-lg p-0.5 text-xs font-medium">
            {(['az', 'en', 'ru'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 rounded ${
                  lang === l ? 'bg-gray-800 text-sky-400 font-bold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            onClick={onOpenRegister}
            className="px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white shadow-lg shadow-sky-500/25 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4" />
            Mütəxəssis Ol
          </button>
        </div>
      </div>
    </header>
  );
};
