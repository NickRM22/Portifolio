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

      <motion.div
        className="grid gap-5 md:grid-cols-2"
        initial="hidden"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 },
          },
        }}
        viewport={{ once: true, amount: 0.06 }}
        whileInView="visible"
      >
        {data.projects.items.map((project) => (
          <motion.div
            className="flex"
            key={project.name}
            variants={{
              hidden: shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 22 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </MotionSection>
  )
}
