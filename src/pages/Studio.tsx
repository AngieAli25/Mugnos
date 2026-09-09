import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Phone,
  MapPin,
  BookOpen,
  Target,
  Quote,
  Award,
  Users,
  Microscope,
  Globe,
  ChevronDown,
  FileText,
} from 'lucide-react'
import { SiteNav } from '../components/SiteNav'

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  { year: '2015', title: 'Incontro a Licata', desc: 'Nell\'estate del 2015, durante le verifiche del ponte stradale "Federico II di Svevia" di Morandi, Elio Lo Giudice incontra il giovane ingegnere Giuseppe Mugnos, in tirocinio presso gli uffici tecnici comunali.' },
  { year: '2017', title: 'Una sintonia che cresce', desc: 'Negli anni successivi la collaborazione professionale si consolida, unendo l\'esperienza maturata sul campo alla spinta dell\'innovazione e della ricerca scientifica.' },
  { year: '2019', title: 'Lo Studio Associato', desc: 'Nasce ufficialmente lo Studio Associato di Ingegneria Strutturale "Lo Giudice & Mugnos": un nome che unisce due storie, ma una sola identità.' },
  { year: '2021', title: 'Specializzazione e crescita', desc: 'Lo studio amplia il proprio raggio d\'azione, diventando un riferimento per la progettazione strutturale e infrastrutturale e per il recupero del patrimonio esistente.' },
  { year: '2026', title: 'Un ponte tra esperienza e innovazione', desc: 'Una nuova identità di marca racconta il senso del nostro percorso: integrare ricerca, metodo e costruzione per opere che durino nel tempo.' },
]

const VALUES = [
  { title: 'Integrità', desc: 'Agiamo con responsabilità, trasparenza e rispetto verso il territorio, le persone e le opere che realizziamo.', Icon: Target },
  { title: 'Metodo', desc: 'Ogni progetto nasce da un processo rigoroso, strutturato e verificato, fondato su precisione, disciplina tecnica e sperimentazione.', Icon: BookOpen },
  { title: 'Innovazione', desc: 'Ricerca scientifica, modellazione avanzata e uso di sistemi intelligenti guidano il nostro approccio progettuale.', Icon: Microscope },
  { title: 'Esperienza', desc: 'Un patrimonio di oltre trent\'anni di attività professionale si unisce alla visione contemporanea della nuova generazione.', Icon: Award },
  { title: 'Collaborazione', desc: 'Crediamo nel dialogo continuo con clienti, enti e professionisti: le migliori soluzioni nascono sempre dal confronto.', Icon: Users },
  { title: 'Visione globale', desc: 'Ogni opera è parte di un sistema più ampio: territorio, mobilità, sicurezza, sostenibilità. Progettiamo pensando al lungo periodo.', Icon: Globe },
]

const ACCORDION_ELIO = [
  {
    title: 'Percorso ed esperienza professionale',
    body: 'Laureato in Ingegneria Civile a Pisa, l\'Ing. Elio Lo Giudice ha maturato una lunga esperienza nella progettazione strutturale e infrastrutturale, operando per enti pubblici, università, tribunali e committenti privati. Nel corso della propria attività ha svolto incarichi come progettista, direttore lavori, collaudatore, consulente specialistico e CTU, seguendo edifici pubblici, strutture scolastiche, opere industriali, ponti, viadotti e interventi su strutture esistenti.',
  },
  {
    title: 'Competenze e approccio',
    body: 'Il suo lavoro si distingue per metodo, rigore tecnico e capacità di interpretare la reale condizione delle opere, considerando struttura, materiali, contesto e criticità esistenti. Opera nei settori della progettazione strutturale e infrastrutturale, delle verifiche sismiche, della diagnostica avanzata, delle prove sperimentali, dell\'ingegneria forense e degli interventi di consolidamento e adeguamento sismico, con l\'obiettivo di individuare soluzioni affidabili, adeguate e durature.',
  },
  {
    title: 'Laboratorio DISMAT',
    body: 'Il ruolo di Direttore del Laboratorio DISMAT rappresenta uno degli elementi distintivi del suo profilo professionale. L\'esperienza nelle prove ufficiali sui materiali da costruzione, nelle indagini sperimentali e nella diagnostica strutturale consente di integrare la progettazione con dati, osservazioni e verifiche dirette, rafforzando il rapporto tra calcolo, prova e interpretazione tecnica.',
  },
  {
    title: 'Progetti e collaborazioni',
    body: 'Nel corso della propria attività, l\'Ing. Elio Lo Giudice ha collaborato con enti pubblici, amministrazioni, società infrastrutturali e realtà private di rilievo nazionale, tra cui ANAS, Autostrade per l\'Italia, RAI Way, Province e Comuni. Ha contribuito a interventi di verifica, progettazione e riqualificazione di ponti, viadotti, edifici pubblici, strutture scolastiche, ospedaliere e opere complesse, occupandosi di sicurezza strutturale, valutazioni sismiche, diagnostica e caratterizzazione dinamica.',
  },
  {
    title: 'Ricerca, didattica e cultura tecnica',
    body: 'Accanto all\'attività professionale, ha svolto incarichi universitari, attività di ricerca applicata, partecipazione ad associazioni tecniche e collaborazioni con organismi del settore. È autore di contributi scientifici su diagnostica strutturale, dinamica sperimentale, sistemi di isolamento, monitoraggio delle infrastrutture e metodologie innovative per la valutazione della sicurezza strutturale.',
  },
]

