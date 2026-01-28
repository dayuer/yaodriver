"use client";

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { Database, CloudOff } from 'lucide-react';

export default function PrivacyPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-200">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6 min-h-[60vh] flex flex-col items-center justify-center">
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="mb-12 w-24 h-24 rounded-full bg-white/5 flex items-center justify-center relative"
        >
             <Database className="w-10 h-10 text-white" />
             <div className="absolute -bottom-2 -right-2 bg-red-500 p-2 rounded-full border-4 border-black">
                 <CloudOff className="w-4 h-4 text-white" />
             </div>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {t('legal.privacy.title')}
            </h1>
            <p className="text-xl text-blue-400 font-mono mb-12">
                {t('legal.privacy.subtitle')}
            </p>
            
            <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 md:p-12 text-left">
                <p className="text-gray-300 text-lg leading-relaxed">
                    {t('legal.privacy.text')}
                </p>
            </div>
            
            <p className="mt-12 text-sm text-gray-500">
                {t('legal.meta.last_updated')}  2026-01-01
            </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
