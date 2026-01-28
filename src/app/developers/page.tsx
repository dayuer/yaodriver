"use client";

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { toast } from 'sonner';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { Terminal, Cpu, MessageSquare } from 'lucide-react';

export default function DevelopersPage() {
  const { t } = useTranslation();

  const cards = [
    {
      key: 'docs',
      icon: <Terminal className="w-8 h-8 text-green-500" />,
      color: "border-green-500/20 bg-green-500/5 hover:bg-green-500/10"
    },
    {
      key: 'sdk',
      icon: <Cpu className="w-8 h-8 text-blue-500" />,
      color: "border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10"
    },
    {
      key: 'community',
      icon: <MessageSquare className="w-8 h-8 text-purple-500" />,
      color: "border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white font-mono selection:bg-green-500/30 selection:text-green-200">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-24 min-h-[60vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-900/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-4xl"
        >
          <div className="inline-block px-3 py-1 mb-6 border border-green-500/30 rounded-full text-green-400 text-xs tracking-widest bg-green-500/5">
            OBSIDIAN_DEV_PORTAL_V2.0
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-8 tracking-tighter">
            {t('developersPage.hero.headline')}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t('developersPage.hero.subtext')}
          </p>
        </motion.div>
      </section>

      {/* Cards Grid */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`p-8 rounded-2xl border ${card.color} transition-all duration-300 group cursor-pointer`}
            >
              <div className="mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">{t(`developersPage.${card.key}.title`)}</h3>
              
              {/* Special content for SDK card */}
              {card.key === 'sdk' ? (
                <div className="space-y-4">
                  <div className="text-gray-400 text-sm">{t('developersPage.sdk.multilang')}</div>
                  <div className="text-gray-500 text-xs pt-4 border-t border-white/5">
                    {t('developersPage.sdk.simulator')}
                  </div>
                </div>
              ) : (
                <p className="text-gray-400 text-sm leading-relaxed">
                  {/* For docs and community, we use 'text' key. For sdk, handled above. 
                      Actually community just has 'text' in my design. Docs has 'title' and 'text'.
                  */}
                  {t(`developersPage.${card.key}.text`) || t(`developersPage.${card.key}.desc`)}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Code Snippet Section */}
      <section className="py-24 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('developersPage.cta.title')}</h2>
              <p className="text-gray-400 mb-8">
                {t('developersPage.cta.desc')}
              </p>
         <div className="flex gap-4">
                 <button 
                    onClick={() => toast(t('developersPage.cta.toast.title'), { description: t('developersPage.cta.toast.desc') })}
                    className="px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors"
                 >
                    {t('developersPage.cta.download')}
                 </button>
                 <a href="https://github.com" target="_blank" className="px-6 py-3 border border-white/20 text-white font-mono rounded hover:bg-white/10 transition-colors inline-block text-center">
                    {t('developersPage.cta.github')}
                 </a>
              </div>
            </div>
            
            {/* Fake Code Editor */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="rounded-xl overflow-hidden bg-[#111] border border-white/10 shadow-2xl font-mono text-sm"
            >
               <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
                  <div className="flex gap-1.5">
                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="ml-2 text-xs text-gray-500">control_loop.rs</span>
               </div>
               <div className="p-6 text-gray-300 overflow-x-auto">
                  <pre>
{`use obsidian_core::prelude::*;

#[no_mangle]
pub extern "C" fn control_tick(
    joints: &mut [f32; 6], 
    torque: &mut [f32; 6]
) -> Status {
    // Zero-copy access to sensor buffer
    let sensors = unsafe { 
        Sensors::from_ptr(0x4000_0000) 
    };

    // Calculate inverse dynamics (0.02ms)
    let dynamics = Physics::solve_id(
        joints, 
        sensors.gravity_vector
    );
    
    // Apply safety limits
    torque.copy_from_slice(&dynamics.clamp(
        -MAX_TORQUE, 
        MAX_TORQUE
    ));

    Status::Ok
}`}
                  </pre>
               </div>
            </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
