import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, Download } from 'lucide-react'
import type { PortfolioData } from '../types'
import portrait from '../assets/nicolas-martins.jpeg'

interface HeroProps {
  data: PortfolioData
}

export function Hero({ data }: HeroProps) {
  const artRef = useRef<HTMLDivElement>(null)
  const artVisible = useInView(artRef)
  const shouldReduceMotion = useReducedMotion()
  const initial = shouldReduceMotion ? false : { opacity: 0, y: 12 }

  return (
    <section
      aria-labelledby="hero-title"
      className="container-shell hero-layout"
      id="inicio"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={initial}
        transition={{ duration: 0.6, ease: [0.2, 0.75, 0.25, 1] }}
      >
        <p className="font-mono text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent)]">
          {data.hero.eyebrow}
        </p>
        <h1
          aria-label={data.hero.titleAriaLabel}
          className="hero-title mt-4 max-w-3xl text-[clamp(2.8rem,6.5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.065em] text-[var(--text-strong)]"
          id="hero-title"
        >
          {data.hero.titleLines.map((line) => (
            <span aria-hidden="true" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-[var(--text-muted)] sm:text-xl sm:leading-9">
          {data.hero.subtitle}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
        ref={artRef}
        className="hero-art relative mx-auto aspect-square w-full max-w-[25rem]"
        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.12, duration: 0.65 }}
      >
        <div aria-hidden="true" className="hero-grid" />
        <span aria-hidden="true" className="hero-bracket hero-bracket-open">&lt;</span>
        <span aria-hidden="true" className="hero-bracket hero-bracket-close">/&gt;</span>
        <div aria-hidden="true" className="hero-orbit hero-orbit-outer" />
        <div aria-hidden="true" className="hero-orbit hero-orbit-inner" />
        <motion.div
          animate={
            shouldReduceMotion || !artVisible
              ? { y: 0, rotate: 0 }
              : { y: [0, -5, 0], rotate: [0, 0.35, 0] }
          }
          className="hero-portrait"
          transition={{ duration: shouldReduceMotion ? 0 : artVisible ? 7 : 0.4, ease: 'easeInOut', repeat: artVisible && !shouldReduceMotion ? Infinity : 0 }}
        >
          <img
            alt={data.hero.visualAriaLabel}
            className="hero-portrait-image"
            fetchPriority="high"
            height={2400}
            src={portrait}
            width={1792}
          />
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
