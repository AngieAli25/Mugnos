import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/Button'
import { ArrowRight, ChevronRight, Phone, MapPin, Building2, Construction, ScanSearch, Mountain, Activity } from 'lucide-react'
import { SiteNav } from '../components/SiteNav'

gsap.registerPlugin(ScrollTrigger)

const SECTORS = [
  {
    id: 'strutturale',
    label: 'Ingegneria Strutturale',
    short: 'Strutturale',
    subtitle: 'Calcolo & Verifica',
    description: `Progettiamo, verifichiamo e consolidiamo strutture civili, industriali e strategiche, con particolare attenzione alla sicurezza, alla durabilità e alla sicurezza sismica delle opere.\n\nL'attività integra analisi normativa, modellazione FEM, diagnostica strutturale e conoscenza dei materiali, per definire soluzioni affidabili sia per nuove costruzioni sia per interventi su strutture esistenti.`,
    features: [
      'Progettazione di strutture civili e industriali',
      'Verifiche di sicurezza e vulnerabilità sismica',
      'Diagnostica strutturale e interpretazione dei dissesti',
      'Consolidamento e rinforzo di opere esistenti',
      'Modellazione FEM e analisi del comportamento strutturale',
    ],
    keywords: ['Progettazione', 'Verifica', 'Consolidamento'],
    image: '/images/settori/strutturale.jpg',
    icon: <Building2 size={36} strokeWidth={1.5} />,
  },
  {
    id: 'infrastrutturale',
    label: 'Ingegneria Infrastrutturale',
    short: 'Infrastrutturale',
    subtitle: 'Reti & Mobilità',
    description: `Supportiamo enti pubblici e grandi imprese nella progettazione, verifica e riqualificazione di opere infrastrutturali nuove ed esistenti.\n\nLavoriamo su ponti, viadotti, gallerie, strade e opere d'arte, integrando consulenza tecnica, diagnostica, modellazione numerica e supporto alla progettazione degli interventi, con un approccio orientato a funzionalità, sicurezza e continuità di esercizio.`,
    features: [
      'Progettazione di nuove infrastrutture',
      "Verifica e diagnosi di ponti, viadotti, gallerie e opere d'arte",
      'Supporto tecnico per interventi su opere esistenti',
      'Analisi strutturali e modellazione FEM infrastrutturale',
      'Strategie di riqualificazione, manutenzione e sicurezza',
    ],
    keywords: ['Ponti e viadotti', 'Gallerie', "Opere d'arte"],
    image: '/images/settori/infrastrutturale.jpg',
    icon: <Construction size={36} strokeWidth={1.5} />,
  },
  {
    id: 'geotecnica',
    label: 'Ingegneria Geotecnica',
    short: 'Geotecnica',
    subtitle: 'Fondazioni & Opere di Sostegno',
    description: `Analizziamo il comportamento del terreno e l'interazione terreno-struttura, con particolare attenzione ai cedimenti fondazionali, alla stabilità dei versanti e alla sicurezza delle opere di sostegno.\n\nL'attività geotecnica accompagna il processo progettuale dalla caratterizzazione del sottosuolo alla definizione degli interventi, integrando dati geologici, parametri geotecnici, modellazione e verifiche secondo normativa.`,
    features: [
      'Analisi del complesso geotecnico',
      'Studio dei cedimenti fondazionali',
      'Progettazione di fondazioni superficiali e profonde',
      'Fronti di scavo, paratie e opere di sostegno',
      'Interventi per la stabilità dei versanti',
    ],
    keywords: ['Opere di sostegno', 'Fondazioni', 'Stabilità'],
    image: '/images/settori/geotecnica.jpg',
    icon: <Mountain size={36} strokeWidth={1.5} />,
  },
  {
    id: 'forense',
    label: 'Ingegneria Forense',
    short: 'Forense',
    subtitle: 'Diagnostica Strutturale',
    description: `Svolgiamo consulenze tecniche e accertamenti specialistici su danni, dissesti, degradi, contenziosi e problematiche strutturali, con valutazioni documentate, indipendenti e tecnicamente verificabili.\n\nL'approccio forense integra rilievo, analisi dei materiali, diagnostica, modellazione e ricostruzione tecnica dei fenomeni, fornendo supporto a privati, imprese, enti e nei procedimenti giudiziari.`,
    features: [
      "Consulenze tecniche di parte e d'ufficio",
      'Accertamenti su danni, dissesti e degradi',
      'Analisi tecnica per contenziosi',
      'Ricostruzione delle cause dei fenomeni strutturali',
      'Valutazioni documentate e indipendenti',
    ],
    keywords: ['Diagnosi', 'Perizia', 'Supporto tecnico-giuridico'],
    image: '/images/settori/forense.jpg',
    icon: <ScanSearch size={36} strokeWidth={1.5} />,
  },
  {
    id: 'monitoraggio',
    label: 'Monitoraggio Strutturale',
    short: 'Monitoraggio',
    subtitle: 'Statica & Dinamica',
    description: `Progettiamo sistemi di monitoraggio statico e dinamico per edifici, ponti, viadotti e infrastrutture, finalizzati al controllo nel tempo del comportamento strutturale e alla valutazione delle condizioni di sicurezza.\n\nIl monitoraggio consente di trasformare i dati acquisiti in informazioni utili per la diagnosi, la manutenzione, la gestione dell'opera e la prevenzione dei rischi, curando la progettazione dell'architettura, l'assistenza in cantiere, l'analisi dei dati acquisiti e la formulazione del giudizio finale.`,
    features: [
      'Sistemi di monitoraggio statico e dinamico',
      'Progettazione architettonica del sistema',
      "Assistenza all'installazione e alla manutenzione",
      'Analisi e interpretazione dei dati acquisiti',
      'Diagnosi e giudizio sul comportamento strutturale',
    ],
    keywords: ['Architettura', 'Analisi dati', 'Diagnosi'],
    image: '/images/settori/monitoraggio.jpg',
    icon: <Activity size={36} strokeWidth={1.5} />,
  },
]

