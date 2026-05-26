import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/Button'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  BadgeCheck,
  Building2,
  Construction,
  ScanSearch,
  Mountain,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { PROJECTS } from '../data/projects'

gsap.registerPlugin(ScrollTrigger)

const FEATURED_PROJECT_IDS = ['viadotto-cannavino', 'stadio-olimpico', 'cinque-terre']

function Counter({ value, label }: { value: string, label: string }) {
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const numericValue = parseInt(value)
    if (isNaN(numericValue)) return

    gsap.fromTo(countRef.current,
      { innerText: '0' },
      {
        innerText: numericValue,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 90%",
        }
      }
    )
  }, [value])

  return (
    <div className="number-item reveal">
      <div className="number-col-1">
        <span ref={countRef} className="number-value text-gradient">0</span>
        <span className="number-suffix text-gradient">{value.includes('+') ? '+' : ''}</span>
      </div>
      <div className="number-col-2">
        {label}
      </div>
    </div>
  )
}

const COLLABORAZIONI = [
  'Dismat.it',
  'La Sapienza Roma',
  'Politecnico di Milano',
  'Università di Palermo',
  'ETH Zürich',
  'TU Delft',
  'MIT',
  'CNR — IRPI',
  'Università di Catania',
  'Università Federico II',
]

const COMMITTENTI = [
  'ANAS',
  "Autostrade per l'Italia",
  'FS Italiane',
  'RFI',
  'Ministero Infrastrutture',
  'Sport e Salute',
  'Webuild',
  'Provincia di Salerno',
  'Soprintendenza ABAP',
  'Concessioni Autostradali Venete',
]

const PREVIEW_COUNT = 5

