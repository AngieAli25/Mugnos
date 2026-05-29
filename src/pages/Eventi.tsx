import { useEffect, useRef, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Phone, Mail, MapPin, ArrowUpRight, ArrowDown, Calendar, Search, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { EVENTS, type EventType } from '../data/events'

gsap.registerPlugin(ScrollTrigger)

type SortKey = 'recent' | 'oldest' | 'az'

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'recent', label: 'Più recenti' },
  { key: 'oldest', label: 'Più datati' },
  { key: 'az', label: 'Alfabetico A–Z' },
]

type Filters = {
  search: string
  year: number | null
  type: EventType | null
  country: string | null
  role: string | null
  sort: SortKey
}

const INITIAL_FILTERS: Filters = {
  search: '',
  year: null,
  type: null,
  country: null,
  role: null,
  sort: 'recent',
}

type MenuKey = 'year' | 'type' | 'country' | 'role' | 'sort'

export function Eventi() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const filterBarRef = useRef<HTMLDivElement>(null)

  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS)
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null)

  const years = useMemo(
    () => Array.from(new Set(EVENTS.map((e) => e.year))).sort((a, b) => b - a),
    []
  )
  const types = useMemo(
    () => Array.from(new Set(EVENTS.map((e) => e.type))).sort((a, b) => a.localeCompare(b, 'it')),
    []
  )
  const countries = useMemo(
    () =>
      Array.from(new Set(EVENTS.map((e) => e.country).filter((c): c is string => Boolean(c)))).sort(
        (a, b) => a.localeCompare(b, 'it')
      ),
    []
  )
  const roles = useMemo(
    () => Array.from(new Set(EVENTS.map((e) => e.role))).sort((a, b) => a.localeCompare(b, 'it')),
    []
  )

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    const base = EVENTS.filter((e) => {
      if (filters.year !== null && e.year !== filters.year) return false
      if (filters.type && e.type !== filters.type) return false
      if (filters.country && e.country !== filters.country) return false
      if (filters.role && e.role !== filters.role) return false
      if (q) {
        const hay = `${e.title} ${e.location} ${e.country ?? ''} ${e.role} ${e.type} ${e.description.join(' ')}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
    const sorted = [...base]
    switch (filters.sort) {
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
  }, [filters])

  const hasActiveFilters =
    filters.search.trim() !== '' ||
    filters.year !== null ||
    filters.type !== null ||
    filters.country !== null ||
    filters.role !== null

  const updateFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }
  const resetFilters = () => setFilters({ ...INITIAL_FILTERS, sort: filters.sort })
  const toggleMenu = (k: MenuKey) => setOpenMenu((prev) => (prev === k ? null : k))

  useEffect(() => {
    if (!openMenu) return
    const onClick = (e: MouseEvent) => {
      if (!filterBarRef.current) return
      if (!filterBarRef.current.contains(e.target as Node)) setOpenMenu(null)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [openMenu])

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
            <div className="filter-bar reveal" ref={filterBarRef}>
              <div className="search-wrap">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Cerca per titolo, luogo, ruolo, parola chiave…"
                  value={filters.search}
                  onChange={(e) => updateFilter('search', e.target.value)}
                />
                {filters.search && (
                  <button className="search-clear" onClick={() => updateFilter('search', '')} aria-label="Cancella ricerca">
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="filter-row">
                <FilterDropdown
                  label="Anno"
                  value={filters.year !== null ? String(filters.year) : null}
                  open={openMenu === 'year'}
                  onToggle={() => toggleMenu('year')}
                  options={[
                    { value: null, label: 'Tutti gli anni' },
                    ...years.map((y) => ({ value: String(y), label: String(y) })),
                  ]}
                  onSelect={(v) => {
                    updateFilter('year', v === null ? null : Number(v))
                    setOpenMenu(null)
                  }}
                />
                <FilterDropdown
                  label="Tipologia"
                  value={filters.type}
                  open={openMenu === 'type'}
                  onToggle={() => toggleMenu('type')}
                  options={[
                    { value: null, label: 'Tutte le tipologie' },
                    ...types.map((t) => ({ value: t, label: t })),
                  ]}
                  onSelect={(v) => {
                    updateFilter('type', v as EventType | null)
                    setOpenMenu(null)
                  }}
                />
                <FilterDropdown
                  label="Paese"
                  value={filters.country}
                  open={openMenu === 'country'}
                  onToggle={() => toggleMenu('country')}
                  options={[
                    { value: null, label: 'Tutti i paesi' },
                    ...countries.map((c) => ({ value: c, label: c })),
                  ]}
                  onSelect={(v) => {
                    updateFilter('country', v)
                    setOpenMenu(null)
                  }}
                />
                <FilterDropdown
                  label="Ruolo"
                  value={filters.role}
                  open={openMenu === 'role'}
                  onToggle={() => toggleMenu('role')}
                  options={[
                    { value: null, label: 'Tutti i ruoli' },
                    ...roles.map((r) => ({ value: r, label: r })),
                  ]}
                  onSelect={(v) => {
                    updateFilter('role', v)
                    setOpenMenu(null)
                  }}
                />
                <div className="filter-row-spacer" />
                <FilterDropdown
                  label="Ordina"
                  value={SORT_OPTIONS.find((s) => s.key === filters.sort)?.label ?? null}
                  open={openMenu === 'sort'}
                  onToggle={() => toggleMenu('sort')}
                  options={SORT_OPTIONS.map((s) => ({ value: s.key, label: s.label }))}
                  onSelect={(v) => {
                    if (v) updateFilter('sort', v as SortKey)
                    setOpenMenu(null)
                  }}
                  alignRight
                  hideClear
                />
              </div>

              {hasActiveFilters && (
                <div className="active-filters">
                  {filters.search.trim() && (
                    <ActiveChip label={`Ricerca: "${filters.search.trim()}"`} onRemove={() => updateFilter('search', '')} />
                  )}
                  {filters.year !== null && (
                    <ActiveChip label={`Anno: ${filters.year}`} onRemove={() => updateFilter('year', null)} />
                  )}
                  {filters.type && (
                    <ActiveChip label={`Tipologia: ${filters.type}`} onRemove={() => updateFilter('type', null)} />
                  )}
                  {filters.country && (
                    <ActiveChip label={`Paese: ${filters.country}`} onRemove={() => updateFilter('country', null)} />
                  )}
                  {filters.role && (
                    <ActiveChip label={`Ruolo: ${filters.role}`} onRemove={() => updateFilter('role', null)} />
                  )}
                  <button className="reset-btn" onClick={resetFilters}>
                    <X size={13} /> Reset filtri
                  </button>
                </div>
              )}
            </div>

            <div className="results-meta reveal">
              <span>
                {filtered.length} {filtered.length === 1 ? 'evento trovato' : 'eventi trovati'}
              </span>
              {filtered.length !== EVENTS.length && (
                <>
                  <span className="results-sep">·</span>
                  <span className="results-tag">su {EVENTS.length} totali</span>
                </>
              )}
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
                <p>Nessun evento corrisponde ai criteri selezionati.</p>
                <button className="reset-btn reset-btn-large" onClick={resetFilters}>
                  <X size={14} /> Reimposta filtri
                </button>
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
              <img src="/loghi/1%20995.png" alt="L&M Ingegneria" className="footer-logo" />
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '300px' }}>
                Un ponte tra esperienza e innovazione.
              </p>
            </div>
            <div className="reveal">
              <h4 className="footer-title">Contatti</h4>
              <ul className="footer-contact-list">
                <li><MapPin size={18} /> Contrada Andolina, Canicattì (AG)</li>
                <li><Phone size={18} /> Elio Lo Giudice — +39 334 176 5539</li>
                <li><Phone size={18} /> Giuseppe Mugnos — +39 328 162 3648</li>
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
        .filter-bar { display: flex; flex-direction: column; gap: 1.1rem; margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid rgba(255,255,255,0.07); position: relative; z-index: 50; }

        .search-wrap { position: relative; width: 100%; }
        .search-input { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--text-primary); padding: 0.95rem 2.6rem 0.95rem 2.8rem; border-radius: 12px; font-size: 0.95rem; font-family: var(--font-sans); outline: none; transition: border-color 0.3s, background 0.3s, box-shadow 0.3s; box-sizing: border-box; cursor: text; }
        .search-input::placeholder { color: var(--text-secondary); opacity: 0.7; }
        .search-input:focus { border-color: rgba(35,172,181,0.55); background: rgba(255,255,255,0.05); box-shadow: 0 0 0 4px rgba(35,172,181,0.08); }
        .search-icon { position: absolute; left: 1rem; top: 50%; transform: translateY(-50%); color: var(--text-secondary); pointer-events: none; }
        .search-clear { position: absolute; right: 0.7rem; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.06); border: none; color: var(--text-secondary); width: 26px; height: 26px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s, color 0.2s; }
        .search-clear:hover { background: rgba(35,172,181,0.18); color: var(--accent-teal); }

        .filter-row { display: flex; flex-wrap: wrap; gap: 0.7rem; align-items: center; }
        .filter-row-spacer { flex: 1; min-width: 0; }

        .filter-dd { position: relative; }
        .filter-dd-trigger { display: inline-flex; align-items: center; gap: 0.6rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); color: var(--text-primary); padding: 0.6rem 0.95rem; border-radius: 10px; font-size: 0.85rem; cursor: pointer; transition: border-color 0.25s, background 0.25s; font-family: var(--font-sans); min-width: 175px; justify-content: space-between; }
        .filter-dd-trigger:hover { border-color: rgba(35,172,181,0.45); }
        .filter-dd-trigger.active { border-color: var(--accent-teal); background: rgba(35,172,181,0.08); }
        .filter-dd-trigger-text { display: flex; flex-direction: column; align-items: flex-start; gap: 0.1rem; line-height: 1.1; text-align: left; }
        .filter-dd-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-secondary); font-weight: 600; }
        .filter-dd-value { font-size: 0.85rem; font-weight: 500; color: var(--text-primary); max-width: 160px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .filter-dd-value.placeholder { color: var(--text-secondary); font-weight: 400; }
        .filter-dd-icons { display: inline-flex; align-items: center; gap: 0.35rem; flex-shrink: 0; }
        .filter-dd-clear { background: rgba(35,172,181,0.15); border: none; color: var(--accent-teal); width: 20px; height: 20px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; }
        .filter-dd-clear:hover { background: rgba(35,172,181,0.3); }
        .filter-dd-chevron { transition: transform 0.25s ease; color: var(--text-secondary); }
        .filter-dd-chevron.open { transform: rotate(180deg); }

        .filter-dd-menu { position: absolute; left: 0; top: calc(100% + 8px); background: rgba(15,15,15,0.97); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 0.4rem; min-width: 220px; max-height: 320px; overflow-y: auto; list-style: none; z-index: 60; box-shadow: 0 16px 40px rgba(0,0,0,0.5); margin: 0; }
        .filter-dd-menu.align-right { left: auto; right: 0; }
        .filter-dd-menu::-webkit-scrollbar { width: 6px; }
        .filter-dd-menu::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .filter-dd-option { width: 100%; text-align: left; background: transparent; border: none; color: var(--text-primary); padding: 0.65rem 0.9rem; border-radius: 8px; cursor: pointer; font-size: 0.85rem; font-family: var(--font-sans); transition: background 0.18s, color 0.18s; display: block; }
        .filter-dd-option:hover { background: rgba(35,172,181,0.08); color: var(--accent-teal); }
        .filter-dd-option.active { color: var(--accent-teal); background: rgba(35,172,181,0.12); font-weight: 600; }

        .active-filters { display: flex; flex-wrap: wrap; gap: 0.5rem; align-items: center; }
        .active-chip { display: inline-flex; align-items: center; gap: 0.45rem; background: rgba(35,172,181,0.12); border: 1px solid rgba(35,172,181,0.32); color: var(--accent-teal); padding: 0.35rem 0.7rem 0.35rem 0.85rem; border-radius: 999px; font-size: 0.78rem; font-weight: 500; }
        .active-chip-remove { background: transparent; border: none; color: var(--accent-teal); cursor: pointer; padding: 0; display: inline-flex; align-items: center; justify-content: center; opacity: 0.7; transition: opacity 0.2s; }
        .active-chip-remove:hover { opacity: 1; }
        .reset-btn { display: inline-flex; align-items: center; gap: 0.35rem; background: transparent; border: 1px dashed rgba(255,255,255,0.18); color: var(--text-secondary); padding: 0.35rem 0.8rem; border-radius: 999px; font-size: 0.78rem; cursor: pointer; transition: border-color 0.2s, color 0.2s; font-family: var(--font-sans); }
        .reset-btn:hover { border-color: var(--accent-teal); color: var(--accent-teal); }
        .reset-btn-large { margin-top: 1.5rem; padding: 0.6rem 1.4rem; font-size: 0.85rem; }

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
          .filter-dd-trigger { min-width: 150px; }
        }
        @media (max-width: 760px) {
          .events-grid, .grid-footer { grid-template-columns: 1fr; gap: 2rem; }
          .filter-row { gap: 0.5rem; }
          .filter-row-spacer { display: none; }
          .filter-dd { flex: 1 1 calc(50% - 0.25rem); min-width: 0; }
          .filter-dd-trigger { width: 100%; min-width: 0; }
          .filter-dd-menu { left: 0; right: 0; min-width: 0; }
          .filter-dd-value { max-width: 100%; }
        }
      `}</style>
    </div>
  )
}