const ACCORDION_GIUSEPPE = [
  {
    title: 'Formazione e percorso',
    body: 'Laureato con lode in Ingegneria Civile, indirizzo Strutture e Geotecnica, presso l\'Università degli Studi di Palermo, ha orientato fin dall\'inizio il proprio percorso verso la dinamica strutturale, la sperimentazione e la vulnerabilità sismica delle opere esistenti. Ha maturato esperienza nella progettazione strutturale ed infrastrutturale, diagnostica, verifiche di sicurezza e interventi di consolidamento, miglioramento e adeguamento sismico su edifici e infrastrutture. Nel luglio 2026 ha concluso il Dottorato in "Sistemi Intelligenti per l\'Ingegneria" presso l\'Università Kore di Enna, svolgendo attività di ricerca nel Laboratorio L.E.D.A. su prove EMA/OMA, caratterizzazione di isolatori e smorzatori, test sismici su tavola vibrante e aggiornamento modale di modelli FEM.',
  },
  {
    title: 'Competenze e metodo',
    body: 'Si occupa di progettazione strutturale e infrastrutturale, diagnostica, prove dinamiche, modellazione FEM, verifiche di sicurezza e interventi di consolidamento, miglioramento e adeguamento sismico. Il suo metodo integra dati sperimentali, modellazione numerica e lettura critica del comportamento reale delle strutture. Il suo approccio nasce dall\'idea che l\'ingegneria debba interpretare il comportamento reale delle strutture, anticipare scenari e innovare i processi progettuali.',
  },
  {
    title: 'Laboratorio DISMAT',
    body: 'In qualità di sperimentatore certificato (VT e DT – UNI/PdR 56:2019), presso il Laboratorio DISMAT l\'Ing. Mugnos esegue indagini non distruttive, prove dinamiche, indagini strutturali e controllo sperimentale delle opere. Le qualifiche conseguite nel campo dell\'ispezione visiva delle opere civili e infrastrutturali e della misura di deformazioni e tensioni rafforzano il legame tra attività progettuale e conoscenza diretta del comportamento strutturale. Ha partecipato a campagne diagnostiche su ponti, viadotti, gallerie, edifici strategici e infrastrutture complesse, integrando dati sperimentali e modellazione numerica per interpretare il comportamento delle opere.',
  },
  {
    title: 'Progetti e collaborazioni',
    body: 'Ha contribuito a interventi per ANAS, Autostrade per l\'Italia, RAI Way, Province, Comuni e società private, operando su ponti, viadotti, edifici strategici, gallerie, strutture industriali e infrastrutture complesse. Tra le attività principali rientrano verifiche di sicurezza, valutazioni sismiche, campagne diagnostiche, prove dinamiche, caratterizzazione sperimentale di opere esistenti, progettazione di sistemi di monitoraggio e progettazione di adeguamenti sismici. Ha inoltre partecipato ad attività sperimentali su strutture e infrastrutture di particolare rilievo, integrando prove in campo, modellazione numerica e interpretazione dei risultati.',
  },
  {
    title: 'Pubblicazioni e attività scientifica',
    body: 'L\'attività professionale è affiancata da contributi scientifici e tecnici su diagnostica strutturale, dinamica sperimentale, monitoraggio, modellazione numerica, sistemi di isolamento, algoritmi di ottimizzazione e vulnerabilità sismica. Ha partecipato a conferenze e congressi nazionali e internazionali, tra cui AICAP, AIMETA, EMI, IF CRASC e SENSOR, contribuendo allo sviluppo di metodologie innovative per la valutazione della sicurezza strutturale. La sua produzione scientifica riflette una visione dell\'ingegneria in cui ricerca e professione sono parti di uno stesso metodo: osservare, misurare, interpretare e progettare con maggiore consapevolezza.',
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

      <SiteNav />

      <main>
        {/* HERO */}
        <section className="hero subpage-hero">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ maxWidth: '1050px', margin: '0 auto', textAlign: 'center' }}
            >
              <h3 className="section-tag">La Nostra Storia</h3>
              <h1 className="hero-main-title">Un Ponte tra <br /><span className="text-gradient nowrap-wide">Esperienza e Innovazione</span></h1>
              <p className="hero-subtitle">
                L&M Ingegneria nasce dall'incontro tra due generazioni e una stessa visione
                dell'ingegneria: rigorosa, innovativa e profondamente responsabile.
              </p>
            </motion.div>
          </div>
        </section>

        {/* VISION */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="vision-grid">
              <div>
                <span className="section-tag">Filosofia</span>
                <h2 className="section-title">
                  <WordReveal text="Rigore, Visione, Innovazione" />
                </h2>
                <div className="quote-card glass-card" style={{ marginTop: '2rem', padding: '2.5rem' }}>
                  <Quote size={36} style={{ color: 'var(--accent-teal)', opacity: 0.5, marginBottom: '1rem' }} />
                  <p className="quote-text">
                    "Per noi progettare non significa solo calcolare. Significa interpretare, prevedere,
                    inventare. Significa assumersi la responsabilità di opere che devono durare nel tempo,
                    dialogare con il territorio e garantire sicurezza."
                  </p>
                </div>
              </div>
              <div className="reveal">
                <p className="lead-text">
                  Crediamo in un'ingegneria che unisce rigore scientifico, responsabilità e visione.
                </p>
                <p className="body-text">
                  Ogni opera è un sistema complesso che richiede metodo, esperienza e capacità di
                  interpretare il territorio. Per noi progettare significa trasformare la conoscenza in
                  valore, la complessità in soluzioni sicure e durature, la ricerca in innovazione
                  concreta. L&M Ingegneria nasce dall'incontro tra due generazioni e si fonda sull'idea
                  che l'ingegneria non si limita a risolvere problemi: anticipa scenari, innova processi
                  e genera valore per la collettività.
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
                  <WordReveal text="Ing. Elio Lo Giudice" />
                </h2>
                <p className="body-text" style={{ marginBottom: '1rem' }}>
                  Professionista con oltre trent'anni di esperienza nel campo dell'ingegneria
                  strutturale e infrastrutturale, Elio Lo Giudice rappresenta la radice tecnica e
                  professionale da cui nasce L&M Ingegneria.
                </p>
                <p className="body-text" style={{ marginBottom: '1rem' }}>
                  Ingegnere civile, Direttore del Laboratorio DISMAT di Canicattì e sperimentatore nel
                  campo dei materiali e delle strutture, ha costruito un percorso fondato su
                  progettazione, consulenza tecnica, collaudi, diagnostica strutturale e ingegneria
                  forense.
                </p>
                <p className="body-text">
                  La sua attività si concentra sulla sicurezza delle opere, sulla conoscenza dei
                  materiali e sul recupero del patrimonio costruito, con un approccio che unisce
                  esperienza diretta, rigore tecnico e responsabilità verso il territorio.
                </p>
                <Accordion items={ACCORDION_ELIO} />
                <a
                  href="/cv/Elio_Lo_Giudice_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-button"
                  onMouseMove={handleMagneticMoveLink}
                  onMouseLeave={handleMagneticLeaveLink}
                >
                  <FileText size={18} />
                  <span>Scarica il curriculum</span>
                </a>
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
                  <WordReveal text="Ing. Giuseppe Mugnos" />
                </h2>
                <p className="body-text" style={{ marginBottom: '1rem' }}>
                  Ingegnere civile specializzato in Strutture e Geotecnica, Giuseppe Mugnos rappresenta
                  la componente di L&M Ingegneria più orientata alla ricerca, alla modellazione numerica
                  e all'innovazione sperimentale. La sua attività integra progettazione strutturale,
                  diagnostica, monitoraggio, verifiche di vulnerabilità sismica e analisi del
                  comportamento delle opere esistenti.
                </p>
                <p className="body-text" style={{ marginBottom: '1rem' }}>
                  Sperimentatore presso il Laboratorio DISMAT di Canicattì e Dottore di Ricerca in
                  "Sistemi Intelligenti per l'Ingegneria" presso l'Università Kore di Enna, unisce libera
                  professione e ricerca scientifica, trasferendo nel lavoro quotidiano strumenti di
                  dinamica sperimentale, modellazione FEM e sistemi intelligenti per l'ingegneria.
                </p>
                <p className="body-text">
                  Il suo percorso contribuisce alla visione di L&M Ingegneria: trasformare la
                  complessità in soluzioni sicure, durature e orientate al futuro, con particolare
                  attenzione a ponti, viadotti, edifici e infrastrutture esistenti.
                </p>
                <Accordion items={ACCORDION_GIUSEPPE} />
                <a
                  href="/cv/Giuseppe_Mugnos_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cv-button"
                  onMouseMove={handleMagneticMoveLink}
                  onMouseLeave={handleMagneticLeaveLink}
                >
                  <FileText size={18} />
                  <span>Scarica il curriculum</span>
                </a>
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

        {/* STATS */}
        <section className="section-padding" style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, #0d0d0d 100%)' }}>
          <div className="container">
            <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
              <span className="section-tag">In numeri</span>
              <h2 className="section-title">L&M Ingegneria oggi</h2>
            </div>
            <div className="studio-stats-grid">
              {[
                { value: '30+', label: 'Anni di esperienza' },
                { value: '200+', label: 'Progetti di rilievo' },
                { value: '100+', label: 'Committenti di rilievo' },
                { value: '5', label: 'Macro-settori' },
                { value: '30+', label: 'Collaborazioni' },
                { value: '2019', label: 'Anno di fondazione' },
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

        /* HERO */
        .hero { width: 100%; display: flex; align-items: center; position: relative; overflow: hidden; background: var(--bg-primary); }
        .subpage-hero { height: 60vh; min-height: 480px; padding-top: var(--header-height); }
        .hero-main-title { font-size: clamp(2.6rem, 6.5vw, 4.8rem); margin-bottom: 2rem; line-height: 1.1; }
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
        .founder-image { width: 100%; height: 140%; object-fit: cover; display: block; will-change: transform; }
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

        /* CV BUTTON */
        .cv-button { display: inline-flex; align-items: center; gap: 0.6rem; margin-top: 2rem; padding: 0.9rem 1.75rem; background: var(--accent-teal); color: #0a0a0a; font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; border-radius: 10px; will-change: transform; transition: transform 0.1s linear, box-shadow 0.3s ease, filter 0.3s ease; box-shadow: 0 12px 30px rgba(35,172,181,0.25); }
        .cv-button:hover { filter: brightness(1.08); box-shadow: 0 16px 40px rgba(35,172,181,0.4); }

        /* FOOTER */
        .footer { border-top: 1px solid rgba(255,255,255,0.05); }
        .grid-footer { display: grid; grid-template-columns: 2fr auto; gap: 4rem; padding-bottom: 4rem; }
        .footer-logo { font-size: 1.8rem; margin-bottom: 1.5rem; }
        .footer-title { margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem; }
        .footer-contact-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-secondary); }
        .footer-bottom { padding-top: 4rem; border-top: 1px solid rgba(255,255,255,0.05); text-align: center; color: #555; font-size: 0.85rem; }

        @media (max-width: 968px) {
          /* .founder-grid.reversed ha specificita' 0,2,0 e batterebbe la
             regola a una colonna qui sotto: va azzerata esplicitamente. */
          .vision-grid, .founder-grid, .founder-grid.reversed, .studio-stats-grid, .grid-footer, .software-container { grid-template-columns: 1fr; gap: 3rem; }
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
