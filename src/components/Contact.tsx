import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { PortfolioData } from '../types'
import { Icon } from './Icon'
import { MotionSection } from './MotionSection'
import { SectionTitle } from './SectionTitle'

interface ContactProps {
  data: PortfolioData
}

type CopyStatus = 'idle' | 'success' | 'error'

export function Contact({ data }: ContactProps) {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle')
  const resetTimerRef = useRef<number | undefined>(undefined)

  useEffect(
    () => () => {
      window.clearTimeout(resetTimerRef.current)
    },
    [],
  )

  const updateCopyStatus = (status: CopyStatus) => {
    setCopyStatus(status)
    window.clearTimeout(resetTimerRef.current)
    resetTimerRef.current = window.setTimeout(() => setCopyStatus('idle'), 3200)
  }

  const fallbackCopy = () => {
    const input = document.createElement('textarea')
    input.value = data.personal.email
    input.style.position = 'fixed'
    input.style.opacity = '0'
    document.body.appendChild(input)
    input.select()

    const didCopy = document.execCommand('copy')
    input.remove()
    return didCopy
  }

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(data.personal.email)
      } else if (!fallbackCopy()) {
        throw new Error()
      }

      updateCopyStatus('success')
    } catch {
      updateCopyStatus('error')
    }
  }

  const feedback =
    copyStatus === 'success'
      ? data.contact.copySuccess
      : copyStatus === 'error'
        ? data.contact.copyError
        : ''

  return (
    <MotionSection id="contato" labelledBy="contato-title">
      <div className="contact-panel">
        <div className="relative z-10">
          <SectionTitle data={data.contact} id="contato-title" />

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              aria-label={data.contact.copyAriaLabel}
              className="button-secondary"
              onClick={copyEmail}
              type="button"
            >
              {copyStatus === 'success' ? (
                <Check aria-hidden="true" size={18} />
              ) : (
                <Copy aria-hidden="true" size={18} />
              )}
              {copyStatus === 'success'
                ? data.contact.copySuccess
                : data.contact.copyButton}
            </button>
          </div>

          <p
            aria-live="polite"
            className="mt-3 min-h-6 text-sm text-[var(--text-muted)]"
            role="status"
          >
            {feedback}
          </p>
        </div>

        <ul className="relative z-10 mt-5 grid gap-3 lg:grid-cols-3">
          {data.contact.methods.map((method) => (
            <li key={method.label}>
              <a
                aria-label={method.ariaLabel}
                className="modern-card contact-method"
                href={method.url}
                rel={method.external ? 'noopener noreferrer' : undefined}
                target={method.external ? '_blank' : undefined}
              >
                <span className="icon-tile">
                  <Icon name={method.icon} size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-subtle)]">
                    {method.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-medium text-[var(--text-strong)]">
                    {method.value}
                  </span>
                </span>
                {method.external && (
                  <ArrowUpRight
                    aria-hidden="true"
                    className="shrink-0 text-[var(--text-subtle)]"
                    size={17}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div aria-hidden="true" className="contact-glow" />
      </div>
    </MotionSection>
  )
}
