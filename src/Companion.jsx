import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
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

/* Slightly overdamped — settles fast with zero overshoot, so the guide
   can never fly past its target or off screen. */
const DOCK = { type: 'spring', stiffness: 170, damping: 26, mass: 0.75 }

const MOBILE_STATES = {
  hidden: { opacity: 0, scale: 0.5, y: 26 },
  shown: { opacity: 1, scale: 1, y: 0 },
}

export default function Companion({ isMobile = false }) {
  const [active, setActive] = useState('top')
  const [docked, setDocked] = useState(() => typeof window !== 'undefined' && window.scrollY > 380)
  const [dims, setDims] = useState(() =>
    typeof window !== 'undefined' ? { w: window.innerWidth, h: window.innerHeight } : { w: 1280, h: 800 }
  )
  const { scrollY } = useScroll()

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // hysteresis: dock past `on`, undock below `off` — never flip-flops at the
  // boundary, and both directions react instantly (no scroll-linked lag)
  const on = isMobile ? 560 : 380
  const off = isMobile ? 440 : 280
  useMotionValueEvent(scrollY, 'change', (v) => {
    setDocked((d) => (d ? v > off : v > on))
  })

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

  const bubble = (
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
  )

  // Mobile: small corner guide that fades in once the reader leaves the hero
  // (the hero has its own inline avatar). Position is pure CSS; only
  // opacity/scale animate.
  if (isMobile) {
    return (
      <motion.div
        className="companion companion-mobile"
        variants={MOBILE_STATES}
        initial={false}
        animate={docked ? 'shown' : 'hidden'}
        transition={DOCK}
        aria-hidden="true"
      >
        {bubble}
        <div className="companion-stage">
          <CompanionScene gesture={guide.g} quality="low" active={docked} />
        </div>
      </motion.div>
    )
  }

  // Desktop rests at top:15vh / right:5vw (CSS); docking is a pure
  // transform (x/y/scale) — GPU-composited, no layout work, and the canvas
  // itself is NEVER resized. Resizing a WebGL canvas every frame is what
  // caused the jitter and blank frames mid-transition before.
  const dock = { x: dims.w * 0.03, y: dims.h * 0.49, scale: 0.5 } // 5vw→2vw, 15vh→64vh
  return (
    <motion.div
      className="companion companion-desktop"
      initial={false}
      animate={docked ? dock : { x: 0, y: 0, scale: 1 }}
      transition={DOCK}
      style={{ transformOrigin: 'top right' }}
      aria-hidden="true"
    >
      {/* counter-scale keeps the caption readable while the guide shrinks */}
      <motion.div
        className="companion-bubble-wrap"
        animate={{ scale: docked ? 1.8 : 1 }}
        transition={DOCK}
        style={{ transformOrigin: 'bottom center' }}
      >
        {bubble}
      </motion.div>
      <div className="companion-stage">
        <CompanionScene gesture={guide.g} />
      </div>
    </motion.div>
  )
}
