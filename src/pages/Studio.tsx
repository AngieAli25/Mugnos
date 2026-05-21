import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Target,
  Quote,
  Award,
  Users,
  Microscope,
  Globe,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  { year: '1999', title: 'Fondazione', desc: 'Lo studio nasce come spin-off dell\'attività accademica di Lo Giudice e Mugnos, con sede a Roma.' },
  { year: '2003', title: 'Prima grande opera', desc: 'Progettazione e direzione lavori del viadotto sull\'A3 Napoli-Salerno, primo incarico istituzionale.' },
  { year: '2008', title: 'Partnership internazionale', desc: 'Accordo di ricerca con l\'ETH di Zurigo per lo sviluppo di metodologie sismiche non lineari.' },
  { year: '2013', title: 'Premio Ingegneria Italiana', desc: 'Riconoscimento da parte del CNI per l\'eccellenza nella progettazione di infrastrutture complesse.' },
  { year: '2019', title: 'Espansione in Europa', desc: 'Apertura di collaborazioni con stazioni appaltanti in Francia, Spagna e Germania.' },
  { year: '2024', title: '25 anni di attività', desc: 'Venticinque anni di ricerca applicata, 450+ progetti completati, 4.540 km di infrastrutture realizzate.' },
]

const VALUES = [
  { title: 'Integrità', desc: 'Ogni analisi riflette la realtà dei dati, senza semplificazioni che compromettano la sicurezza.', Icon: Target },
  { title: 'Metodo', desc: 'Approccio scientifico rigoroso in ogni fase: dall\'acquisizione dati alla certificazione finale.', Icon: BookOpen },
  { title: 'Innovazione', desc: 'Adottiamo le metodologie più avanzate, sviluppate in collaborazione con i principali atenei europei.', Icon: Microscope },
  { title: 'Collaborazione', desc: 'Lavoriamo con un network di eccellenze accademiche e professionali per garantire la massima qualità.', Icon: Users },
  { title: 'Eccellenza', desc: 'Il nostro standard non è la conformità normativa: è il margine di sicurezza che va oltre il minimo.', Icon: Award },
  { title: 'Visione globale', desc: 'Competenze che si misurano con le sfide ingegneristiche più complesse a livello internazionale.', Icon: Globe },
]

const ACCORDION_ELIO = [
  {
    title: 'Formazione e carriera accademica',
    body: 'Laureato con lode in Ingegneria Civile presso La Sapienza di Roma, ha conseguito il dottorato all\'ETH di Zurigo con una tesi sulla resilienza sismica delle strutture in calcestruzzo precompresso. Ordinario dal 2001, ha ricoperto ruoli di visiting professor presso MIT e TU Delft.',
  },
  {
    title: 'Aree di ricerca',
    body: 'Analisi non lineare sotto azioni sismiche, modellazione del comportamento viscoso del calcestruzzo nel lungo periodo e metodologie di collaudo dinamico per ponti e viadotti. Ha coordinato 6 progetti PRIN e 2 progetti europei Horizon 2020.',
  },
  {
    title: 'Principali opere realizzate',
    body: 'Progettazione e collaudo di oltre 80 strutture di grande luce: viadotti A3 Napoli-Salerno, ponte sul Fiume Sele, viadotto Cannavino SS280 Calabria. Ha diretto la verifica sismica di 40+ ponti strategici per il Ministero delle Infrastrutture.',
  },
  {
    title: 'Pubblicazioni e riconoscimenti',
    body: 'Autore di oltre 80 pubblicazioni ISI (H-index 22). Premio Ingegneria Strutturale ANIDIS 2011, Premio Internazionale "Bridge & Structural Engineering" Vienna 2017.',
  },
]

