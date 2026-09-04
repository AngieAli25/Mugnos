import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'

/**
 * Pagina di fallback per gli indirizzi che non corrispondono a nessuna rotta.
 * Serve perche' il rewrite di Vercel manda ogni URL a index.html: senza questa
 * rotta un indirizzo sbagliato mostrerebbe una pagina bianca.
 */
export function NonTrovata() {
  return (
    <div className="app-container">
      <SiteNav />

      <main className="nf-main">
        <div className="container nf-inner">
          <p className="nf-code">404</p>
          <h1 className="nf-title">Pagina non trovata</h1>
          <p className="nf-text">
            L'indirizzo che hai aperto non esiste o è stato spostato. Puoi tornare alla home
            oppure sfogliare i progetti.
          </p>
          <div className="nf-actions">
            <Link to="/" className="nf-btn nf-btn-primary">
              <span>Torna alla home</span>
              <ArrowRight size={17} />
            </Link>
            <Link to="/progetti" className="nf-btn">
              <span>Vedi i progetti</span>
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </main>

      <style>{`
        /* Stessa barra di navigazione delle altre pagine, che la definiscono
           ciascuna nel proprio blocco di stile. */
        @media (max-width: 968px) { .nav-links { display: none; } }

        .nf-main { min-height: 78vh; display: flex; align-items: center; padding-top: var(--header-height); }
        .nf-inner { max-width: 620px; text-align: center; }
        .nf-code { font-family: var(--font-serif); font-size: clamp(4rem, 12vw, 7rem); line-height: 1;
          color: var(--accent-teal); margin: 0 0 1rem; letter-spacing: 2px; }
        .nf-title { font-family: var(--font-serif); font-size: clamp(1.8rem, 4vw, 2.6rem); margin: 0 0 1.25rem; }
        .nf-text { color: var(--text-secondary); line-height: 1.8; font-size: 1.02rem; margin: 0 0 2.5rem; }
        .nf-actions { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .nf-btn { display: inline-flex; align-items: center; gap: 0.6rem; padding: 0.85rem 1.6rem;
          border: 1px solid rgba(255,255,255,0.18); border-radius: 8px; color: var(--white);
          font-size: 0.85rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;
          text-decoration: none; transition: border-color 0.3s ease, color 0.3s ease, gap 0.3s ease; }
        .nf-btn:hover { border-color: var(--accent-teal); color: var(--accent-teal); gap: 0.9rem; }
        .nf-btn-primary { background: var(--accent-teal); border-color: var(--accent-teal); color: #0A0A0A; }
        .nf-btn-primary:hover { background: transparent; color: var(--accent-teal); }
      `}</style>
    </div>
  )
}
