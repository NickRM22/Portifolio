import { ArrowUp } from 'lucide-react'
import type { PortfolioData } from '../types'
import { Icon } from './Icon'

interface FooterProps {
  data: PortfolioData
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
      <div className="container-shell">
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <div>
            <a
              className="text-lg font-semibold tracking-tight text-[var(--text-strong)] transition-colors hover:text-[var(--accent)]"
              href="#inicio"
            >
              {data.personal.name}
            </a>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              {data.footer.note}
            </p>
          </div>

          <nav aria-label="Contatos no rodapé" className="flex flex-wrap gap-x-6 gap-y-4">
            {data.contact.methods.map((method) => (
              <a
                aria-label={method.ariaLabel}
                className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
                href={method.url}
                key={method.label}
                rel={method.external ? 'noopener noreferrer' : undefined}
                target={method.external ? '_blank' : undefined}
              >
                <Icon name={method.icon} size={18} />
                {method.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-[var(--border)] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[var(--text-subtle)]">
            {data.footer.copyrightSymbol} {data.footer.year}{' '}
            {data.footer.owner} {data.footer.rights}
          </p>
          <a
            aria-label={data.footer.backToTopAriaLabel}
            className="inline-flex min-h-11 items-center gap-2 self-start text-xs font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] sm:self-auto"
            href="#inicio"
          >
            {data.footer.backToTop}
            <ArrowUp aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
