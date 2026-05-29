import { useEffect, useRef, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { findEvent, EVENTS } from '../data/events'

gsap.registerPlugin(ScrollTrigger)

export function EventoDetail() {
  const { id } = useParams<{ id: string }>()
  const event = findEvent(id)

  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const [visible, setVisible] = useState<number>(() => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth <= 700) return 1
    if (window.innerWidth <= 1100) return 2
    return 3
  })

  useEffect(() => {
    const handler = () => {
      const w = window.innerWidth
      setVisible(w <= 700 ? 1 : w <= 1100 ? 2 : 3)
    }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const length = event?.gallery.length ?? 0
  const maxSlide = Math.max(0, length - visible)

  useEffect(() => {
    setSlide((s) => Math.min(s, maxSlide))
  }, [maxSlide])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [id])

  useEffect(() => {
    if (!event) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
          }
        )
      })
    }, mainRef)
    return () => ctx.revert()
  }, [event])

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 })
      gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.3 })
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const prevSlide = useCallback(() => {
    setSlide((i) => Math.max(0, i - 1))
  }, [])
  const nextSlide = useCallback(() => {
    setSlide((i) => Math.min(maxSlide, i + 1))
  }, [maxSlide])

  useEffect(() => {
    if (!event) return
    const onKey = (e: KeyboardEvent) => {
      if (!carouselRef.current) return
      const rect = carouselRef.current.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [event, prevSlide, nextSlide])

  if (!event) {
    return <Navigate to="/eventi" replace />
  }

  const relatedEvents = EVENTS.filter(
    (e) => e.id !== event.id && e.type === event.type
  ).slice(0, 3)

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
            <Link to="/eventi" className="active-link">Eventi</Link>
            <Link to="/contatti">Contatti</Link>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="detail-hero">
          <div className="container detail-hero-content">
            <Link to="/eventi" className="back-link">
              <ArrowLeft size={16} /> Tutti gli eventi
            </Link>
            <div className="detail-hero-grid">
              <motion.div
                className="detail-hero-text"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="hero-category">{event.type}</span>
                <h1 className="hero-title">{event.title}</h1>
                <div className="hero-meta">
                  <div className="meta-item">
                    <Calendar size={15} />
                    <span><strong>{event.date}</strong></span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={15} />
                    <span><strong>{event.location}{event.country && `, ${event.country}`}</strong></span>
                  </div>
                  <div className="meta-item">
                    <Award size={15} />
                    <span>Ruolo: <strong>{event.role}</strong></span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="detail-hero-image"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <img src={event.cover} alt={event.title} />
              </motion.div>
            </div>
          </div>
        </section>

        {/* INFO */}
        <section className="section-padding info-section">
          <div className="container info-container">
            <div className="info-text reveal">
              {event.description.map((p, i) => (
                <p key={i} className="info-p">{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY CAROUSEL */}
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="gallery-header reveal">
              <span className="section-tag">Galleria fotografica</span>
              <h2 className="section-title">Momenti dell'evento</h2>
            </div>

            <div ref={carouselRef} className="carousel reveal">
              <div className="carousel-viewport">
                <motion.div
                  className="carousel-track"
                  animate={{ x: `${length === 0 ? 0 : (-slide * 100) / length}%` }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) nextSlide()
                    else if (info.offset.x > 60) prevSlide()
                  }}
                >
                  {event.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="carousel-slide"
                      style={{ flex: `0 0 ${100 / visible}%` }}
                    >
                      <img src={img} alt={`${event.title} — immagine ${i + 1}`} loading="lazy" draggable={false} />
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="carousel-controls">
                <button className="carousel-arrow" onClick={prevSlide} disabled={slide === 0} aria-label="Precedente">
                  <ChevronLeft size={20} />
                </button>
                <span className="carousel-counter">
                  {String(slide + 1).padStart(2, '0')}
                  {visible > 1 && length > visible ? `–${String(Math.min(slide + visible, length)).padStart(2, '0')}` : ''}
                  {' '}/ {String(length).padStart(2, '0')}
                </span>
                <button className="carousel-arrow" onClick={nextSlide} disabled={slide >= maxSlide} aria-label="Successiva">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED */}
        {relatedEvents.length > 0 && (
          <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
              <div className="reveal" style={{ marginBottom: '3rem' }}>
                <span className="section-tag">Continua a esplorare</span>
                <h2 className="section-title">Altri {event.type.toLowerCase()}</h2>
              </div>
              <div className="related-grid">
                {relatedEvents.map((rel) => (
                  <Link key={rel.id} to={`/eventi/${rel.id}`} className="related-card reveal">
                    <div className="related-image-wrap">
                      <img src={rel.cover} alt={rel.title} loading="lazy" />
                    </div>
                    <div className="related-body">
                      <span className="related-year">{rel.date}</span>
                      <h3 className="related-title">{rel.title}</h3>
                      <p className="related-location">
                        <MapPin size={12} /> {rel.location}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
                <Link to="/eventi" className="cta-button-outline">
                  <ArrowLeft size={16} /> <span>Tutti gli eventi</span>
                </Link>
              </div>
            </div>
          </section>
        )}

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

        /* HERO */
        .detail-hero { background: var(--bg-primary); padding-bottom: 4rem; }
        .detail-hero-content { padding-top: calc(var(--header-height) + 3rem); }
        .back-link { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.8rem; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 2.5rem; transition: color 0.3s, gap 0.3s; }
        .back-link:hover { color: var(--accent-teal); gap: 0.7rem; }
        .detail-hero-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: 4rem; align-items: center; }
        .detail-hero-text { min-width: 0; }
        .detail-hero-image { aspect-ratio: 4 / 3; border-radius: 16px; overflow: hidden; background: #111; }
        .detail-hero-image img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .hero-category { display: inline-block; color: var(--accent-teal); font-size: 0.72rem; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 1.25rem; padding: 0.35rem 0.9rem; background: rgba(35,172,181,0.1); border: 1px solid rgba(35,172,181,0.25); border-radius: 999px; }
        .hero-title { font-size: clamp(2rem, 4vw, 3.2rem); line-height: 1.15; margin: 0 0 1.5rem; }
        .hero-meta { display: flex; flex-wrap: wrap; gap: 1.5rem 2rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .meta-item { display: inline-flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.85rem; }
        .meta-item svg { color: var(--accent-teal); }
        .meta-item strong { color: var(--white); font-weight: 600; }

        /* SHARED */
        .section-tag { font-family: var(--font-sans); font-weight: 500; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 3px; font-size: 0.85rem; margin-bottom: 1rem; display: block; }
        .section-title { font-size: clamp(2rem, 4vw, 2.8rem); margin-bottom: 1.5rem; line-height: 1.15; }

        /* INFO */
        .info-section { background: var(--bg-primary); padding-top: 1rem; }
        .info-container { display: flex; justify-content: center; }
        .info-text { max-width: 760px; font-size: 1.08rem; line-height: 1.85; color: rgba(255,255,255,0.92); }
        .info-p { margin: 0 0 1.4rem; }
        .info-p:last-child { margin-bottom: 0; }

        /* GALLERY CAROUSEL */
        .gallery-header { margin-bottom: 3rem; }
        .carousel-viewport { overflow: hidden; }
        .carousel-track { display: flex; will-change: transform; cursor: grab; user-select: none; }
        .carousel-track:active { cursor: grabbing; }
        .carousel-slide { padding: 0 0.5rem; box-sizing: border-box; }
        .carousel-slide:first-child { padding-left: 0; }
        .carousel-slide:last-child { padding-right: 0; }
        .carousel-slide img { width: 100%; height: 320px; object-fit: cover; display: block; border-radius: 12px; background: #111; }
        .carousel-controls { display: flex; align-items: center; justify-content: center; gap: 1.25rem; margin-top: 2rem; }
        .carousel-arrow { width: 46px; height: 46px; border-radius: 50%; background: transparent; border: 1px solid rgba(255,255,255,0.15); color: var(--white); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.3s, border-color 0.3s, color 0.3s; }
        .carousel-arrow:hover:not(:disabled) { background: rgba(35,172,181,0.15); border-color: var(--accent-teal); color: var(--accent-teal); }
        .carousel-arrow:disabled { opacity: 0.3; cursor: not-allowed; }
        .carousel-counter { font-family: var(--font-serif), Georgia, serif; font-size: 0.95rem; color: var(--white); letter-spacing: 2px; min-width: 90px; text-align: center; }

        /* RELATED */
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .related-card { display: flex; flex-direction: column; gap: 1rem; color: inherit; text-decoration: none; transition: transform 0.5s cubic-bezier(0.16,1,0.3,1); }
        .related-card:hover { transform: translateY(-5px); }
        .related-image-wrap { aspect-ratio: 4 / 3; overflow: hidden; border-radius: 12px; background: #111; }
        .related-image-wrap img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(0.6) brightness(0.85); transition: transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease; }
        .related-card:hover .related-image-wrap img { transform: scale(1.06); filter: grayscale(0) brightness(1); }
        .related-body { display: flex; flex-direction: column; gap: 0.4rem; }
        .related-year { color: var(--accent-teal); font-size: 0.78rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; font-family: var(--font-serif); }
        .related-title { font-size: 1.15rem; margin: 0; line-height: 1.3; }
        .related-location { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--text-secondary); font-size: 0.8rem; margin: 0; }

        .cta-button-outline { display: inline-flex; align-items: center; gap: 0.6rem; border: 1px solid rgba(255,255,255,0.15); color: var(--text-primary); padding: 0.9rem 1.8rem; border-radius: 999px; font-size: 0.85rem; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; transition: border-color 0.3s, color 0.3s; }
        .cta-button-outline:hover { border-color: var(--accent-teal); color: var(--accent-teal); }

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

        @media (max-width: 1100px) {
          .detail-hero-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .detail-hero-image { max-height: 380px; }
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .carousel-slide img { height: 280px; }
        }
        @media (max-width: 700px) {
          .detail-hero-content { padding-top: calc(var(--header-height) + 1.5rem); }
          .hero-meta { gap: 1rem 1.5rem; }
          .related-grid, .grid-footer { grid-template-columns: 1fr; gap: 2rem; }
          .carousel-slide { padding: 0; }
          .carousel-slide img { height: 240px; border-radius: 10px; }
        }
      `}</style>
    </div>
  )
}
