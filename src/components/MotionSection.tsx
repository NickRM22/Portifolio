import { TechAmbient } from './TechAmbient'
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MotionSectionProps {
  children: ReactNode
  id: string
  labelledBy: string
  className?: string
}

export function MotionSection({
  children,
  id,
  labelledBy,
  className,
}: MotionSectionProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      aria-labelledby={labelledBy}
      className={`section-block ${className ?? ''}`}
      id={id}
    >
      <TechAmbient section={id} />
      <motion.div
        className="container-shell section-content"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 'some', margin: '0px 0px -24px 0px' }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
