'use client';

import { useI18n } from '@/lib/i18n';

export default function Contato() {
  const { t } = useI18n();
  return (
    <section id="contato">
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(96px,12vw,160px)]">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
          {t.sections.contato}
        </p>
        <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.25rem)] font-medium tracking-tight text-fg">
          {t.sections.contato}
        </h2>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
          — {t.placeholder} —
        </p>
      </div>
    </section>
  );
}
