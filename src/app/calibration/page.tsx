"use client";

import { motion, useAnimation } from 'framer-motion';
import { ArrowLeft, Terminal } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import '@/i18n';

const LOG_KEYS = ['line1', 'line2', 'line3', 'line4'];

export default function CalibrationPage() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);
  const [logIndex, setLogIndex] = useState(0);
  const [typedLogs, setTypedLogs] = useState<string[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Simulate terminal typing effect
  useEffect(() => {
    if (logIndex < LOG_KEYS.length) {
      const timeout = setTimeout(() => {
        setTypedLogs(prev => [...prev, t(`calibrationPage.log.${LOG_KEYS[logIndex]}`)]);
        setLogIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [logIndex, t]);

  // Glitch effect hook
  const glitchControls = useAnimation();
  useEffect(() => {
    const triggerGlitch = async () => {
      await glitchControls.start({ skewX: [0, 20, -20, 0], opacity: [1, 0.8, 1], transition: { duration: 0.2 } });
      const nextDelay = Math.random() * 5000 + 2000;
      setTimeout(triggerGlitch, nextDelay);
    };
    triggerGlitch();
  }, [glitchControls]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6 relative overflow-hidden font-mono">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none" />

      {/* 1. Central Visual: Rotating Gyroscope */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 mb-12">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="relative w-full h-full opacity-80"
        >
             <Image 
               src="/images/calibration_lock.png" 
               alt="Security Mechanism" 
               fill 
               className="object-contain"
             />
        </motion.div>
        {/* Overlay Static HUD Circles */}
        <div className="absolute inset-0 border border-white/5 rounded-full" />
        <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-pulse" />
      </div>

      {/* 2. Status Indicators */}
      <div className="flex flex-col items-center gap-4 mb-12 w-full max-w-lg">
         <motion.div 
           animate={{ opacity: [1, 0.5, 1] }}
           transition={{ duration: 1.5, repeat: Infinity }}
           className="text-red-500 font-bold tracking-widest text-sm md:text-base border border-red-900/50 bg-red-500/5 px-4 py-2 rounded uppercase"
         >
          [ {mounted ? t('calibrationPage.status') : '...'} ]
        </motion.div>
        
        {/* Diagnostic Log */}
        <div className="w-full bg-black/50 border border-white/10 rounded p-4 font-mono text-xs md:text-sm h-32 flex flex-col justify-end items-start text-green-500/80 shadow-inner overflow-hidden relative">
            <div className="absolute top-2 right-2 opacity-50"><Terminal size={14} /></div>
            {mounted && typedLogs.map((log, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                &gt; {log}
              </motion.div>
            ))}
            {mounted && logIndex < LOG_KEYS.length && (
              <motion.div animate={{ opacity: [0, 1] }} transition={{ repeat: Infinity, duration: 0.5 }}>_</motion.div>
            )}
         </div>
      </div>

      {/* 3. The Message */}
      <motion.div animate={glitchControls} className="text-center max-w-2xl mb-12">
        <h1 className="text-[clamp(2.5rem,10vw,4rem)] md:text-6xl font-bold tracking-tighter mb-6 text-white/90">
             {mounted ? t('calibrationPage.title') : 'Module Offline.'}
        </h1>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed border-l-2 border-red-500/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
          {mounted ? t('calibrationPage.body') : ''}
        </p>
      </motion.div>

      {/* 4. Interaction */}
      <div className="w-full max-w-md space-y-4">
          <div className="flex gap-2">
             <input 
               type="email" 
               placeholder={mounted ? t('calibrationPage.placeholder') : 'Email'}
               className="flex-1 bg-transparent border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-700"
             />
             <button 
               onClick={() => toast.success("Access requested. You are in the queue.")}
               className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all font-bold text-xs tracking-widest uppercase whitespace-nowrap"
             >
               {mounted ? t('calibrationPage.request') : 'Request'}
             </button>
          </div>

          <Link 
            href="/"
            className="flex items-center justify-center gap-2 text-gray-600 hover:text-white transition-colors text-sm py-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="tracking-widest uppercase">{mounted ? t('calibrationPage.return') : 'Return'}</span>
          </Link>
      </div>

    </div>
  );
}
