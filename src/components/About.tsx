import { ArrowUpRight, MapPin } from 'lucide-react'
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

      <div className="grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <div className="space-y-4 text-base leading-7 text-[var(--text-muted)]">
          {data.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside aria-labelledby="about-objective" className="modern-card card-surface p-6 sm:p-7">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
            {data.about.objectiveLabel}
          </p>
          <h3 id="about-objective" className="mt-3 text-xl font-semibold leading-7 tracking-tight text-[var(--text-strong)]">
            {data.about.objective}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
            {data.about.objectiveDescription}
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
            <p className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <MapPin aria-hidden="true" size={16} />
              <span className="sr-only">{data.about.locationLabel}: </span>
              {data.personal.location}
            </p>
            <a className="inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-[var(--accent)]" href="#contato">
              {data.navigation.contactCta.label}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </aside>
      </div>
    </MotionSection>
  )
}
