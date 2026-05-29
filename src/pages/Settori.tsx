import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/Button'
import { ArrowRight, ChevronRight, Phone, Mail, MapPin, Building2, Construction, ScanSearch, Mountain, Activity } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const SECTORS = [
  {
    id: 'strutturale',
    label: 'Ingegneria Strutturale',
    short: 'Strutturale',
    subtitle: 'Calcolo & Verifica',
    description: `Progettazione, verifica, diagnosi e consolidamento di strutture civili e industriali, con attenzione a sicurezza, durabilità e prestazioni sismiche.`,
    features: [
      'Progettazione di strutture civili e industriali',
      'Verifica di sicurezza e diagnosi strutturale',
      'Consolidamento e rinforzo di opere esistenti',
      'Analisi sismica secondo Eurocodici',
      'Modellazione FEM 3D ad alta densità',
    ],
    kpi: [
      { value: '250+', label: 'Progetti strutturali' },
      { value: '80+', label: 'Edifici verificati' },
      { value: '25', label: 'anni di esperienza' },
    ],
    image: 'https://loremflickr.com/1600/1000/skyscraper,structure?lock=1001',
    icon: <Building2 size={36} strokeWidth={1.5} />,
  },
  {
    id: 'infrastrutturale',
    label: 'Ingegneria Infrastrutturale',
    short: 'Infrastrutturale',
    subtitle: 'Reti & Mobilità',
    description: `Progettazione di nuove infrastrutture e consulenza e supporto tecnico diagnostico per interventi su opere esistenti, orientati a funzionalità, sicurezza e sostenibilità.`,
    features: [
      'Progettazione di nuove infrastrutture',
      'Consulenza tecnica e diagnostica',
      'Interventi su opere esistenti',
      'Verifiche di funzionalità e sicurezza',
      'Approccio orientato alla sostenibilità',
    ],
    kpi: [
      { value: '4.540', label: 'km di tracciato' },
      { value: '350+', label: "opere d'arte" },
      { value: '30+', label: 'adeguamenti sismici' },
    ],
    image: 'https://loremflickr.com/1600/1000/highway,bridge?lock=1003',
    icon: <Construction size={36} strokeWidth={1.5} />,
  },
  {
    id: 'geotecnica',
    label: 'Ingegneria Geotecnica',
    short: 'Geotecnica',
    subtitle: 'Suolo & Fondazioni',
    description: `Analisi del complesso geotecnico e dei cedimenti fondazionali e progettazione di fondazioni, fronti di scavo, opere di sostegno e interventi per la stabilità dei versanti.`,
    features: [
      'Analisi del complesso geotecnico',
      'Diagnosi dei cedimenti fondazionali',
      'Progettazione di fondazioni profonde',
      'Fronti di scavo e opere di sostegno',
      'Stabilizzazione dei versanti',
    ],
    kpi: [
      { value: '180+', label: 'Fondazioni progettate' },
      { value: '95+', label: 'Versanti stabilizzati' },
      { value: '24', label: 'anni di geotecnica' },
    ],
    image: 'https://loremflickr.com/1600/1000/excavation,foundation?lock=1007',
    icon: <Mountain size={36} strokeWidth={1.5} />,
  },
  {
    id: 'forense',
    label: 'Ingegneria Forense',
    short: 'Forense',
    subtitle: 'Diagnosi & Perizia',
    description: `Consulenze tecniche e accertamenti su danni, dissesti e contenziosi, con valutazioni documentate e indipendenti.`,
    features: [
      "Consulenze tecniche di parte e d'ufficio",
      'Accertamenti su danni e dissesti',
      'Analisi forense per contenziosi',
      'Valutazioni documentate e indipendenti',
      'Ricostruzione di cinematismi di collasso',
    ],
    kpi: [
      { value: '120+', label: 'Perizie tecniche' },
      { value: '45+', label: 'Procedimenti seguiti' },
      { value: '15', label: 'anni di consulenza' },
    ],
    image: 'https://loremflickr.com/1600/1000/crack,wall?lock=1005',
    icon: <ScanSearch size={36} strokeWidth={1.5} />,
  },
  {
    id: 'monitoraggio',
    label: 'Monitoraggio Strutturale',
    short: 'Monitoraggio',
    subtitle: 'Sensori & Prevenzione',
    description: `Progettiamo sistemi di monitoraggio statico e dinamico per edifici e infrastrutture, finalizzati al controllo nel tempo del comportamento strutturale, alla valutazione delle condizioni di sicurezza e al supporto delle attività di manutenzione, gestione e prevenzione.`,
    features: [
      'Monitoraggio statico e dinamico in continuo',
      'Sistemi IoT e fibre ottiche distribuite',
      'Algoritmi di anomaly detection con AI',
      'Manutenzione predittiva',
      'Supporto a gestione e prevenzione',
    ],
    kpi: [
      { value: '60+', label: 'Sistemi installati' },
      { value: '4.800', label: 'Sensori operativi' },
      { value: '12', label: 'Opere strategiche' },
    ],
    image: 'https://loremflickr.com/1600/1000/iot?lock=1009',
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

      // KPI stagger
      gsap.utils.toArray<HTMLElement>('.kpi-item').forEach(item => {
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

      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <Link to="/"><img src="/loghi/logochiaro.png" alt="L&M Ingegneria" style={{ height: '50px' }} /></Link>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/studio">Studio</Link>
            <Link to="/settori" className="active-link">Settori</Link>
            <Link to="/progetti">Progetti</Link>
            <Link to="/pubblicazioni">Pubblicazioni</Link>
            <Link to="/eventi">Eventi</Link>
            <Link to="/contatti">Contatti</Link>
          </div>
        </div>
      </nav>

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
              <h3 className="section-tag">Eccellenza Operativa</h3>
              <h1 className="hero-main-title">I Nostri <span className="text-gradient">Settori</span></h1>
              <p className="hero-subtitle">
                Tre ambiti di specializzazione d'eccellenza, sviluppati in venticinque anni di ricerca
                applicata alle infrastrutture più complesse d'Europa.
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
              <p className="body-text reveal">{sector.description}</p>
              <ul className="feature-list">
                {sector.features.map((f, fi) => (
                  <li key={fi} className="feature-item">
                    <ChevronRight size={15} style={{ color: 'var(--accent-teal)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="kpi-row">
                {sector.kpi.map((k, ki) => (
                  <div key={ki} className="kpi-item">
                    <span className="kpi-value text-gradient">{k.value}</span>
                    <span className="kpi-label">{k.label}</span>
                  </div>
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
                { value: '25', label: 'Anni di attività' },
                { value: '450+', label: 'Progetti completati' },
                { value: '80+', label: 'Pubblicazioni scientifiche' },
                { value: '12', label: 'Partner accademici' },
                { value: '15+', label: 'Premi e riconoscimenti' },
                { value: '120+', label: 'Conferenze internazionali' },
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
        .kpi-row { display: flex; gap: 2.5rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.07); }
        .kpi-item { display: flex; flex-direction: column; gap: 0.3rem; }
        .kpi-value { font-size: 2rem; font-weight: 700; font-family: var(--font-serif); }
        .kpi-label { font-size: 0.78rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-secondary); }

        /* STATS */
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .stat-card { padding: 2.5rem; text-align: center; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .stat-value { display: block; font-size: 2.8rem; font-weight: 700; font-family: var(--font-serif); margin-bottom: 0.6rem; }
        .stat-label { font-size: 0.82rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-secondary); }

        /* CTA */

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

        @media (max-width: 968px) {
          .sector-grid, .stats-grid, .grid-footer { grid-template-columns: 1fr; gap: 2.5rem; }
          .progress-sidebar { display: none; }
          .kpi-row { flex-wrap: wrap; gap: 1.5rem; }
          .sector-img-frame { height: 380px; }
        }
      `}</style>
    </div>
  )
}
