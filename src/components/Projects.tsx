import { motion, useReducedMotion } from 'framer-motion'
import type { PortfolioData } from '../types'
import { MotionSection } from './MotionSection'
import { ProjectCard } from './ProjectCard'
import { SectionTitle } from './SectionTitle'

interface ProjectsProps {
  data: PortfolioData
}

export function Projects({ data }: ProjectsProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <MotionSection
      className="border-y border-[var(--border)] bg-[var(--surface-soft)]"
      id="projetos"
      labelledBy="projetos-title"
    >
      <SectionTitle data={data.projects} id="projetos-title" />

      <div className="grid gap-5 md:grid-cols-2">
        {data.projects.items.map((project) => (
          <motion.div
            className="flex"
            key={project.name}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </MotionSection>
  )
}
