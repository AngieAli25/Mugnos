import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/Button'
import { ArrowRight, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const SECTORS = [
  {
    id: 'ponti',
    label: 'Ponti',
    subtitle: 'Ingegneria del Collegamento',
    description: `Progettiamo ponti a campata singola e multipla, strallati e ad arco. Ogni struttura nasce da un'analisi sismica non lineare e simulazioni FEM 3D ad alta densità, garantendo sicurezza e longevità eccezionali nel pieno rispetto degli Eurocodici.`,
    features: [
      'Analisi sismica non-lineare avanzata',
      'Modellazione FEM 3D ad alta densità',
      'Ponti strallati, ad arco e a travata continua',
      'Verifiche Eurocodici EN 1992 / EN 1998',
      'Collaudi statici e dinamici in situ',
    ],
    kpi: [
      { value: '180+', label: 'Ponti progettati' },
      { value: '2.400', label: 'km totali' },
      { value: '98%', label: 'conformità' },
    ],
    image: '/images/ponte_bianco-nero.jpg',
    hoverImage: '/images/highway-bridges.jpg',
    icon: (
      <svg width="36" height="36" viewBox="0 0 22 11" fill="none">
        <path d="M6 7V3.91C5.28 3.58 4.61 3.18 4 2.71V7H6ZM4 11H2V9H0V7H2V0H4V1.43C5.8 3 8.27 4 11 4C13.73 4 16.2 3 18 1.43V0H20V7H22V9H20V11H18V9H4V11ZM16 3.91V7H18V2.71C17.39 3.18 16.72 3.58 16 3.91ZM15 7V4.32C14.36 4.55 13.69 4.72 13 4.84V7H15ZM12 7V4.96L11 5L10 4.96V7H12ZM9 7V4.84C8.31 4.72 7.64 4.55 7 4.32V7H9Z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'gallerie',
    label: 'Gallerie',
    subtitle: 'Ingegneria del Sottosuolo',
    description: `Analisi geotecnica e strutturale per tunnel stradali e ferroviari in contesti geologici complessi. Utilizziamo il metodo NATM e tecniche di convergenza-confinamento per garantire stabilità strutturale in ogni fase esecutiva.`,
    features: [
      'New Austrian Tunneling Method (NATM)',
      'Analisi geotecnica con modelli numerici 3D',
      'Monitoraggio strutturale continuo in tempo reale',
      'Sistemi di ventilazione e sicurezza antincendio',
      'Progettazione in zone ad alto rischio sismico',
    ],
    kpi: [
      { value: '95+', label: 'Gallerie completate' },
      { value: '340', label: 'km scavati' },
      { value: '15', label: 'anni sottosuolo' },
    ],
    image: '/images/galleria, bianconero.png',
    hoverImage: '/images/galleria.png',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 22" fill="none">
        <path d="M22.5 20V8.625M22.5 8.625L18.362 9.66M22.5 8.625V3.942C22.5 3.942 21.3 2.909 19.144 1.974M1.5 20V8.625M1.5 8.625V3.942C1.5 3.942 2.7 2.91 4.856 1.974M1.5 8.625L5.638 9.66M12 0.5V4.5M12 0.5C9.061 0.5 6.634 1.203 4.856 1.974M12 0.5C14.939 0.5 17.366 1.203 19.144 1.974M12 4.5C10.4903 4.4973 9.02719 5.02262 7.864 5.985M12 4.5C13.571 4.5 15.012 5.057 16.136 5.985M4.856 1.974L7.864 5.985M19.144 1.974L16.136 5.985M0 21.5H24M5.5 20V11C5.50133 10.5393 5.54733 10.0927 5.638 9.66M5.638 9.66C5.94197 8.21809 6.72688 6.92226 7.864 5.985M18.5 20V11C18.4993 10.5393 18.4533 10.0927 18.362 9.66M18.362 9.66C18.058 8.21809 17.2731 6.92226 16.136 5.985M22.5 15.5H18.5M1.5 15.5H5.5" stroke="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'viadotti',
    label: 'Viadotti',
    subtitle: "Ingegneria dell'Altitudine",
    description: `Soluzioni innovative per viadotti autostradali con focus su durabilità, adeguamento sismico e manutenzione predittiva. Integriamo sensori IoT e fibre ottiche per il monitoraggio strutturale in tempo reale.`,
    features: [
      'Adeguamento sismico di viadotti esistenti',
      'Sistemi di monitoraggio IoT e fibre ottiche',
      'Manutenzione predittiva basata su AI',
      'Analisi di traffico e carichi dinamici',
      'Retrofit strutturale con materiali compositi CFRP',
    ],
    kpi: [
      { value: '175+', label: 'Viadotti realizzati' },
      { value: '1.800', label: 'km autostradali' },
      { value: '30+', label: 'adeguamenti sismici' },
    ],
    image: '/images/viaduct-city.jpg',
    hoverImage: '/images/viaduct-city.jpg',
    icon: (
      <svg width="36" height="36" viewBox="0 0 27 24" fill="none">
        <path d="M26.5989 3.49836H24.8216V2.14384C24.8216 1.92582 24.6422 1.74898 24.4208 1.74898H20.4492C20.2278 1.74898 20.0483 1.92582 20.0483 2.14384V3.49836H15.6246V2.14404C15.6246 1.92582 15.4452 1.74918 15.2238 1.74918H11.6533V0.394859C11.6533 0.176845 11.4738 0 11.2524 0H3.29301C3.07157 0 2.89194 0.176845 2.89194 0.394859V1.74918H0.40107C0.179626 1.74918 0 1.92582 0 2.14404V23.6053C0 23.8234 0.179626 24 0.40107 24H3.63249C3.85394 24 4.03397 23.8234 4.03397 23.6053V13.3731C4.03397 12.5327 4.36645 11.7423 4.9696 11.1479C5.57378 10.5537 6.37633 10.2264 7.22955 10.2264C8.99203 10.2264 10.4258 11.6381 10.4258 13.3731V23.6053C10.4258 23.8234 10.6054 24 10.8268 24H16.1728C16.3942 24 16.5742 23.8234 16.5742 23.6053V13.3731C16.5742 13.268 16.5794 13.1638 16.5897 13.0606C16.6616 12.3382 16.9821 11.6681 17.5101 11.1479C18.1141 10.5537 18.9166 10.2264 19.77 10.2264C21.5323 10.2264 22.966 11.6381 22.966 13.3731V23.6053C22.966 23.8234 23.1457 24 23.3671 24H26.5991C26.8206 24 27 23.8234 27 23.6053V10.3586C27 10.1406 26.8206 9.96375 26.5991 9.96375C26.3777 9.96375 26.1981 10.1406 26.1981 10.3586V23.2105H25.2453V13.3731C25.2453 10.4006 22.7891 7.98236 19.77 7.98236C16.751 7.98236 14.2947 10.4006 14.2947 13.3731V23.2105H12.7051V13.3731C12.7051 10.4006 10.2488 7.98236 7.22955 7.98236C4.21051 7.98236 1.75424 10.4006 1.75424 13.3731V16.6662C1.75424 16.8842 1.93387 17.0611 2.15531 17.0611C2.37675 17.0611 2.55618 16.8842 2.55618 16.6662V13.3731C2.55618 10.836 4.65278 8.77207 7.22955 8.77207C9.80653 8.77207 11.9031 10.836 11.9031 13.3731V23.2105H11.2277V13.3731C11.2277 11.2027 9.4341 9.43686 7.22955 9.43686C7.09628 9.43686 6.96382 9.44335 6.8326 9.45593C5.91511 9.54455 5.06394 9.93921 4.4025 10.5896C4.1792 10.8096 3.98639 11.0516 3.82448 11.31C3.81521 11.3244 3.80553 11.3384 3.79667 11.353C3.79296 11.3588 3.78987 11.3649 3.78637 11.3708C3.42506 11.9709 3.23183 12.6574 3.23183 13.3731V23.2105H2.55638L2.55618 16.6662C2.55618 16.4482 2.37675 17.0611 2.15531 17.0611C1.93387 17.0611 1.75424 16.4482 1.75424 16.6662V23.2105H0.801933V6.03706H13.1156V6.99673H10.9387C10.7172 6.99673 10.5378 7.17357 10.5378 7.39159C10.5378 7.6096 10.7172 7.78624 10.9387 7.78624H18.2545C18.476 7.78624 18.6554 7.6096 18.6554 7.39159C18.6554 7.17357 18.476 6.99673 18.2545 6.99673H13.9178V6.03706H16.1627C16.3841 6.03706 16.5637 5.86022 16.5637 5.6422C16.5637 5.42419 16.3841 5.24755 16.1627 5.24755H2.70016V4.28768H3.64094C3.86238 4.28768 4.04201 4.11103 4.04201 3.89302C4.04201 3.67501 3.86238 3.49816 3.64094 3.49816H0.801933V2.5387H3.29301C3.51446 2.5387 3.69388 2.36206 3.69388 2.14404V0.789718H10.8513V1.74898H5.71323C5.49179 1.74898 5.31216 1.92582 5.31216 2.14384C5.31216 2.36185 5.49179 2.5387 5.71323 2.5387H8.65647V3.89322C8.65647 4.11124 8.8361 4.28788 9.05754 4.28788C9.27898 4.28788 9.4584 4.11124 9.4584 3.89322V2.53849H11.2487L11.2524 2.5387H14.8227V3.49816H11.9839C11.7624 3.49816 11.5828 3.67501 11.5828 3.89302C11.5828 4.11103 11.7624 4.28768 11.9839 4.28768H15.22L15.2238 4.28788H26.1981V5.24755H16.1627C15.9413 5.24755 16.5637 5.42419 16.5637 5.6422C16.5637 5.86022 15.9413 6.03706 16.1627 6.03706H26.1981V10.3586C26.1981 10.5766 26.3777 9.96375 26.5991 9.96375C26.8206 9.96375 27 10.5766 27 10.3586V3.89322C27 3.67521 26.8204 3.49836 26.5989 3.49836ZM20.8503 2.53849H24.0197V3.49816H20.8503V2.53849ZM15.0967 13.3731C15.0967 10.836 17.1931 8.77207 19.77 8.77207C22.347 8.77207 24.4434 10.836 24.4434 13.3731V23.2105H23.768V13.3731C23.768 11.2027 21.9744 9.43686 19.7698 9.43686C18.7026 9.43686 17.6986 9.84612 16.9428 10.5896C16.188 11.3335 15.7723 12.322 15.7723 13.3731V23.2105H15.0967V13.3731ZM1.89803 4.28768V5.24755H0.801933V4.28768H1.89803Z" fill="currentColor"/>
      </svg>
    ),
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
            <span className="dot-label">{s.label}</span>
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
                {sector.hoverImage && sector.hoverImage !== sector.image && (
                  <div
                    className="sector-img-hover-overlay"
                    style={{ backgroundImage: `url('${sector.hoverImage}')` }}
                  />
                )}
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
                { value: '450+', label: 'Progetti completati' },
                { value: '4.540 km', label: 'Infrastrutture realizzate' },
                { value: '25', label: 'Anni di esperienza' },
                { value: '12', label: 'Partner accademici' },
                { value: '98%', label: 'Conformità normativa' },
                { value: '3', label: 'Paesi coinvolti' },
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
        .sector-img-frame:hover .sector-img-inner { filter: grayscale(0) brightness(0.9); }
        .sector-img-hover-overlay { position: absolute; inset: 0; background-size: cover; background-position: center; opacity: 0; transition: opacity 0.5s ease; pointer-events: none; }
        .sector-img-frame:hover .sector-img-hover-overlay { opacity: 1; }
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
