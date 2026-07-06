import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, useAnimationControls, AnimatePresence } from 'framer-motion'
import { CompanionScene } from './Models.jsx'

/* What the guide does + says per chapter, and where he perches.
   He lives in the reserved right-hand "manuscript margin" (see index.css),
   stepping up and down it as chapters pass — never over text. */
const GUIDE = {
  top:      { g: 'wave',      c: "Hey — I'm Arun. Let me show you around.",     fy: 0.44, s: 1.0, hero: true },
  mandate:  { g: 'present',   c: 'First up: my post as CTO of TenshiLabs.',     fy: 0.58, s: 0.7 },
  origin:   { g: 'think',     c: 'Here is where it all began…',                 fy: 0.32, s: 0.7 },
  arsenal:  { g: 'point',     c: 'The four fields I go deep in — take a look.', fy: 0.62, s: 0.7 },
  path:     { g: 'present',   c: 'My path so far, step by step.',               fy: 0.32, s: 0.7 },
  works:    { g: 'celebrate', c: "And some things I've built!",                 fy: 0.62, s: 0.74 },
  doctrine: { g: 'think',     c: 'How I actually work.',                        fy: 0.32, s: 0.7 },
  contact:  { g: 'wave',      c: "Let's build something. 👋",                   fy: 0.50, s: 0.78 },
}
const ORDER = Object.keys(GUIDE)

const W = 340
const H = 410
/* One gentle spring for everything. Retargeting a running spring preserves
   velocity, so even rapid section changes blend into one continuous glide —
   no keyframe restarts, no flicker, no jitter. */
const SPRING = { type: 'spring', stiffness: 110, damping: 26, mass: 1 }

function perchPx(p, d) {
  const halfW = (W / 2) * p.s
  const halfH = (H / 2) * p.s
  // hero: large, over the hero grid's empty right column;
  // chapters: flush to the right margin lane
  const cx = p.hero ? Math.min(d.w * 0.78, d.w - halfW - 24) : d.w - halfW - 14
  const cy = Math.min(Math.max(p.fy * d.h, halfH + 70), d.h - halfH - 10)
  return { x: cx - W / 2, y: cy - H / 2, scale: p.s }
}

const MOBILE_STATES = {
  hidden: { opacity: 0, scale: 0.5, y: 26 },
  shown: { opacity: 1, scale: 1, y: 0 },
}

export default function Companion({ isMobile = false }) {
  const [active, setActive] = useState('top')
  const [shown, setShown] = useState(() => typeof window !== 'undefined' && window.scrollY > 560)
  const [dims, setDims] = useState(() =>
    typeof window !== 'undefined' ? { w: window.innerWidth, h: window.innerHeight } : { w: 1280, h: 800 }
  )
  const controls = useAnimationControls()
  const { scrollY } = useScroll()

  useEffect(() => {
    const update = () => setDims({ w: window.innerWidth, h: window.innerHeight })
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  // mobile: corner guide appears once the reader leaves the hero (hysteresis)
  useMotionValueEvent(scrollY, 'change', (v) => {
    if (!isMobile) return
    setShown((d) => (d ? v > 440 : v > 560))
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

  // glide to the active chapter's perch. The 180ms debounce means fast
  // scrolling settles on ONE destination instead of thrashing mid-flight.
  useEffect(() => {
    if (isMobile) return
    const t = setTimeout(() => {
      const { x, y, scale } = perchPx(GUIDE[active] || GUIDE.top, dims)
      controls.start({ x, y, scale, opacity: 1, transition: SPRING })
    }, 180)
    return () => clearTimeout(t)
  }, [active, dims, isMobile, controls])

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

  if (isMobile) {
    return (
      <motion.div
        className="companion companion-mobile"
        variants={MOBILE_STATES}
        initial={false}
        animate={shown ? 'shown' : 'hidden'}
        transition={SPRING}
        aria-hidden="true"
      >
        {bubble}
        <div className="companion-stage">
          <CompanionScene gesture={guide.g} quality="low" active={shown} />
        </div>
      </motion.div>
    )
  }

  const init = perchPx(GUIDE.top, dims)
  return (
    <motion.div
      className="companion companion-desktop"
      animate={controls}
      initial={{ x: init.x, y: init.y, scale: 1, opacity: 0 }}
      style={{ width: W, height: H, transformOrigin: 'center' }}
      aria-hidden="true"
    >
      {/* counter-scale keeps the caption readable at every size */}
      <motion.div
        className="companion-bubble-wrap"
        animate={{ scale: guide.s >= 0.95 ? 1 : Math.min(1.9, 0.95 / guide.s) }}
        transition={SPRING}
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
