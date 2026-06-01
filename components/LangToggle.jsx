'use client';

import { useI18n } from '@/lib/i18n';

export default function LangToggle() {
  const { lang, setLang } = useI18n();
  const base = 'transition-colors';
  const on = 'text-accent';
  const off = 'text-fg-muted hover:text-fg';

  return (
    <div className="font-mono text-xs uppercase tracking-[0.08em] flex items-center gap-2">
      <button
        type="button"
        onClick={() => setLang('pt')}
        className={`${base} ${lang === 'pt' ? on : off}`}
        aria-pressed={lang === 'pt'}
        aria-label="Português"
      >
        PT
      </button>
      <span className="text-fg-muted" aria-hidden="true">/</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`${base} ${lang === 'en' ? on : off}`}
        aria-pressed={lang === 'en'}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
