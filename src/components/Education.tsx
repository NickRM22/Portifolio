import { Award, GraduationCap } from 'lucide-react'
import type { Certification, PortfolioData } from '../types'
import { MotionSection } from './MotionSection'
import { SectionTitle } from './SectionTitle'

interface EducationProps {
  data: PortfolioData
}

function CertificateLink({ certification }: { certification: Certification }) {
  if (!certification.file) return null

  return (
    <a
      className="mt-2 inline-block text-xs font-semibold text-[var(--accent)] underline underline-offset-4"
      href={`${import.meta.env.BASE_URL}${certification.file}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver certificado de ${certification.name} em PDF, abre em nova aba`}
    >
      Ver certificado (PDF)
    </a>
  )
}

export function Education({ data }: EducationProps) {
  const featured = data.certifications.filter((course) => course.featured)
  const additional = data.certifications.filter((course) => !course.featured)
  const categories: Certification['category'][] = [
    'Java', 'Python', 'Lógica de programação', 'Fundamentos de TI',
  ]

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
          <p className="mb-4 text-sm text-[var(--text-muted)]">
            Principais cursos em Java e desenvolvimento de software.
          </p>
          <ul aria-label="Cursos em destaque" className="grid gap-3 sm:grid-cols-2">
            {featured.map((certification) => (
              <li className="modern-card certification-card" key={certification.name}>
                <span aria-hidden="true" className="certification-mark" />
                <div>
                  <p className="mb-2 font-mono text-[0.65rem] font-semibold uppercase tracking-widest text-[var(--accent)]">
                    {certification.category}
                  </p>
                  <p className="text-sm font-semibold leading-6 text-[var(--text-strong)]">
                    {certification.name}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                    {certification.issuer}
                  </p>
                  <CertificateLink certification={certification} />
                </div>
              </li>
            ))}
          </ul>
          {additional.length > 0 && (
            <details className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface)]">
              <summary className="cursor-pointer rounded-xl px-5 py-4 text-sm font-semibold text-[var(--text-strong)] hover:text-[var(--accent)]">
                Outros cursos ({additional.length})
              </summary>
              <div className="space-y-6 border-t border-[var(--border)] px-5 py-5">
                {categories.map((category) => {
                  const courses = additional.filter((course) => course.category === category)
                  if (!courses.length) return null

                  return (
                    <div key={category}>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-widest text-[var(--accent)]">
                        {category}
                      </h4>
                      <ul className="divide-y divide-[var(--border)]">
                        {courses.map((course) => (
                          <li className="py-3" key={course.name}>
                            <p className="text-sm font-medium leading-6 text-[var(--text-strong)]">
                              {course.name}
                            </p>
                            <p className="mt-1 text-xs text-[var(--text-muted)]">{course.issuer}</p>
                            <CertificateLink certification={course} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </details>
          )}
        </div>
      </div>
    </MotionSection>
  )
}