const ACCORDION_GIUSEPPE = [
  {
    title: 'Formazione e carriera accademica',
    body: 'Laureato in Ingegneria Civile a Palermo, ha completato la formazione con un master in Structural Health Monitoring alla Columbia University di New York. Ordinario di Scienza delle Costruzioni presso UniPA dal 2001 e membro del Consiglio Scientifico AICAP.',
  },
  {
    title: 'Specializzazioni tecniche',
    body: 'Diagnostica materica avanzata, monitoraggio strutturale con fibre ottiche e sensori IoT, manutenzione predittiva basata su intelligenza artificiale. Tra i primi in Italia a sviluppare protocolli di ispezione continua per gallerie ferroviarie ad alta velocità.',
  },
  {
    title: 'Principali opere realizzate',
    body: 'Monitoraggio strutturale di oltre 60 gallerie e tunnel: galleria Santomarco A3, traforo del Frejus (tratto italiano), numerosi tunnel TAV. Ha progettato il sistema di monitoraggio della Galleria di Base del Brennero per la quota italiana.',
  },
  {
    title: 'Attività didattica e divulgativa',
    body: 'Titolare del corso magistrale "Diagnostica e Monitoraggio delle Strutture" a Palermo. Oltre 30 conferenze internazionali e fondatore nel 2015 di LabDiSt (Laboratorio di Diagnostica Strutturale), unico nel suo genere nel Sud Italia.',
  },
]