function WordReveal({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`word-group ${className}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word">{word}</span>
      ))}
    </span>
  )
}

export function Settori() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [activeSector, setActiveSector] = useState(0)
  const sectorRefs = useRef<(HTMLElement | null)[]>([])
  const imgRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal
      gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })

      // Word-by-word reveal
      gsap.utils.toArray<HTMLElement>('.word-group').forEach(group => {
        const words = group.querySelectorAll('.word')
        gsap.fromTo(words,
          { opacity: 0, y: 20, rotateX: -40 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.55, stagger: 0.04, ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 83%', toggleActions: 'play none none none' }
          }
        )
      })

      // Parallax on sector images
      imgRefs.current.forEach((img, i) => {
        if (!img) return
        gsap.to(img, {
          yPercent: -18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectorRefs.current[i],
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          }
        })
      })

      // Section image clip-path reveal
      gsap.utils.toArray<HTMLElement>('.sector-img-frame').forEach(frame => {
        gsap.fromTo(frame,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 1.4, ease: 'power4.out',
            scrollTrigger: { trigger: frame, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })

      // Feature items slide in
      gsap.utils.toArray<HTMLElement>('.feature-item').forEach(item => {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.5, ease: 'power2.out',
            scrollTrigger: { trigger: item, start: 'top 92%', toggleActions: 'play none none none' }
          }
        )
      })

      // Keyword stagger
      gsap.utils.toArray<HTMLElement>('.keyword-item').forEach(item => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'back.out(1.5)',
            scrollTrigger: { trigger: item, start: 'top 90%', toggleActions: 'play none none none' }
          }
        )
      })

      // Progress indicator tracking
      sectorRefs.current.forEach((section, i) => {
        if (!section) return
        ScrollTrigger.create({
          trigger: section,
          start: 'top 50%',
          end: 'bottom 50%',
          onEnter: () => setActiveSector(i),
          onEnterBack: () => setActiveSector(i),
        })
      })
    }, mainRef)

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 })
      gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.3 })
    }
    const onEnter = () => followerRef.current?.classList.add('active')
    const onLeave = () => followerRef.current?.classList.remove('active')
    window.addEventListener('mousemove', onMouseMove)
    const targets = document.querySelectorAll('a, button, .glass-card')
    targets.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', onMouseMove)
      targets.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave) })
    }
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return
    const id = hash.slice(1)
    const el = document.getElementById(id)
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300)
    }
  }, [])

  const handle3DMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const rX = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * 8
    const rY = -((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 8
    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.04,1.04,1.04)`
    card.style.transition = 'transform 0.1s linear'
  }
  const handle3DLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)'
    e.currentTarget.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
  }


  return (
    <div ref={mainRef} className="app-container">
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />

      <SiteNav />

      {/* Progress Sidebar */}
      <div className="progress-sidebar">
        {SECTORS.map((s, i) => (
          <a key={s.id} href={`#${s.id}`} className={`progress-dot ${activeSector === i ? 'active' : ''}`}>
            <span className="dot-indicator" />
            <span className="dot-label">{s.short}</span>
          </a>
        ))}
      </div>

      <main>
        {/* HERO */}
        <section className="hero subpage-hero settori-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
            >
              <h3 className="section-tag">Ambiti di Specializzazione</h3>
              <h1 className="hero-main-title">I Nostri <span className="text-gradient">Settori</span></h1>
              <p className="hero-subtitle">
                Operiamo nei settori strutturale e infrastrutturale integrando analisi, diagnostica,
                modellazione FEM, prove sperimentali e monitoraggio, per garantire sicurezza,
                continuità prestazionale e durabilità.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTOR DETAIL SECTIONS */}
        {SECTORS.map((sector, idx) => {
          const isReversed = idx % 2 === 1
          const ImageCol = (
            <div className="sector-img-frame">
              <div className="sector-img-parallax" ref={el => { imgRefs.current[idx] = el }}>
                <div
                  className="sector-img-inner"
                  style={{ backgroundImage: `url('${sector.image}')` }}
                />
              </div>
              <div className="sector-img-badge">
                <span className="sector-number">{String(idx + 1).padStart(2, '0')}</span>
              </div>
            </div>
          )
          const TextCol = (
            <div className="sector-text-col">
              <div className="sector-icon-wrap">{sector.icon}</div>
              <p className="section-tag">{sector.subtitle}</p>
              <h2 className="section-title">
                <WordReveal text={sector.label} />
              </h2>
              {sector.description.split('\n\n').map((para, pi) => (
                <p key={pi} className="body-text reveal">{para}</p>
              ))}
              <ul className="feature-list">
                {sector.features.map((f, fi) => (
                  <li key={fi} className="feature-item">
                    <ChevronRight size={15} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="keyword-row">
                {sector.keywords.map((k, ki) => (
                  <span key={ki} className="keyword-item">{k}</span>
                ))}
              </div>
            </div>
          )

          return (
            <section
              key={sector.id}
              id={sector.id}
              ref={el => { sectorRefs.current[idx] = el }}
              className="sector-section section-padding"
              style={{ background: idx % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)' }}
            >
              <div className="container">
                <div className="sector-grid">
                  {isReversed ? <>{TextCol}{ImageCol}</> : <>{ImageCol}{TextCol}</>}
                </div>
              </div>
            </section>
          )
        })}

        {/* STATS GRID */}
        <section className="section-padding" style={{ background: 'linear-gradient(180deg, #0d0d0d 0%, var(--bg-primary) 100%)' }}>
          <div className="container">
            <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
              <h3 className="section-tag">In Numeri</h3>
              <h2 className="section-title">L'Impatto del Nostro Lavoro</h2>
            </div>
            <div className="stats-grid">
              {[
                { value: '30+', label: 'Anni di esperienza' },
                { value: '100+', label: 'Committenti di rilievo' },
                { value: '200+', label: 'Progetti di rilievo completati' },
                { value: '30+', label: 'Collaborazioni tecniche e scientifiche' },
                { value: '20+', label: 'Partner accademici' },
                { value: '80+', label: 'Pubblicazioni e contributi scientifici' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-card glass-card reveal"
                  whileHover={{ y: -8, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onMouseMove={handle3DMove}
                  onMouseLeave={handle3DLeave}
                >
                  <span className="stat-value text-gradient">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div className="reveal">
              <h3 className="section-tag">Collaboriamo</h3>
              <h2 className="section-title">Hai un progetto da realizzare?</h2>
              <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto 3rem' }}>
                Contattaci per una consulenza preliminare. Il nostro team analizzerà le specificità
                del tuo progetto con il rigore che ci contraddistingue.
              </p>
              <Button variant="primary" to="/contatti">
                Inizia una conversazione <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contatti" className="footer section-padding">
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
                <li><Phone size={18} /> Elio Lo Giudice — <span className="footer-nowrap">+39 334 176 5539</span></li>
                <li><Phone size={18} /> Giuseppe Mugnos — <span className="footer-nowrap">+39 328 162 3648</span></li>
              </ul>
            </div>
          </div>
          <div className="container footer-bottom">
            <p>&copy; 2026 L&M Ingegneria. Tutti i diritti riservati. Realizzato da meravigliäLab.</p>
          </div>
        </footer>
      </main>

      <style>{`
        /* NAVBAR */

        /* PROGRESS SIDEBAR */
        .progress-sidebar { position: fixed; right: 2.5rem; top: 50%; transform: translateY(-50%); z-index: 100; display: flex; flex-direction: column; gap: 1.5rem; align-items: flex-end; }
        .progress-dot { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; flex-direction: row-reverse; }
        .dot-indicator { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.15); border: 1px solid rgba(255,255,255,0.2); transition: all 0.4s ease; flex-shrink: 0; }
        .dot-label { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 2px; color: rgba(255,255,255,0); transition: all 0.4s ease; transform: translateX(8px); }
        .progress-dot:hover .dot-label, .progress-dot.active .dot-label { color: var(--accent-teal); transform: translateX(0); }
        .progress-dot.active .dot-indicator { background: var(--accent-teal); border-color: var(--accent-teal); box-shadow: 0 0 12px rgba(35,172,181,0.7); width: 12px; height: 12px; }

        /* HERO */
        .hero { width: 100%; display: flex; align-items: center; position: relative; overflow: hidden; background: var(--bg-primary); }
        .subpage-hero { height: 60vh; min-height: 480px; padding-top: var(--header-height); }
        .settori-hero { background: linear-gradient(180deg, rgba(10,10,10,0.72) 0%, var(--bg-primary) 100%), url('/images/viaduct-city.jpg') center/cover no-repeat; }
        .hero-main-title { font-size: clamp(3.5rem, 8vw, 5.5rem); margin-bottom: 2rem; line-height: 1.05; }
        .hero-subtitle { font-size: 1.15rem; color: var(--text-secondary); line-height: 1.7; max-width: 700px; margin: 0 auto; }
        .section-tag { font-family: var(--font-sans); font-weight: 500; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 3px; font-size: 0.85rem; margin-bottom: 1rem; display: block; }
        .section-title { font-size: clamp(2.2rem, 4vw, 3rem); margin-bottom: 1.5rem; line-height: 1.15; }
        .body-text { color: var(--text-secondary); line-height: 1.85; font-size: 1.05rem; margin-bottom: 2rem; }
        .text-center { text-align: center; }

        /* WORD REVEAL */
        .word-group { display: inline; }
        .word { display: inline-block; margin-right: 0.32em; opacity: 0; transform: translateY(20px) rotateX(-40deg); transform-origin: top; }

        /* SECTOR SECTIONS */
        .sector-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
        .sector-img-frame { position: relative; border-radius: 20px; overflow: hidden; height: 560px; }
        .sector-img-parallax { position: absolute; inset: -20% 0 -20% 0; will-change: transform; }
        .sector-img-inner { position: absolute; inset: 0; background-size: cover; background-position: center; filter: grayscale(1) brightness(0.7); transition: filter 0.5s ease; }
        .sector-img-frame:hover .sector-img-inner { filter: grayscale(0) brightness(0.95); }
        .sector-img-badge { position: absolute; bottom: 1.5rem; left: 1.5rem; background: rgba(10,10,10,0.88); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px; padding: 0.6rem 1.2rem; }
        .sector-number { font-size: 1.4rem; font-weight: 700; font-family: var(--font-serif); color: var(--accent-teal); }
        .sector-icon-wrap { color: var(--accent-teal); margin-bottom: 1.5rem; }
        .sector-text-col { padding: 1rem 0; }
        .feature-list { list-style: none; padding: 0; margin-bottom: 2.5rem; }
        .feature-item { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.85rem; font-size: 0.95rem; color: var(--text-primary); }
        .keyword-row { display: flex; flex-wrap: wrap; gap: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.07); }
        .keyword-item { font-family: var(--font-sans); font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 2.5px; color: var(--accent-teal); }

        /* STATS */
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .stat-card { padding: 2.5rem; text-align: center; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .stat-value { display: block; font-size: 2.8rem; font-weight: 700; font-family: var(--font-serif); margin-bottom: 0.6rem; }
        .stat-label { font-size: 0.82rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-secondary); }

        /* CTA */

        /* FOOTER */
        .footer { border-top: 1px solid rgba(255,255,255,0.05); }
        .grid-footer { display: grid; grid-template-columns: 2fr auto; gap: 4rem; padding-bottom: 4rem; }
        .footer-logo { font-size: 1.8rem; margin-bottom: 1.5rem; }
        .footer-title { margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem; }
        .footer-contact-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-secondary); }
        .footer-bottom { padding-top: 4rem; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; color: #555; font-size: 0.85rem; }

        @media (max-width: 968px) {
          .sector-grid, .stats-grid, .grid-footer { grid-template-columns: 1fr; gap: 2.5rem; }
          .progress-sidebar { display: none; }
          .keyword-row { gap: 1.5rem; }
          .sector-img-frame { height: 380px; }
        }
      `}</style>
    </div>
  )
}
