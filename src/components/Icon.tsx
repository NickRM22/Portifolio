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
