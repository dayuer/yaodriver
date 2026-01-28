"use client";

import { Diamond } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const columns = [
    {
      title: t('footer.product'),
      links: [
        { label: t('footer.o1'), href: "/hardware" },
        { label: t('footer.flow'), href: "/software" },
        { label: t('footer.security'), href: "/calibration" },
        { label: t('footer.hardware'), href: "/hardware" }
      ]
    },
    {
      title: t('footer.resources'),
      links: [
        { label: t('footer.docs'), href: "/calibration" },
        { label: t('footer.api'), href: "/calibration" },
        { label: t('footer.sdk'), href: "/calibration" },
        { label: t('footer.community'), href: "/calibration" }
      ]
    },
    {
      title: t('footer.company'),
      links: [
        { label: t('footer.about'), href: "/company" },
        { label: t('footer.careers'), href: "/careers" },
        { label: t('footer.research'), href: "/calibration" },
        { label: t('footer.news'), href: "/calibration" }
      ]
    },
    {
      title: t('footer.legal_title'),
      links: [
        { label: t('footer.privacy'), href: "/legal/privacy" },
        { label: t('footer.terms'), href: "/legal/terms" }
      ]
    }
  ];

  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-24">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Diamond className="w-6 h-6 text-white fill-white" />
              <span className="text-xl font-bold tracking-tight text-white">Obsidian</span>
            </div>
            <p className="text-apple-gray text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>
          
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-bold text-sm mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-apple-gray text-sm hover:text-white transition-colors">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-apple-gray">
          <div className="flex items-center gap-4">
            <span>Copyright © 2026 Obsidian Intelligence.</span>
            <a href="https://beian.miit.gov.cn" target="_blank" className="hover:text-white transition-colors">京ICP备XXXX号</a>
          </div>
          <div className="flex gap-6 items-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X (Twitter)</a>
            <span>Designed in Beijing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
