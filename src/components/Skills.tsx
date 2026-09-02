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

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 },
          },
        }}
        viewport={{ once: true, amount: 0.08 }}
        whileInView="visible"
      >
        {data.skills.categories.map((category) => (
          <motion.article
            className="card-surface p-6 sm:p-7"
            key={category.title}
            variants={{
              hidden: shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
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

            <ul className="mt-6 flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <li className="tech-badge" key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </MotionSection>
  )
}
