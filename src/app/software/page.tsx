"use client";

import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Zap, Globe, Cpu, Shield, Activity, Terminal as TerminalIcon } from 'lucide-react';

// Custom icons/svgs for specific visuals
const LineChart = () => (
  <svg viewBox="0 0 100 40" className="w-full h-full opacity-80">
    <path
      d="M0,35 Q10,32 20,36 T40,30 T60,38 T80,32 T100,35"
      fill="none"
      stroke="#555"
      strokeWidth="2"
      strokeDasharray="4 2"
    />
    <path
      d="M0,20 L100,20"
      fill="none"
      stroke="#0ea5e9"
      strokeWidth="2"
      className="drop-shadow-[0_0_8px_rgba(14,165,233,0.8)]"
    />
    <text x="5" y="15" fill="#0ea5e9" fontSize="6px" fontFamily="monospace">Reflex OS (0.5ms)</text>
    <text x="5" y="28" fill="#555" fontSize="6px" fontFamily="monospace">Std Linux</text>
  </svg>
);

export default function SoftwarePage() {

  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      <Navbar />

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="text-center z-10 max-w-5xl mx-auto mb-16">
           <motion.h1 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
           >
             Reflex OS<span className="text-cyan-500">.</span>
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-xl md:text-3xl text-gray-300 font-light mb-10 max-w-3xl mx-auto leading-relaxed"
           >
             {t('softwarePage.hero.subtitle')}
           </motion.p>
           

        </div>

        {/* Floating UI Screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 10 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative w-full max-w-6xl -mb-32 perspective-1000"
        >
          <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-[0_-20px_50px_-20px_rgba(6,182,212,0.2)] bg-[#0A0A0A]">
            <Image 
              src="/images/reflex_os_dashboard.png"
              alt="Reflex OS Interface"
              width={1800}
              height={1000}
              className="w-full h-auto opacity-90"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </section>

      {/* 2. Section: The Interface */}
      <section className="py-32 px-6 bg-gradient-to-b from-[#050505] to-[#0A0A0A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative">
             <motion.div
               initial={{ rotate: -5, y: 20, opacity: 0 }}
               whileInView={{ rotate: 0, y: 0, opacity: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true }}
             >
               <Image 
                 src="/images/flow_os_tablet_slam.png"
                 alt="Reflex OS Tablet SLAM"
                 width={800}
                 height={800}
                 className="w-full h-auto drop-shadow-2xl"
               />
             </motion.div>
          </div>
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{t('softwarePage.interface.title')}</h2>
            <p className="text-xl md:text-2xl text-cyan-400 font-mono border-l-2 border-cyan-500 pl-6">
              {t('softwarePage.interface.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Feature Bento Grid */}
      <section className="py-32 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">
             
             {/* Card 1: Kernel (Large Left) - Spans 2 rows, 1 col */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-2 md:row-span-2 p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-white/5 relative overflow-hidden group"
             >
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div>
                      <div className="flex items-center gap-3 mb-4 text-cyan-400">
                         <Zap className="w-6 h-6" />
                         <span className="font-mono text-sm tracking-wide">ZERO LATENCY</span>
                      </div>
                      <h3 className="text-4xl font-bold mb-4">{t('softwarePage.bento.kernel.title')}</h3>
                      <p className="text-gray-400 text-lg max-w-md">
                        {t('softwarePage.bento.kernel.desc')}
                      </p>
                   </div>
                   <div className="mt-12 h-48 w-full bg-black/40 rounded-xl p-4 border border-white/5">
                      <LineChart />
                   </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-cyan-500/10 transition-colors" />
             </motion.div>

             {/* Card 2: Languages (Top Right) */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-1 md:row-span-1 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 relative group overflow-hidden"
             >
               <div className="flex items-center gap-2 mb-4 text-green-400">
                 <Globe className="w-5 h-5" />
                 <span className="font-mono text-xs">NATIVE_SUPPORT</span>
               </div>
               <h3 className="text-2xl font-bold mb-6">{t('softwarePage.bento.native.title')}</h3>
               <div className="flex gap-4 font-bold text-3xl font-mono text-white/20">
                  <span className="group-hover:text-sky-400 group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.5)] transition-all duration-300">C++</span>
                  <span className="group-hover:text-orange-400 group-hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.5)] transition-all duration-300 delay-75">Rust</span>
                  <span className="group-hover:text-yellow-400 group-hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.5)] transition-all duration-300 delay-150">Python</span>
               </div>
             </motion.div>

             {/* Card 3: Sim-to-Real (Bottom Right) */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="md:col-span-1 md:row-span-1 p-8 rounded-3xl bg-zinc-900/50 border border-white/5 relative group overflow-hidden"
             >
                <div className="flex items-center gap-2 mb-4 text-purple-400">
                  <Activity className="w-5 h-5" />
                  <span className="font-mono text-xs">SIM_TWIN</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('softwarePage.bento.sim.title')}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t('softwarePage.bento.sim.desc')}
                </p>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Code Section */}
      <section className="py-32 px-6 bg-[#050505] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
           <div className="w-full lg:w-1/2">
             <h2 className="text-5xl md:text-6xl font-bold mb-8" dangerouslySetInnerHTML={{ __html: t('softwarePage.code.title') }} />
             <div className="flex gap-4 mb-8">
               <div className="w-12 h-1 bg-cyan-500 rounded-full" />
               <div className="w-2 h-1 bg-gray-700 rounded-full" />
               <div className="w-2 h-1 bg-gray-700 rounded-full" />
             </div>
             <p className="text-gray-400 text-lg leading-relaxed">
               {t('softwarePage.code.desc')}
             </p>
           </div>
           
           <div className="w-full lg:w-1/2">
             <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-white/10 shadow-2xl font-mono relative group">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-white/5">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#fa7970]" />
                    <div className="w-3 h-3 rounded-full bg-[#faa356]" />
                    <div className="w-3 h-3 rounded-full bg-[#7ce38b]" />
                  </div>
                  <div className="text-xs text-gray-500">obstacle_avoidance.py</div>
                </div>
                <div className="p-6 overflow-x-auto text-sm md:text-base leading-relaxed">
<pre className="text-gray-300">
<span className="text-[#ff7b72]">import</span> obsidian.reflex <span className="text-[#ff7b72]">as</span> reflex

<span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">on_obstacle_detected</span>(obj):
    <span className="text-[#8b949e]">{t('softwarePage.code.comment')}</span>
    robot.<span className="text-[#d2a8ff]">stop</span>(force=<span className="text-[#79c0ff]">True</span>)
    path = reflex.<span className="text-[#d2a8ff]">replan</span>(target=<span className="text-[#a5d6ff]">"dock_station"</span>)
    robot.<span className="text-[#d2a8ff]">move</span>(path)

robot.vision.<span className="text-[#d2a8ff]">bind</span>(on_obstacle_detected)
</pre>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* 5. Technical Specs (Bottom Bar) */}
      <section className="py-12 border-t border-white/10 bg-black">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
               <Cpu className="w-6 h-6 text-cyan-500" />
               <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Kernel</div>
                  <div className="font-semibold text-lg">Real-time Microkernel</div>
               </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
               <TerminalIcon className="w-6 h-6 text-green-500" />
               <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Compatibility</div>
                  <div className="font-semibold text-lg">ROS 2 Bridge Supported</div>
               </div>
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-start">
               <Shield className="w-6 h-6 text-purple-500" />
               <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Security</div>
                  <div className="font-semibold text-lg">TEE (Trusted Execution Env)</div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
