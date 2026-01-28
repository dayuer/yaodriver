"use client";

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Brain, Cpu, PenTool } from 'lucide-react';
import Image from 'next/image';

export default function CareersPage() {
  const { t } = useTranslation();

  const positions = [
    {
      key: 'perception',
      icon: <Brain className="w-5 h-5" />,
      tag: "Algorithm"
    },
    {
      key: 'kernel',
      icon: <Cpu className="w-5 h-5" />,
      tag: "System"
    },
    {
      key: 'designer',
      icon: <PenTool className="w-5 h-5" />,
      tag: "Design"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-100">
      <Navbar />
      
      {/* Dark Navbar override style could be needed if Navbar assumes dark bg always, 
          but simpler to just wrap this page in dark mode or keep page dark.
          User request said "Black and white photo", style "Humanistic".
          Let's stick to black theme for consistency with brand, but maybe lighter sections?
          Actually, "Obsidian" brand is quite dark. Let's keep it dark mode for coherence, 
          but use the B&W photo as requested. 
          Wait, user request said "Careers & Research... Style: Humanistic, large B&W photos". 
          Can still be dark UI. 
      */}
      
      <div className="fixed inset-0 bg-black -z-50" />

      <section className="relative pt-32 pb-24 px-6 min-h-[70vh] flex flex-col justify-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Placeholder for B&W photo of engineer */}
           <div className="w-full h-full bg-zinc-900 overflow-hidden relative">
             <Image 
               src="/images/careers_hero.png" 
               alt="Engineer working"
               fill
               className="object-cover grayscale"
               priority
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black" />
           </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-9xl font-bold text-white mb-6 tracking-tighter"
            >
              {t('careersPage.hero.headline')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 max-w-2xl leading-relaxed"
            >
              {t('careersPage.hero.subtext')}
            </motion.p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-mono text-gray-500 mb-12 uppercase tracking-widest">{t('careersPage.labels.open_positions')}</h2>
          
          <div className="border-t border-white/20">
            {positions.map((pos, idx) => (
              <motion.div 
                key={pos.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer px-4 -mx-4 rounded-xl"
              >
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="p-2 bg-white/10 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                      {pos.icon}
                    </span>
                    <h3 className="text-2xl font-bold">{t(`careersPage.positions.${pos.key}.title`)}</h3>
                  </div>
                  <p className="text-gray-400 pl-12">{t(`careersPage.positions.${pos.key}.desc`)}</p>
                </div>
                
                <div className="flex items-center gap-4 pl-12 md:pl-0">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-xs font-mono uppercase">
                    {t(`careersPage.labels.tags.${pos.tag}`)}
                  </span>
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-32 px-6 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
           <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-4xl md:text-6xl font-bold mb-24 max-w-4xl"
           >
             {t('careersPage.research.headline')}
           </motion.h2>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
             {['topic1', 'topic2'].map((topic, i) => (
               <div key={topic} className="relative pl-8 border-l-2 border-white/20 hover:border-white transition-colors py-2">
                 <span className="absolute top-0 left-0 -ml-[9px] -mt-2 text-4xl font-black text-zinc-800">
                    0{i + 1}
                 </span>
                 <h3 className="text-2xl font-bold mb-4">{t(`careersPage.research.${topic}.title`)}</h3>
                 <p className="text-gray-400 leading-relaxed">
                   {t(`careersPage.research.${topic}.desc`)}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
