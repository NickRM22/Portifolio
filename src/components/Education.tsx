import { Award, GraduationCap } from 'lucide-react'
import type { PortfolioData } from '../types'
import { MotionSection } from './MotionSection'
import { SectionTitle } from './SectionTitle'

interface EducationProps {
  data: PortfolioData
}

export function Education({ data }: EducationProps) {

  return (
    <MotionSection
      className="border-y border-[var(--border)] bg-[var(--surface-soft)]"
      id="formacao"
      labelledBy="formacao-title"
    >
      <SectionTitle data={data.education} id="formacao-title" />

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="modern-card card-surface self-start overflow-hidden">
          <div className="flex items-center gap-4 border-b border-[var(--border)] p-6 sm:p-7">
            <span className="icon-tile">
              <GraduationCap aria-hidden="true" size={22} strokeWidth={1.8} />
            </span>
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                {data.education.institution}
              </p>
              <h3 className="mt-1 text-xl font-semibold text-[var(--text-strong)]">
                {data.education.degree}
              </h3>
            </div>
          </div>
          <dl className="px-6 py-5 sm:px-7">
            <dt className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--text-subtle)]">
              {data.education.statusLabel}
            </dt>
            <dd className="mt-2 text-sm font-medium text-[var(--text-strong)]">
              {data.education.status}
            </dd>
          </dl>
        </article>

        <div>
          <div className="mb-5 flex items-center gap-3">
            <Award aria-hidden="true" className="text-[var(--accent)]" size={20} />
            <h3 className="text-lg font-semibold text-[var(--text-strong)]">
              {data.education.certificationsTitle}
            </h3>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {data.certifications.map((certification) => (
              <li className="modern-card certification-card" key={certification.name}>
                <span aria-hidden="true" className="certification-mark" />
                <div>
                  <p className="text-sm font-semibold leading-6 text-[var(--text-strong)]">
                    {certification.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                    {certification.issuer}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  )
}
