'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import pt from '@/content/pt';
import en from '@/content/en';

const dict = { pt, en };
const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') setLang(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider');
  return ctx;
}
