import { motion, useReducedMotion } from 'framer-motion'
import type { PortfolioData } from '../types'
import { Icon } from './Icon'
import { MotionSection } from './MotionSection'
import { SectionTitle } from './SectionTitle'

interface SkillsProps {
  data: PortfolioData
}

export function Skills({ data }: SkillsProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionSection id="competencias" labelledBy="competencias-title">
      <SectionTitle data={data.skills} id="competencias-title" />

      <div className="grid gap-4 md:grid-cols-2">
        {data.skills.categories.map((category) => (
          <motion.article
            className="modern-card card-surface p-5 sm:p-6"
            key={category.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-start gap-4">
              <span className="icon-tile">
                <Icon name={category.icon} size={21} />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                  {category.description}
                </p>
              </div>
            </div>

            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <li className="tech-badge" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </MotionSection>
  )
}
