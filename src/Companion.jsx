import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent, useAnimationControls, AnimatePresence } from 'framer-motion'
import { CompanionScene } from './Models.jsx'

/* Where the guide stands, what he does and says, per chapter.
   fx/fy anchor his centre as viewport fractions; s = scale.
   He alternates sides so he visibly "walks through" the story. */
const GUIDE = {
  top:      { g: 'wave',      c: "Hey — I'm Arun. Let me show you around.",     fx: 0.82, fy: 0.42, s: 1 },
  mandate:  { g: 'present',   c: 'First up: my post as CTO of TenshiLabs.',     fx: 0.89, fy: 0.60, s: 0.52 },
  origin:   { g: 'think',     c: 'Here is where it all began…',                 fx: 0.12, fy: 0.78, s: 0.52 },
  arsenal:  { g: 'point',     c: 'The four fields I go deep in — take a look.', fx: 0.89, fy: 0.34, s: 0.52 },
  path:     { g: 'present',   c: 'My path so far, step by step.',               fx: 0.12, fy: 0.24, s: 0.52 },
  works:    { g: 'celebrate', c: "And some things I've built!",                 fx: 0.89, fy: 0.62, s: 0.56 },
  doctrine: { g: 'think',     c: 'How I actually work.',                        fx: 0.12, fy: 0.78, s: 0.52 },
  contact:  { g: 'wave',      c: "Let's build something. 👋",                   fx: 0.90, fy: 0.52, s: 0.62 },
}
const ORDER = Object.keys(GUIDE)

const W = 340
const H = 410
const SPRING = { type: 'spring', stiffness: 130, damping: 24, mass: 0.9 }

/* Anchor → pixel offsets, clamped so he can never leave the screen
   (64px reserved at the top for the nav). */
function anchorPx(a, w, h) {
  const halfW = (W / 2) * a.s + 10
  const halfH = (H / 2) * a.s + 10
  const cx = Math.min(Math.max(a.fx * w, halfW), w - halfW)
  const cy = Math.min(Math.max(a.fy * h, halfH + 64), h - halfH)
  return { x: cx - W / 2, y: cy - H / 2 }
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

  // travel to the active chapter's anchor: springs carry him there while the
  // opacity dips mid-flight, so he "phases" from one page to the next.
  // [null, …] keyframes start from the current value — on first mount that is
  // 0, so the same animation doubles as his initial fade-in.
  useEffect(() => {
    if (isMobile) return
    const { x, y } = anchorPx(guide, dims.w, dims.h)
    controls.start({
      x,
      y,
      scale: guide.s,
      opacity: [null, 0.2, 1],
      rotate: [null, guide.fx < 0.5 ? -7 : 7, 0],
      transition: {
        x: SPRING,
        y: SPRING,
        scale: SPRING,
        opacity: { duration: 0.85, times: [0, 0.35, 1], ease: 'easeInOut' },
        rotate: { duration: 0.85, times: [0, 0.35, 1], ease: 'easeInOut' },
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, dims, isMobile])

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

  const init = anchorPx(GUIDE.top, dims.w, dims.h)
  return (
    <motion.div
      className="companion companion-desktop"
      animate={controls}
      initial={{ x: init.x, y: init.y, scale: 1, opacity: 0, rotate: 0 }}
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
