import { useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef } from 'react'

const scenes = {
  sobre: 'walk',
  competencias: 'rope',
  projetos: 'game',
  formacao: 'code',
} as const

export function PixelMascot({ section }: { section: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const travelerRef = useRef<HTMLDivElement>(null)
  const spriteRef = useRef<HTMLDivElement>(null)
  const elapsedRef = useRef(0)
  const visible = useInView(ref, { margin: '0px' })
  const reducedMotion = useReducedMotion()
  const scene = scenes[section as keyof typeof scenes]

  useEffect(() => {
    const container = ref.current
    const traveler = travelerRef.current
    const sprite = spriteRef.current
    if (!scene || !container || !traveler || !sprite) return

    if (reducedMotion) {
      traveler.style.transform = ''
      sprite.style.transform = ''
      sprite.style.backgroundPositionX = '0%'
      return
    }
    if (!visible) return

    let request = 0
    let previous: number | undefined
    let distance = Math.max(0, container.clientWidth - traveler.clientWidth)
    const observer = new ResizeObserver(() => {
      distance = Math.max(0, container.clientWidth - traveler.clientWidth)
    })
    observer.observe(container)

    const tick = (now: number) => {
      if (previous !== undefined) elapsedRef.current += Math.min(now - previous, 50)
      previous = now
      const time = elapsedRef.current
      let frame = 0
      let lift = 0
      let tilt = 0

      if (scene === 'walk') {
        // Eight seconds walking, one second resting at each end.
        const cycle = time % 18000
        const returning = cycle >= 9000
        const leg = cycle % 9000
        const linearProgress = Math.min(leg / 8000, 1)
        // Ease the first and last steps without changing the central pace.
        const ramp = 0.08
        const progress = linearProgress < ramp
          ? linearProgress ** 2 / (2 * ramp * (1 - ramp))
          : linearProgress > 1 - ramp
            ? 1 - (1 - linearProgress) ** 2 / (2 * ramp * (1 - ramp))
            : (linearProgress - ramp / 2) / (1 - ramp)
        const x = (returning ? 1 - progress : progress) * distance
        const walking = leg < 8000
        traveler.style.transform = `translateX(${x}px) scaleX(${returning ? -1 : 1})`
        frame = walking ? Math.floor(leg / 160) % 4 : 1
        const stepEnvelope = Math.min(leg / 200, Math.max(0, (8000 - leg) / 200), 1)
        lift = walking ? Math.sin((leg / 320) * Math.PI) ** 2 * 1.5 * stepEnvelope : 0
      } else if (scene === 'rope') {
        // Land, lift, rope under the feet, then settle; rest between sets.
        const set = time % 7200
        if (set < 5760) {
          const phase = (set % 720) / 720
          frame = Math.floor(phase * 4)
          lift = Math.sin(phase * Math.PI) ** 2 * 6
        }
      } else if (scene === 'game') {
        const cycle = time % 6400
        // Mostly focused button presses, then a brief happy reaction.
        frame = cycle < 4000 ? Math.floor(cycle / 360) % 2
          : cycle < 4480 ? 2 : cycle < 5200 ? 3 : 0
        lift = cycle >= 4000 && cycle < 4480
          ? Math.sin(((cycle - 4000) / 480) * Math.PI) * 2 : 0
      } else {
        const cycle = time % 5600
        // Short typing bursts alternate with a reading pause.
        frame = cycle < 3200 ? Math.floor(cycle / 200) % 2
          : cycle < 3800 ? 2 : cycle < 4200 ? 3 : 0
        const typingEnvelope = Math.min(cycle / 200, Math.max(0, (3200 - cycle) / 200), 1)
        tilt = cycle < 3200 ? Math.sin(cycle / 180) * 0.35 * typingEnvelope : 0
      }

      const framePosition = `${frame * (100 / 3)}%`
      if (sprite.style.backgroundPositionX !== framePosition) {
        sprite.style.backgroundPositionX = framePosition
      }
      sprite.style.transform = `translateY(${-lift}px) rotate(${tilt}deg)`
      request = requestAnimationFrame(tick)
    }

    const syncVisibility = () => {
      cancelAnimationFrame(request)
      previous = undefined
      if (!document.hidden) request = requestAnimationFrame(tick)
    }
    document.addEventListener('visibilitychange', syncVisibility)
    syncVisibility()
    return () => {
      cancelAnimationFrame(request)
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncVisibility)
    }
  }, [scene, visible, reducedMotion])

  if (!scene) return null

  return (
    <div aria-hidden="true" className={`mascot-scene mascot-scene-${scene}`} ref={ref}>
      {scene === 'walk' && (
        <>
          <span className="mascot-wall mascot-wall-one" />
          <span className="mascot-wall mascot-wall-two" />
        </>
      )}
      <div className="mascot-traveler" ref={travelerRef}>
        <div
          className={`mascot-sprite mascot-sprite-${scene}`}
          ref={spriteRef}
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/mascot/nicolas-sprites.png)` }}
        />
      </div>
      {scene === 'code' && <span className="mascot-screen-glow" />}
    </div>
  )
}