/* ─────────── Sub-components ─────────── */

type FilterDropdownProps = {
  label: string
  value: string | null
  open: boolean
  onToggle: () => void
  options: { value: string | null; label: string }[]
  onSelect: (v: string | null) => void
  alignRight?: boolean
  hideClear?: boolean
}

function FilterDropdown({ label, value, open, onToggle, options, onSelect, alignRight, hideClear }: FilterDropdownProps) {
  const isActive = value !== null && !hideClear
  return (
    <div className="filter-dd">
      <button
        className={`filter-dd-trigger ${isActive ? 'active' : ''}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="filter-dd-trigger-text">
          <span className="filter-dd-label">{label}</span>
          <span className={`filter-dd-value ${value ? '' : 'placeholder'}`}>
            {value ?? 'Tutti'}
          </span>
        </span>
        <span className="filter-dd-icons">
          {isActive && (
            <span
              className="filter-dd-clear"
              onClick={(e) => {
                e.stopPropagation()
                onSelect(null)
              }}
              role="button"
              aria-label={`Rimuovi filtro ${label}`}
            >
              <X size={11} />
            </span>
          )}
          <ArrowDown size={14} className={`filter-dd-chevron ${open ? 'open' : ''}`} />
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            className={`filter-dd-menu ${alignRight ? 'align-right' : ''}`}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          >
            {options.map((opt) => {
              const selected = opt.value === value || (opt.value === null && value === null)
              return (
                <li key={opt.value ?? '__all'}>
                  <button
                    className={`filter-dd-option ${selected ? 'active' : ''}`}
                    onClick={() => onSelect(opt.value)}
                  >
                    {opt.label}
                  </button>
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

function ActiveChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="active-chip">
      {label}
      <button className="active-chip-remove" onClick={onRemove} aria-label={`Rimuovi ${label}`}>
        <X size={12} />
      </button>
    </span>
  )
}
