"use client";

import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lock } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const gapY = useTransform(scrollY, [500, 1500], [0, 100]); // Parallax for Gap section

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 selection:text-orange-100 overflow-x-hidden">
      <Navbar />

      {/* 1. Hero Section: The Origin */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-900/0 to-black">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: heroY }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/home/hero-chip-v6.png"
            alt="Obsidian O-1 Chip Macro"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-[clamp(3.5rem,15vw,8rem)] md:text-[8vw] font-bold tracking-tighter mb-8 text-white drop-shadow-2xl leading-[0.85] pt-10"
          >
            {t('home.hero.title_Line1')}<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-500 to-neutral-200">
              {t('home.hero.title_Line2')}
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-lg md:text-2xl text-neutral-400 font-light mb-12 tracking-wide px-4"
          >
            {t('home.hero.subtitle')}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col md:flex-row gap-8 justify-center items-center"
          >
            <button className="group relative px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <span className="relative z-10 uppercase tracking-widest text-xs">{t('home.hero.watch_film')}</span>
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <Link href="/hardware" className="group flex items-center gap-3 text-white/50 hover:text-white transition-all tracking-widest text-xs font-bold uppercase py-2">
              <span>{t('home.hero.learn_more')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Section: The Gap */}
      <section className="py-32 relative bg-black overflow-hidden">
         <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Side */}
            <div className="order-2 lg:order-1 relative z-10">
                <FadeInUp>
                  <p className="text-orange-500 font-mono text-[10px] md:text-sm tracking-[0.3em] mb-4 md:mb-6 uppercase">{t('home.gap.title_Line1')}</p>
                  <h2 className="text-5xl md:text-8xl font-bold mb-8 md:mb-10 leading-[0.9] tracking-tighter">
                    {t('home.gap.title_Line2')}
                  </h2>
                  <p className="text-lg md:text-2xl text-neutral-400 leading-relaxed font-light max-w-xl">
                    {t('home.gap.text')}
                  </p>
                  <div className="mt-8 md:mt-12 group cursor-pointer inline-flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 transition-all duration-500" />
                    <span className="text-white text-[10px] tracking-widest uppercase font-bold">{t('home.gap.highlight')}</span>
                  </div>
                </FadeInUp>
            </div>

            {/* Image Side with Parallax */}
            <div className="order-1 lg:order-2 relative h-[400px] md:h-[600px] rounded-lg overflow-hidden lg:translate-y-12">
               <motion.div style={{ y: gapY }} className="absolute inset-0 h-[120%] -top-[10%]">
                 <Image
                   src="/images/home/gap-arm-v6.png"
                   alt="Robotic Arm Catch"
                   fill
                   className="object-cover"
                 />
               </motion.div>
               {/* Overlay for text readability if needed, though side-by-side */}
               <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent mix-blend-multiply" />
            </div>
         </div>
      </section>

      {/* 3. Section: The Software */}
      <section className="py-40 bg-neutral-950 relative overflow-hidden">
        <div className="container mx-auto px-6 mb-16 md:mb-24">
           <FadeInUp>
             <h2 className="text-[10px] font-mono tracking-[0.4em] text-neutral-500 mb-6 md:mb-8 uppercase text-center">{t('home.software.title')}</h2>
             <p className="text-4xl md:text-7xl font-bold text-center leading-[0.9] tracking-tighter">
               {t('home.software.subtitle')}
             </p>
           </FadeInUp>
        </div>

        {/* Tilted iPad Representation */}
        <div className="flex justify-center perspective-1000 px-6">
           <motion.div 
             initial={{ rotateX: 20, rotateY: 0, opacity: 0, y: 100 }}
             whileInView={{ rotateX: 10, rotateY: 0, opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
             className="relative w-full max-w-5xl aspect-[4/3] shadow-[0_50px_100px_-20px_rgba(255,255,255,0.1)] rounded-[2rem] overflow-hidden border border-white/10 bg-black"
           >
              <Image
                src="/images/home/reflex_ipad_v2.png"
                alt="Reflex OS Interface on iPad"
                fill
                className="object-cover"
              />
           </motion.div>
        </div>
      </section>

      {/* 4. Section: The Advantage (Bento Grid) */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
              
              {/* Card 1: Integration (Large) */}
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors duration-500">
                 <Image
                   src="/images/home/bento-fusion-v6.png"
                   alt="Chip Joint Fusion"
                   fill
                   className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                 <div className="absolute bottom-0 left-0 p-8 md:p-12">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">{t('home.bento.fusion.title')}</h3>
                    <p className="text-neutral-400 text-lg">{t('home.bento.fusion.desc')}</p>
                 </div>
              </div>

              {/* Card 2: Privacy (Small) */}
              <div className="relative group overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors duration-500 p-8 flex flex-col justify-center items-center text-center">
                 <div className="w-16 h-16 mb-6 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10 group-hover:border-emerald-500/50 transition-colors">
                    <Lock className="w-8 h-8 text-neutral-400 group-hover:text-emerald-400 transition-colors" />
                 </div>
                 <h3 className="text-xl font-bold mb-2">{t('home.bento.privacy.title')}</h3>
                 <p className="text-neutral-500 text-sm">{t('home.bento.privacy.desc')}</p>
              </div>

              {/* Card 3: Efficiency (Small) */}
              <div className="relative group overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-white/20 transition-colors duration-500">
                 <Image
                   src="/images/home/bento-thermal-v6.png"
                   alt="Thermal Chip Efficiency"
                   fill
                   className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                 <div className="absolute bottom-0 left-0 p-8">
                    <h3 className="text-xl font-bold mb-1">{t('home.bento.efficiency.title')}</h3>
                    <p className="text-neutral-300 text-sm">{t('home.bento.efficiency.desc')}</p>
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* 5. Section: The Impact (Future Scene) */}
      <section className="relative py-48 w-full overflow-hidden flex items-center bg-neutral-900">
         <div className="absolute inset-0 opacity-40">
           {/* Placeholder for 'Lights Out Factory' if generation failed, or use fallback if available. 
               Since generation failed in plan, we use a dark gradient or a placeholder div. 
               Ideally, we would retry generation, but for now a gradient works. */}
           <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black" />
         </div>
         
         <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeInUp>
               <h2 className="text-5xl md:text-7xl font-bold mb-8">{t('home.impact.title')}</h2>
               <p className="text-xl text-neutral-400 max-w-4xl mx-auto mb-12">
                 {t('home.impact.text')}
               </p>
               <Link href="/solutions" className="text-lg text-white font-medium hover:text-orange-500 transition-colors inline-flex items-center gap-2 group">
                 {t('home.impact.cta')} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </Link>
            </FadeInUp>
         </div>
      </section>


      <Footer />
    </main>
  );
}