export function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [showAllCollab, setShowAllCollab] = useState(false)
  const [showAllCommit, setShowAllCommit] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal:not(.sector-card):not(.number-item)').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 55 },
          {
            opacity: 1, y: 0, duration: 1.1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })

      gsap.fromTo('.sector-card',
        { opacity: 0, y: 80, scale: 0.94 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, stagger: 0.15, ease: 'back.out(1.2)',
          scrollTrigger: { trigger: '.sectors-grid', start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      gsap.utils.toArray<HTMLElement>('.sector-image').forEach(img => {
        gsap.fromTo(img,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)', duration: 1.3, delay: 0.25, ease: 'power4.out',
            scrollTrigger: { trigger: img.closest('.sector-card'), start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })

      gsap.fromTo('.number-item',
        { opacity: 0, y: 60, scale: 0.85 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 1, stagger: 0.2, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: '.numbers-grid-3', start: 'top 80%', toggleActions: 'play none none none' }
        }
      )


      gsap.fromTo('.dismat-collaboration',
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power4.out',
          scrollTrigger: { trigger: '.dismat-collaboration', start: 'top 82%', toggleActions: 'play none none none' }
        }
      )
    }, mainRef)

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      gsap.to(cursorRef.current, { x: clientX, y: clientY, duration: 0.1 })
      gsap.to(followerRef.current, { x: clientX, y: clientY, duration: 0.3 })
    }
    const onMouseEnter = () => followerRef.current?.classList.add('active')
    const onMouseLeave = () => followerRef.current?.classList.remove('active')

    window.addEventListener('mousemove', onMouseMove)
    const interactables = document.querySelectorAll('a, button, .sector-card, .glass-card')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', onMouseMove)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  const handle3DMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const rX = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * 8
    const rY = -((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 8
    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.03,1.03,1.03)`
    card.style.transition = 'transform 0.1s linear'
  }

  const handle3DLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    e.currentTarget.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
  }


  return (
    <div ref={mainRef} className="app-container">
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Link to="/">
              <img src="/loghi/logochiaro.png" alt="L&M Ingegneria" style={{ height: '50px' }} />
            </Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/settori">Settori</Link>
            <Link to="/progetti">Progetti</Link>
            <Link to="/pubblicazioni">Pubblicazioni</Link>
            <Link to="/eventi">Eventi</Link>
            <Link to="/contatti">Contatti</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          {/* Full-screen video background */}
          <div className="hero-video-container">
            <video
              autoPlay
              muted
              playsInline
              className="hero-video-bg"
              src="/nuova versione video mugnoss.mp4"
              onLoadedMetadata={(e) => {
                e.currentTarget.currentTime = 3
                e.currentTarget.playbackRate = 1.25
              }}
              onEnded={(e) => {
                e.currentTarget.currentTime = 3
                e.currentTarget.playbackRate = 1.25
                e.currentTarget.play().catch(() => {})
              }}
            />
          </div>
          {/* Testo bottom-left */}
          <div className="hero-bottom-left">
            <motion.span
              className="hero-bottom-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.4 }}
            >
              DALL'ACCADEMIA
            </motion.span>
            <motion.span
              className="hero-bottom-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 5 }}
            >
              ALLA REALTÀ STRUTTURALE
            </motion.span>
          </div>
          {/* Logo centrato */}
          <div className="hero-logo-right">
            <motion.img
              src="/loghi/logochiaro.png"
              alt="L&M Ingegneria"
              className="hero-logo-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 6,
                ease: 'easeInOut',
                times: [0, 0.6, 1],
                repeat: Infinity,
                repeatDelay: 0.3,
              }}
            />
          </div>
        </section>

        {/* STUDIO PRESENTATION */}
        <section id="studio" className="section-padding container">
          <div className="grid-2">
            <div className="reveal">
              <h3 className="section-tag">Lo Studio</h3>
              <h2 className="section-title">
                L&M <span className="text-gradient">Ingegneria</span>
              </h2>
              <Button variant="secondary" to="/studio" className="mt-3">Approfondisci la nostra storia</Button>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <p className="lead-text">
                L&M Ingegneria nasce dalla visione del <strong>Prof. Elio Lo Giudice</strong> e del <strong>Prof. Giuseppe Mugnos</strong>.
                La nostra missione è traslare la ricerca d'avanguardia in soluzioni strutturali concrete ed efficienti.
              </p>
              <p className="body-text">
                Operiamo nel settore dell'ingegneria civile pesante, specializzandoci nella progettazione,
                direzione lavori e collaudo di opere d'arte complesse. Ogni progetto è affrontato con un
                approccio analitico rigoroso, supportato dai più moderni strumenti di calcolo e da una
                profonda conoscenza normativa.
              </p>
            </div>
          </div>
        </section>

        {/* CORE SECTORS */}
        <section id="settori" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center mb-5 reveal">
              <h3 className="section-tag">Eccellenza Operativa</h3>
              <h2 className="section-title">I Nostri Settori Chiave</h2>
            </div>
            <div className="sectors-grid">
              {[
                {
                  id: 'strutturale',
                  title: 'Ingegneria Strutturale',
                  icon: <Building2 size={24} strokeWidth={1.5} />,
                  desc: 'Progettazione strutturale di edifici e opere d\'arte, analisi sismica e modellazione FEM 3D.',
                  img: 'https://loremflickr.com/1600/1000/skyscraper,structure?lock=1001',
                },
                {
                  id: 'infrastrutturale',
                  title: 'Ingegneria Infrastrutturale',
                  icon: <Construction size={24} strokeWidth={1.5} />,
                  desc: 'Ponti, viadotti, gallerie e opere d\'arte stradali e ferroviarie di rilievo strategico.',
                  img: 'https://loremflickr.com/1600/1000/highway,bridge?lock=1003',
                },
                {
                  id: 'forense',
                  title: 'Ingegneria Forense',
                  icon: <ScanSearch size={24} strokeWidth={1.5} />,
                  desc: 'Perizie tecniche, indagini su cedimenti e crolli, consulenza per contenziosi civili e penali.',
                  img: 'https://loremflickr.com/1600/1000/crack,wall?lock=1005',
                },
                {
                  id: 'geotecnica',
                  title: 'Ingegneria Geotecnica',
                  icon: <Mountain size={24} strokeWidth={1.5} />,
                  desc: 'Caratterizzazione del sottosuolo, fondazioni profonde, stabilità di pendii e opere di sostegno.',
                  img: 'https://loremflickr.com/1600/1000/excavation,foundation?lock=1007',
                },
              ].map((sector, index) => (
                <div key={index} className="sector-card glass-card reveal" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                  <div className="sector-image">
                    <div className="sector-img-base" style={{ backgroundImage: `url('${sector.img}')` }} />
                  </div>
                  <div className="sector-info">
                    <div className="sector-icon">{sector.icon}</div>
                    <h3>{sector.title}</h3>
                    <p>{sector.desc}</p>
                    <Link to={`/settori#${sector.id}`} className="read-more">Dettagli <ArrowRight size={16} /></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY NUMBERS */}
        <section className="section-padding premium-numbers-section">
          <div className="container">
            <div className="numbers-grid-3">
              {[
                { label: 'Anni di Attività', value: '25+' },
                { label: 'Progetti Completati', value: '450+' },
                { label: 'Partner Accademici', value: '12' }
              ].map((n, i) => (
                <Counter key={i} value={n.value} label={n.label} />
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS & ACADEMIC */}
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container text-center mb-5 reveal">
            <h3 className="section-tag">Network</h3>
            <h2 className="section-title">Collaborazioni & Committenti</h2>
          </div>

          <div className="container network-grid reveal">
            <div className="network-box">
              <p className="network-title">Collaborazioni</p>
              <ul className="network-list">
                {(showAllCollab ? COLLABORAZIONI : COLLABORAZIONI.slice(0, PREVIEW_COUNT)).map((p) => (
                  <li key={p} className="network-item">{p}</li>
                ))}
              </ul>
              {COLLABORAZIONI.length > PREVIEW_COUNT && (
                <button
                  className="network-toggle"
                  onClick={() => setShowAllCollab((v) => !v)}
                >
                  {showAllCollab
                    ? 'Mostra meno'
                    : `Mostra tutte (+${COLLABORAZIONI.length - PREVIEW_COUNT})`}
                </button>
              )}
            </div>

            <div className="network-box">
              <p className="network-title">Principali Committenti</p>
              <ul className="network-list">
                {(showAllCommit ? COMMITTENTI : COMMITTENTI.slice(0, PREVIEW_COUNT)).map((p) => (
                  <li key={p} className="network-item">{p}</li>
                ))}
              </ul>
              {COMMITTENTI.length > PREVIEW_COUNT && (
                <button
                  className="network-toggle"
                  onClick={() => setShowAllCommit((v) => !v)}
                >
                  {showAllCommit
                    ? 'Mostra meno'
                    : `Mostra tutti (+${COMMITTENTI.length - PREVIEW_COUNT})`}
                </button>
              )}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="featured-header reveal">
              <div>
                <h3 className="section-tag">I Nostri Lavori</h3>
                <h2 className="section-title">Progetti realizzati</h2>
              </div>
              <p className="featured-intro">
                Una selezione delle opere che meglio rappresentano il nostro metodo
                di lavoro: dall'analisi sismica avanzata al consolidamento geotecnico,
                fino al restauro strutturale di edifici monumentali.
              </p>
            </div>

            <div className="featured-grid">
              {FEATURED_PROJECT_IDS
                .map((id) => PROJECTS.find((p) => p.id === id))
                .filter((p): p is NonNullable<typeof p> => Boolean(p))
                .map((project, i) => (
                  <motion.article
                    key={project.id}
                    className="featured-card reveal"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link to={`/progetti/${project.id}`} className="featured-card-link">
                      <div className="featured-image-wrap">
                        <img src={project.cover} alt={project.title} className="featured-image" loading="lazy" />
                        <span className="featured-year">{project.year}</span>
                      </div>
                      <div className="featured-body">
                        <span className="featured-category">{project.category}</span>
                        <h3 className="featured-title">{project.title}</h3>
                        <p className="featured-location"><MapPin size={13} /> {project.location}</p>
                      </div>
                    </Link>
                  </motion.article>
                ))}
            </div>

            <div className="featured-cta-row reveal">
              <Link to="/progetti" className="featured-cta">
                <span>Vedi tutti i progetti</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* ACADEMIC COLLABORATION WITH DISMAT */}
        <section className="section-padding container">
          <div className="dismat-collaboration glass-card p-5 reveal">
            <div className="grid-2-valign">
              <div>
                <h3 className="section-tag">Partnership Accademica</h3>
                <h2 className="section-title">Focus sulla<br />Diagnostica Materica</h2>
                <p className="body-text">
                  Collaboriamo strettamente con <strong>Dismat.it</strong>, ente indipendente
                  ed eccellenza nella diagnostica dei materiali, presente anche all'interno
                  del nostro laboratorio per le attività di analisi e verifica.
                  Questa separazione tra progettazione e verifica garantisce una trasparenza
                  totale e un rigore analitico superiore.
                </p>
                <Button variant="secondary" href="http://dismat.it" target="_blank">
                  Visita Dismat.it <ExternalLink size={16} />
                </Button>
              </div>
              <div className="dismat-card-wrap d-none-mobile">
                <div className="dismat-glow" aria-hidden="true" />
                <div className="dismat-card">
                  <span className="dismat-badge">
                    <BadgeCheck size={14} /> Partner ufficiale
                  </span>
                  <img
                    src="/1527004967503_logo_dismat_banner_N.jpg"
                    alt="Dismat.it — Diagnostica Materica"
                    className="dismat-logo"
                  />
                  <div className="dismat-card-footer">
                    <span className="dismat-meta">Laboratorio di Diagnostica</span>
                    <a
                      href="http://dismat.it"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="dismat-link"
                    >
                      dismat.it <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contatti" className="footer section-padding">
          <div className="container grid-footer">
            <div className="reveal">
              <h1 className="footer-logo">L&M INGEGNERIA</h1>
              <p className="footer-desc">
                Eccellenza nella progettazione infrastrutturale. <br />
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
        .navbar {
          height: var(--header-height);
          display: flex;
          align-items: center;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .nav-links a {
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--accent-teal);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-links a:hover {
          color: var(--accent-teal);
        }
        .nav-links a:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .hero {
          height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background-color: var(--bg-primary);
        }
        .hero-container {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: flex-start;
          width: 100%;
        }
        .hero-content-wrapper {
          max-width: 580px;
          text-align: left;
        }
        .hero-video-container {
          position: absolute;
          inset: 0;
          z-index: 1;
          overflow: hidden;
        }
        .hero-video-bg {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hero-bottom-left {
          position: absolute;
          bottom: 3rem;
          left: max(2rem, calc((100vw - 1200px) / 2 + 2rem));
          z-index: 10;
          font-family: var(--font-sans);
          font-size: clamp(0.9rem, 1.4vw, 1.25rem);
          font-weight: 500;
          letter-spacing: 3px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }
        .hero-bottom-line {
          display: block;
          line-height: 1.4;
        }
        .hero-logo-right {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-logo-img {
          width: clamp(500px, 50vw, 800px);
          filter: brightness(0) invert(1);
          user-select: none;
          pointer-events: none;
        }
        .academic-title {
          font-size: 1.2rem;
          color: var(--accent-teal);
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 1rem;
          font-family: var(--font-sans);
          font-weight: 400;
        }
        .hero-main-title {
          font-size: clamp(3.5rem, 8vw, 5.5rem);
          margin-bottom: 2rem;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 600px;
        }
        /* GRID UTILS */

        .grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }
        .grid-2-valign {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .grid-footer {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }

        .section-tag {
          font-family: var(--font-sans);
          font-weight: 500;
          color: var(--accent-teal);
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        .section-title {
          font-size: 3rem;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
        .lead-text {
          font-size: 1.4rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
          color: var(--white);
        }
        .body-text {
          color: var(--text-secondary);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .mb-5 { margin-bottom: 4rem; }
        .p-5 { padding: 4rem; }

        /* SECTORS */
        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .sector-card {
          overflow: hidden;
          position: relative;
        }
        .sector-image { height: 250px; position: relative; overflow: hidden; }
        .sector-img-base { position: absolute; inset: 0; background-size: cover; background-position: center; filter: grayscale(1) brightness(0.7); transition: filter 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .sector-card:hover .sector-img-base { filter: grayscale(0) brightness(0.95); transform: scale(1.05); }
        .sector-info {
          padding: 2rem;
        }
        .sector-icon {
          color: var(--accent-teal);
          margin-bottom: 1.5rem;
        }
        .sector-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }
        .read-more {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          margin-top: 1.5rem;
          color: var(--accent-teal);
        }

        /* NUMBERS */
        .premium-numbers-section {
          background: linear-gradient(to bottom, var(--bg-primary), #0f0f0f);
          border-top: 1px solid rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
        }
        .numbers-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          text-align: center;
        }
        .number-item {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 1.5rem;
          padding: 1rem;
          transition: transform 0.3s ease;
        }
        .number-item:hover {
          transform: translateY(-5px);
        }
        .number-col-1 {
          display: flex;
          align-items: baseline;
        }
        .number-value {
          font-size: 5rem;
          font-weight: 700;
          font-family: var(--font-serif);
          line-height: 0.85;
        }
        .number-suffix {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1;
        }
        .number-col-2 {
          text-align: left;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 0.9rem;
          color: var(--white);
          line-height: 1.3;
          max-width: 120px;
          padding-bottom: 0.5rem;
        }

        /* FEATURED PROJECTS */
        .featured-header { display: grid; grid-template-columns: 1fr 1.2fr; gap: 4rem; align-items: end; margin-bottom: 3.5rem; }
        .featured-intro { color: var(--text-secondary); font-size: 1.05rem; line-height: 1.7; margin: 0; max-width: 520px; }
        .featured-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .featured-card { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 16px; overflow: hidden; transition: transform 0.5s cubic-bezier(0.16,1,0.3,1), border-color 0.5s; }
        .featured-card:hover { transform: translateY(-6px); border-color: rgba(35,172,181,0.35); }
        .featured-card-link { display: flex; flex-direction: column; height: 100%; color: inherit; text-decoration: none; }
        .featured-image-wrap { position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: #111; }
        .featured-image { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.55) brightness(0.85); transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease; }
        .featured-card:hover .featured-image { transform: scale(1.06); filter: grayscale(0) brightness(1); }
        .featured-year { position: absolute; top: 1rem; right: 1rem; background: rgba(10,10,10,0.85); backdrop-filter: blur(8px); color: var(--accent-teal); font-family: var(--font-serif); font-size: 0.9rem; font-weight: 700; padding: 0.3rem 0.7rem; border-radius: 6px; letter-spacing: 0.5px; border: 1px solid rgba(35,172,181,0.25); }
        .featured-body { padding: 1.5rem 1.5rem 1.75rem; display: flex; flex-direction: column; gap: 0.5rem; }
        .featured-category { color: var(--accent-teal); font-size: 0.68rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
        .featured-title { font-size: 1.25rem; line-height: 1.3; margin: 0; }
        .featured-location { display: inline-flex; align-items: center; gap: 0.4rem; color: var(--text-secondary); font-size: 0.82rem; margin: 0; }
        .featured-cta-row { display: flex; justify-content: center; margin-top: 3rem; }
        .featured-cta { display: inline-flex; align-items: center; gap: 0.75rem; background: var(--accent-teal); color: var(--bg-primary); padding: 1rem 2rem; border-radius: 999px; font-size: 0.85rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; transition: transform 0.3s, box-shadow 0.3s; }
        .featured-cta:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(35,172,181,0.35); }

        /* DISMAT PARTNERSHIP CARD */
        .dismat-card-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        .dismat-glow {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(35,172,181,0.18) 0%, transparent 70%);
          filter: blur(28px);
          pointer-events: none;
          z-index: 0;
        }
        .dismat-card {
          position: relative;
          z-index: 1;
          max-width: 360px;
          width: 100%;
          background: #fff;
          border-radius: 14px;
          padding: 1.25rem 1.5rem 1rem;
          box-shadow: 0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.06);
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1), box-shadow 0.6s;
        }
        .dismat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 32px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(35,172,181,0.35);
        }
        .dismat-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          align-self: flex-start;
          background: rgba(35,172,181,0.1);
          color: var(--accent-teal);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          border: 1px solid rgba(35,172,181,0.25);
        }
        .dismat-logo {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
        }
        .dismat-card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(10,10,10,0.08);
        }
        .dismat-meta {
          font-size: 0.72rem;
          color: #555;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 600;
        }
        .dismat-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          color: var(--accent-teal);
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          transition: gap 0.3s ease, color 0.3s ease;
        }
        .dismat-link:hover {
          gap: 0.45rem;
          color: #178f97;
        }

        /* NETWORK BOXES */
        .network-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .network-box {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 2rem 2.25rem;
          display: flex;
          flex-direction: column;
        }
        .network-title {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: 3px;
          margin: 0 0 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .network-list {
          list-style: none;
          padding: 0;
          margin: 0 0 1.25rem;
          display: flex;
          flex-direction: column;
        }
        .network-item {
          position: relative;
          padding: 0.7rem 0 0.7rem 1.5rem;
          font-family: var(--font-serif);
          font-size: 1.15rem;
          color: var(--text-primary);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .network-item:last-child { border-bottom: none; }
        .network-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-teal);
          opacity: 0.55;
        }
        .network-toggle {
          align-self: flex-start;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          color: var(--text-secondary);
          padding: 0.6rem 1.2rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: auto;
          transition: border-color 0.3s, color 0.3s, background 0.3s;
        }
        .network-toggle:hover {
          border-color: var(--accent-teal);
          color: var(--accent-teal);
          background: rgba(35,172,181,0.06);
        }

        /* FOOTER */
        .footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-logo { font-size: 1.8rem; margin-bottom: 1.5rem; }
        .footer-desc { color: var(--text-secondary); line-height: 1.6; margin-bottom: 2rem; }
        .footer-title { margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem; }
        .footer-contact-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--text-secondary);
        }
        .social-links { display: flex; gap: 1.5rem; }
        .social-links a { color: var(--text-secondary); font-size: 0.9rem; }
        .social-links a:hover { color: var(--white); }
        .footer-bottom {
          padding-top: 4rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          color: #555;
          font-size: 0.85rem;
        }


        /* RESPONSIVE */
        @media (max-width: 968px) {
          .featured-header { grid-template-columns: 1fr; gap: 1.5rem; }
          .featured-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .network-grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .grid-2, .grid-footer, .grid-2-valign {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .d-none-mobile { display: none; }
          .sectors-grid, .numbers-grid {
            grid-template-columns: 1fr;
          }
          .hero-main-title { font-size: 3rem; }
          .section-title { font-size: 2.2rem; }
          .hero-video-container { width: 100%; }
        }

        /* HERO PARTICLES */
        .hero-particles { position: absolute; inset: 0; pointer-events: none; z-index: 2; }
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: var(--accent-teal);
          animation: heroParticleFloat linear infinite;
        }
        @keyframes heroParticleFloat {
          0%   { transform: translateY(0) scale(1); }
          50%  { transform: translateY(-28px) scale(1.3); }
          100% { transform: translateY(0) scale(1); }
        }
        /* HERO GRID OVERLAY */
        .hero-grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(35,172,181,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(35,172,181,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 1;
          mask-image: radial-gradient(ellipse at 70% 50%, black 0%, transparent 70%);
        }
        /* SECTOR CARD 3D */
        .sector-card { will-change: transform; }
      `}</style>
    </div>
  )
}
