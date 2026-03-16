import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  FlaskConical,
  Wind,
  TrendingUp,
  Construction,
  Building2
} from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

function LoadingScreen() {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
    >
      <div className="loader-content">
        <svg width="400" height="140" viewBox="0 0 733 253" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            {[
              "M187.07 231.858H164.27V24.0605L175.67 5.06055L187.07 11.3936V231.858Z",
              "M68.8726 177.788H151.603V168.828H68.8726C66.3986 168.828 64.3926 170.834 64.3926 173.308C64.3926 175.782 66.3986 177.788 68.8726 177.788ZM199.735 177.788H532.86V168.828H199.735V177.788ZM580.992 168.828V177.788H670.056C672.53 177.788 674.536 175.782 674.536 173.308C674.536 170.834 672.53 168.828 670.056 168.828H580.992Z",
              "M700.258 160.547H38.6699C33.8849 160.547 30.0059 156.669 30.0059 151.884C30.0059 147.099 33.8849 143.219 38.6699 143.219H700.257C705.042 143.219 708.921 147.099 708.921 151.884C708.922 156.669 705.043 160.547 700.258 160.547Z",
              "M4.12034 147.338C2.57634 147.338 1.09635 146.464 0.394346 144.975C-0.575654 142.919 0.305348 140.467 2.36235 139.497C2.69735 139.339 36.3114 123.411 73.9314 98.7476C123.372 66.3366 157.279 33.6305 171.987 4.16652C172.52 3.09852 173.49 2.3146 174.646 2.0176C175.805 1.7206 177.031 1.93953 178.012 2.61953C178.175 2.73153 194.739 14.0895 222.602 26.3805L222.879 26.5015C223.822 26.9125 224.775 27.3295 225.744 27.7455C237.088 32.6255 248.804 37.0105 260.569 40.7805C262.772 41.4855 264.819 42.1205 266.825 42.7195C278.313 46.1855 290.024 49.1146 301.643 51.4296C303.642 51.8296 305.69 52.2185 307.905 52.6195C319.478 54.7155 331.181 56.2385 342.689 57.1455C344.997 57.3275 347.043 57.4705 348.944 57.5835C360.537 58.2875 372.234 58.3836 383.715 57.8716C385.788 57.7836 387.887 57.6706 389.962 57.5346C401.627 56.7946 413.317 55.4096 424.717 53.4196C426.715 53.0766 428.754 52.6995 430.962 52.2645C442.64 49.9965 454.33 47.0345 465.718 43.4585C467.838 42.8015 469.935 42.1216 471.965 41.4346C483.619 37.5306 495.317 32.8636 506.745 27.5596L507.511 27.2006C508.06 26.9436 508.612 26.6856 509.163 26.4246C524.559 19.1276 539.865 10.4665 554.655 0.683493C556.55 -0.570507 559.105 -0.0503978 560.359 1.8456C561.613 3.7416 561.093 6.29556 559.197 7.55056C544.083 17.5476 528.435 26.4016 512.685 33.8666C512.119 34.1336 511.557 34.3966 510.997 34.6586L510.224 35.0205C498.506 40.4595 486.522 45.2406 474.591 49.2376C472.506 49.9426 470.341 50.6435 468.17 51.3175C456.503 54.9815 444.511 58.0195 432.542 60.3445C430.278 60.7905 428.174 61.1795 426.12 61.5325C414.437 63.5725 402.445 64.9925 390.491 65.7505C388.36 65.8905 386.198 66.0076 384.071 66.0976C372.31 66.6226 360.322 66.5225 348.448 65.8025C346.5 65.6865 344.403 65.5395 342.041 65.3535C330.258 64.4245 318.279 62.8666 306.437 60.7216C304.172 60.3116 302.076 59.9136 300.03 59.5036C288.155 57.1386 276.185 54.1445 264.455 50.6045C262.408 49.9925 260.311 49.3425 258.056 48.6205C246.039 44.7705 234.074 40.2915 222.491 35.3085C221.509 34.8865 220.54 34.4645 219.584 34.0465L219.293 33.9196C198.288 24.6536 183.752 16.0495 177.215 11.9265C160.777 41.9325 127.547 73.4556 78.3544 105.692C40.2644 130.652 6.21235 146.782 5.87335 146.943C5.30535 147.212 4.70734 147.338 4.12034 147.338Z",
              "M728.476 147.337C727.888 147.337 727.29 147.211 726.723 146.943C726.384 146.783 692.332 130.652 654.242 105.692C602.81 71.9894 568.83 39.0684 553.243 7.84337C552.227 5.80937 553.053 3.3364 555.087 2.3214C557.123 1.3064 559.594 2.13137 560.609 4.16637C575.327 33.6494 609.265 66.3754 658.755 98.8064C696.369 123.454 729.9 139.338 730.234 139.495C732.29 140.464 733.172 142.917 732.203 144.974C731.5 146.464 730.02 147.337 728.476 147.337Z",
              "M679.242 158.965C678.371 158.965 677.494 158.69 676.748 158.121C661.03 146.124 644.133 129.631 626.526 109.099C624.475 106.707 622.329 104.16 620.148 101.529C611.186 90.6937 602.004 78.7836 592.856 66.1256C592.258 65.2996 591.666 64.4767 591.076 63.6557L590.193 62.4276C573.667 39.2796 561.269 19.3097 556.063 10.7027C553.478 13.1887 550.872 15.6307 548.302 17.9767C537.801 27.5837 527.022 36.4297 516.266 44.2677C515.528 44.8087 514.787 45.3437 514.039 45.8777C472.085 75.9377 427.994 92.6977 382.991 95.6917C346.972 98.0867 310.354 91.7137 274.147 76.7487C223.298 55.7317 188.226 24.1777 176.715 12.9247C163.575 37.3167 141.909 65.0776 112.227 95.5416C109.91 97.9156 107.827 100.026 105.856 101.996C91.2951 116.573 75.3101 131.37 58.3481 145.973C56.6251 147.456 54.0261 147.262 52.5421 145.539C51.0581 143.816 51.2531 141.217 52.9761 139.733C69.7831 125.264 85.6151 110.609 100.033 96.1747C101.981 94.2267 104.041 92.1386 106.333 89.7926C137.497 57.8066 159.587 28.9976 171.986 4.16664C172.589 2.95864 173.746 2.12366 175.081 1.93166C176.419 1.73966 177.763 2.21368 178.682 3.20168C179.064 3.61168 217.668 44.5696 277.559 69.2506C357.482 102.187 435.433 92.0706 509.246 39.1836C509.971 38.6656 510.686 38.1486 511.408 37.6196C521.926 29.9546 532.467 21.3037 542.747 11.8987C545.752 9.1557 548.804 6.2806 551.822 3.3506C552.569 2.6296 553.301 1.90961 554.039 1.18361C554.946 0.291612 556.216 -0.132285 557.473 0.0387149C558.733 0.207715 559.845 0.949701 560.484 2.0497C560.628 2.2977 575.133 27.1667 596.881 57.6297L597.759 58.8496C598.343 59.6616 598.93 60.4777 599.525 61.2987C608.571 73.8157 617.642 85.5826 626.489 96.2766C628.638 98.8696 630.754 101.381 632.775 103.739C650.007 123.834 666.482 139.929 681.742 151.576C683.549 152.956 683.896 155.539 682.517 157.346C681.707 158.407 680.482 158.965 679.242 158.965Z",
              "M218.695 31.0176L179.182 147.431L185.178 149.467L224.692 33.053L218.695 31.0176Z",
              "M141.893 58.6584L135.896 60.6938L166.037 149.493L172.034 147.458L141.893 58.6584Z",
              "M109.28 92.6685V148.514H102.947V99.0844C105.055 96.9754 107.164 94.8345 109.28 92.6685Z",
              "M139.571 62.9517H133.238V148.516H139.571V62.9517Z",
              "M190.068 227.015H161.268C158.593 227.015 156.424 229.184 156.424 231.859C156.424 234.534 158.593 236.703 161.268 236.703H190.068C192.743 236.703 194.912 234.535 194.912 231.859C194.912 229.183 192.743 227.015 190.068 227.015Z",
              "M141.973 245.479V247.7C141.973 250.375 144.142 252.544 146.817 252.544H204.521C207.196 252.544 209.365 250.375 209.365 247.7V245.479C209.365 242.804 207.196 240.635 204.521 240.635H146.817C144.142 240.635 141.973 242.804 141.973 245.479Z",
              "M545.527 231.858H568.327V24.0605L556.927 5.06055L545.527 11.3936V231.858Z",
              "M224.118 30.1484H217.785V148.514H224.118V30.1484Z",
              "M265.646 46.6644V148.514H259.312V44.7014C261.388 45.3664 263.505 46.0244 265.646 46.6644Z",
              "M307.171 56.6703V148.514H300.838V55.4673C302.928 55.8853 305.037 56.2843 307.171 56.6703Z",
              "M348.698 61.6935V148.515H342.365V61.2495C344.46 61.4145 346.569 61.5665 348.698 61.6935Z",
              "M390.231 61.6426V148.515H383.898V61.9845C385.993 61.8955 388.109 61.7816 390.231 61.6426Z",
              "M431.757 56.3032V148.514H425.424V57.4752C427.526 57.1142 429.635 56.7212 431.757 56.3032Z",
              "M473.284 45.3345V148.515H466.951V47.3865C469.053 46.7345 471.168 46.0505 473.284 45.3345Z",
              "M514.81 30.1484H508.477V148.514H514.81V30.1484Z",
              "M513.764 31.0559L507.768 33.0913L547.281 149.505L553.278 147.47L513.764 31.0559Z",
              "M590.57 58.719L560.43 147.518L566.426 149.554L596.567 60.7544L590.57 58.719Z",
              "M629.649 106.417V148.513H623.316V98.8994C625.399 101.414 627.514 103.929 629.649 106.417Z",
              "M599.356 62.9517H593.023V148.516H599.356V62.9517Z",
              "M542.526 227.015H571.326C574.001 227.015 576.17 229.184 576.17 231.859C576.17 234.534 574.001 236.703 571.326 236.703H542.526C539.851 236.703 537.682 234.535 537.682 231.859C537.682 229.183 539.851 227.015 542.526 227.015Z",
              "M590.62 245.479V247.7C590.62 250.375 588.451 252.544 585.776 252.544H528.073C525.398 252.544 523.229 250.375 523.229 247.7V245.479C523.229 242.804 525.398 240.635 528.073 240.635H585.776C588.452 240.635 590.62 242.804 590.62 245.479Z"
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="white"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0, fill: "rgba(255,255,255,0)" }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  fill: "rgba(255,255,255,1)",
                  transition: { 
                    pathLength: { duration: 2, delay: i * 0.05, ease: "easeInOut" },
                    opacity: { duration: 0.5, delay: i * 0.05 },
                    fill: { duration: 1, delay: 2 + (i * 0.02) }
                  }
                }}
              />
            ))}
          </g>
        </svg>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <img 
            src="/loghi/estetso_bianco.png" 
            alt="L&M Ingegneria" 
            style={{ height: '200px', width: 'auto' }} 
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

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

