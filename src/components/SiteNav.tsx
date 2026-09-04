import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/studio', label: 'Studio' },
  { to: '/settori', label: 'Settori' },
  { to: '/progetti', label: 'Progetti' },
  { to: '/pubblicazioni', label: 'Pubblicazioni' },
  { to: '/eventi', label: 'Eventi' },
  { to: '/contatti', label: 'Contatti' },
]

/**
 * Navigazione unica del sito. Sopra i 900px resta la barra orizzontale di prima;
 * sotto, i link diventano un pannello a tutto schermo aperto dall'hamburger.
 * La voce attiva si ricava dalla rotta, quindi le pagine non devono passarla.
 */
export function SiteNav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  // Chiude il pannello quando si cambia pagina.
  useEffect(() => setOpen(false), [pathname])

  // Blocca lo scroll del corpo mentre il pannello è aperto.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  // Esc chiude il pannello.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const isActive = (to: string) =>
    to === '/' ? pathname === '/' : pathname === to || pathname.startsWith(to + '/')

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Link to="/" aria-label="L&M Ingegneria — vai alla home">
              <img src="/loghi/logochiaro.png" alt="L&M Ingegneria" className="nav-logo-img" />
            </Link>
          </div>

          <div className="nav-links">
            {LINKS.map((l) => (
              <Link key={l.to} to={l.to} className={isActive(l.to) ? 'active-link' : undefined}>
                {l.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Chiudi il menu' : 'Apri il menu'}
            aria-expanded={open}
            aria-controls="nav-mobile-panel"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Fuori dal <nav>: il backdrop-filter della barra creerebbe un blocco
          contenitore, ancorando questo position:fixed alla barra invece che
          alla finestra (il pannello risulterebbe alto quanto l'header). */}
      <div
        id="nav-mobile-panel"
        className={`nav-mobile-panel${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        {LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={isActive(l.to) ? 'active-link' : undefined}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  )
}
