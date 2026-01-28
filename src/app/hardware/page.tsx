"use client";

import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function HardwarePage() {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const explodedRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: explodedScroll } = useScroll({
    target: explodedRef,
    offset: ["start start", "end end"]
  });

  // Exploded View Transforms
  // We want the separation to happen as we scroll through the locked section
  const topY = useTransform(explodedScroll, [0.2, 0.8], [0, -150]);
  const bottomY = useTransform(explodedScroll, [0.2, 0.8], [0, 150]);
  const chipScale = useTransform(explodedScroll, [0.2, 0.5, 0.8], [0.8, 1.1, 1]);
  const chipGlow = useTransform(explodedScroll, [0.3, 0.5, 0.7], [0, 1, 0]);
  const labelsOpacity = useTransform(explodedScroll, [0.4, 0.5, 0.6], [0, 1, 1]);

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-green-500/30">
      <Navbar />

      {/* 1. Hero Section: The Monolith */}
      <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ rotate: heroRotate, scale: heroScale }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
             {/* Gradient overlay for expensive dark feel */}
             <div className="absolute inset-0 bg-radial-gradient from-transparent to-black z-10 opacity-60" />
             <Image 
                src="/images/hardware_monolith-v6.png"
                alt="O-1 Edge Module"
                fill
                className="object-cover md:object-contain"
                priority
             />
          </motion.div>
        </div>
        
        <div className="relative z-20 text-center max-w-4xl px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(6rem,30vw,22rem)] md:text-[22vw] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-800"
          >
            O-1
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
          >
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-3xl text-emerald-500 font-light mt-4 uppercase"
          >
            {t('hardwarePage.hero.subtitle')}
          </motion.p>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.7 }}
             transition={{ delay: 1, duration: 1 }}
             className="text-sm md:text-base text-gray-400 mt-2 font-mono"
          >
            {t('hardwarePage.hero.subtext')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center"
          >
            {[
              { value: t('hardwarePage.hero.specs.tops'), label: "Int8 Performance" },
              { value: t('hardwarePage.hero.specs.power'), label: "TDP" },
              { value: t('hardwarePage.hero.specs.dependency'), label: "Cloud" }
            ].map((spec, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-4xl md:text-6xl font-[200] tracking-tight text-white mb-2">{spec.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 2. Section: The Material */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[50vh] md:h-auto bg-neutral-900 border-r border-white/5">
           <Image 
              src="/images/hardware_material.png"
              alt="Aluminum Texture"
              fill
              className="object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80 md:bg-gradient-to-l md:from-black md:to-transparent" />
        </div>
        
        <div className="flex flex-col justify-center p-12 md:p-24 bg-black">
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-[10vw] font-bold mb-12 leading-[0.8] tracking-tighter"
            dangerouslySetInnerHTML={{ __html: t('hardwarePage.material.title') }}
          />
          <p className="text-orange-500 font-mono text-sm tracking-[0.4em] mb-12 uppercase">
            {t('hardwarePage.material.subtitle')}
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-gray-300 leading-relaxed max-w-md"
          >
            <p>
              {t('hardwarePage.material.p1')}
            </p>
            <p>
              {t('hardwarePage.material.p2')}
            </p>
            <p className="text-white font-medium border-l-2 border-emerald-500 pl-4">
              {t('hardwarePage.material.highlight')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Section: Exploded View (Scroll Trigger) */}
      <section ref={explodedRef} className="h-[300vh] relative bg-[#050505]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden perspective-1000">
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] flex items-center justify-center perspective-origin-center transform-style-3d">
            
            {/* Global Ambient Glow */}
            <motion.div 
               style={{ opacity: chipGlow }}
               className="absolute inset-0 bg-emerald-500/10 blur-[80px] rounded-full z-0 pointer-events-none"
            />
          
            {/* --- Layer 1: Heatsink (Top) --- */}
            <motion.div 
              style={{ y: topY, z: 100 }} 
              className="absolute z-40 w-full h-full drop-shadow-2xl"
            >
              <Image 
                src="/images/hardware_layer_top.png" 
                alt="Heatsink Armour" 
                fill 
                className="object-contain filter contrast-125 brightness-90" 
              />
              {/* Label */}
              <motion.div 
                style={{ opacity: labelsOpacity }}
                className="absolute right-[-30%] top-[20%] text-right hidden md:block"
              >
                 <div className="flex items-center justify-end gap-2">
                    <div>
                        <div className="text-sm font-bold text-white tracking-widest">{t('hardwarePage.exploded.armour.label')}</div>
                        <div className="text-xs font-mono text-gray-500">{t('hardwarePage.exploded.armour.desc')}</div>
                    </div>
                    <div className="w-12 h-[1px] bg-white/20" />
                    <div className="w-2 h-2 rounded-full border border-white/50 bg-black" />
                 </div>
              </motion.div>
            </motion.div>

            {/* --- Layer 2: EMI Shielding (Middle) --- */}
            <motion.div 
              style={{ y: useTransform(explodedScroll, [0.2, 0.8], [0, -50]), rotateX: 45, scale: 0.9 }} 
              className="absolute z-30 w-[85%] h-[85%] border-[1px] border-emerald-500/30 bg-emerald-900/5 backdrop-blur-[1px] rounded-xl"
            >
               <div className="absolute inset-0 border border-white/5 rounded-xl opacity-50" />
               <div className="absolute inset-2 border border-dashed border-emerald-500/20 rounded-lg" />
            </motion.div>

            {/* --- Layer 3: Neural Core (Chip) --- */}
            <motion.div 
              style={{ scale: chipScale }}
              className="absolute z-20 w-[50%] h-[50%]"
            >
              <Image 
                src="/images/hardware_layer_chip.png" 
                alt="Neural Core" 
                fill 
                className="object-contain drop-shadow-[0_0_30px_rgba(16,185,129,0.4)]" 
              />
              
              {/* Chip Label */}
              <motion.div 
                style={{ opacity: labelsOpacity }}
                className="absolute left-[-120%] top-[50%] w-[300px] hidden md:flex items-center justify-end pr-4 pointer-events-none"
              > 
                 <div className="text-right mr-4">
                    <div className="text-2xl font-bold text-emerald-400">{t('hardwarePage.exploded.npu.label')}</div>
                    <div className="text-xs font-mono text-emerald-200/60">{t('hardwarePage.exploded.npu.desc')}</div>
                 </div>
                 <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-emerald-500" />
                 <div className="w-1.5 h-1.5 bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              </motion.div>
            </motion.div>

            {/* --- Layer 4: PCB Mainboard (Synthetic Bottom) --- */}
            <motion.div 
              style={{ y: bottomY, rotateX: 60, scale: 1.1 }}
              className="absolute z-10 w-[90%] h-[90%] bg-neutral-900 rounded-lg border border-neutral-800 shadow-2xl"
            >
               {/* Surface Details simulating PCB */}
               <div className="absolute inset-0 opacity-40">
                   <Image src="/images/hardware_material.png" alt="PCB Texture" fill className="object-cover opacity-50 mix-blend-overlay" />
                   {/* Circuit Lines Pattern */}
                   <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#333_10px,#333_11px)] opacity-20" />
               </div>
               
               {/* Gold Pins / Connectors */}
               <div className="absolute left-0 bottom-10 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-600/50 to-transparent" />
               <div className="absolute top-10 right-10 w-12 h-12 border border-yellow-600/30 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border border-yellow-600/30 rounded-full" />
               </div>
               
               {/* I/O Label */}
               <motion.div 
                style={{ opacity: labelsOpacity }}
                className="absolute right-[-40%] bottom-[20%] text-right hidden md:block"
              >
                 <div className="flex items-center justify-start gap-2">
                    <div className="w-2 h-2 rounded-full border border-blue-500/50 bg-black" />
                    <div className="w-12 h-[1px] bg-blue-500/20" />
                    <div className="text-left">
                        <div className="text-sm font-bold text-blue-400 tracking-widest">{t('hardwarePage.exploded.mainboard.label')}</div>
                        <div className="text-xs font-mono text-gray-500">{t('hardwarePage.exploded.mainboard.desc')}</div>
                    </div>
                 </div>
              </motion.div>
            </motion.div>

          </div>
          
          <div className="absolute bottom-12 text-center z-50">
             <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-white/90">{t('hardwarePage.exploded.cta.title')}</h3>
             <p className="text-gray-600 text-xs md:text-sm font-mono uppercase tracking-widest">{t('hardwarePage.exploded.cta.subtitle')}</p>
          </div>
        </div>
      </section>

      {/* 4. Section: Thermal Dynamics */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* CSS Heatmap Simulation Background */}
        <div className="absolute inset-0 opacity-40">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-600 via-orange-500 to-transparent blur-[120px]" />
           <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-600/50 via-purple-900/20 to-transparent blur-[100px] mix-blend-color-dodge" />
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" /> {/* Assuming grid.svg exists or just use CSS grid lines */}
        
        <div className="relative z-10 text-center max-w-3xl px-6">
           <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-[clamp(3.5rem,15vw,9rem)] md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-200 to-blue-600 mb-6"
           >
             {t('hardwarePage.thermal.title')}
           </motion.h2>
           <p className="text-xl md:text-3xl font-light mb-8">{t('hardwarePage.thermal.subtitle')}</p>
           
           <p className="text-lg md:text-xl text-gray-400 leading-relaxed border p-6 rounded-lg bg-black/40 backdrop-blur-sm border-white/10" dangerouslySetInnerHTML={{ __html: t('hardwarePage.thermal.desc') }} />
        </div>
      </section>

      {/* 5. Section: The Specs (Engineers' Romance) */}
      <section className="py-32 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-mono mb-16 border-b border-white/10 pb-4">{t('hardwarePage.specs.title')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-mono text-sm md:text-base">
             <SpecItem label={t('hardwarePage.specs.items.processor.label')} value={t('hardwarePage.specs.items.processor.value')} />
             <SpecItem label={t('hardwarePage.specs.items.ai.label')} value={t('hardwarePage.specs.items.ai.value')} highlight />
             <SpecItem label={t('hardwarePage.specs.items.cpu.label')} value={t('hardwarePage.specs.items.cpu.value')} />
             <SpecItem label={t('hardwarePage.specs.items.protection.label')} value={t('hardwarePage.specs.items.protection.value')} />
             <SpecItem label={t('hardwarePage.specs.items.dimensions.label')} value={t('hardwarePage.specs.items.dimensions.value')} />
             <SpecItem label={t('hardwarePage.specs.items.weight.label')} value={t('hardwarePage.specs.items.weight.value')} />
             <SpecItem label={t('hardwarePage.specs.items.connectivity.label')} value={t('hardwarePage.specs.items.connectivity.value')} />
             <SpecItem label={t('hardwarePage.specs.items.os.label')} value={t('hardwarePage.specs.items.os.value')} />
          </div>

          <div className="mt-24 text-center">

             <p className="mt-4 text-xs text-gray-600 font-mono">{t('hardwarePage.specs.availability')}</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function SpecItem({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) {
  return (
    <div className="flex justify-between items-end border-b border-white/5 pb-2 hover:border-emerald-500/50 transition-colors cursor-crosshair group">
      <span className="text-gray-500 group-hover:text-emerald-400 transition-colors">{label}</span>
      <span className={`font-medium ${highlight ? 'text-emerald-400' : 'text-gray-200'}`}>{value}</span>
    </div>
  );
}
