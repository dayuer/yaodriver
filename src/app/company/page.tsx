"use client";

import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// Reusable FadeIn Component
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function CompanyPage() {
  const { t } = useTranslation();

  return (
    <main className="bg-black text-white selection:bg-white/20 overflow-x-hidden">
      <Navbar />

      {/* 1. Hero Section: The Philosophy */}
      <section className="relative h-screen w-full overflow-hidden flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/company/obsidian-hero.png"
            alt="Macro shot of obsidian stone"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/40 to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        </div>

        <div className="relative z-10 max-w-6xl w-full">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange-500 font-mono text-sm tracking-[0.4em] mb-12 uppercase text-center"
          >
            {t('companyPage.hero.subtitle')}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="text-[clamp(3.5rem,12vw,8vw)] md:text-[8vw] font-bold tracking-tighter text-center leading-[0.85] mb-16"
          >
            {t('companyPage.hero.title')}
          </motion.h1>
          <FadeIn delay={0.5}>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-neutral-400 font-light text-center leading-relaxed">
              {t('companyPage.hero.text')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Section: Why "Obsidian"? */}
      <section className="py-24 md:py-40 bg-black relative">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-neutral-100">{t('companyPage.origin.title')}</h2>
            <div className="space-y-6 text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
              <p>
                <strong className="text-white font-medium">{t('companyPage.origin.p1_strong')}</strong>{t('companyPage.origin.p1')}
              </p>
              <p>
                {t('companyPage.origin.p2')}
                <span className="text-white block mt-2 border-l-2 border-white pl-4 italic">
                  {t('companyPage.origin.p2_quote')}
                </span>
              </p>
              <p>{t('companyPage.origin.p3')}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative h-[600px] w-full rounded-lg overflow-hidden border border-white/5">
             <Image
                src="/images/company/magma-chip.png"
                alt="From Magma to Silicon"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20 mix-blend-multiply" />
              <div className="absolute bottom-6 left-6 text-xs text-neutral-500 font-mono">
                {t('companyPage.origin.caption')}
              </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. Section: The Vision */}
      <section className="py-24 bg-neutral-950/50">
        <div className="container mx-auto px-6 mb-16">
           <FadeIn>
            <h2 className="text-5xl md:text-7xl font-bold mb-4">{t('companyPage.vision.title')}</h2>
            <p className="text-2xl text-neutral-500 font-light">{t('companyPage.vision.subtitle')}</p>
           </FadeIn>
        </div>
        
        <div className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden group">
             <Image
                src="/images/company/vision-split.png"
                alt="Human and Robotic Hand"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
              />
             <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="text-xl md:text-4xl leading-tight font-light text-neutral-200">
               {t('companyPage.vision.p1')}
              </p>
              <p className="mt-8 text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                {t('companyPage.vision.p2')}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. Section: The Code */}
      <section className="py-24 md:py-32 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <FadeIn>
            <h2 className="text-sm font-mono tracking-widest text-neutral-500 mb-16 uppercase border-b border-white/10 pb-4 inline-block">
              {t('companyPage.code.title')}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                id: "01",
                title: t('companyPage.code.items.01.title'),
                desc: t('companyPage.code.items.01.desc'),
              },
              {
                id: "02",
                title: t('companyPage.code.items.02.title'),
                desc: t('companyPage.code.items.02.desc'),
              },
              {
                id: "03",
                title: t('companyPage.code.items.03.title'),
                desc: t('companyPage.code.items.03.desc'),
              },
            ].map((item, index) => (
              <FadeIn key={item.id} delay={index * 0.1}>
                <div className="group">
                  <div className="text-6xl font-light text-neutral-800 group-hover:text-white transition-colors duration-500 mb-6 font-mono">
                    {item.id}.
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Team Section: The Architects */}
      {/* 4. Team: The Builders */}
      <section className="py-40 px-6 bg-zinc-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <p className="text-orange-500 font-mono text-sm tracking-[0.4em] mb-8 uppercase">{t('companyPage.team.subtitle')}</p>
              <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-12">
                {t('companyPage.team.title')}
              </h2>
              <p className="text-lg md:text-2xl text-neutral-400 font-light leading-relaxed mb-12">
                {t('companyPage.team.text')}
              </p>
              <Link href="/careers" className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full uppercase tracking-widest text-xs hover:scale-105 transition-transform active:scale-95">
                {t('companyPage.team.cta')}
              </Link>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/5 grayscale">
              <Image 
                src="/images/home/hero-chip-v6.png" // Reusing a high-quality asset as placeholder for team/culture
                alt="Builders Culture"
                fill
                className="object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer Quote */}
      <section className="py-32 md:py-48 bg-black flex items-center justify-center text-center px-6">
        <FadeIn>
          <blockquote className="max-w-4xl px-4">
            <p className="text-2xl md:text-5xl font-serif text-neutral-200 leading-tight italic">
              "{t('companyPage.footer.quote')}"
            </p>
            <footer className="mt-8 text-neutral-500 font-mono text-sm tracking-widest">
              {t('companyPage.footer.author')}
            </footer>
          </blockquote>
        </FadeIn>
      </section>

      <Footer />
    </main>
  );
}

