"use client";

import Navbar from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

export default function SolutionsPage() {
  const { t } = useTranslation();

  const cases = [
    {
      id: "automotive",
      image: "/images/solution_precision.png",
      alt: "Robotic arm installing seal"
    },
    {
      id: "medical",
      image: "/images/o1-chip.png", // Placeholder for surgical robot
      alt: "Surgical Robot Core"
    },
    {
      id: "mining",
      image: "/images/hardware_material.png", // Placeholder for texture/environment
      alt: "Underground Mining"
    },
    {
      id: "logistics",
      image: "/images/solution_logistics.png",
      alt: "Warehouse Swarm"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <Navbar />

      {/* 1. Hero Section: The Statement */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hardware_kit.png"
            alt="Industrial Environment"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8"
          >
            {t('solutionsPage.hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            {t('solutionsPage.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* 2-5. Case Studies (Z-Pattern) */}
      <div className="flex flex-col">
        {cases.map((item, index) => (
          <section key={item.id} className="min-h-screen grid grid-cols-1 md:grid-cols-2 border-t border-white/10 group">
            {/* Logic for Z-Pattern: Even index = Text Left, Odd index = Text Right */}
            {/* But in grid order:
                Even: [Text] [Image]
                Odd:  [Image] [Text] (We can use 'order-last' class to swap on desktop)
            */}
            
            {/* Text Side */}
            <div className={`p-12 md:p-24 flex flex-col justify-center bg-zinc-950 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <div className="text-orange-500 font-mono text-sm tracking-widest mb-4 uppercase">
                   {t('solutionsPage.labels.case_study')} {String(index + 1).padStart(2, '0')}
                 </div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-2">
                   {t(`solutionsPage.cases.${item.id}.title`)}
                 </h2>
                 <p className="text-gray-500 font-mono text-sm mb-12">
                   Client: {t(`solutionsPage.cases.${item.id}.client`)}
                 </p>

                 <div className="space-y-8">
                    <div>
                      <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">{t('solutionsPage.labels.challenge')}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {t(`solutionsPage.cases.${item.id}.challenge`)}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-2 uppercase tracking-wide text-sm">{t('solutionsPage.labels.solution')}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {t(`solutionsPage.cases.${item.id}.solution`)}
                      </p>
                    </div>
                 </div>

                 <div className="mt-16 pt-8 border-t border-white/10">
                    <div className="text-6xl md:text-8xl font-thin text-white tracking-tighter">
                       {t(`solutionsPage.cases.${item.id}.metric`)}
                    </div>
                 </div>
               </motion.div>
            </div>

            {/* Image Side */}
            <div className={`relative h-[50vh] md:h-auto overflow-hidden border-l border-white/5 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
               <div className="absolute inset-0 bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-700" />
               <motion.div 
                 className="relative w-full h-full"
                 whileHover={{ scale: 1.05 }}
                 transition={{ duration: 0.7, ease: "easeOut" }}
               >
                 <Image 
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                 />
                 {/* Documentary style overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
               </motion.div>
            </div>
            
          </section>
        ))}
      </div>

      {/* 6. CTA Section */}
      <section className="py-32 px-6 flex flex-col items-center text-center bg-black border-t border-white/10">
         <h2 className="text-4xl md:text-5xl font-bold mb-12 max-w-3xl">
           {t('solutionsPage.cta.text')}
         </h2>
         <button className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-orange-500 transition-colors duration-300">
            <span>{t('solutionsPage.cta.button')}</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
         </button>
      </section>

      <Footer />
    </main>
  );
}
