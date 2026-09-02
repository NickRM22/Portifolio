import { Moon, Sun } from 'lucide-react'
import type { Theme } from '../types'

interface ThemeToggleProps {
  theme: Theme
  onToggle: () => void
  lightLabel: string
  darkLabel: string
}

export function ThemeToggle({
  theme,
  onToggle,
  lightLabel,
  darkLabel,
}: ThemeToggleProps) {
  const isDark = theme === 'dark'
  const label = isDark ? lightLabel : darkLabel

  return (
    <button
      aria-label={label}
      aria-pressed={!isDark}
      className="icon-button"
      onClick={onToggle}
      title={label}
      type="button"
    >
      {isDark ? (
        <Sun aria-hidden="true" size={19} strokeWidth={1.8} />
      ) : (
        <Moon aria-hidden="true" size={19} strokeWidth={1.8} />
      )}
    </button>
  )
}
