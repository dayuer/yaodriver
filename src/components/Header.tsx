"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { Diamond, Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import '../i18n';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('en') ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
    toast.success(newLang === 'en' ? 'Switched to English' : '已切换至中文');
  };

  const navItems = mounted ? [
    { name: t('nav.core'), href: '/hardware' },
    { name: t('nav.flow'), href: '/software' },
    { name: t('nav.solutions'), href: '/solutions' },
    { name: t('nav.vision'), href: '/company' },
  ] : [];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer relative z-[60]">
          <Diamond className="w-6 h-6 text-white fill-white" />
          <span className="text-xl font-bold tracking-tight text-white uppercase tracking-[0.2em] text-xs">Obsidian</span>
        </Link>

        {/* Center: Nav Items (Desktop) */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors duration-200 ${
                pathname === item.href ? 'text-white' : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-6 relative z-[60]">
          <button 
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-gray-500 hover:text-white transition-colors"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{mounted ? (i18n.language.startsWith('en') ? 'CN' : 'EN') : '...'}</span>
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-black flex flex-col justify-center px-10 md:hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            
            <nav className="flex flex-col gap-8 relative z-10">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link 
                    href={item.href} 
                    className={`text-4xl font-bold tracking-tighter ${pathname === item.href ? 'text-white' : 'text-zinc-600'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-20 pt-10 border-t border-white/10 flex flex-col gap-6 relative z-10"
            >
              <button 
                onClick={toggleLanguage} 
                className="flex items-center gap-3 text-zinc-400 text-sm font-bold uppercase tracking-widest"
              >
                <Globe size={18} />
                <span>{i18n.language.startsWith('en') ? 'Switch to Chinese' : 'Switch to English'}</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
