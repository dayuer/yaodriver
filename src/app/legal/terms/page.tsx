"use client";

import { useTranslation } from 'react-i18next';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-12 tracking-tight">
                {t('legal.terms.title')}
            </h1>
            
            <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    {t('legal.terms.text')}
                </p>
                {/* Additional standard terms could go here */}
                <hr className="border-white/10 my-12" />
                <p className="text-sm text-gray-500">
                    {t('legal.meta.version')} 2026-01-01
                </p>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
