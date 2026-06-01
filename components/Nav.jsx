'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';
import LangToggle from './LangToggle';

const anchors = ['sobre', 'projetos', 'skills', 'contato'];

export default function Nav() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('sobre');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    anchors.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const padY = scrolled ? 'py-3' : 'py-5';
  const border = scrolled ? 'border-b border-rule' : 'border-b border-transparent';

  return (
    <header
      className={`sticky top-0 z-50 bg-bg/80 backdrop-blur transition-all duration-200 ${padY} ${border}`}
    >
      <div className="mx-auto max-w-[1120px] px-6 flex items-center justify-between">
        <a href="#sobre" className="font-medium tracking-tight text-fg">
          Rodolfo Engelmann
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {anchors.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm transition-colors ${
                active === id ? 'text-accent' : 'text-fg-muted hover:text-fg'
              }`}
              aria-current={active === id ? 'true' : undefined}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LangToggle />
        </div>

        <button
          type="button"
          className="md:hidden text-xl text-fg"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full bg-bg border-b border-rule px-6 py-8 flex flex-col gap-6">
          {anchors.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={`text-2xl transition-colors ${
                active === id ? 'text-accent' : 'text-fg'
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
          <div className="mt-4">
            <LangToggle />
          </div>
        </div>
      )}
    </header>
  );
}
