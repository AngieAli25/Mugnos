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
  Building2,
  Construction,
  ScanSearch,
  Mountain,
  Activity,
  ChevronLeft,
  ChevronRight,
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
  'Dismat S.r.l.',
  'Associazione MASTER',
  'Ordine Regionale dei Geologi Sicilia',
  'Ordine degli Ingegneri di Sicilia',
  'Ordine degli Architetti di Sicilia',
  'Politecnico di Milano',
  'Università di Messina',
  'Università di Catania',
  'Politecnico di Torino',
  'Università Politecnica delle Marche',
  'Università degli Studi di Enna "Kore"',
  'Università di Palermo',
  'Università Mercatorum',
  'Università degli Studi del Sannio',
  'Università degli Studi di Padova',
  'Università degli Studi di Bergamo',
  'Università degli Studi del Molise',
  'Sapienza Università di Roma',
  'Università degli Studi di Perugia',
  'Università degli Studi di Ferrara',
  'DSD Dezi Steel Design Srl',
  'CSPFea – Engineering Solutions',
  'GNR S.r.l.',
  'TRE ERRE Ingegneria S.r.l.',
  'SINA S.p.A.',
  'ANSFISA',
  'ECOSISM S.r.l.',
  'CHIMETEC s.a.s.',
  'Geosurveys S.r.l.',
  'Boviar S.r.l.',
  'ISI Ingegneria Sismica Italiana',
  'Licata S.p.A.',
]

const COMMITTENTI = [
  'ANAS',
  "Autostrade per l'Italia",
  'Aziende Sanitarie Provinciali (ASP)',
  'RAI WAY S.p.A.',
  'Soprintendenza per i Beni Culturali e Ambientali',
  'Guardia Costiera',
  'Società Ultragas S.p.A.',
  'RFI',
  'Consorzio Autostrade Siciliano (CAS)',
  'Italgas',
  'Poste Italiane',
  'Banca Monte dei Paschi di Siena',
  'Banco BPM',
  'FASTWEB',
  'Comuni, Province e Regioni',
]

const PREVIEW_COUNT = 5

