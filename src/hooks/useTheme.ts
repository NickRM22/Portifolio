import { useEffect, useState } from 'react'
import { portfolioData } from '../data/portfolio'
import type { Theme } from '../types'

const themeStorageKey = 'nrm-theme'

function getInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme

    try {
      window.localStorage.setItem(themeStorageKey, theme)
    } catch {
      // The selected theme still applies when storage is unavailable.
    }

    const themeColor = document.querySelector<HTMLMetaElement>(
      'meta[name="theme-color"]',
    )

    if (themeColor) {
      themeColor.content =
        theme === 'dark'
          ? portfolioData.seo.themeColorDark
          : portfolioData.seo.themeColorLight
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'dark' ? 'light' : 'dark',
    )
  }

  return { theme, toggleTheme }
}
