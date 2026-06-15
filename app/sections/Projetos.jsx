'use client';

import { useI18n } from '@/lib/i18n';
import ProjectRow from '@/components/ProjectRow';

export default function Projetos() {
  const { t } = useI18n();
  const projects = t.projects ?? [];
  return (
    <section id="projetos" className="border-b border-rule">
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(96px,12vw,160px)]">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
          {t.sections.projetos}
        </p>
        <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.25rem)] font-medium tracking-tight text-fg">
          {t.sections.projetos}
        </h2>
        {projects.length > 0 ? (
          <ul className="mt-12 border-b border-rule">
            {projects.map((project, i) => (
              <ProjectRow key={project.title} index={i + 1} {...project} />
            ))}
          </ul>
        ) : (
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
            — {t.placeholder} —
          </p>
        )}
      </div>
    </section>
  );
}
