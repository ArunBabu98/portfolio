import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { CompanionScene, DomainCanvas } from './Models.jsx'
import Companion from './Companion.jsx'
import ProjectsPage from './ProjectsPage.jsx'
import {
  IDENTITY,
  CTO,
  STORY,
  STATS,
  PILLARS,
  TRAJECTORY,
  WORK,
  PRINCIPLES,
} from './data.js'

function Icon({ name }) {
  const p = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true }
  if (name === 'linkedin')
    return (
      <svg {...p}>
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    )
  if (name === 'github')
    return (
      <svg {...p}>
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
      </svg>
    )
  return (
    <svg {...p}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.24-8 5-8-5V6l8 5 8-5v2.24z" />
    </svg>
  )
}

const CHAPTERS = [
  { id: 'top', label: 'ENTER' },
  { id: 'mandate', label: 'CTO' },
  { id: 'origin', label: 'ORIGIN' },
  { id: 'arsenal', label: 'ARSENAL' },
  { id: 'path', label: 'PATH' },
  { id: 'works', label: 'WORKS' },
  { id: 'doctrine', label: 'DOCTRINE' },
  { id: 'contact', label: 'COMMS' },
]

function Portal({ onDone }) {
  const [closing, setClosing] = useState(false)
  const finish = () => {
    setClosing(true)
    setTimeout(onDone, 1100)
  }
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onDone()
      return
    }
    const t = setTimeout(finish, 3400)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={`portal ${closing ? 'portal-open' : ''}`} onClick={finish}>
      <div className="portal-vignette" />
      <div className="portal-core">
        <svg className="portal-rings" viewBox="0 0 400 400" aria-hidden="true">
          <circle className="ring ring-outer" cx="200" cy="200" r="180" />
          <circle className="ring ring-mid" cx="200" cy="200" r="140" />
          <circle className="ring ring-inner" cx="200" cy="200" r="100" />
          <circle className="ring-draw" cx="200" cy="200" r="160" />
          {Array.from({ length: 24 }).map((_, i) => (
            <line key={i} className="tick" x1="200" y1="34" x2="200" y2="52" transform={`rotate(${i * 15} 200 200)`} style={{ animationDelay: `${0.6 + i * 0.03}s` }} />
          ))}
        </svg>
        <div className="portal-glyph">◈</div>
      </div>
      <div className="portal-text">
        <div className="portal-word">ARUN BABU</div>
        <div className="portal-sub">ENGINEERING THE NEXT ERA</div>
        <div className="portal-status">
          <span className="portal-status-label">UNSEALING ARCHIVE</span>
          <span className="portal-bar"><span className="portal-fill" /></span>
        </div>
      </div>
      <div className="portal-skip">click to enter</div>
      <div className="portal-bloom" />
    </div>
  )
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return <motion.div className="scroll-progress" style={{ scaleX }} />
}

function ChapterRail() {
  const [active, setActive] = useState('top')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -45% 0px' }
    )
    CHAPTERS.forEach((c) => {
      const el = document.getElementById(c.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
  return (
    <div className="rail" aria-hidden="true">
      {CHAPTERS.map((c) => (
        <a key={c.id} href={`#${c.id}`} className={`rail-node ${active === c.id ? 'active' : ''}`}>
          <span className="rail-label mono">{c.label}</span>
          <span className="rail-tick" />
        </a>
      ))}
    </div>
  )
}

function TypedTagline({ lines }) {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState('typing')
  useEffect(() => {
    const full = lines[idx % lines.length]
    let t
    if (phase === 'typing') {
      if (text.length < full.length) t = setTimeout(() => setText(full.slice(0, text.length + 1)), 45)
      else t = setTimeout(() => setPhase('holding'), 2100)
    } else if (phase === 'holding') t = setTimeout(() => setPhase('deleting'), 400)
    else {
      if (text.length > 0) t = setTimeout(() => setText(full.slice(0, text.length - 1)), 22)
      else {
        setPhase('typing')
        setIdx((i) => i + 1)
      }
    }
    return () => clearTimeout(t)
  }, [text, phase, idx, lines])
  return (
    <span className="typed">
      {text}
      <span className="caret" />
    </span>
  )
}

function CountUp({ value }) {
  const m = String(value).match(/^(\D*)(\d[\d,]*)(.*)$/)
  const prefix = m ? m[1] : ''
  const target = m ? parseInt(m[2].replace(/,/g, ''), 10) : 0
  const suffix = m ? m[3] : ''
  const [n, setN] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          obs.disconnect()
          const dur = 1200
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1)
            setN(Math.round(target * (1 - Math.pow(1 - p, 3))))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )
    if (el) obs.observe(el)
    return () => obs.disconnect()
  }, [target])
  return (
    <span ref={ref}>
      {prefix}
      {n}
      {suffix}
    </span>
  )
}

const revealV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}
function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div className={className} variants={revealV} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} transition={{ delay }}>
      {children}
    </motion.div>
  )
}

