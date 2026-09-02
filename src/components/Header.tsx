import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { PortfolioData, Theme } from '../types'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  data: PortfolioData
  theme: Theme
  onToggleTheme: () => void
}

export function Header({ data, theme, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const shouldReduceMotion = useReducedMotion()

  const allNavigationItems = useMemo(
    () => [...data.navigation.items, data.navigation.contactCta],
    [data.navigation.contactCta, data.navigation.items],
  )

  useEffect(() => {
    const sectionIds = allNavigationItems.map((item) => item.href.slice(1))
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0]

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id)
        }
      },
      { rootMargin: '-25% 0px -62% 0px', threshold: [0, 0.2, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [allNavigationItems])

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)
  const menuLabel = isMenuOpen ? data.ui.closeMenu : data.ui.openMenu

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] backdrop-blur-xl">
      <div className="container-shell flex h-[4.5rem] items-center justify-between gap-4">
        <a
          aria-label={data.ui.brandAriaLabel}
          className="brand-mark"
          href="#top"
          onClick={closeMenu}
        >
          <span aria-hidden="true">{data.personal.initials}</span>
        </a>

        <nav
          aria-label={data.navigation.ariaLabel}
          className="hidden items-center gap-1 lg:flex"
        >
          {data.navigation.items.map((item) => {
            const isActive = activeSection === item.href.slice(1)

            return (
              <a
                aria-current={isActive ? 'location' : undefined}
                className="nav-link"
                data-active={isActive}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle
            darkLabel={data.ui.activateDarkTheme}
            lightLabel={data.ui.activateLightTheme}
            onToggle={onToggleTheme}
            theme={theme}
          />
          <a
            className="button-secondary header-contact min-h-10 px-4 py-2 text-sm"
            href={data.navigation.contactCta.href}
          >
            {data.navigation.contactCta.label}
          </a>
          <button
            aria-controls={data.ui.mobileNavigationId}
            aria-expanded={isMenuOpen}
            aria-label={menuLabel}
            className="icon-button menu-toggle"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            ref={menuButtonRef}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            animate={{ opacity: 1, y: 0 }}
            aria-label={data.navigation.ariaLabel}
            className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 shadow-[0_24px_40px_rgba(0,0,0,0.16)] lg:hidden"
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            id={data.ui.mobileNavigationId}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          >
            <div className="container-shell flex flex-col gap-1 px-0">
              {allNavigationItems.map((item) => {
                const isActive = activeSection === item.href.slice(1)

                return (
                  <a
                    aria-current={isActive ? 'location' : undefined}
                    className="mobile-nav-link"
                    data-active={isActive}
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
