import React, { useState, useEffect } from 'react';
import { Palette, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const THEMES = [
  { name: 'Cyber Blue', primary: '#00D4FF', secondary: '#7B61FF', bg: '#05070F' },
  { name: 'Neon Mint', primary: '#00FF87', secondary: '#00A86B', bg: '#040B07' },
  { name: 'Sunset Flare', primary: '#FF5E36', secondary: '#FF007F', bg: '#0E0407' },
  { name: 'Vaporwave', primary: '#FF71CE', secondary: '#01CDFE', bg: '#0B0414' },
  { name: 'Solar Flare', primary: '#FFE600', secondary: '#FF5100', bg: '#0F0600' },
  { name: 'Toxic Acid', primary: '#DFFF00', secondary: '#1E5631', bg: '#060B02' },
  { name: 'Crimson Venom', primary: '#FF0D50', secondary: '#990000', bg: '#0F0003' },
  { name: 'Deep Ocean', primary: '#0052D4', secondary: '#4364F7', bg: '#000A1A' },
  { name: 'Cyber Gold', primary: '#F5E050', secondary: '#FFBF00', bg: '#0B0A03' },
  { name: 'Plum Orchid', primary: '#FF007F', secondary: '#DA70D6', bg: '#0F020C' }
];

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('Cyber Blue');

  // Load saved theme
  useEffect(() => {
    const savedThemeName = localStorage.getItem('jerphin_theme');
    if (savedThemeName) {
      const match = THEMES.find(t => t.name === savedThemeName);
      if (match) {
        applyTheme(match);
      }
    }
  }, []);

  const applyTheme = (theme) => {
    setActiveTheme(theme.name);
    document.documentElement.style.setProperty('--color-primary', theme.primary);
    document.documentElement.style.setProperty('--color-secondary', theme.secondary);
    document.documentElement.style.setProperty('--color-bg', theme.bg || '#05070F');
    localStorage.setItem('jerphin_theme', theme.name);
  };

  return (
    <div className="fixed bottom-6 left-6 z-45 font-code">
      {/* Floating Toggle Icon */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3.5 rounded-full bg-gradient-to-r from-primary to-secondary text-black shadow-glow-blue cursor-pointer flex items-center justify-center"
        title="Customize Theme accents"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
      </motion.button>

      {/* Floating Theme Grid Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-16 left-0 p-5 rounded-2xl glass-card w-64 border border-white/10 shadow-2xl space-y-4"
          >
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">Accents Matrix</h4>
              <p className="text-[9px] text-gray-500 mt-1 leading-normal">
                Select a cybernetic palette to remap the system accent colors.
              </p>
            </div>

            {/* Grid of colors */}
            <div className="grid grid-cols-5 gap-3">
              {THEMES.map((theme) => {
                const isActive = activeTheme === theme.name;
                return (
                  <button
                    key={theme.name}
                    onClick={() => applyTheme(theme)}
                    className={`relative w-8 h-8 rounded-full border cursor-pointer flex items-center justify-center transition-all ${
                      isActive ? 'border-white scale-110' : 'border-transparent hover:scale-105'
                    }`}
                    style={{
                      background: `linear-gradient(135deg, ${theme.primary} 50%, ${theme.secondary} 50%)`,
                      boxShadow: isActive ? `0 0 10px ${theme.primary}` : 'none'
                    }}
                    title={theme.name}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-black shadow" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="text-[9px] text-gray-600 border-t border-white/5 pt-2 text-right">
              ACTIVE_SYS: {activeTheme.toUpperCase()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
