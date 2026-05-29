import { useEffect, useRef, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Phone, MapPin, Download, ArrowDown, Search, X, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PUBLICATIONS } from '../data/publications'

gsap.registerPlugin(ScrollTrigger)

type SortKey = 'recent' | 'oldest' | 'az'

const SORT_OPTIONS: { key: SortKey; label: string }[] = [
  { key: 'recent', label: 'Più recenti' },
  { key: 'oldest', label: 'Più datate' },
  { key: 'az', label: 'Alfabetico A–Z' },
]

type Filters = {
  search: string
  year: number | null
  tag: string | null
  venue: string | null
  author: string | null
  sort: SortKey
}

const INITIAL_FILTERS: Filters = {
  search: '',
  year: null,
  tag: null,
  venue: null,
  author: null,
  sort: 'recent',
}

type MenuKey = 'year' | 'tag' | 'venue' | 'author' | 'sort'

export function Pubblicazioni() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const filterBarRef = useRef<HTMLDivElement>(null)

  const [filters, setFilters] = useState<Filters>(INITIAL_FILTERS)
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null)

  const years = useMemo(
    () => Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort((a, b) => b - a),
    []
  )
  const tags = useMemo(
    () =>
      Array.from(new Set(PUBLICATIONS.flatMap((p) => p.tags))).sort((a, b) =>
        a.localeCompare(b, 'it')
      ),
    []
  )
  const venues = useMemo(
    () =>
      Array.from(new Set(PUBLICATIONS.map((p) => p.venue))).sort((a, b) =>
        a.localeCompare(b, 'it')
      ),
    []
  )
  const authors = useMemo(
    () =>
      Array.from(new Set(PUBLICATIONS.flatMap((p) => p.authors))).sort((a, b) =>
        a.localeCompare(b, 'it')
      ),
    []
  )

  const filtered = useMemo(() => {
    const q = filters.search.trim().toLowerCase()
    const base = PUBLICATIONS.filter((p) => {
      if (filters.year !== null && p.year !== filters.year) return false
      if (filters.tag && !p.tags.includes(filters.tag)) return false
      if (filters.venue && p.venue !== filters.venue) return false
      if (filters.author && !p.authors.includes(filters.author)) return false
      if (q) {
        const hay = `${p.title} ${p.authors.join(' ')} ${p.venue} ${p.abstract} ${p.tags.join(' ')}`.toLowerCase()
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
    filters.tag !== null ||
    filters.venue !== null ||
    filters.author !== null

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
            <div className="filter-bar reveal" ref={filterBarRef}>
              <div className="search-wrap">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Cerca per titolo, autore, rivista, parola chiave…"
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
                  label="Argomento"
                  value={filters.tag}
                  open={openMenu === 'tag'}
                  onToggle={() => toggleMenu('tag')}
                  options={[
                    { value: null, label: 'Tutti gli argomenti' },
                    ...tags.map((t) => ({ value: t, label: t })),
                  ]}
                  onSelect={(v) => {
                    updateFilter('tag', v)
                    setOpenMenu(null)
                  }}
                />
                <FilterDropdown
                  label="Rivista"
                  value={filters.venue}
                  open={openMenu === 'venue'}
                  onToggle={() => toggleMenu('venue')}
                  options={[
                    { value: null, label: 'Tutte le riviste' },
                    ...venues.map((v) => ({ value: v, label: v })),
                  ]}
                  onSelect={(v) => {
                    updateFilter('venue', v)
                    setOpenMenu(null)
                  }}
                />
                <FilterDropdown
                  label="Autore"
                  value={filters.author}
                  open={openMenu === 'author'}
                  onToggle={() => toggleMenu('author')}
                  options={[
                    { value: null, label: 'Tutti gli autori' },
                    ...authors.map((a) => ({ value: a, label: a })),
                  ]}
                  onSelect={(v) => {
                    updateFilter('author', v)
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
                  {filters.tag && (
                    <ActiveChip label={`Argomento: ${filters.tag}`} onRemove={() => updateFilter('tag', null)} />
                  )}
                  {filters.venue && (
                    <ActiveChip label={`Rivista: ${filters.venue}`} onRemove={() => updateFilter('venue', null)} />
                  )}
                  {filters.author && (
                    <ActiveChip label={`Autore: ${filters.author}`} onRemove={() => updateFilter('author', null)} />
                  )}
                  <button className="reset-btn" onClick={resetFilters}>
                    <X size={13} /> Reset filtri
                  </button>
                </div>
              )}
            </div>

            <div className="results-meta reveal">
              <span>
                {filtered.length} {filtered.length === 1 ? 'pubblicazione trovata' : 'pubblicazioni trovate'}
              </span>
              {filtered.length !== PUBLICATIONS.length && (
                <>
                  <span className="results-sep">·</span>
                  <span className="results-tag">su {PUBLICATIONS.length} totali</span>
                </>
              )}
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
                      {pub.link ? (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="download-btn"
                          aria-label={`Vai alla pubblicazione: ${pub.title}`}
                        >
                          <ExternalLink size={16} />
                          <span>Vai alla pubblicazione</span>
                        </a>
                      ) : (
                        <a
                          href={pub.pdfUrl}
                          download
                          className="download-btn"
                          aria-label={`Scarica PDF: ${pub.title}`}
                        >
                          <Download size={16} />
                          <span>Scarica PDF</span>
                        </a>
                      )}
                    </div>
                  </motion.li>
                ))}
              </AnimatePresence>
            </motion.ul>

            {filtered.length === 0 && (
              <div className="empty-state">
                <p>Nessuna pubblicazione corrisponde ai criteri selezionati.</p>
                <button className="reset-btn reset-btn-large" onClick={resetFilters}>
                  <X size={14} /> Reimposta filtri
                </button>
              </div>
            )}
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
        .section-title { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1.5rem; line-height: 1.15; }
        .body-text { color: var(--text-secondary); line-height: 1.85; font-size: 1.05rem; }

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

        .filter-dd-menu { position: absolute; left: 0; top: calc(100% + 8px); background: rgba(15,15,15,0.97); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 0.4rem; min-width: 240px; max-height: 320px; overflow-y: auto; list-style: none; z-index: 60; box-shadow: 0 16px 40px rgba(0,0,0,0.5); margin: 0; }
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

        .results-meta { display: flex; align-items: center; gap: 0.55rem; color: var(--text-secondary); font-size: 0.85rem; letter-spacing: 0.5px; margin-bottom: 2rem; }
        .results-sep { opacity: 0.4; }
        .results-tag { color: var(--accent-teal); text-transform: uppercase; letter-spacing: 1.5px; font-size: 0.72rem; font-weight: 600; }

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

        @media (max-width: 1100px) {
          .filter-dd-trigger { min-width: 150px; }
        }
        @media (max-width: 900px) {
          .pub-item { grid-template-columns: 1fr; gap: 1.25rem; padding: 1.5rem; }
          .pub-year-col { flex-direction: row; align-items: center; gap: 1rem; padding-right: 0; padding-bottom: 1rem; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); width: 100%; }
          .pub-year { font-size: 1.5rem; }
          .pub-action { justify-content: flex-start; }
          .grid-footer { grid-template-columns: 1fr; gap: 2rem; }
        }
        @media (max-width: 760px) {
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
