import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../components/Button'
import { Phone, Mail, MapPin, Send, Clock, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const CONTACT_INFO = [
  { icon: MapPin,  label: 'Sede',                  value: 'Contrada Andolina',     sub: 'Canicattì (AG), 92024 — Italia' },
  { icon: Phone,   label: 'Ing. Elio Lo Giudice',  value: '+39 334 176 5539',      sub: 'Lun–Ven 9:00–18:00' },
  { icon: Phone,   label: 'Ing. Giuseppe Mugnos',  value: '+39 328 162 3648',      sub: 'Lun–Ven 9:00–18:00' },
  { icon: Clock,   label: 'Orari',                 value: 'Lun–Ven 9:00–18:00',    sub: 'Sabato su appuntamento' },
]

const FAQ = [
  {
    title: 'Quali sono i tempi per una consulenza preliminare?',
    body: 'Di norma offriamo un primo riscontro entro 48 ore dalla ricezione della richiesta. Per i progetti più articolati, organizziamo una call conoscitiva gratuita entro una settimana dalla prima richiesta.',
  },
  {
    title: "Operate solo in Italia o anche all'estero?",
    body: 'Operiamo principalmente in Italia, con consolidate collaborazioni in Francia, Spagna e Germania. Valutiamo progetti internazionali caso per caso, avvalendoci di partner locali certificati.',
  },
  {
    title: 'Offrite direzione lavori oltre alla progettazione?',
    body: 'Sì. Seguiamo i progetti in tutte le fasi: progettazione definitiva ed esecutiva, coordinamento della sicurezza, direzione lavori e collaudo statico finale con certificazione Eurocodici.',
  },
  {
    title: "Come si svolge il processo d'incarico?",
    body: "Il processo inizia con un briefing tecnico gratuito. Definiamo insieme scope e tempistiche, dopodiché formuliamo un preventivo analitico. L'incarico viene formalizzato tramite contratto di prestazione professionale.",
  },
  {
    title: 'Lavorate con enti pubblici e stazioni appaltanti?',
    body: 'Sì, abbiamo ampia esperienza di collaborazione con ANAS, RFI, MIT e stazioni appaltanti regionali. Siamo qualificati per incarichi di progettazione in concessione e in appalto integrato.',
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

export function Contatti() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [formState, setFormState] = useState({ nome: '', email: '', oggetto: '', messaggio: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.word-group').forEach(group => {
        const words = group.querySelectorAll('.word')
        gsap.fromTo(words,
          { opacity: 0, y: 22, rotateX: -40 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.55, stagger: 0.04, ease: 'power3.out',
            scrollTrigger: { trigger: group, start: 'top 83%', toggleActions: 'play none none none' } }
        )
      })

      gsap.utils.toArray<HTMLElement>('.reveal').forEach(el => {
        gsap.fromTo(el,
          { opacity: 0, y: 55 },
          { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out',
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' } }
        )
      })

      gsap.fromTo('.contact-info-card',
        { opacity: 0, y: 50, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.75, stagger: 0.12, ease: 'back.out(1.3)',
          scrollTrigger: { trigger: '.contact-info-grid', start: 'top 80%', toggleActions: 'play none none none' } }
      )

      gsap.fromTo('.contact-form-wrap',
        { opacity: 0, x: 55 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out',
          scrollTrigger: { trigger: '.contact-form-wrap', start: 'top 80%', toggleActions: 'play none none none' } }
      )

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
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
            <Link to="/settori">Settori</Link>
            <Link to="/progetti">Progetti</Link>
            <Link to="/pubblicazioni">Pubblicazioni</Link>
            <Link to="/eventi">Eventi</Link>
            <Link to="/contatti" className="active-link">Contatti</Link>
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
              <h3 className="section-tag">Parliamo del tuo progetto</h3>
              <h1 className="hero-main-title">Inizia una <span className="text-gradient">Conversazione</span></h1>
              <p className="hero-subtitle">
                Ogni grande infrastruttura nasce da un dialogo. Contattaci per una consulenza preliminare gratuita
                e scopri come possiamo trasformare il tuo progetto in realtà.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="contact-info-grid">
              {CONTACT_INFO.map((item, i) => {
                const IconComp = item.icon
                return (
                  <div key={i} className="contact-info-card glass-card" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                    <div className="ci-icon"><IconComp size={22} /></div>
                    <span className="ci-label">{item.label}</span>
                    <p className="ci-value">{item.value}</p>
                    <p className="ci-sub">{item.sub}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FORM + OFFICE DETAILS */}
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="contact-main-grid">

              {/* LEFT: details */}
              <div className="contact-details-col reveal">
                <span className="section-tag">Dove siamo</span>
                <h2 className="section-title">
                  <WordReveal text="Vieni a trovarci" />
                </h2>
                <p className="body-text">
                  Il nostro studio si trova a Canicattì, in provincia di Agrigento.
                  Accettiamo appuntamenti in sede e riunioni in videoconferenza per clienti internazionali.
                </p>

                <div className="map-card">
                  <iframe
                    title="Sede L&M Ingegneria — Contrada Andolina, Canicattì (AG)"
                    src="https://www.google.com/maps?q=Contrada+Andolina,+Canicatt%C3%AC+AG,+Italia&z=14&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <a
                    className="map-open"
                    href="https://www.google.com/maps/search/?api=1&query=Contrada+Andolina,+Canicatt%C3%AC+AG"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <MapPin size={14} /> Apri in Google Maps
                  </a>
                </div>

              </div>

              {/* RIGHT: form */}
              <div className="contact-form-wrap">
                {sent ? (
                  <motion.div
                    className="form-success glass-card"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="success-icon-wrap">
                      <Send size={32} style={{ color: 'var(--accent-teal)' }} />
                    </div>
                    <h3 className="success-title">Messaggio inviato</h3>
                    <p className="success-body">
                      Grazie per averci contattato. Il nostro team analizzerà la tua richiesta
                      e ti risponderà entro 24 ore lavorative.
                    </p>
                    <Button
                      variant="primary"
                      onClick={() => { setSent(false); setFormState({ nome: '', email: '', oggetto: '', messaggio: '' }) }}
                    >
                      Invia un altro messaggio
                    </Button>
                  </motion.div>
                ) : (
                  <form className="contact-form glass-card" onSubmit={handleSubmit}>
                    <h3 className="form-title">Scrivici</h3>
                    <p className="form-sub">Compila il modulo e ti risponderemo al più presto.</p>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Nome e Cognome</label>
                        <input
                          type="text"
                          className="form-input"
                          placeholder="Mario Rossi"
                          value={formState.nome}
                          onChange={e => setFormState(s => ({ ...s, nome: e.target.value }))}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="mario@studio.it"
                          value={formState.email}
                          onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Oggetto</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Consulenza per progettazione viadotto A3"
                        value={formState.oggetto}
                        onChange={e => setFormState(s => ({ ...s, oggetto: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Messaggio</label>
                      <textarea
                        className="form-input form-textarea"
                        placeholder="Descrivi il tuo progetto, le tempistiche e le specifiche tecniche principali…"
                        rows={5}
                        value={formState.messaggio}
                        onChange={e => setFormState(s => ({ ...s, messaggio: e.target.value }))}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="primary"
                    >
                      <Send size={15} />
                      Invia messaggio
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="faq-grid">
              <div className="reveal">
                <span className="section-tag">Domande frequenti</span>
                <h2 className="section-title">
                  <WordReveal text="Risposte rapide" />
                </h2>
                <p className="body-text">
                  Raccogliamo qui le domande più comuni dei committenti prima di avviare
                  una collaborazione. Per qualsiasi altro chiarimento, siamo a disposizione.
                </p>
                <div className="faq-cta-row">
                  <div className="faq-stat glass-card" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                    <span className="faq-stat-val text-gradient">48h</span>
                    <span className="faq-stat-lbl">Tempo medio<br />di risposta</span>
                  </div>
                  <div className="faq-stat glass-card" onMouseMove={handle3DMove} onMouseLeave={handle3DLeave}>
                    <span className="faq-stat-val text-gradient">100%</span>
                    <span className="faq-stat-lbl">Prima consulenza<br />gratuita</span>
                  </div>
                </div>
              </div>
              <div className="faq-accordion-col reveal">
                <Accordion items={FAQ} />
              </div>
            </div>
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

        /* SHARED */
        .section-tag { display: block; font-family: var(--font-sans); font-weight: 500; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 3px; font-size: 0.85rem; margin-bottom: 1rem; }
        .section-title { font-size: clamp(2.2rem, 4vw, 3rem); margin-bottom: 1.5rem; }
        .body-text { color: var(--text-secondary); line-height: 1.85; font-size: 1rem; margin-bottom: 2rem; }
        .text-center { text-align: center; }

        /* WORD REVEAL */
        .word-group { display: inline; }
        .word { display: inline-block; margin-right: 0.32em; opacity: 0; transform: translateY(22px) rotateX(-40deg); transform-origin: top; }

        /* CONTACT INFO GRID */
        .contact-info-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; }
        .contact-info-card { padding: 2rem 1.75rem; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); opacity: 0; }
        .ci-icon { color: var(--accent-teal); margin-bottom: 1.25rem; padding: 0.65rem; background: rgba(35,172,181,0.08); border-radius: 8px; display: inline-flex; }
        .ci-label { display: block; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--accent-teal); margin-bottom: 0.5rem; font-family: var(--font-sans); }
        .ci-value { font-size: 1rem; color: var(--text-primary); font-weight: 500; margin: 0 0 0.3rem; }
        .ci-sub { font-size: 0.82rem; color: var(--text-secondary); margin: 0; }

        /* CONTACT MAIN GRID */
        .contact-main-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 5rem; align-items: start; }
        .contact-details-col {}

        /* MAP CARD */
        .map-card { position: relative; overflow: hidden; margin: 2rem 0; border-radius: 14px; border: 1px solid rgba(255,255,255,0.07); background: #0d0d0d; }
        .map-card iframe { width: 100%; height: 320px; border: 0; display: block; filter: invert(0.92) hue-rotate(180deg) saturate(0.7) brightness(0.95); }
        .map-open { position: absolute; bottom: 0.85rem; right: 0.85rem; display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(10,10,10,0.88); backdrop-filter: blur(8px); border: 1px solid rgba(35,172,181,0.35); color: var(--accent-teal); padding: 0.45rem 0.85rem; border-radius: 999px; font-size: 0.78rem; font-weight: 600; letter-spacing: 0.5px; transition: background 0.3s, border-color 0.3s; text-decoration: none; }
        .map-open:hover { background: rgba(35,172,181,0.18); border-color: var(--accent-teal); }

        /* OFFICE BADGES */

        /* CONTACT FORM */
        .contact-form-wrap { position: sticky; top: calc(var(--header-height) + 2rem); }
        .contact-form { padding: 3rem; }
        .form-title { font-size: 1.8rem; margin-bottom: 0.5rem; }
        .form-sub { font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 2rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .form-group { margin-bottom: 1rem; }
        .form-label { display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-secondary); margin-bottom: 0.5rem; font-family: var(--font-sans); }
        .form-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 0.85rem 1.1rem; color: var(--text-primary); font-size: 0.95rem; transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease; outline: none; font-family: var(--font-sans); cursor: text; box-sizing: border-box; resize: none; }
        .form-input::placeholder { color: rgba(255,255,255,0.18); }
        .form-input:focus { border-color: rgba(35,172,181,0.55); box-shadow: 0 0 0 3px rgba(35,172,181,0.07); background: rgba(35,172,181,0.03); }
        .form-textarea { min-height: 140px; }

        /* FORM SUCCESS */
        .form-success { padding: 4rem 3rem; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.25rem; }
        .success-icon-wrap { width: 72px; height: 72px; border-radius: 50%; background: rgba(35,172,181,0.1); border: 1px solid rgba(35,172,181,0.2); display: flex; align-items: center; justify-content: center; }
        .success-title { font-size: 1.8rem; margin: 0; }
        .success-body { font-size: 0.95rem; color: var(--text-secondary); line-height: 1.7; max-width: 360px; margin: 0; }

        /* FAQ */
        .faq-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 5rem; align-items: start; }
        .faq-accordion-col { padding-top: 0.5rem; }
        .faq-cta-row { display: flex; gap: 1rem; margin-top: 2.5rem; }
        .faq-stat { padding: 1.5rem; flex: 1; will-change: transform; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); text-align: center; }
        .faq-stat-val { display: block; font-size: 2rem; font-weight: 700; font-family: var(--font-serif); margin-bottom: 0.4rem; }
        .faq-stat-lbl { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1.5px; color: var(--text-secondary); line-height: 1.5; }

        /* ACCORDION */
        .accordion { display: flex; flex-direction: column; gap: 0.75rem; }
        .acc-item { overflow: hidden; }
        .acc-trigger { width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 1.1rem 1.5rem; background: none; border: none; color: var(--text-primary); font-size: 0.95rem; font-weight: 500; cursor: pointer; text-align: left; gap: 1rem; }
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
          .contact-info-grid { grid-template-columns: 1fr 1fr; }
          .contact-main-grid, .faq-grid, .grid-footer { grid-template-columns: 1fr; gap: 3rem; }
          .contact-form-wrap { position: static; }
          .form-row { grid-template-columns: 1fr; }
          .faq-cta-row { flex-direction: column; }
        }
      `}</style>
    </div>
  )
}
