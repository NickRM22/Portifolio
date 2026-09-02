import type { PortfolioData } from '../types'
import { MotionSection } from './MotionSection'
import { SectionTitle } from './SectionTitle'

interface AboutProps {
  data: PortfolioData
}

export function About({ data }: AboutProps) {
  return (
    <MotionSection id="sobre" labelledBy="sobre-title">
      <SectionTitle data={data.about} id="sobre-title" />

      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="space-y-5 text-base leading-8 text-[var(--text-muted)] sm:text-lg">
          {data.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--border)]">
          {data.about.facts.map((fact) => (
            <div
              className="min-h-32 bg-[var(--surface)] p-5 sm:p-6"
              key={fact.label}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-[var(--text-subtle)]">
                {fact.label}
              </dt>
              <dd className="mt-3 text-base font-medium leading-6 text-[var(--text-strong)]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </MotionSection>
  )
}
