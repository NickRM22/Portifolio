import { Check } from 'lucide-react'
import type { PortfolioData } from '../types'
import { MotionSection } from './MotionSection'
import { SectionTitle } from './SectionTitle'

interface CareerGoalsProps {
  data: PortfolioData
}

export function CareerGoals({ data }: CareerGoalsProps) {
  return (
    <MotionSection
      className="border-y border-[var(--border)] bg-[var(--surface-soft)]"
      id="objetivo"
      labelledBy="objetivo-title"
    >
      <SectionTitle data={data.careerGoal} id="objetivo-title" />

      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <blockquote className="relative border-l-2 border-[var(--accent)] pl-6 text-xl font-medium leading-9 text-[var(--text-strong)] sm:pl-8 sm:text-2xl sm:leading-10">
          {data.careerGoal.quote}
        </blockquote>

        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
          <p className="text-sm font-semibold text-[var(--text-strong)]">
            {data.careerGoal.supportLabel}
          </p>
          <ul className="mt-5 space-y-4">
            {data.careerGoal.supportItems.map((item) => (
              <li
                className="flex gap-3 text-sm leading-6 text-[var(--text-muted)]"
                key={item}
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Check aria-hidden="true" size={13} strokeWidth={2.4} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  )
}