export function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const sectorsCarouselRef = useRef<HTMLDivElement>(null)
  const [showAllCollab, setShowAllCollab] = useState(false)
  const [showAllCommit, setShowAllCommit] = useState(false)

  const scrollSectors = (direction: -1 | 1) => {
    const el = sectorsCarouselRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('.sector-card')
    const cardWidth = card?.offsetWidth ?? 320
    const gap = 32
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

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
          scrollTrigger: { trigger: '.sectors-carousel-wrap', start: 'top 80%', toggleActions: 'play none none none' }
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
              UN PONTE TRA ESPERIENZA
            </motion.span>
            <motion.span
              className="hero-bottom-line"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 3 }}
            >
              E INNOVAZIONE
            </motion.span>
          </div>
          {/* Logo centrato */}
          <div className="hero-logo-right">
            <motion.img
              src="/loghi/logochiaro.png"
              alt="L&M Ingegneria"
              className="hero-logo-img"
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, ease: 'easeInOut' }}
            />
          </div>
        </section>

        {/* STUDIO PRESENTATION */}
        <section id="studio" className="section-padding container">
          <div className="grid-2">
            <div className="reveal">
              <h3 className="section-tag">Lo Studio</h3>
              <img src="/loghi/1%20995.png" alt="L&M Ingegneria" className="studio-logo" />
              <Button variant="secondary" to="/studio" className="mt-3">Approfondisci la nostra storia</Button>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <p className="lead-text">
                L&M Ingegneria nasce dall'incontro tra due generazioni e una stessa visione dell'ingegneria: rigorosa, innovativa e profondamente responsabile. Siamo gli ingegneri <strong>Elio Lo Giudice</strong> e <strong>Giuseppe Mugnos</strong>, e il nostro studio è il risultato di un percorso condiviso che unisce oltre trent'anni di esperienza professionale alla spinta dell'innovazione e della ricerca scientifica.
              </p>
              <p className="body-text">
                Insieme, dal 2019 progettiamo edifici civili e infrastrutture come ponti, gallerie e opere complesse integrando modellazione numerica avanzata, conoscenza del cantiere e competenze multidisciplinari nei settori strutturale, infrastrutturale, geotecnico e forense. Trasformiamo la complessità in soluzioni sicure, durature e orientate al futuro.
              </p>
              <p className="body-text">
                L&M Ingegneria è un ponte tra esperienza e innovazione, tra metodo e visione, tra ricerca e costruzione.
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
            <div className="sectors-carousel-wrap">
              <button
                className="carousel-btn prev"
                onClick={() => scrollSectors(-1)}
                aria-label="Settore precedente"
              >
                <ChevronLeft size={22} />
              </button>
              <div className="sectors-carousel" ref={sectorsCarouselRef}>
              {[
                {
                  id: 'strutturale',
                  title: 'Ingegneria Strutturale',
                  icon: <Building2 size={24} strokeWidth={1.5} />,
                  desc: 'Progettazione, verifica, diagnosi e consolidamento di strutture civili e industriali, con attenzione a sicurezza, durabilità e prestazioni sismiche.',
                  img: 'https://loremflickr.com/1600/1000/skyscraper,structure?lock=1001',
                },
                {
                  id: 'infrastrutturale',
                  title: 'Ingegneria Infrastrutturale',
                  icon: <Construction size={24} strokeWidth={1.5} />,
                  desc: 'Progettazione di nuove infrastrutture e consulenza diagnostica per interventi su opere esistenti, orientati a funzionalità, sicurezza e sostenibilità.',
                  img: 'https://loremflickr.com/1600/1000/highway,bridge?lock=1003',
                },
                {
                  id: 'geotecnica',
                  title: 'Ingegneria Geotecnica',
                  icon: <Mountain size={24} strokeWidth={1.5} />,
                  desc: 'Analisi del complesso geotecnico, cedimenti fondazionali, progettazione di fondazioni, fronti di scavo e stabilizzazione dei versanti.',
                  img: 'https://loremflickr.com/1600/1000/excavation,foundation?lock=1007',
                },
                {
                  id: 'forense',
                  title: 'Ingegneria Forense',
                  icon: <ScanSearch size={24} strokeWidth={1.5} />,
                  desc: 'Consulenze tecniche e accertamenti su danni, dissesti e contenziosi, con valutazioni documentate e indipendenti.',
                  img: 'https://loremflickr.com/1600/1000/crack,wall?lock=1005',
                },
                {
                  id: 'monitoraggio',
                  title: 'Monitoraggio Strutturale',
                  icon: <Activity size={24} strokeWidth={1.5} />,
                  desc: 'Sistemi di monitoraggio statico e dinamico per edifici e infrastrutture, a supporto di manutenzione, gestione e prevenzione.',
                  img: 'https://loremflickr.com/1600/1000/iot?lock=1009',
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
              <button
                className="carousel-btn next"
                onClick={() => scrollSectors(1)}
                aria-label="Settore successivo"
              >
                <ChevronRight size={22} />
              </button>
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
                Una selezione di consulenze e progetti significativi che raccontano il nostro
                metodo di lavoro: dalla diagnosi e progettazione strutturale agli interventi
                infrastrutturali, dalle analisi geotecniche allo studio di monitoraggio strutturale.
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
            <h3 className="section-tag">Partnership Tecnica</h3>
            <div className="dismat-title-row">
              <h2 className="section-title dismat-title">Competenze integrate<br />nel Laboratorio DISMAT</h2>
              <img
                src="/1527004967503_logo_dismat_banner_N.jpg"
                alt="Dismat.it — Diagnostica Materica"
                className="dismat-logo-standalone d-none-mobile"
              />
            </div>
            <p className="body-text">
              Il ruolo centrale rivestito all'interno del Laboratorio <strong>DISMAT</strong> rappresenta
              per noi un elemento distintivo del nostro modus operandi. L'Ing. Lo Giudice ricopre il
              ruolo di Direttore del Laboratorio DISMAT, mentre l'Ing. Mugnos è Sperimentatore e
              Responsabile del settore di dinamica strutturale, prove speciali su strutture e infrastrutture.
            </p>
            <p className="body-text">
              Questi ruoli ci consentono di integrare nella nostra attività professionale dello studio
              una solida esperienza sperimentale maturata nell'ambito delle prove ufficiali, della
              diagnostica strutturale e delle indagini investigative su strutture e infrastrutture.
              Il fatto che svolgiamo attività di laboratorio ci permette di interpretare i dati di prova
              con maggiore consapevolezza, collegando le condizioni reali dell'opera alle scelte
              progettuali più adeguate.
            </p>
            <p className="body-text">
              Per i nostri clienti, questo significa poter contare su un approccio completo e affidabile,
              fondato su dati oggettivi, esperienza sul campo e conoscenza diretta del comportamento
              statico e dinamico di strutture e infrastrutture.
            </p>
            <Button variant="secondary" href="http://dismat.it" target="_blank">
              Visita Dismat.it <ExternalLink size={16} />
            </Button>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contatti" className="footer section-padding">
          <div className="container grid-footer">
            <div className="reveal">
              <img src="/loghi/1%20995.png" alt="L&M Ingegneria" className="footer-logo" />
              <p className="footer-desc">
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
        .studio-logo {
          width: clamp(240px, 32vw, 420px);
          height: auto;
          display: block;
          margin-bottom: 2rem;
          user-select: none;
        }
        #studio .grid-2 {
          grid-template-columns: 2fr 3fr;
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

        /* SECTORS CAROUSEL */
        .sectors-carousel-wrap {
          position: relative;
        }
        .sectors-carousel {
          display: flex;
          gap: 2rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 0.5rem 0.25rem 1.5rem;
          margin: 0 -0.25rem;
        }
        .sectors-carousel::-webkit-scrollbar { display: none; }
        .sectors-carousel > .sector-card {
          flex: 0 0 calc((100% - 4rem) / 3);
          scroll-snap-align: start;
          min-width: 0;
        }
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(10,10,10,0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.1);
          color: var(--white);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 5;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .carousel-btn:hover {
          background: var(--accent-teal);
          border-color: var(--accent-teal);
          color: var(--bg-primary);
          transform: translateY(-50%) scale(1.05);
        }
        .carousel-btn.prev { left: -22px; }
        .carousel-btn.next { right: -22px; }
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

        /* DISMAT PARTNERSHIP */
        .dismat-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
        }
        .dismat-title {
          margin-bottom: 0;
          flex: 1 1 auto;
          min-width: 0;
        }
        .dismat-logo-standalone {
          width: clamp(180px, 22vw, 260px);
          height: auto;
          object-fit: contain;
          display: block;
          flex-shrink: 0;
          filter: drop-shadow(0 12px 30px rgba(0,0,0,0.45));
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
          .numbers-grid {
            grid-template-columns: 1fr;
          }
          .sectors-carousel > .sector-card {
            flex: 0 0 calc((100% - 2rem) / 2);
          }
          .hero-main-title { font-size: 3rem; }
          .section-title { font-size: 2.2rem; }
          .hero-video-container { width: 100%; }
        }
        @media (max-width: 640px) {
          .sectors-carousel > .sector-card {
            flex: 0 0 88%;
          }
          .carousel-btn.prev { left: 4px; }
          .carousel-btn.next { right: 4px; }
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
