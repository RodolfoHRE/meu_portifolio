'use client';

import { useI18n } from '@/lib/i18n';
import { basePath } from '@/lib/basePath.mjs';

function ContactRow({ label, value, href, external, download }) {
  const linkProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : download
      ? { download: '' }
      : {};

  return (
    <li className="group relative border-t border-rule transition-colors duration-200 hover:bg-accent-soft">
      <div className="grid grid-cols-[6.5rem_1fr_auto] items-baseline gap-x-6 px-3 py-6 md:gap-x-10 md:px-4">
        <span className="font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
          {label}
        </span>
        <span className="truncate text-fg">
          {/* Stretched link makes the whole row clickable without nesting anchors */}
          <a
            href={href}
            {...linkProps}
            className="rounded-sm outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-accent"
          >
            {value}
          </a>
        </span>
        <span
          aria-hidden="true"
          className="font-mono text-lg text-fg-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
        >
          →
        </span>
      </div>
    </li>
  );
}

export default function Contato() {
  const { t } = useI18n();
  const c = t.contato;

  return (
    <section id="contato">
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(96px,12vw,160px)]">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
          {t.sections.contato}
        </p>
        <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.25rem)] font-medium tracking-tight text-fg">
          {c.heading}
        </h2>
        <p className="mt-8 max-w-[60ch] leading-[1.6] text-fg-muted">{c.prose}</p>

        <ul className="mt-12">
          {c.links.map((link) => (
            <ContactRow
              key={link.label}
              label={link.label}
              value={link.value}
              href={link.href}
              external={link.href.startsWith('http')}
            />
          ))}
          <ContactRow
            label={c.cvLabel}
            value={c.cvValue}
            href={`${basePath}/${c.cvFile}`}
            download
          />
        </ul>
      </div>
    </section>
  );
}
