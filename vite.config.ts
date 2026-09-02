import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { portfolioData } from './src/data/portfolio.ts'

const htmlEntities: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;',
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (character) => htmlEntities[character])

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'portfolio-seo',
      transformIndexHtml(html) {
        const replacements = {
          __SEO_TITLE__: portfolioData.seo.title,
          __SEO_DESCRIPTION__: portfolioData.seo.description,
          __SEO_THEME_COLOR__: portfolioData.seo.themeColorDark,
          __OG_TYPE__: portfolioData.seo.openGraph.type,
          __OG_TITLE__: portfolioData.seo.openGraph.title,
          __OG_DESCRIPTION__: portfolioData.seo.openGraph.description,
        }

        return Object.entries(replacements).reduce(
          (result, [placeholder, value]) =>
            result.replaceAll(placeholder, escapeHtml(value)),
          html,
        )
      },
    },
  ],
})