/* Animated divider between sections — the visible "transition" beat. */
function SectionRule({ label }) {
  return (
    <motion.div className="section-rule" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.8 }}>
      <motion.span className="section-rule-line" variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.7, ease: 'easeOut' } } }} />
      <motion.span className="section-rule-glyph" variants={{ hidden: { opacity: 0, rotate: -90, scale: 0.5 }, show: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.6, delay: 0.15 } } }}>
        ◈
      </motion.span>
      {label && (
        <motion.span className="section-rule-label mono" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.3 } } }}>
          {label}
        </motion.span>
      )}
      <motion.span className="section-rule-line" variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.7, ease: 'easeOut' } } }} />
    </motion.div>
  )
}

function ChapterIntro({ story }) {
  return (
    <div className="chapter-intro">
      <Reveal>
        <div className="chapter-meta mono">
          <span className="chapter-no">CHAPTER {story.chapter}</span>
          <span className="chapter-rule" />
          <span className="chapter-label">{story.label}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="chapter-heading">{story.heading}</h2>
      </Reveal>
      <div className="chapter-body">
        {story.body.map((p, i) => (
          <Reveal key={i} delay={0.1 + i * 0.08}>
            <p>{p}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

function Nav({ go }) {
  return (
    <nav className="nav">
      <a className="brand" href="#top">
        <span className="brand-mark">◈</span>
        <span className="brand-name">ARUN <span className="dim">BABU</span></span>
      </a>
      <div className="nav-status mono">CTO · TENSHILABS</div>
      <div className="nav-links mono">
        <a href="#arsenal">/arsenal</a>
        <a href="#/projects" onClick={(e) => { e.preventDefault(); go('/projects') }}>/projects</a>
        <a href="#works">/works</a>
        <a href="#contact">/comms</a>
      </div>
    </nav>
  )
}

function Hero({ isMobile }) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, 90])
  const opacity = useTransform(scrollY, [0, 480], [1, 0])
  return (
    <header className="hero" id="top">
      <div className="hero-halo" aria-hidden="true" />
      <div className="hero-grid">
        <motion.div className="hero-text" style={{ y, opacity }}>
          <div className="kicker mono">
            <span className="dot" /> {IDENTITY.role}
          </div>
          <h1 className="hero-name">{IDENTITY.name}</h1>
          <p className="hero-tagline mono">
            <span className="prompt">λ</span> <TypedTagline lines={IDENTITY.taglines} />
          </p>
          <p className="hero-intro">{IDENTITY.intro}</p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#mandate">Enter the archive</a>
            <a className="btn btn-icon btn-ghost" href={IDENTITY.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon name="linkedin" /> LinkedIn
            </a>
            <a className="btn btn-icon btn-ghost" href={IDENTITY.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon name="github" /> GitHub
            </a>
          </div>
        </motion.div>
        {/* On mobile the avatar sits inline here; on desktop the traveling Companion fills this space. */}
        <div className="hero-avatar">
          {isMobile && <CompanionScene gesture="wave" quality="low" />}
          {isMobile && <div className="avatar-hint mono">◒ your guide</div>}
        </div>
      </div>
      <div className="scroll-hint mono">scroll ↓</div>
    </header>
  )
}

function CtoBand() {
  return (
    <section className="cto" id="mandate">
      <Reveal>
        <div className="cto-panel">
          <span className="corner corner-tl" />
          <span className="corner corner-tr" />
          <span className="corner corner-bl" />
          <span className="corner corner-br" />
          <div className="cto-seal mono">
            <span className="cto-seal-mark">✦</span> {CTO.seal} <span className="cto-seal-mark">✦</span>
          </div>
          <h2 className="cto-title">{CTO.title}</h2>
          <div className="cto-org">
            <span className="cto-org-name">{CTO.org}</span>
            <span className="cto-since mono">{CTO.since}</span>
          </div>
          <p className="cto-statement">{CTO.statement}</p>
          <div className="cto-ledger">
            {CTO.ledger.map((l) => (
              <div key={l.k} className="cto-ledger-row">
                <span className="cto-ledger-k mono">{l.k}</span>
                <span className="cto-ledger-v">{l.v}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function Origin() {
  return (
    <section className="section" id="origin">
      <SectionRule label="I · ORIGIN" />
      <ChapterIntro story={STORY.origin} />
      <div className="stats">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="stat">
              <div className="stat-value">
                <CountUp value={s.value} />
              </div>
              <div className="stat-label mono">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Arsenal({ isMobile }) {
  return (
    <section className="section" id="arsenal">
      <SectionRule label="II · ARSENAL" />
      <ChapterIntro story={STORY.arsenal} />
      <div className="pillars">
        {PILLARS.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.08}>
            <article className="pillar">
              <div className="pillar-stage">
                <DomainCanvas kind={p.object} quality={isMobile ? 'low' : 'high'} />
              </div>
              <div className="pillar-tag mono">FIELD {p.tag}</div>
              <h3>{p.title}</h3>
              <p className="pillar-lead">{p.lead}</p>
              <p className="pillar-body">{p.body}</p>
              <ul className="chips">
                {p.tech.map((t) => (
                  <li key={t} className="chip mono">{t}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Path() {
  return (
    <section className="section" id="path">
      <SectionRule label="III · PATH" />
      <ChapterIntro story={STORY.path} />
      <div className="timeline">
        {TRAJECTORY.map((t, i) => (
          <Reveal key={t.year} className="tl-item" delay={i * 0.08}>
            <div className="tl-year">{t.year}</div>
            <div className="tl-body">
              <h3>{t.title}</h3>
              <div className="tl-org mono">{t.org}</div>
              <p>{t.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Works({ go }) {
  return (
    <section className="section" id="works">
      <SectionRule label="IV · WORKS" />
      <ChapterIntro story={STORY.builds} />
      <div className="work-grid">
        {WORK.map((w, i) => (
          <Reveal key={w.name} delay={i * 0.07}>
            <a href={w.href} target="_blank" rel="noreferrer" className="work-card">
              <div className="work-kind mono">{w.kind}</div>
              <h3>{w.name}</h3>
              <p>{w.desc}</p>
              <span className="work-arrow mono">open ↗</span>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <div className="works-more">
          <a className="btn btn-primary" href="#/projects" onClick={(e) => { e.preventDefault(); go('/projects') }}>
            View the full project archive →
          </a>
        </div>
      </Reveal>
    </section>
  )
}

function Doctrine() {
  return (
    <section className="section" id="doctrine">
      <SectionRule label="V · DOCTRINE" />
      <ChapterIntro story={STORY.doctrine} />
      <div className="principles">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.k} className="principle" delay={i * 0.08}>
            <div className="principle-no mono">{String(i + 1).padStart(2, '0')}</div>
            <div>
              <div className="principle-k">{p.k}</div>
              <p>{p.v}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <SectionRule label="VI · COMMS" />
      <Reveal delay={0.05}>
        <h2 className="contact-title">Let the work do the talking.</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="contact-sub">
          If you are building something at the frontier — deep-tech, systems, verifiable compute, applied AI — I would like to hear about it.
        </p>
      </Reveal>
      <div className="channels">
        <Reveal delay={0.14}>
          <a className="channel" href={IDENTITY.linkedin} target="_blank" rel="noreferrer">
            <span className="channel-icon"><Icon name="linkedin" /></span>
            <span className="channel-body">
              <span className="channel-label mono">LINKEDIN</span>
              <span className="channel-value">Arun Babu</span>
              <span className="channel-note">Connect &amp; follow the work</span>
            </span>
            <span className="channel-arrow mono">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.2}>
          <a className="channel" href={IDENTITY.github} target="_blank" rel="noreferrer">
            <span className="channel-icon"><Icon name="github" /></span>
            <span className="channel-body">
              <span className="channel-label mono">GITHUB</span>
              <span className="channel-value">ArunBabu98</span>
              <span className="channel-note">145+ repositories</span>
            </span>
            <span className="channel-arrow mono">↗</span>
          </a>
        </Reveal>
        <Reveal delay={0.26}>
          <a className="channel" href={`mailto:${IDENTITY.email}`}>
            <span className="channel-icon"><Icon name="mail" /></span>
            <span className="channel-body">
              <span className="channel-label mono">EMAIL</span>
              <span className="channel-value">{IDENTITY.email}</span>
              <span className="channel-note">Direct line</span>
            </span>
            <span className="channel-arrow mono">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer mono">
      <span>© {new Date().getFullYear()} ARUN BABU · CTO, TENSHILABS</span>
      <span className="footer-social">
        <a href={IDENTITY.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        <a href={IDENTITY.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
        <a href={`mailto:${IDENTITY.email}`} aria-label="Email"><Icon name="mail" /></a>
      </span>
      <span className="dim">{IDENTITY.location}</span>
    </footer>
  )
}

function HomeView({ isMobile, go }) {
  return (
    <>
      <div className="paper-grain" aria-hidden="true" />
      <div className="paper-vignette" aria-hidden="true" />
      <ScrollProgress />
      <Companion isMobile={isMobile} />
      <Nav go={go} />
      <ChapterRail />
      <Hero isMobile={isMobile} />
      <CtoBand />
      <main>
        <Origin />
        <Arsenal isMobile={isMobile} />
        <Path />
        <Works go={go} />
        <Doctrine />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const [entered, setEntered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [route, setRoute] = useState(() =>
    typeof window !== 'undefined' && window.location.hash.startsWith('#/projects') ? 'projects' : 'home'
  )

  useEffect(() => {
    const onHash = () => {
      const r = window.location.hash.startsWith('#/projects') ? 'projects' : 'home'
      setRoute(r)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 940px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const go = (path) => {
    window.location.hash = path === '/' ? '' : `#${path.startsWith('/') ? path : '/' + path}`
  }

  if (route === 'projects') {
    return <ProjectsPage onBack={() => go('/')} />
  }

  return (
    <>
      {!entered && <Portal onDone={() => setEntered(true)} />}
      <div className={entered ? 'app-in' : 'app-hidden'}>
        <HomeView isMobile={isMobile} go={go} />
      </div>
    </>
  )
}
