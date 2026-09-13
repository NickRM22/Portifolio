import type { SectionHeadingData } from '../types'

interface SectionTitleProps {
  data: SectionHeadingData
  id: string
}

export function SectionTitle({ data, id }: SectionTitleProps) {
  return (
    <div className="section-heading mb-6 max-w-3xl md:mb-8">
      <p className="section-eyebrow">{data.eyebrow}</p>
      <h2
        className="mt-3 text-balance text-2xl font-semibold tracking-[-0.035em] text-[var(--text-strong)] sm:text-3xl lg:text-[2.15rem] lg:leading-[1.08]"
        id={id}
      >
        {data.title}
      </h2>
      {data.description && (
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--text-muted)]">
          {data.description}
        </p>
      )}
    </div>
  )
}
