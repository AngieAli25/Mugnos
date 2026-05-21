import { useEffect, useRef, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Phone, Mail, MapPin, ArrowUpRight, ArrowDown, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EVENTS, type EventType } from '../data/events'

gsap.registerPlugin(ScrollTrigger)

const TYPES: ('Tutti' | EventType)[] = [
  'Tutti',
  'Convegno Nazionale',
  'Convegno Internazionale',
  'Workshop',
  'Fiera',
]

type SortKey = 'recent' | 'oldest' | 'az'

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'recent', label: 'Più recenti' },
  { key: 'oldest', label: 'Più datati' },
  { key: 'az', label: 'Alfabetico A–Z' },
]

export function Eventi() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  const [activeType, setActiveType] = useState<'Tutti' | EventType>('Tutti')
  const [sortBy, setSortBy] = useState<SortKey>('recent')
  const [sortOpen, setSortOpen] = useState(false)

  const filtered = useMemo(() => {
    const base = activeType === 'Tutti' ? EVENTS : EVENTS.filter((e) => e.type === activeType)
    const sorted = [...base]
    switch (sortBy) {
      case 'recent':
        sorted.sort((a, b) => b.year - a.year)
        break
      case 'oldest':
        sorted.sort((a, b) => a.year - b.year)
        break
      case 'az':
        sorted.sort((a, b) => a.title.localeCompare(b.title, 'it'))
        break
    }
    return sorted
  }, [activeType, sortBy])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      })
    }, mainRef)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 })
      gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.3 })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const counts = useMemo(() => {
    const c: Record<string, number> = { Tutti: EVENTS.length }
    for (const t of TYPES) {
      if (t === 'Tutti') continue
      c[t] = EVENTS.filter((e) => e.type === t).length
    }
    return c
  }, [])

  return (
    <div ref={mainRef} className="app-container">
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />

      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Link to="/"><img src="/loghi/logochiaro.png" alt="L&M Ingegneria" style={{ height: '50px' }} /></Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/settori">Settori</Link>
            <Link to="/progetti">Progetti</Link>
            <Link to="/pubblicazioni">Pubblicazioni</Link>
            <Link to="/eventi" className="active-link">Eventi</Link>
            <Link to="/contatti">Contatti</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero subpage-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
            >
              <h3 className="section-tag">Community & Network</h3>
              <h1 className="hero-main-title">
                La Nostra Presenza agli <span className="text-gradient">Eventi</span>
              </h1>
              <p className="hero-subtitle">
                Convegni, workshop, conferenze internazionali e fiere di settore.
                Il nostro impegno nella diffusione della conoscenza tecnica e nel confronto
                con la comunità scientifica nazionale e internazionale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FILTER + GRID */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="filter-bar reveal">
              <div className="filter-chips">
                {TYPES.map((t) => (
                  <button
                    key={t}
                    className={`filter-chip ${activeType === t ? 'active' : ''}`}
                    onClick={() => setActiveType(t)}
                  >
                    <span>{t}</span>
                    <span className="chip-count">{counts[t] ?? 0}</span>
                  </button>
                ))}
              </div>
              <div className="sort-wrap">
                <button
                  className="sort-trigger"
                  onClick={() => setSortOpen((v) => !v)}
                  onBlur={() => setTimeout(() => setSortOpen(false), 120)}
                >
                  <span className="sort-label-prefix">Ordina:</span>
                  <span className="sort-current">{SORT_OPTIONS.find((s) => s.key === sortBy)?.label}</span>
                  <ArrowDown size={14} className={`sort-chevron ${sortOpen ? 'open' : ''}`} />
                </button>
                <AnimatePresence>
                  {sortOpen && (
                    <motion.ul
                      className="sort-menu"
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                    >
                      {SORT_OPTIONS.map((opt) => (
                        <li key={opt.key}>
                          <button
                            className={`sort-option ${sortBy === opt.key ? 'active' : ''}`}
                            onMouseDown={() => {
                              setSortBy(opt.key)
                              setSortOpen(false)
                            }}
                          >
                            {opt.label}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="results-meta reveal">
              <span>{filtered.length} {filtered.length === 1 ? 'evento' : 'eventi'}</span>
              {activeType !== 'Tutti' && <span className="results-sep">·</span>}
              {activeType !== 'Tutti' && <span className="results-tag">{activeType}</span>}
            </div>

            <motion.div className="events-grid" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((event, i) => (
                  <motion.article
                    key={event.id}
                    className="event-card"
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link to={`/eventi/${event.id}`} className="event-card-link">
                      <div className="event-image-wrap">
                        <img src={event.cover} alt={event.title} className="event-image" loading="lazy" />
                        <div className="event-image-overlay" />
                        <span className="event-type-badge">{event.type}</span>
                      </div>
                      <div className="event-body">
                        <h3 className="event-title">{event.title}</h3>
                        <div className="event-meta-row">
                          <span className="event-meta-item">
                            <Calendar size={13} /> {event.date}
                          </span>
                          <span className="event-meta-item">
                            <MapPin size={13} /> {event.location}{event.country && `, ${event.country}`}
                          </span>
                        </div>
                        <span className="event-cta">
                          <span>Scopri di più</span>
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <div className="empty-state">
                <p>Nessun evento per questa tipologia.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container text-center reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
            <h3 className="section-tag">Vuoi invitarci a un evento?</h3>
            <h2 className="section-title">Partecipiamo volentieri</h2>
            <p className="body-text" style={{ marginBottom: '2.5rem' }}>
              Siamo disponibili come relatori, panelist o docenti per workshop, convegni
              tecnici e attività formative. Contattaci per organizzare un intervento.
            </p>
            <Link to="/contatti" className="cta-button">
              <span>Contattaci</span> <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer section-padding">
          <div className="container grid-footer">
            <div className="reveal">
              <h1 className="footer-logo">L&M INGEGNERIA</h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '300px' }}>
                Eccellenza nella progettazione infrastrutturale.<br />
                Dall'analisi accademica alla realizzazione.
              </p>
            </div>
            <div className="reveal">
              <h4 className="footer-title">Contatti</h4>
              <ul className="footer-contact-list">
                <li><MapPin size={18} /> Contrada Andolina, Canicattì (AG)</li>
                <li><Phone size={18} /> +39 06 1234567</li>
                <li><Mail size={18} /> info@lmingegneria.it</li>
              </ul>
            </div>
            <div className="reveal">
              <h4 className="footer-title">Seguici</h4>
              <div className="social-links">
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>&copy; 2026 L&M Ingegneria. Tutti i diritti riservati. Realizzato da meravigliäLab.</p>
          </div>
        </footer>
      </main>

      <style>{`
        /* NAVBAR */
        .navbar { height: var(--header-height); display: flex; align-items: center; position: fixed; top: 0; width: 100%; z-index: 1000; background: rgba(10,10,10,0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-content { display: flex; justify-content: space-between; align-items: center; width: 100%; }
        .nav-links { display: flex; gap: 2.5rem; font-size: 0.9rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
        .nav-links a { position: relative; padding: 0.5rem 0; transition: color 0.3s ease; }
        .nav-links a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: var(--accent-teal); transform: scaleX(0); transform-origin: right; transition: transform 0.4s cubic-bezier(0.16,1,0.3,1); }
        .nav-links a:hover, .nav-links a.active-link { color: var(--accent-teal); }
        .nav-links a:hover::after, .nav-links a.active-link::after { transform: scaleX(1); transform-origin: left; }

        /* HERO */
        .hero { width: 100%; display: flex; align-items: center; position: relative; overflow: hidden; background: var(--bg-primary); }
        .subpage-hero { height: 60vh; min-height: 480px; padding-top: var(--header-height); }
        .hero-main-title { font-size: clamp(3.5rem, 8vw, 5.5rem); margin-bottom: 2rem; line-height: 1.05; }
        .hero-subtitle { font-size: 1.15rem; color: var(--text-secondary); line-height: 1.7; max-width: 700px; margin: 0 auto; }
        .section-tag { font-family: var(--font-sans); font-weight: 500; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 3px; font-size: 0.85rem; margin-bottom: 1rem; display: block; }
        .section-title { font-size: clamp(2.2rem, 4vw, 3rem); margin-bottom: 1.5rem; line-height: 1.15; }
        .body-text { color: var(--text-secondary); line-height: 1.85; font-size: 1.05rem; }
        .text-center { text-align: center; }

        /* FILTER BAR */
        .filter-bar { display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .filter-chips { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .filter-chip { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--text-secondary); padding: 0.55rem 1.1rem; border-radius: 999px; font-size: 0.82rem; font-weight: 500; letter-spacing: 0.5px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.55rem; transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
        .filter-chip:hover { border-color: rgba(35,172,181,0.45); color: var(--white); transform: translateY(-1px); }
        .filter-chip.active { background: var(--accent-teal); border-color: var(--accent-teal); color: var(--bg-primary); }
        .filter-chip.active .chip-count { background: rgba(10,10,10,0.18); color: var(--bg-primary); }
        .chip-count { background: rgba(255,255,255,0.06); border-radius: 999px; padding: 1px 8px; font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); min-width: 22px; text-align: center; }

        /* SORT */
        .sort-wrap { position: relative; }
        .sort-trigger { background: transparent; border: 1px solid rgba(255,255,255,0.08); color: var(--text-primary); padding: 0.55rem 1rem; border-radius: 999px; font-size: 0.82rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.6rem; transition: border-color 0.3s; }
        .sort-trigger:hover { border-color: rgba(35,172,181,0.45); }
        .sort-label-prefix { color: var(--text-secondary); }
        .sort-current { font-weight: 600; }
        .sort-chevron { transition: transform 0.25s ease; }
        .sort-chevron.open { transform: rotate(180deg); }
        .sort-menu { position: absolute; right: 0; top: calc(100% + 8px); background: rgba(15,15,15,0.97); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 0.4rem; min-width: 200px; list-style: none; z-index: 50; box-shadow: 0 16px 40px rgba(0,0,0,0.5); }
        .sort-option { width: 100%; text-align: left; background: transparent; border: none; color: var(--text-primary); padding: 0.65rem 0.9rem; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: background 0.2s, color 0.2s; }
        .sort-option:hover { background: rgba(35,172,181,0.08); color: var(--accent-teal); }
        .sort-option.active { color: var(--accent-teal); }

        .results-meta { display: flex; align-items: center; gap: 0.55rem; color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 0.5px; margin-bottom: 2.5rem; }
        .results-sep { opacity: 0.4; }
        .results-tag { color: var(--accent-teal); text-transform: uppercase; letter-spacing: 1.5px; font-size: 0.72rem; font-weight: 600; }

        /* EVENTS GRID */
        .events-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2.5rem; }
        .event-card { display: flex; flex-direction: column; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; overflow: hidden; transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.5s; }
        .event-card:hover { transform: translateY(-6px); border-color: rgba(35,172,181,0.35); }
        .event-card-link { display: flex; flex-direction: column; height: 100%; color: inherit; text-decoration: none; }
        .event-image-wrap { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: #111; }
        .event-image { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.6) brightness(0.85); transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease; }
        .event-card:hover .event-image { transform: scale(1.06); filter: grayscale(0) brightness(1); }
        .event-image-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(10,10,10,0.55) 100%); pointer-events: none; }
        .event-type-badge { position: absolute; top: 1rem; left: 1rem; background: rgba(10,10,10,0.85); backdrop-filter: blur(8px); color: var(--accent-teal); font-size: 0.7rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 0.35rem 0.75rem; border-radius: 6px; border: 1px solid rgba(35,172,181,0.25); }
        .event-body { padding: 1.5rem 1.75rem 1.75rem; display: flex; flex-direction: column; gap: 0.85rem; flex: 1; }
        .event-title { font-size: 1.2rem; line-height: 1.3; margin: 0; color: var(--white); font-weight: 600; }
        .event-meta-row { display: flex; flex-wrap: wrap; gap: 0.5rem 1.25rem; }
        .event-meta-item { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--text-secondary); font-size: 0.82rem; }
        .event-cta { display: inline-flex; align-items: center; gap: 0.45rem; color: var(--white); font-size: 0.78rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; padding-top: 0.5rem; padding-bottom: 0.45rem; align-self: flex-start; transition: gap 0.3s ease, color 0.3s ease; border-bottom: 1px solid rgba(255,255,255,0.18); margin-top: auto; }
        .event-card:hover .event-cta { color: var(--accent-teal); gap: 0.75rem; border-bottom-color: var(--accent-teal); }

        .empty-state { text-align: center; padding: 5rem 1rem; color: var(--text-secondary); }

        /* CTA */
        .cta-button { display: inline-flex; align-items: center; gap: 0.75rem; background: var(--accent-teal); color: var(--bg-primary); padding: 1rem 2rem; border-radius: 999px; font-size: 0.9rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; transition: transform 0.3s, box-shadow 0.3s; }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(35,172,181,0.35); }

        /* FOOTER */
        .footer { border-top: 1px solid rgba(255,255,255,0.05); }
        .grid-footer { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 4rem; padding-bottom: 4rem; }
        .footer-logo { font-size: 1.8rem; margin-bottom: 1.5rem; }
        .footer-title { margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem; }
        .footer-contact-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-secondary); }
        .social-links { display: flex; gap: 1.5rem; }
        .social-links a { color: var(--text-secondary); font-size: 0.9rem; }
        .social-links a:hover { color: var(--white); }
        .footer-bottom { padding-top: 4rem; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; color: #555; font-size: 0.85rem; }

        @media (max-width: 1100px) {
          .events-grid { grid-template-columns: repeat(2, 1fr); gap: 2rem; }
        }
        @media (max-width: 700px) {
          .events-grid, .grid-footer { grid-template-columns: 1fr; gap: 2rem; }
          .filter-bar { flex-direction: column; align-items: flex-start; }
          .sort-wrap { width: 100%; }
          .sort-trigger { width: 100%; justify-content: space-between; }
          .sort-menu { left: 0; right: 0; }
        }
      `}</style>
    </div>
  )
}
