'use client';

import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();
  return (
    <section id="sobre" className="border-b border-rule">
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(96px,12vw,160px)] grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 md:items-start">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-fg-muted md:col-span-3">
          {t.sections.sobre}
        </p>
        <div className="md:col-span-2">
          <h1 className="text-[clamp(1.75rem,7vw,4rem)] font-medium tracking-[-0.02em] leading-[1.05] text-fg [text-wrap:balance]">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-lg text-fg-muted">{t.hero.role}</p>
        </div>
        <div className="md:col-span-1 flex flex-col gap-6 md:pt-2">
          <p className="text-fg-muted max-w-[36ch] leading-[1.6]">{t.hero.bio}</p>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.08em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {t.hero.status}
          </span>
        </div>
      </div>
    </section>
  );
}
