'use client';

import { useI18n } from '@/lib/i18n';
import skills from '@/content/skills';
import { basePath } from '@/lib/basePath.mjs';

// Item puramente decorativo — o marquee inteiro é aria-hidden e a lista real
// (legível por leitor de tela) vive num bloco sr-only separado.
function SkillItem({ name, logo }) {
  const maskUrl = logo ? `url(${basePath}/logos/${logo})` : null;

  return (
    <div className="group/item flex w-24 shrink-0 flex-col items-center gap-3">
      {logo ? (
        <span
          className="h-12 w-12 bg-fg-muted transition-colors duration-200 group-hover/item:bg-fg"
          style={{
            WebkitMaskImage: maskUrl,
            maskImage: maskUrl,
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            WebkitMaskPosition: 'center',
            maskPosition: 'center',
            WebkitMaskSize: 'contain',
            maskSize: 'contain',
          }}
        />
      ) : (
        <span className="flex h-12 items-center text-lg font-medium text-fg-muted transition-colors duration-200 group-hover/item:text-fg">
          {name}
        </span>
      )}
      <span className="font-mono text-xs tracking-[0.06em] text-fg-muted transition-colors duration-200 group-hover/item:text-fg">
        {name}
      </span>
    </div>
  );
}

// Repete a lista o suficiente pra cada metade da track transbordar a viewport,
// senão o translateX(-50%) deixaria espaço vazio girando (poucos itens).
const REPEAT = 3;
const half = Array.from({ length: REPEAT }).flatMap(() => skills);

export default function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="border-b border-rule">
      <div className="mx-auto max-w-[1120px] px-6 py-[clamp(96px,12vw,160px)]">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-fg-muted">
          {t.sections.skills}
        </p>
        <h2 className="mt-6 text-[clamp(1.75rem,3.5vw,2.25rem)] font-medium tracking-tight text-fg">
          {t.sections.skills}
        </h2>

        {/* Lista real pra leitores de tela — o carrossel abaixo é decorativo. */}
        <ul className="sr-only">
          {skills.map((s) => (
            <li key={s.name}>{s.name}</li>
          ))}
        </ul>

        <div
          aria-hidden="true"
          className="group/marquee mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
        >
          <ul className="animate-marquee flex w-max items-start gap-8">
            {half.map((s, i) => (
              <li key={`a-${i}`}>
                <SkillItem name={s.name} logo={s.logo} />
              </li>
            ))}
            {/* Segunda metade idêntica — loop seamless. */}
            {half.map((s, i) => (
              <li key={`b-${i}`}>
                <SkillItem name={s.name} logo={s.logo} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
