import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, AnimatePresence } from 'framer-motion'
import { CompanionScene } from './Models.jsx'

/* What the guide does + says in each chapter. */
const GUIDE = {
  top: { g: 'wave', c: "Hey — I'm Arun. Let me show you around." },
  mandate: { g: 'present', c: 'First up: my post as CTO of TenshiLabs.' },
  origin: { g: 'think', c: 'Here is where it all began…' },
  arsenal: { g: 'point', c: 'The four fields I go deep in — take a look.' },
  path: { g: 'present', c: 'My path so far, step by step.' },
  works: { g: 'celebrate', c: "And some things I've built!" },
  doctrine: { g: 'think', c: 'How I actually work.' },
  contact: { g: 'wave', c: "Let's build something. 👋" },
}
const ORDER = Object.keys(GUIDE)

const SPRING = { stiffness: 90, damping: 24, mass: 0.7 }

export default function Companion() {
  const [active, setActive] = useState('top')
  const { scrollY } = useScroll()

  // dock from hero (large, right-centre) to a small corner guide —
  // spring-smoothed so the guide glides rather than tracking scroll 1:1
  const topS = useSpring(useTransform(scrollY, [0, 520], [16, 62]), SPRING)
  const rightS = useSpring(useTransform(scrollY, [0, 520], [5, 2.5]), SPRING)
  const width = useSpring(useTransform(scrollY, [0, 520], [360, 188]), SPRING)
  const height = useSpring(useTransform(scrollY, [0, 520], [420, 220]), SPRING)
  const top = useMotionTemplate`${topS}vh`
  const right = useMotionTemplate`${rightS}vw`

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -45% 0px' }
    )
    ORDER.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const guide = GUIDE[active] || GUIDE.top

  return (
    <motion.div className="companion" style={{ top, right, width, height }} aria-hidden="true">
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="companion-bubble"
          initial={{ opacity: 0, y: 8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.96 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {guide.c}
          <span className="companion-bubble-tail" />
        </motion.div>
      </AnimatePresence>
      <div className="companion-stage">
        <CompanionScene gesture={guide.g} />
      </div>
    </motion.div>
  )
}
