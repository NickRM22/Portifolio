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
    <motion.section
      aria-labelledby={labelledBy}
      className={`section-block ${className ?? ''}`}
      id={id}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{ duration: 0.55, ease: [0.2, 0.75, 0.25, 1] }}
      viewport={{ once: true, amount: 0.12 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      <div className="container-shell">{children}</div>
    </motion.section>
  )
}
