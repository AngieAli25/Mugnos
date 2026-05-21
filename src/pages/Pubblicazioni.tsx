import { useEffect, useRef, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, Mail, MapPin, Download, ArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PUBLICATIONS } from '../data/publications'

gsap.registerPlugin(ScrollTrigger)

type SortKey = 'recent' | 'oldest' | 'az'

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'recent', label: 'Più recenti' },
  { key: 'oldest', label: 'Più datate' },
  { key: 'az', label: 'Alfabetico A–Z' },
]

export function Pubblicazioni() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  const [sortBy, setSortBy] = useState<SortKey>('recent')
  const [sortOpen, setSortOpen] = useState(false)
  const [activeYear, setActiveYear] = useState<number | 'all'>('all')

  const availableYears = useMemo(() => {
    const years = Array.from(new Set(PUBLICATIONS.map((p) => p.year)))
    return years.sort((a, b) => b - a)
  }, [])

  const filtered = useMemo(() => {
    const base =
      activeYear === 'all' ? PUBLICATIONS : PUBLICATIONS.filter((p) => p.year === activeYear)
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
  }, [activeYear, sortBy])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
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
            <Link to="/pubblicazioni" className="active-link">Pubblicazioni</Link>
            <Link to="/eventi">Eventi</Link>
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
              <h3 className="section-tag">Ricerca Scientifica</h3>
              <h1 className="hero-main-title">
                Le Nostre <span className="text-gradient">Pubblicazioni</span>
              </h1>
              <p className="hero-subtitle">
                Una raccolta dei lavori scientifici prodotti dai nostri ricercatori,
                pubblicati su riviste internazionali peer-reviewed. Scarica liberamente i PDF.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FILTER + LIST */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="filter-bar reveal">
              <div className="filter-chips">
                <button
                  className={`filter-chip ${activeYear === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveYear('all')}
                >
                  <span>Tutti gli anni</span>
                  <span className="chip-count">{PUBLICATIONS.length}</span>
                </button>
                {availableYears.map((y) => (
                  <button
                    key={y}
                    className={`filter-chip ${activeYear === y ? 'active' : ''}`}
                    onClick={() => setActiveYear(y)}
                  >
                    <span>{y}</span>
                    <span className="chip-count">
                      {PUBLICATIONS.filter((p) => p.year === y).length}
                    </span>
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
                  <span className="sort-current">
                    {SORT_OPTIONS.find((s) => s.key === sortBy)?.label}
                  </span>
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
              <span>{filtered.length} {filtered.length === 1 ? 'pubblicazione' : 'pubblicazioni'}</span>
            </div>

            <motion.ul className="pub-list" layout>
              <AnimatePresence mode="popLayout">
                {filtered.map((pub, i) => (
                  <motion.li
                    key={pub.id}
                    className="pub-item"
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="pub-year-col">
                      <span className="pub-year">{pub.year}</span>
                    </div>

                    <div className="pub-body">
                      <h3 className="pub-title">{pub.title}</h3>
                      <p className="pub-meta">
                        <span className="pub-authors">{pub.authors.join(', ')}</span>
                        <span className="pub-dot">·</span>
                        <span className="pub-venue">{pub.venue}</span>
                      </p>
                    </div>

                    <div className="pub-action">
                      <a
                        href={pub.pdfUrl}
                        download
                        className="download-btn"
                        aria-label={`Scarica PDF: ${pub.title}`}
                      >
                        <Download size={16} />
                        <span>Scarica PDF</span>
                      </a>
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            {filtered.length === 0 && (
              <div className="empty-state">
                <p>Nessuna pubblicazione per l'anno selezionato.</p>
              </div>
            )}
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
        .section-title { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1.5rem; line-height: 1.15; }
        .body-text { color: var(--text-secondary); line-height: 1.85; font-size: 1.05rem; }

        /* FILTER BAR */
        .filter-bar { display: flex; justify-content: space-between; align-items: center; gap: 2rem; flex-wrap: wrap; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .filter-chips { display: flex; flex-wrap: wrap; gap: 0.6rem; }
        .filter-chip { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--text-secondary); padding: 0.5rem 1rem; border-radius: 999px; font-size: 0.8rem; font-weight: 500; letter-spacing: 0.5px; cursor: pointer; display: inline-flex; align-items: center; gap: 0.55rem; transition: all 0.3s cubic-bezier(0.16,1,0.3,1); }
        .filter-chip:hover { border-color: rgba(35,172,181,0.45); color: var(--white); transform: translateY(-1px); }
        .filter-chip.active { background: var(--accent-teal); border-color: var(--accent-teal); color: var(--bg-primary); }
        .filter-chip.active .chip-count { background: rgba(10,10,10,0.18); color: var(--bg-primary); }
        .chip-count { background: rgba(255,255,255,0.06); border-radius: 999px; padding: 1px 8px; font-size: 0.7rem; font-weight: 600; color: var(--text-secondary); min-width: 22px; text-align: center; }

        /* SORT */
        .sort-wrap { position: relative; }
        .sort-trigger { background: transparent; border: 1px solid rgba(255,255,255,0.08); color: var(--text-primary); padding: 0.5rem 1rem; border-radius: 999px; font-size: 0.8rem; cursor: pointer; display: inline-flex; align-items: center; gap: 0.55rem; transition: border-color 0.3s; }
        .sort-trigger:hover { border-color: rgba(35,172,181,0.45); }
        .sort-label-prefix { color: var(--text-secondary); }
        .sort-current { font-weight: 600; }
        .sort-chevron { transition: transform 0.25s ease; }
        .sort-chevron.open { transform: rotate(180deg); }
        .sort-menu { position: absolute; right: 0; top: calc(100% + 8px); background: rgba(15,15,15,0.97); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 0.4rem; min-width: 200px; list-style: none; z-index: 50; box-shadow: 0 16px 40px rgba(0,0,0,0.5); }
        .sort-option { width: 100%; text-align: left; background: transparent; border: none; color: var(--text-primary); padding: 0.6rem 0.9rem; border-radius: 8px; cursor: pointer; font-size: 0.85rem; transition: background 0.2s, color 0.2s; }
        .sort-option:hover { background: rgba(35,172,181,0.08); color: var(--accent-teal); }
        .sort-option.active { color: var(--accent-teal); }

        .results-meta { color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 0.5px; margin-bottom: 2rem; }

        /* PUBLICATIONS LIST */
        .pub-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.25rem; }
        .pub-item { display: grid; grid-template-columns: 110px 1fr auto; gap: 2rem; padding: 1.75rem 2rem; background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; align-items: center; transition: border-color 0.4s, background 0.4s; }
        .pub-item:hover { border-color: rgba(35,172,181,0.3); background: rgba(255,255,255,0.035); }

        .pub-year-col { display: flex; align-items: center; padding-right: 1.5rem; border-right: 1px solid rgba(255,255,255,0.06); }
        .pub-year { font-family: var(--font-serif), Georgia, serif; font-size: 2rem; font-weight: 700; color: var(--accent-teal); line-height: 1; }

        .pub-body { min-width: 0; }
        .pub-title { font-size: 1.2rem; line-height: 1.35; margin: 0 0 0.6rem; color: var(--white); font-weight: 600; }
        .pub-meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 0.4rem; margin: 0; font-size: 0.88rem; }
        .pub-authors { color: var(--text-primary); font-weight: 500; }
        .pub-dot { color: var(--text-secondary); opacity: 0.5; }
        .pub-venue { color: var(--text-secondary); font-style: italic; }

        .pub-action { display: flex; align-items: center; }
        .download-btn { display: inline-flex; align-items: center; gap: 0.55rem; background: var(--accent-teal); color: var(--bg-primary); padding: 0.85rem 1.4rem; border-radius: 999px; font-size: 0.82rem; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; transition: transform 0.3s, box-shadow 0.3s, background 0.3s; white-space: nowrap; }
        .download-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(35,172,181,0.35); }

        .empty-state { text-align: center; padding: 5rem 1rem; color: var(--text-secondary); }

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

        @media (max-width: 900px) {
          .pub-item { grid-template-columns: 1fr; gap: 1.25rem; padding: 1.5rem; }
          .pub-year-col { flex-direction: row; align-items: center; gap: 1rem; padding-right: 0; padding-bottom: 1rem; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); width: 100%; }
          .pub-year { font-size: 1.5rem; }
          .pub-action { justify-content: flex-start; }
          .filter-bar { flex-direction: column; align-items: flex-start; }
          .sort-wrap { width: 100%; }
          .sort-trigger { width: 100%; justify-content: space-between; }
          .sort-menu { left: 0; right: 0; }
          .grid-footer { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </div>
  )
}
