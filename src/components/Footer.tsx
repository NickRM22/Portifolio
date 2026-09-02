import { ArrowUp, ContactRound, GitBranch } from 'lucide-react'
import type { PortfolioData } from '../types'

interface FooterProps {
  data: PortfolioData
}

export function Footer({ data }: FooterProps) {
  const github = data.contact.methods.find((method) => method.icon === 'github')
  const linkedin = data.contact.methods.find(
    (method) => method.icon === 'linkedin',
  )

  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="container-shell flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-[var(--text-strong)]">
            {data.footer.note}
          </p>
          <p className="mt-2 text-xs leading-5 text-[var(--text-subtle)]">
            {data.footer.copyrightSymbol} {data.footer.year}{' '}
            {data.footer.owner} {data.footer.rights}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {github && (
            <a
              aria-label={github.ariaLabel}
              className="icon-button"
              href={github.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitBranch aria-hidden="true" size={18} />
            </a>
          )}
          {linkedin && (
            <a
              aria-label={linkedin.ariaLabel}
              className="icon-button"
              href={linkedin.url}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ContactRound aria-hidden="true" size={18} />
            </a>
          )}
          <a
            aria-label={data.footer.backToTopAriaLabel}
            className="button-secondary min-h-10 px-3 py-2 text-sm"
            href="#top"
          >
            {data.footer.backToTop}
            <ArrowUp aria-hidden="true" size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
