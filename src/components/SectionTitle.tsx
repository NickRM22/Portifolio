import type { SectionHeadingData } from '../types'

interface SectionTitleProps {
  data: SectionHeadingData
  id: string
}

export function SectionTitle({ data, id }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl md:mb-14">
      <p className="section-eyebrow">{data.eyebrow}</p>
      <h2
        className="mt-4 text-balance text-3xl font-semibold tracking-[-0.035em] text-[var(--text-strong)] sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]"
        id={id}
      >
        {data.title}
      </h2>
      {data.description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--text-muted)] sm:text-lg">
          {data.description}
        </p>
      )}
    </div>
  )
}
