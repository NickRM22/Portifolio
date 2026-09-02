import { BriefcaseBusiness } from 'lucide-react'
import type { PortfolioData } from '../types'
import { MotionSection } from './MotionSection'
import { SectionTitle } from './SectionTitle'

interface ExperienceProps {
  data: PortfolioData
}

export function Experience({ data }: ExperienceProps) {
  return (
    <MotionSection id="experiencia" labelledBy="experiencia-title">
      <SectionTitle data={data.experience} id="experiencia-title" />

      <ol className="relative space-y-5 lg:ml-4">
        {data.experience.items.map((experience, index) => (
          <li className="timeline-item" key={`${experience.company}-${experience.role}`}>
            <div aria-hidden="true" className="timeline-marker">
              <BriefcaseBusiness size={17} strokeWidth={1.8} />
            </div>

            <article className="card-surface p-6 sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                    {experience.company}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-[var(--text-strong)]">
                    {experience.role}
                  </h3>
                </div>
                <time
                  className="w-fit rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1.5 font-mono text-xs text-[var(--text-muted)]"
                  dateTime={
                    experience.endDate
                      ? `${experience.startDate}/${experience.endDate}`
                      : experience.startDate
                  }
                >
                  {experience.period}
                </time>
              </div>

              <ul className="mt-6 grid gap-3 text-sm leading-6 text-[var(--text-muted)] lg:grid-cols-2 lg:gap-x-8">
                {experience.activities.map((activity) => (
                  <li className="flex gap-3" key={activity}>
                    <span aria-hidden="true" className="activity-bullet" />
                    {activity}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
                {experience.transferableSkills.map((skill) => (
                  <li className="tech-badge" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>

            {index < data.experience.items.length - 1 && (
              <span aria-hidden="true" className="timeline-line" />
            )}
          </li>
        ))}
      </ol>
    </MotionSection>
  )
}
