'use client';

import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[1120px] px-6 py-10 flex items-center justify-between font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
        <span>© {new Date().getFullYear()} · Rodolfo Henrique Raymundo Engelmann</span>
        <span>{t.footer}</span>
      </div>
    </footer>
  );
}
