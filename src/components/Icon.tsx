import {
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Database,
  Flame,
  GitBranch,
  Globe2,
  ContactRound,
  ListChecks,
  Mail,
  Terminal,
  Workflow,
} from 'lucide-react'
import type { IconName } from '../types'

const icons = {
  book: BookOpen,
  briefcase: BriefcaseBusiness,
  code: Code2,
  cpu: Cpu,
  database: Database,
  flame: Flame,
  github: GitBranch,
  globe: Globe2,
  linkedin: ContactRound,
  list: ListChecks,
  mail: Mail,
  terminal: Terminal,
  workflow: Workflow,
} satisfies Record<IconName, typeof Code2>

interface IconProps {
  name: IconName
  className?: string
  size?: number
  strokeWidth?: number
}

export function Icon({
  name,
  className,
  size = 20,
  strokeWidth = 1.8,
}: IconProps) {
  if (name === 'github' || name === 'linkedin' || name === 'mail') {
    return (
      <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" focusable="false">
        {name === 'github' && <path d="M12 .3a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 6.006 0c2.291-1.553 3.297-1.23 3.297-1.23.655 1.652.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.294c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .3Z" />}
        {name === 'linkedin' && <><rect width="24" height="24" rx="2" fill="#0A66C2" /><path fill="#fff" d="M5.37 7.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5ZM3.9 9h3v11h-3ZM9 9h2.9v1.5h.04c.4-.76 1.39-1.56 2.86-1.56 3.06 0 3.63 2.01 3.63 4.63V20h-3v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3V20H9Z" /></>}
        {name === 'mail' && <><path fill="#4285F4" d="M2 20h4V9L0 5v13a2 2 0 0 0 2 2Z" /><path fill="#34A853" d="M18 20h4a2 2 0 0 0 2-2V5l-6 4Z" /><path fill="#EA4335" d="M6 9v-5l6 4.5L18 4v5l-6 4.5Z" /><path fill="#C5221F" d="M0 5v3l6 4.5V4L3.2 1.9A2 2 0 0 0 0 3.5Z" /><path fill="#FBBC04" d="M18 4v8.5L24 8V3.5a2 2 0 0 0-3.2-1.6Z" /></>}
      </svg>
    )
  }

  const LucideIcon = icons[name]

  return (
    <LucideIcon
      aria-hidden="true"
      className={className}
      size={size}
      strokeWidth={strokeWidth}
    />
  )
}
