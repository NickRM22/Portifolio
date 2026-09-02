import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Download, MapPin } from 'lucide-react'
import type { PortfolioData } from '../types'

interface HeroProps {
  data: PortfolioData
}

export function Hero({ data }: HeroProps) {
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 20 }

  return (
    <section
      aria-labelledby="hero-title"
      className="container-shell grid min-h-[calc(100svh-4.5rem)] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-24 lg:pt-36"
      id="inicio"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={initial}
        transition={{ duration: 0.6, ease: [0.2, 0.75, 0.25, 1] }}
      >
        <div className="mb-7 flex flex-wrap items-center gap-3">
          <span className="status-badge">
            <span aria-hidden="true" className="status-dot" />
            {data.hero.highlight}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
            <MapPin aria-hidden="true" size={15} strokeWidth={1.8} />
            {data.personal.location}
          </span>
        </div>

        <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
          {data.hero.eyebrow}
        </p>
        <h1
          aria-label={data.hero.titleAriaLabel}
          className="hero-title mt-4 max-w-3xl text-[clamp(2.55rem,8vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--text-strong)]"
          id="hero-title"
        >
          {data.hero.titleLines.map((line) => (
            <span aria-hidden="true" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl sm:leading-9">
          {data.hero.subtitle}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a className="button-primary" href={data.hero.primaryCta.href}>
            {data.hero.primaryCta.label}
            <ArrowDownRight aria-hidden="true" size={18} />
          </a>
          <a className="button-secondary" href={data.hero.secondaryCta.href}>
            {data.hero.secondaryCta.label}
            <ArrowRight aria-hidden="true" size={18} />
          </a>
          {data.personal.resumeUrl && (
            <a
              aria-label={data.hero.resumeAriaLabel}
              className="button-secondary"
              download
              href={data.personal.resumeUrl}
            >
              {data.hero.resumeCta}
              <Download aria-hidden="true" size={18} />
            </a>
          )}
        </div>
      </motion.div>

      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        aria-label={data.hero.visualAriaLabel}
        className="relative mx-auto aspect-square w-full max-w-[31rem]"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.94 }}
        role="img"
        transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: 0.65 }}
      >
        <div aria-hidden="true" className="hero-orbit hero-orbit-outer" />
        <div aria-hidden="true" className="hero-orbit hero-orbit-inner" />
        <motion.div
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -8, 0], rotate: [0, 0.6, 0] }
          }
          aria-hidden="true"
          className="hero-monogram"
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        >
          <div className="hero-monogram-grid" />
          <span>{data.personal.initials}</span>
          <div className="hero-code-pill">
            <span>{data.hero.codeLabel}</span>
            <strong>{data.hero.codeValue}</strong>
          </div>
        </motion.div>
        <div aria-hidden="true" className="hero-node hero-node-one" />
        <div aria-hidden="true" className="hero-node hero-node-two" />
        <div aria-hidden="true" className="hero-node hero-node-three" />
      </motion.div>
    </section>
  )
}
