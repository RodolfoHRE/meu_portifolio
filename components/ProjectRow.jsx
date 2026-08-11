export default function ProjectRow({ index, title, description, stack = [], href, live, liveLabel = 'Live', repoLabel = 'GitHub' }) {
  const num = String(index).padStart(2, '0');
  // Clique geral da linha foca o site do projeto; sem site, cai pro repositório.
  const primary = live || href;

  return (
    <li className="group relative border-t border-rule transition-colors duration-200 hover:bg-accent-soft">
      <div className="grid grid-cols-1 gap-x-10 gap-y-4 px-3 py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:px-4">
        <span className="font-mono text-xs tracking-[0.08em] text-fg-muted" aria-hidden="true">
          {num}
        </span>

        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-medium tracking-tight text-fg">
            {/* Stretched link: makes the whole row clickable without nesting anchors */}
            <a
              href={primary}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm outline-none after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-accent"
            >
              {title}
            </a>
          </h3>
          <p className="max-w-[60ch] leading-[1.6] text-fg-muted">{description}</p>
          {stack.length > 0 && (
            <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
              {stack.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
          {/* Ações explícitas: ficam acima do stretched link (z-10) para clique próprio. */}
          <div className="relative z-10 mt-1 flex flex-wrap items-center gap-x-5 gap-y-1">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 rounded-sm font-mono text-xs uppercase tracking-[0.08em] text-accent outline-none hover:underline focus-visible:ring-2 focus-visible:ring-accent"
              >
                {liveLabel}
                <span aria-hidden="true">↗</span>
              </a>
            )}
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-1.5 rounded-sm font-mono text-xs uppercase tracking-[0.08em] text-accent outline-none hover:underline focus-visible:ring-2 focus-visible:ring-accent"
            >
              {repoLabel}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="hidden font-mono text-lg text-fg-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent md:block md:self-start"
        >
          →
        </span>
      </div>
    </li>
  );
}