function Accordion({ items }: { items: { title: string; body: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  return (
    <div className="accordion">
      {items.map((item, i) => (
        <div key={i} className="acc-item glass-card">
          <button className="acc-trigger" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
            <span>{item.title}</span>
            <ChevronDown size={16} className={`acc-chevron${openIdx === i ? ' rotated' : ''}`} />
          </button>
          <div className={`acc-body${openIdx === i ? ' open' : ''}`}>
            <div className="acc-inner">
              <p className="acc-text">{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function WordReveal({ text, className = '' }: { text: string; className?: string }) {
  return (
    <span className={`word-group ${className}`}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="word">{word}</span>
      ))}
    </span>
  )
}

export function Studio() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const timelineLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveals
      gsap.utils.toArray<HTMLElement>('.word-group').forEach(group => {
        const words = group.querySelectorAll('.word')
        gsap.fromTo(words,
          { opacity: 0, y: 22, rotateX: -40 },
          {
            opacity: 1, y: 0, rotateX: 0,
            duration: 0.55, stagger: 0.04, ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 83%', toggleActions: 'play none none none' }
          }
        )
      })

      // Standard reveals
      gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 55 },
          {
            opacity: 1, y: 0, duration: 1.1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
          }
        )
      })

      // Founder images — clip-path wipe
      gsap.utils.toArray<HTMLElement>('.founder-image').forEach(img => {
        gsap.fromTo(img,
          { clipPath: 'inset(100% 0 0 0)', scale: 1.06 },
          {
            clipPath: 'inset(0% 0 0 0)', scale: 1,
            duration: 1.4, ease: 'power4.out',
            scrollTrigger: { trigger: img, start: 'top 80%', toggleActions: 'play none none none' }
          }
        )
      })

      // CV items stagger
      gsap.fromTo('.cv-item',
        { opacity: 0, x: -35 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.cv-item', start: 'top 85%', toggleActions: 'play none none none' }
        }
      )

      // Timeline line draw
      if (timelineLineRef.current) {
        gsap.fromTo(timelineLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1, duration: 2.5, ease: 'power2.out',
            scrollTrigger: { trigger: '.timeline-wrap', start: 'top 75%', toggleActions: 'play none none none' }
          }
        )
      }

      // Timeline steps stagger
      gsap.fromTo('.timeline-entry',
        { opacity: 0, x: -45 },
        {
          opacity: 1, x: 0, duration: 0.65, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: '.timeline-wrap', start: 'top 78%', toggleActions: 'play none none none' }
        }
      )

      // Value cards stagger
      gsap.fromTo('.value-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.7, stagger: 0.1, ease: 'back.out(1.3)',
          scrollTrigger: { trigger: '.values-grid', start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      // Software code mockup typewriter
      gsap.set('.code-content code', { opacity: 0, x: -18 })
      gsap.to('.code-content code', {
        opacity: 1, x: 0, duration: 0.45, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: '.code-mockup', start: 'top 80%', toggleActions: 'play none none none' }
      })

      // Stats spring bounce
      gsap.fromTo('.studio-stat',
        { opacity: 0, y: 50, scale: 0.88 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, stagger: 0.15, ease: 'back.out(1.7)',
          scrollTrigger: { trigger: '.studio-stats-grid', start: 'top 80%', toggleActions: 'play none none none' }
        }
      )

      // Parallax on founder images
      gsap.utils.toArray<HTMLElement>('.founder-img-parallax').forEach(img => {
        gsap.to(img, {
          yPercent: -12, ease: 'none',
          scrollTrigger: {
            trigger: img.closest('.founder-section'),
            start: 'top bottom', end: 'bottom top', scrub: 1.2,
          }
        })
      })

      // Quote card entrance
      gsap.fromTo('.quote-card',
        { opacity: 0, y: 40, rotateX: 8 },
        {
          opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: '.quote-card', start: 'top 82%', toggleActions: 'play none none none' }
        }
      )
    }, mainRef)

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 })
      gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.3 })
    }
    const onEnter = () => followerRef.current?.classList.add('active')
    const onLeave = () => followerRef.current?.classList.remove('active')
    window.addEventListener('mousemove', onMouseMove)
    const targets = document.querySelectorAll('a, button, .glass-card, .value-card')
    targets.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    return () => {
      ctx.revert()
      window.removeEventListener('mousemove', onMouseMove)
      targets.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave) })
    }
  }, [])

  const handle3DMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    const rX = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * 9
    const rY = -((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 9
    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.04,1.04,1.04)`
    card.style.transition = 'transform 0.1s linear'
  }
  const handle3DLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)'
    e.currentTarget.style.transition = 'transform 0.6s cubic-bezier(0.16,1,0.3,1)'
  }

  const handleMagneticMoveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left - r.width / 2) * 0.35
    const y = (e.clientY - r.top - r.height / 2) * 0.35
    el.style.transform = `translate(${x}px, ${y}px)`
    el.style.transition = 'transform 0.1s linear'
  }
  const handleMagneticLeaveLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0,0)'
    e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)'
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
            <Link to="/studio" className="active-link">Studio</Link>
            <Link to="/settori">Settori</Link>
            <Link to="/progetti">Progetti</Link>
            <Link to="/pubblicazioni">Pubblicazioni</Link>
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
              <h3 className="section-tag">Oltre la Progettazione</h3>
              <h1 className="hero-main-title">La Nostra <span className="text-gradient">Eredità</span></h1>
              <p className="hero-subtitle">
                Venticinque anni di ricerca scientifica applicata alle infrastrutture più complesse d'Europa.
                Scopri la storia e la visione dei fondatori di L&M Ingegneria.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VISION */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="vision-grid">
              <div>
                <span className="section-tag">La nostra filosofia</span>
                <h2 className="section-title">
                  <WordReveal text="Una Visione Senza Confini" />
                </h2>
                <div className="quote-card glass-card" style={{ marginTop: '2rem', padding: '2.5rem' }}>
                  <Quote size={36} style={{ color: 'var(--accent-teal)', opacity: 0.5, marginBottom: '1rem' }} />
                  <p className="quote-text">
                    "L'ingegneria non è solo calcolo, è la capacità di prevedere il comportamento della materia
                    attraverso il tempo. Il nostro obiettivo è costruire opere che non siano solo funzionali,
                    ma sicure per le generazioni a venire."
                  </p>
                </div>
              </div>
              <div className="reveal">
                <p className="lead-text">
                  Fondata nel 1999, L&M Ingegneria nasce come spin-off dell'attività accademica dei suoi fondatori.
                </p>
                <p className="body-text">
                  Inizialmente focalizzato sulla consulenza specialistica per il Ministero delle Infrastrutture,
                  lo studio si è evoluto rapidamente diventando un punto di riferimento nazionale per la
                  progettazione di ponti e gallerie. La nostra forza risiede nell'integrazione costante tra
                  le più avanzate metodologie di calcolo numerico e una solida esperienza di cantiere.
                </p>
                <div className="vision-values-row">
                  <div className="vision-badge" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                    <Target size={28} style={{ color: 'var(--accent-teal)' }} />
                    <span>Integrità</span>
                  </div>
                  <div className="vision-badge" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                    <BookOpen size={28} style={{ color: 'var(--accent-teal)' }} />
                    <span>Metodo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER 1 */}
        <section className="founder-section section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="founder-grid">
              <div className="founder-img-wrap reveal">
                <div className="founder-img-frame">
                  <img
                    src="/images/fotopersonali/Elio_Lo_Giudice.jpeg"
                    alt="Elio Lo Giudice"
                    className="founder-image founder-img-parallax"
                  />
                </div>
              </div>
              <div className="founder-text">
                <span className="section-tag">Co-Fondatore</span>
                <h2 className="section-title">
                  <WordReveal text="Prof. Elio Lo Giudice" />
                </h2>
                <p className="body-text" style={{ marginBottom: '1rem' }}>
                  Professore ordinario presso La Sapienza di Roma, Elio Lo Giudice ha dedicato oltre trent'anni alla ricerca sui meccanismi di collasso delle grandi infrastrutture. Dopo il dottorato all'ETH di Zurigo, ha sviluppato metodologie originali per la verifica della resilienza sismica di ponti e viadotti, diventando consulente di riferimento per il Ministero delle Infrastrutture e dei Trasporti.
                </p>
                <p className="body-text">
                  Ha diretto i collaudi statici e dinamici di oltre ottanta strutture di grande luce, coordinando team multidisciplinari in condizioni operative complesse. La sua produzione scientifica — oltre ottanta pubblicazioni ISI con H-index 22 — è un riferimento internazionale nell'ingegneria strutturale avanzata.
                </p>
                <Accordion items={ACCORDION_ELIO} />
              </div>
            </div>
          </div>
        </section>

        {/* FOUNDER 2 */}
        <section className="founder-section section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="founder-grid reversed">
              <div className="founder-text">
                <span className="section-tag">Co-Fondatore</span>
                <h2 className="section-title">
                  <WordReveal text="Prof. Giuseppe Mugnos" />
                </h2>
                <p className="body-text" style={{ marginBottom: '1rem' }}>
                  Professore ordinario di Scienza delle Costruzioni a Palermo dal 2001, Giuseppe Mugnos si è specializzato alla Columbia University in Structural Health Monitoring. È stato tra i primi in Italia a integrare sistemi IoT e fibre ottiche per il controllo in tempo reale di gallerie e tunnel ad alta velocità.
                </p>
                <p className="body-text">
                  Fondatore di LabDiSt nel 2015 — unico laboratorio di diagnostica strutturale nel Sud Italia — ha sviluppato protocolli di ispezione oggi adottati da RFI e ANAS su tratte strategiche della rete nazionale.
                </p>
                <Accordion items={ACCORDION_GIUSEPPE} />
              </div>
              <div className="founder-img-wrap reveal">
                <div className="founder-img-frame">
                  <img
                    src="/images/fotopersonali/Giuseppe_Mugnos.jpg"
                    alt="Giuseppe Mugnos"
                    className="founder-image founder-img-parallax"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
              <span className="section-tag">La nostra storia</span>
              <h2 className="section-title">Venticinque anni di eccellenza</h2>
            </div>
            <div className="timeline-wrap">
              <div className="tl-line-col" aria-hidden="true">
                <div ref={timelineLineRef} className="tl-line-bar" />
              </div>
              <div className="tl-entries">
                {TIMELINE.map((item, i) => (
                  <div key={i} className="timeline-entry">
                    <div className="tl-node">
                      <span className="tl-year">{item.year}</span>
                    </div>
                    <div className="tl-content glass-card" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                      <h4 className="tl-title">{item.title}</h4>
                      <p className="tl-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
              <span className="section-tag">Cosa ci guida</span>
              <h2 className="section-title">I Nostri Valori Fondamentali</h2>
            </div>
            <div className="values-grid">
              {VALUES.map((v, i) => {
                const IconComp = v.Icon
                return (
                  <div key={i} className="value-card glass-card" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                    <div className="value-icon"><IconComp size={26} /></div>
                    <h3 className="value-title">{v.title}</h3>
                    <p className="value-desc">{v.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SOFTWARE - STRUCTMASTER PRO X */}
        <section id="software" className="section-padding premium-section">
          <div className="container software-container">
            <div className="software-visual reveal">
              <div className="code-mockup">
                <div className="code-header">StructMaster Pro X v8.2</div>
                <div className="code-content">
                  <code>ANALYSIS_TYPE: NON-LINEAR DYNAMIC</code><br />
                  <code>LOAD_CASES: SEISMIC, TRAFFIC, WIND</code><br />
                  <code>MESH_SIZE: 0.1m FINITE ELEMENTS</code><br />
                  <code>STATUS: STABILITY VERIFIED [OK]</code>
                </div>
              </div>
            </div>
            <div className="software-content reveal">
              <div className="premium-badge">STRUMENTO ESCLUSIVO</div>
              <h2 className="section-title">La Nostra Tecnologia</h2>
              <p className="lead-text">Il valore della precisione assoluta.</p>
              <p className="body-text">
                Utilizziamo in esclusiva <strong>StructMaster Pro X</strong>, il software di analisi strutturale
                più avanzato al mondo. Sviluppato a Stoccarda, questo strumento (investimento di oltre €80.000/anno)
                ci permette di simulare scenari sismici e di traffico con una precisione irraggiungibile dai software standard.
              </p>
              <ul className="feature-list">
                <li><ChevronRight size={18} /> Analisi FEM 3D ad alta densità</li>
                <li><ChevronRight size={18} /> Simulazione sismica in tempo reale</li>
                <li><ChevronRight size={18} /> Integrazione completa BIM</li>
                <li><ChevronRight size={18} /> Certificazione Eurocodici EN 1990-1999</li>
              </ul>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="section-padding" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, #0d0d0d 100%)' }}>
          <div className="container">
            <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
              <span className="section-tag">In numeri</span>
              <h2 className="section-title">L&M Ingegneria oggi</h2>
            </div>
            <div className="studio-stats-grid">
              {[
                { value: '25', label: 'Anni di attività' },
                { value: '450+', label: 'Progetti completati' },
                { value: '80+', label: 'Pubblicazioni scientifiche' },
                { value: '12', label: 'Partner accademici' },
                { value: '15+', label: 'Premi e riconoscimenti' },
                { value: '120+', label: 'Conferenze internazionali' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="studio-stat glass-card"
                  whileHover={{ y: -8, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  onMouseMove={handle3DMove}
                  onMouseLeave={handle3DLeave}
                >
                  <span className="stat-value text-gradient">{s.value}</span>
                  <span className="stat-label">{s.label}</span>
                </motion.div>
              ))}
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
                <a href="#" onMouseMove={handleMagneticMoveLink} onMouseLeave={handleMagneticLeaveLink}>LinkedIn</a>
                <a href="#" onMouseMove={handleMagneticMoveLink} onMouseLeave={handleMagneticLeaveLink}>Twitter</a>
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

        /* WORD REVEAL */
        .word-group { display: inline; }
        .word { display: inline-block; margin-right: 0.32em; opacity: 0; transform: translateY(22px) rotateX(-40deg); transform-origin: top; }

        /* SHARED */
        .section-tag { display: block; font-family: var(--font-sans); font-weight: 500; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 3px; font-size: 0.85rem; margin-bottom: 1rem; }
        .section-title { font-size: clamp(2.2rem, 4vw, 3rem); margin-bottom: 1.5rem; }
        .lead-text { font-size: 1.35rem; line-height: 1.55; color: var(--white); margin-bottom: 1.5rem; }
        .body-text { color: var(--text-secondary); line-height: 1.85; font-size: 1rem; margin: 0; }
        .text-center { text-align: center; }

        /* VISION */
        .vision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }
        .quote-text { font-style: italic; color: var(--text-secondary); line-height: 1.8; font-size: 1.05rem; }
        .vision-values-row { display: flex; gap: 1.5rem; margin-top: 2.5rem; }
        .vision-badge { display: flex; flex-direction: column; align-items: center; gap: 0.75rem; padding: 1.5rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; flex: 1; text-align: center; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-secondary); will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); cursor: default; }

        /* FOUNDERS */
        .founder-grid { display: grid; grid-template-columns: 2fr 3fr; gap: 5rem; align-items: center; }
        .founder-grid.reversed { grid-template-columns: 3fr 2fr; }
        .founder-grid.reversed .founder-text { order: 1; }
        .founder-grid.reversed .founder-img-wrap { order: 2; }
        .founder-img-frame { position: relative; border-radius: 20px; overflow: hidden; height: 620px; }
        .founder-image { width: 100%; height: 140%; object-fit: cover; display: block; filter: grayscale(0.6) brightness(0.75); transition: filter 0.6s ease; will-change: transform; }
        .founder-image:hover { filter: grayscale(0) brightness(1); }
        .cv-items { display: flex; flex-direction: column; gap: 1rem; margin-top: 2rem; }
        .cv-item { padding: 1.5rem 2rem; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .cv-item strong { display: block; color: var(--accent-teal); font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 0.5rem; font-family: var(--font-sans); }

        /* TIMELINE */
        .timeline-wrap { display: grid; grid-template-columns: 40px 1fr; gap: 0 2rem; }
        .tl-line-col { position: relative; display: flex; justify-content: center; }
        .tl-line-bar { width: 2px; height: 100%; background: var(--accent-teal); border-radius: 2px; transform-origin: top; transform: scaleY(0); }
        .tl-entries { display: flex; flex-direction: column; gap: 2.5rem; }
        .timeline-entry { display: grid; grid-template-columns: 72px 1fr; gap: 1.5rem; align-items: flex-start; opacity: 0; }
        .tl-node { width: 72px; height: 72px; border-radius: 50%; background: rgba(35,172,181,0.08); border: 1px solid rgba(35,172,181,0.25); display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; }
        .tl-year { font-size: 0.75rem; font-weight: 700; color: var(--accent-teal); font-family: var(--font-sans); letter-spacing: 1px; }
        .tl-content { padding: 1.5rem 2rem; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
        .tl-title { font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--white); }
        .tl-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; margin: 0; }

        /* VALUES */
        .values-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .value-card { padding: 2.5rem; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); opacity: 0; }
        .value-icon { color: var(--accent-teal); margin-bottom: 1.5rem; padding: 0.75rem; background: rgba(35,172,181,0.08); border-radius: 8px; display: inline-flex; }
        .value-title { font-size: 1.3rem; margin-bottom: 0.75rem; }
        .value-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; }

        /* SOFTWARE SECTION */
        .premium-section { background: linear-gradient(180deg, var(--bg-primary) 0%, #121212 100%); }
        .software-container { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .code-mockup { background: #1e1e1e; border-radius: 8px; border: 1px solid #333; box-shadow: 0 30px 60px rgba(0,0,0,0.5); overflow: hidden; }
        .code-header { background: #333; padding: 0.5rem 1rem; font-family: monospace; font-size: 0.8rem; color: #aaa; }
        .code-content { padding: 2rem; font-family: 'Courier New', monospace; color: var(--accent-teal); font-size: 0.9rem; line-height: 1.6; }
        .premium-badge { display: inline-block; background: rgba(35,172,181,0.1); color: var(--accent-teal); padding: 4px 12px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; margin-bottom: 1.5rem; }
        .feature-list { margin-top: 2rem; }
        .feature-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-primary); }

        /* STATS */
        .studio-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .studio-stat { padding: 2.5rem; text-align: center; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); opacity: 0; }
        .stat-value { display: block; font-size: 2.8rem; font-weight: 700; font-family: var(--font-serif); margin-bottom: 0.6rem; }
        .stat-label { font-size: 0.82rem; text-transform: uppercase; letter-spacing: 2px; color: var(--text-secondary); }

        /* ACCORDION */
        .accordion { display: flex; flex-direction: column; gap: 0.75rem; margin-top: 2rem; }
        .acc-item { overflow: hidden; }
        .acc-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 1.5rem; background: none; border: none; color: var(--text-primary); font-size: 0.95rem; font-weight: 500; cursor: pointer; text-align: left; }
        .acc-chevron { color: var(--accent-teal); transition: transform 0.4s ease; flex-shrink: 0; }
        .acc-chevron.rotated { transform: rotate(180deg); }
        .acc-body { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.4s cubic-bezier(0.16,1,0.3,1); }
        .acc-body.open { grid-template-rows: 1fr; }
        .acc-inner { overflow: hidden; }
        .acc-text { padding: 0 1.5rem 1.5rem; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.75; margin: 0; }

        /* FOOTER */
        .footer { border-top: 1px solid rgba(255,255,255,0.05); }
        .grid-footer { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 4rem; padding-bottom: 4rem; }
        .footer-logo { font-size: 1.8rem; margin-bottom: 1.5rem; }
        .footer-title { margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem; }
        .footer-contact-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-secondary); }
        .social-links { display: flex; gap: 1.5rem; }
        .social-links a { color: var(--text-secondary); font-size: 0.9rem; will-change: transform; }
        .social-links a:hover { color: var(--white); }
        .footer-bottom { padding-top: 4rem; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; color: #555; font-size: 0.85rem; }

        @media (max-width: 968px) {
          .vision-grid, .founder-grid, .studio-stats-grid, .grid-footer, .software-container { grid-template-columns: 1fr; gap: 3rem; }
          .founder-grid.reversed .founder-text, .founder-grid.reversed .founder-img-wrap { order: unset; }
          .values-grid { grid-template-columns: 1fr; }
          .timeline-wrap { grid-template-columns: 1fr; }
          .tl-line-col { display: none; }
          .timeline-entry { grid-template-columns: 1fr; }
          .founder-img-frame { height: 420px; }
        }
      `}</style>
    </div>
  )
}
