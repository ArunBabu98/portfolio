import { motion } from 'framer-motion'
import { IDENTITY, PROJECT_GROUPS, SKILL_TYPES } from './data.js'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Reveal({ children, className = '', delay = 0 }) {
  return (
    <motion.div
      className={className}
      variants={rise}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default function ProjectsPage({ onBack }) {
  return (
    <div className="page projects-page">
      <div className="paper-grain" aria-hidden="true" />
      <div className="paper-vignette" aria-hidden="true" />

      <nav className="nav">
        <a
          className="brand"
          href="#/"
          onClick={(e) => {
            e.preventDefault()
            onBack()
          }}
        >
          <span className="brand-mark">◈</span>
          <span className="brand-name">ARUN <span className="dim">BABU</span></span>
        </a>
        <div className="nav-status mono">PROJECT ARCHIVE</div>
        <div className="nav-links mono">
          <a
            href="#/"
            onClick={(e) => {
              e.preventDefault()
              onBack()
            }}
          >
            ← back
          </a>
        </div>
      </nav>

      <header className="pp-hero">
        <Reveal>
          <div className="chapter-meta mono">
            <span className="chapter-no">THE ARCHIVE</span>
            <span className="chapter-rule" />
            <span className="chapter-label">ALL PROJECTS</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="pp-title">Everything I&apos;ve built — and what it says about how I engineer.</h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="pp-sub">
            A curated archive of {IDENTITY.name.split(' ')[0]}&apos;s main work, grouped by domain. Each project lists its stack and the concrete skills it demanded. The through-line: foundational technology, built from first principles.
          </p>
        </Reveal>
      </header>

      {/* Skill-type matrix */}
      <section className="pp-section">
        <Reveal>
          <h2 className="pp-h2">The kind of engineer this makes me</h2>
        </Reveal>
        <div className="skill-grid">
          {SKILL_TYPES.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.05}>
              <div className="skill-card">
                <div className="skill-no mono">{String(i + 1).padStart(2, '0')}</div>
                <h3>{s.k}</h3>
                <p>{s.v}</p>
                <ul className="chips">
                  {s.tags.map((t) => (
                    <li key={t} className="chip mono">{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Grouped projects */}
      {PROJECT_GROUPS.map((group) => (
        <section className="pp-section" key={group.title}>
          <Reveal>
            <div className="group-head">
              <h2 className="pp-h2">{group.title}</h2>
              <p className="group-blurb">{group.blurb}</p>
            </div>
          </Reveal>
          <div className="proj-grid">
            {group.items.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <a className="proj-card" href={p.href} target="_blank" rel="noreferrer">
                  <div className="proj-top">
                    <h3>{p.name}</h3>
                    <span className="proj-arrow mono">↗</span>
                  </div>
                  <div className="proj-stack">
                    {p.stack.map((s) => (
                      <span key={s} className="stack-chip mono">{s}</span>
                    ))}
                  </div>
                  <p className="proj-desc">{p.desc}</p>
                  <div className="proj-skills">
                    {p.skills.map((s) => (
                      <span key={s} className="skill-pill mono">{s}</span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      <section className="pp-cta">
        <Reveal>
          <p className="pp-cta-line">This is a selection. The full body of work is <strong>145+ repositories</strong> deep.</p>
          <div className="contact-links">
            <a className="btn btn-primary" href={IDENTITY.github} target="_blank" rel="noreferrer">Browse all on GitHub ↗</a>
            <a className="btn btn-ghost" href="#/" onClick={(e) => { e.preventDefault(); onBack() }}>← Back home</a>
          </div>
        </Reveal>
      </section>

      <footer className="footer mono">
        <span>© {new Date().getFullYear()} ARUN BABU · CTO, TENSHILABS</span>
        <span className="dim">{IDENTITY.location}</span>
        <span className="dim">built from scratch, like everything else</span>
      </footer>
    </div>
  )
}