export function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500)

    if (!isLoading) {
      // Basic GSAP Setup for reveal animations
      const revealElements = document.querySelectorAll('.reveal')

      revealElements.forEach((el) => {
        gsap.fromTo(el,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        )
      })
    }

    // Custom Cursor Logic
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      })
      gsap.to(followerRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.3,
      })
    }

    const onMouseEnter = () => {
      followerRef.current?.classList.add('active')
    }

    const onMouseLeave = () => {
      followerRef.current?.classList.remove('active')
    }

    window.addEventListener('mousemove', onMouseMove)
    
    const interactables = document.querySelectorAll('a, button, .sector-card, .glass-card')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter)
      el.addEventListener('mouseleave', onMouseLeave)
    })

    return () => {
      clearTimeout(timer)
      window.removeEventListener('mousemove', onMouseMove)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [isLoading])

  return (
    <div ref={mainRef} className="app-container">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {/* Custom Cursor */}
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img src="/loghi/logochiaro.png" alt="L&M Ingegneria" style={{ height: '50px' }} />
          </div>
          <div className="nav-links">
            <a href="#studio">Studio</a>
            <a href="#settori">Settori</a>
            <a href="#software">Software</a>
            <a href="#contatti">Contatti</a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero">
          <div className="container hero-container">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={!isLoading ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              className="hero-content-wrapper"
            >
              <h2 className="academic-title">Dall'Accademia alla Realtà Strutturale</h2>
              <h1 className="hero-main-title">
                L&M <span className="text-gradient">Ingegneria</span>
              </h1>
              <p className="hero-subtitle">
                Guidati dai Prof. Elio Lo Giudice e Prof. Giuseppe Mugnos,
                portiamo l'eccellenza della ricerca accademica nella progettazione
                di ponti, gallerie e grandi infrastrutture.
              </p>
              <div className="hero-actions">
                <button className="btn-primary">Scopri il nostro approccio</button>
              </div>
            </motion.div>
          </div>
          <motion.div 
            className="hero-visual-background"
            initial={{ opacity: 0 }}
            animate={!isLoading ? { opacity: 0.6 } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
          ></motion.div>
        </section>

        {/* STUDIO PRESENTATION */}
        <section id="studio" className="section-padding container">
          <div className="grid-2">
            <div className="reveal">
              <h3 className="section-tag">Lo Studio</h3>
              <h2 className="section-title">Esperienza Accademica, <br />Rigore Ingegneristico</h2>
            </div>
            <div className="reveal" style={{ animationDelay: '0.2s' }}>
              <p className="lead-text">
                L&M Ingegneria nasce dalla visione del <strong>Prof. Elio Lo Giudice</strong> e del <strong>Prof. Giuseppe Mugnos</strong>.
                La nostra missione è traslare la ricerca d'avanguardia in soluzioni strutturali concrete ed efficienti.
              </p>
              <p className="body-text">
                Operiamo nel settore dell'ingegneria civile pesante, specializzandoci nella progettazione,
                direzione lavori e collaudo di opere d'arte complexse. Ogni progetto è affrontato con un
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
                  title: 'Ponti', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 7V3.91C5.28 3.58 4.61 3.18 4 2.71V7H6ZM4 11H2V9H0V7H2V0H4V1.43C5.8 3 8.27 4 11 4C13.73 4 16.2 3 18 1.43V0H20V7H22V9H20V11H18V9H4V11ZM16 3.91V7H18V2.71C17.39 3.18 16.72 3.58 16 3.91ZM15 7V4.32C14.36 4.55 13.69 4.72 13 4.84V7H15ZM12 7V4.96L11 5L10 4.96V7H12ZM9 7V4.84C8.31 4.72 7.64 4.55 7 4.32V7H9Z" fill="currentColor"/>
                    </svg>
                  ), 
                  desc: 'Progettazione di ponti a campata singola e multipla, ponti strallati e ad arco.', 
                  img: '/images/ponte_bianco-nero.jpg' 
                },
                { 
                  title: 'Gallerie', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.5 20V8.625M22.5 8.625L18.362 9.66M22.5 8.625V3.942C22.5 3.942 21.3 2.909 19.144 1.974M1.5 20V8.625M1.5 8.625V3.942C1.5 3.942 2.7 2.91 4.856 1.974M1.5 8.625L5.638 9.66M12 0.5V4.5M12 0.5C9.061 0.5 6.634 1.203 4.856 1.974M12 0.5C14.939 0.5 17.366 1.203 19.144 1.974M12 4.5C10.4903 4.4973 9.02719 5.02262 7.864 5.985M12 4.5C13.571 4.5 15.012 5.057 16.136 5.985M4.856 1.974L7.864 5.985M19.144 1.974L16.136 5.985M0 21.5H24M5.5 20V11C5.50133 10.5393 5.54733 10.0927 5.638 9.66M5.638 9.66C5.94197 8.21809 6.72688 6.92226 7.864 5.985M18.5 20V11C18.4993 10.5393 18.4533 10.0927 18.362 9.66M18.362 9.66C18.058 8.21809 17.2731 6.92226 16.136 5.985M22.5 15.5H18.5M1.5 15.5H5.5" stroke="currentColor"/>
                    </svg>
                  ), 
                  desc: 'Analisi geotecnica e strutturale per tunnel stradali e ferroviari in contesti complessi.', 
                  img: '/images/low-angle-greyscale-concrete-bridge-sunlight-daytime.jpg' 
                },
                { 
                  title: 'Viadotti', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.5989 3.49836H24.8216V2.14384C24.8216 1.92582 24.6422 1.74898 24.4208 1.74898H20.4492C20.2278 1.74898 20.0483 1.92582 20.0483 2.14384V3.49836H15.6246V2.14404C15.6246 1.92582 15.4452 1.74918 15.2238 1.74918H11.6533V0.394859C11.6533 0.176845 11.4738 0 11.2524 0H3.29301C3.07157 0 2.89194 0.176845 2.89194 0.394859V1.74918H0.40107C0.179626 1.74918 0 1.92582 0 2.14404V23.6053C0 23.8234 0.179626 24 0.40107 24H3.63249H3.6329C3.85435 24 4.03397 23.8234 4.03397 23.6053V13.3731C4.03397 12.5327 4.36645 11.7423 4.9696 11.1479C5.57378 10.5537 6.37633 10.2264 7.22955 10.2264C8.99203 10.2264 10.4258 11.6381 10.4258 13.3731V23.6053C10.4258 23.8234 10.6054 24 10.8268 24H10.8272H16.1728H16.1734C16.3948 24 16.5742 23.8234 16.5742 23.6053V13.3731C16.5742 13.268 16.5794 13.1638 16.5897 13.0606C16.6616 12.3382 16.9821 11.6681 17.5101 11.1479C18.1141 10.5537 18.9166 10.2264 19.77 10.2264C21.5323 10.2264 22.966 11.6381 22.966 13.3731V23.6053C22.966 23.8234 23.1457 24 23.3671 24H23.3677H26.5991C26.8206 24 27 23.8234 27 23.6053V10.3586C27 10.1406 26.8206 9.96375 26.5991 9.96375C26.3777 9.96375 26.1981 10.1406 26.1981 10.3586V23.2105H25.2453V13.3731C25.2453 10.4006 22.7891 7.98236 19.77 7.98236C16.751 7.98236 14.2947 10.4006 14.2947 13.3731V23.2105H12.7051V13.3731C12.7051 10.4006 10.2488 7.98236 7.22955 7.98236C4.21051 7.98236 1.75424 10.4006 1.75424 13.3731V16.6662C1.75424 16.8842 1.93387 17.0611 2.15531 17.0611C2.37675 17.0611 2.55618 16.8842 2.55618 16.6662V13.3731C2.55618 10.836 4.65278 8.77207 7.22955 8.77207C9.80653 8.77207 11.9031 10.836 11.9031 13.3731V23.2105H11.2277V13.3731C11.2277 11.2027 9.4341 9.43686 7.22955 9.43686C7.09628 9.43686 6.96382 9.44335 6.8326 9.45593C5.91511 9.54455 5.06394 9.93921 4.4025 10.5896C4.1792 10.8096 3.98639 11.0516 3.82448 11.31C3.81521 11.3244 3.80553 11.3384 3.79667 11.353C3.79296 11.3588 3.78987 11.3649 3.78637 11.3708C3.42506 11.9709 3.23183 12.6574 3.23183 13.3731V23.2105H2.55638V18.2454C2.55638 18.0274 2.37675 17.8506 2.15531 17.8506C1.93387 17.8506 1.75424 18.0274 1.75424 18.2454V23.2105H0.801933V6.03706H13.1156V6.99673H10.9387C10.7172 6.99673 10.5378 7.17357 10.5378 7.39159C10.5378 7.6096 10.7172 7.78624 10.9387 7.78624H18.2545C18.476 7.78624 18.6554 7.6096 18.6554 7.39159C18.6554 7.17357 18.476 6.99673 18.2545 6.99673H13.9178V6.03706H16.1627C16.3841 6.03706 16.5637 5.86022 16.5637 5.6422C16.5637 5.42419 16.3841 5.24755 16.1627 5.24755H2.70016V4.28768H3.64094C3.86238 4.28768 4.04201 4.11103 4.04201 3.89302C4.04201 3.67501 3.86238 3.49816 3.64094 3.49816H0.801933V2.5387H3.29301C3.51446 2.5387 3.69388 2.36206 3.69388 2.14404V0.789718H10.8513V1.74898H5.71323C5.49179 1.74898 5.31216 1.92582 5.31216 2.14384C5.31216 2.36185 5.49179 2.5387 5.71323 2.5387H8.65647V3.89322C8.65647 4.11124 8.8361 4.28788 9.05754 4.28788C9.27898 4.28788 9.4584 4.11124 9.4584 3.89322V2.53849H11.2487C11.2499 2.53849 11.2512 2.5387 11.2524 2.5387H14.8227V3.49816H11.9839C11.7624 3.49816 11.5828 3.67501 11.5828 3.89302C11.5828 4.11103 11.7624 4.28768 11.9839 4.28768H15.22C15.2213 4.28768 15.2225 4.28788 15.2238 4.28788H26.1981V5.24755H17.7667C17.5453 5.24755 17.3657 5.42419 17.3657 5.6422C17.3657 5.86022 17.5453 6.03706 17.7667 6.03706H26.1981V8.77917C26.1981 8.99719 26.3775 9.17403 26.5989 9.17403C26.8204 9.17403 27 8.99719 27 8.77917V3.89322C27 3.67521 26.8204 3.49836 26.5989 3.49836ZM20.8503 2.53849H24.0197V3.49816H20.8503V2.53849ZM15.0967 13.3731C15.0967 10.836 17.1931 8.77207 19.77 8.77207C22.347 8.77207 24.4434 10.836 24.4434 13.3731V23.2105H23.768V13.3731C23.768 11.2027 21.9744 9.43686 19.7698 9.43686C18.7026 9.43686 17.6986 9.84612 16.9428 10.5896C16.188 11.3335 15.7723 12.322 15.7723 13.3731V23.2105H15.0967V13.3731ZM1.89803 4.28768V5.24755H0.801933V4.28768H1.89803Z" fill="currentColor"/>
                    </svg>
                  ), 
                  desc: 'Soluzioni innovative per viadotti autostradali, con focus sulla durabilità e sismica.', 
                  img: '/images/viaduct-city.jpg' 
                }
              ].map((sector, index) => (
                <div key={index} className="sector-card glass-card reveal">
                  <div className="sector-image" style={{ backgroundImage: `url(${sector.img})` }}></div>
                  <div className="sector-info">
                    <div className="sector-icon">{sector.icon}</div>
                    <h3>{sector.title}</h3>
                    <p>{sector.desc}</p>
                    <a href="#" className="read-more">Dettagli <ArrowRight size={16} /></a>
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

        {/* PARTNERS & ACADEMIC */}
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="container text-center mb-5 reveal">
            <h3 className="section-tag">Collaborazioni</h3>
            <h2 className="section-title">Partner di Rilievo</h2>
          </div>
          <div className="partners-marquee reveal">
            <div className="partners-track">
              {['Autostrade per l Italia', 'ANAS', 'FS Italiane', 'Dismat.it', 'Unipa', 'Politecnico di Milano'].map((p, i) => (
                <div key={i} className="partner-logo">
                  <span>{p}</span>
                </div>
              ))}
              {/* Duplicate for infinite effect */}
              {['Autostrade per l Italia', 'ANAS', 'FS Italiane', 'Dismat.it', 'Unipa', 'Politecnico di Milano'].map((p, i) => (
                <div key={i + 10} className="partner-logo">
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ACADEMIC COLLABORATION WITH DISMAT */}
        <section className="section-padding container">
          <div className="dismat-collaboration glass-card p-5 reveal">
            <div className="grid-2-valign">
              <div>
                <h3 className="section-tag">Partnership Accademica</h3>
                <h2 className="section-title">Focus sulla Diagnostica Materica</h2>
                <p className="body-text">
                  Collaboriamo strettamente con <strong>Dismat.it</strong>, ente indipendente
                  ed eccellenza nella diagnostica dei materiali. Questa separazione tra progettazione
                  e verifica garantisce una trasparenza totale e un rigore analitico superiore.
                </p>
                <a href="http://dismat.it" target="_blank" className="btn-secondary">
                  Visita Dismat.it <ExternalLink size={16} />
                </a>
              </div>
              <div className="text-right d-none-mobile">
                <FlaskConical size={120} color="var(--accent-teal)" opacity={0.3} />
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
                <li><MapPin size={18} /> Via dell'Ingegneria 123, Roma</li>
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
            <p>&copy; 2024 L&M Ingegneria. Tutti i diritti riservati. Realizzato da meravigliäLab.</p>
          </div>
        </footer>
      </main>

      <style>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: var(--bg-primary);
          z-index: 99999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .loader-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .loader-text {
          color: white;
          letter-spacing: 8px;
          font-size: 0.9rem;
          font-weight: 300;
        }

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
        .hero-visual-background {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          background: linear-gradient(to right, var(--bg-primary) 0%, rgba(10, 10, 10, 0) 40%),
                      url('/images/ponte_bianco-nero.jpg');
          background-size: cover;
          background-position: center;
          z-index: 1;
          opacity: 0.6;
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
        .btn-primary {
          background: var(--white);
          color: var(--bg-primary);
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
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
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .sector-card {
          overflow: hidden;
          position: relative;
        }
        .sector-image {
          height: 250px;
          background-size: cover;
          background-position: center;
          filter: grayscale(1) brightness(0.7);
          transition: var(--transition-smooth);
        }
        .sector-card:hover .sector-image {
          filter: grayscale(0.5) brightness(0.9);
          transform: scale(1.05);
        }
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
          padding-bottom: 0.5rem; /* Optical alignment with the number baseline */
        }
        
        /* SOFTWARE SECTION */
        .premium-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, #121212 100%);
        }
        .software-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .code-mockup {
          background: #1e1e1e;
          border-radius: 8px;
          border: 1px solid #333;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          overflow: hidden;
        }
        .code-header {
          background: #333;
          padding: 0.5rem 1rem;
          font-family: monospace;
          font-size: 0.8rem;
          color: #aaa;
        }
        .code-content {
          padding: 2rem;
          font-family: 'Courier New', monospace;
          color: var(--accent-teal);
          font-size: 0.9rem;
          line-height: 1.6;
        }
        .premium-badge {
          display: inline-block;
          background: rgba(35, 172, 181, 0.1);
          color: var(--accent-teal);
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          margin-bottom: 1.5rem;
        }
        .feature-list {
          margin-top: 2rem;
        }
        .feature-list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        
        /* PARTNERS MARQUEE */
        .partners-marquee {
          overflow: hidden;
          padding: 2rem 0;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .partners-track {
          display: flex;
          width: max-content;
          animation: slide 30s linear infinite;
        }
        .partner-logo {
          padding: 0 4rem;
          font-size: 1.5rem;
          font-family: var(--font-serif);
          opacity: 0.4;
          white-space: nowrap;
          transition: opacity 0.3s;
        }
        .partner-logo:hover { opacity: 1; }
        
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
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
        
        /* BUTTONS */
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.8rem 2rem;
          border-radius: 4px;
          border: 1px solid var(--accent-teal);
          color: var(--accent-teal);
          font-weight: 500;
          transition: var(--transition-smooth);
        }
        .btn-secondary:hover {
          background: var(--accent-teal);
          color: var(--bg-primary);
        }
        
        /* RESPONSIVE */
        @media (max-width: 968px) {
          .grid-2, .grid-footer, .software-container, .grid-2-valign {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .d-none-mobile { display: none; }
          .sectors-grid, .numbers-grid {
            grid-template-columns: 1fr;
          }
          .hero-main-title { font-size: 3rem; }
          .section-title { font-size: 2.2rem; }
        }
      `}</style>
    </div>
  )
}
