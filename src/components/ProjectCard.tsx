import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '../types'
import { Icon } from './Icon'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article
      className="modern-card project-card group"
      transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.7 }}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
    >
      <img
        alt={project.imageAlt}
        className="project-image"
        height={300}
        loading="lazy"
        src={`${import.meta.env.BASE_URL}${project.image}`}
        width={560}
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold tracking-[-0.02em] text-[var(--text-strong)] sm:text-2xl">
          {project.name}
        </h3>
        <p className="mt-4 flex-1 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <li className="tech-badge" key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        {(project.repoUrl || project.demoUrl) && (
          <div className="mt-5 flex flex-wrap gap-3 border-t border-[var(--border)] pt-4">
            {project.repoUrl && project.repoLabel && project.repoAriaLabel && (
              <a
                aria-label={project.repoAriaLabel}
                className="project-link"
                href={project.repoUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="github" size={17} />
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
