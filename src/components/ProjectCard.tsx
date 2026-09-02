import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, GitBranch } from 'lucide-react'
import type { Project } from '../types'
import { Icon } from './Icon'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="project-card group"
      transition={{ duration: 0.18, ease: 'easeOut' }}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
    >
      <div aria-hidden="true" className="project-visual">
        <span className="project-number">{project.number}</span>
        <span className="project-icon">
          <Icon name={project.icon} size={34} strokeWidth={1.45} />
        </span>
        <span className="project-line project-line-one" />
        <span className="project-line project-line-two" />
        <span className="project-dot" />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-strong)] sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li className="tech-badge" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--border)] pt-5">
            {project.repoUrl && project.repoLabel && project.repoAriaLabel && (
              <a
                aria-label={project.repoAriaLabel}
                className="project-link"
                href={project.repoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GitBranch aria-hidden="true" size={17} />
                {project.repoLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            )}
            {project.demoUrl && project.demoLabel && project.demoAriaLabel && (
              <a
                aria-label={project.demoAriaLabel}
                className="project-link"
                href={project.demoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                {project.demoLabel}
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}
