import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  FlaskConical
} from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

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

export function Home2() {
  const mainRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isDrawing, setIsDrawing] = useState(true)

  useEffect(() => {
    // Timer to finish the drawing phase
    const timer = setTimeout(() => {
      setIsDrawing(false)
    }, 2000)

    const revealElements = document.querySelectorAll('.reveal')
    revealElements.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
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
      clearTimeout(timer)
      window.removeEventListener('mousemove', onMouseMove)
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter)
        el.removeEventListener('mouseleave', onMouseLeave)
      })
    }
  }, [])

  const bridgePaths = [
    "M745.632 332.767L747.747 67.7479H743.518L743.671 86.9349H691.866L692.027 67.7479H687.996L690.011 308.551L691.244 161.221H744.263L745.632 332.767ZM691.289 155.94L691.822 92.2159H743.713L744.221 155.94H691.289Z",
    "M0 308.803C0 308.803 3.349 307.738 9.63 305.741C15.922 303.78 25.151 300.893 36.967 297.462C48.774 293.998 63.1491 289.922 79.6741 285.369C87.9491 283.138 96.7551 280.764 106.038 278.262C115.339 275.828 125.13 273.306 135.371 270.78C155.83 265.622 178.079 260.381 201.639 254.948C225.228 249.648 250.125 244.116 276.014 239.045C282.483 237.763 289.007 236.471 295.578 235.169C302.161 233.929 308.791 232.68 315.461 231.424C328.789 228.835 342.343 226.57 355.985 224.168C369.64 221.844 383.43 219.656 397.268 217.422C404.2 216.382 411.145 215.341 418.097 214.298C425.049 213.259 432.003 212.182 438.98 211.267C452.933 209.425 466.864 207.424 480.796 205.843C487.756 205.009 494.702 204.176 501.627 203.346C508.553 202.518 515.479 201.866 522.366 201.121C529.256 200.4 536.118 199.682 542.947 198.968C549.788 198.378 556.594 197.792 563.359 197.209C570.126 196.646 576.844 196.001 583.527 195.517C590.213 195.055 596.85 194.597 603.432 194.142C610.017 193.718 616.537 193.168 623.011 192.858C629.484 192.538 635.896 192.22 642.239 191.906C648.583 191.628 654.853 191.236 661.057 191.061C667.26 190.884 673.389 190.708 679.435 190.535C685.48 190.367 691.443 190.202 697.316 190.039C703.192 189.999 708.979 189.96 714.67 189.921C720.36 189.893 725.954 189.865 731.444 189.838C732.817 189.833 734.183 189.828 735.543 189.823C736.902 189.847 738.255 189.871 739.602 189.895C742.295 189.943 744.961 189.991 747.599 190.037C752.875 190.131 758.042 190.223 763.092 190.313C768.141 190.439 773.075 190.402 777.879 190.69C787.488 191.132 796.603 191.551 805.169 191.945C807.31 192.043 809.417 192.14 811.488 192.235C813.559 192.341 815.591 192.521 817.589 192.657C821.583 192.947 825.434 193.228 829.134 193.497C836.532 194.035 843.327 194.529 849.464 194.976C861.716 196.151 871.323 197.256 877.879 197.928C884.432 198.624 887.927 198.996 887.927 198.996C887.927 198.996 873.908 197.98 849.375 196.201C843.234 195.91 836.435 195.588 829.034 195.237C825.334 195.062 821.483 194.879 817.489 194.69C815.492 194.605 813.46 194.477 811.39 194.423C809.32 194.38 807.214 194.336 805.074 194.292C796.517 194.115 787.411 193.926 777.811 193.728C773.014 193.578 768.087 193.682 763.048 193.654C758.008 193.656 752.851 193.658 747.585 193.66C744.952 193.661 742.292 193.662 739.605 193.663C738.262 193.664 736.912 193.664 735.555 193.665C734.199 193.695 732.835 193.725 731.466 193.755C725.989 193.882 720.409 194.011 714.733 194.143C709.058 194.264 703.287 194.387 697.427 194.512C691.57 194.752 685.624 194.995 679.596 195.241C673.569 195.493 667.459 195.747 661.274 196.006C655.09 196.261 648.839 196.735 642.515 197.095C636.193 197.475 629.801 197.858 623.348 198.246C616.894 198.605 610.392 199.206 603.829 199.681C597.267 200.187 590.651 200.697 583.987 201.21C577.325 201.745 570.627 202.443 563.883 203.057C557.14 203.692 550.356 204.331 543.538 204.973C536.729 205.704 529.885 206.439 523.014 207.176C516.146 207.937 509.24 208.606 502.332 209.45C495.425 210.296 488.498 211.145 481.556 211.996C467.662 213.606 453.768 215.65 439.851 217.51C432.887 218.404 425.946 219.46 419.006 220.48C412.067 221.502 405.134 222.523 398.215 223.542C384.401 225.735 370.634 227.883 357 230.166C329.748 234.825 302.927 239.434 277.079 244.481C251.211 249.42 226.258 254.479 202.623 259.422C179.016 264.486 156.714 269.379 136.202 274.218C115.681 279.017 96.897 283.541 80.264 287.63C63.644 291.763 49.178 295.476 37.295 298.64C25.413 301.813 16.0721 304.294 9.72705 306.069C3.38405 307.851 0 308.803 0 308.803Z",
    "M0 331.506C0 331.506 3.34609 330.43 9.62109 328.411C15.9081 326.431 25.1241 323.504 36.9341 320.047C48.7331 316.554 63.099 312.44 79.615 307.846C87.886 305.594 96.6861 303.198 105.965 300.672C115.261 298.215 125.043 295.656 135.279 293.098C155.723 287.867 177.958 282.549 201.528 277.138C225.12 271.832 250.021 266.302 275.909 261.203C282.378 259.916 288.902 258.618 295.473 257.311C302.056 256.066 308.686 254.811 315.357 253.55C328.685 250.949 342.241 248.674 355.885 246.27C369.543 243.942 383.335 241.75 397.175 239.512C404.108 238.471 411.054 237.427 418.007 236.383C424.961 235.341 431.916 234.262 438.895 233.346C452.851 231.505 466.786 229.509 480.721 227.931C487.682 227.098 494.63 226.267 501.558 225.439C508.486 224.612 515.413 223.962 522.302 223.218C529.193 222.499 536.058 221.782 542.888 221.07C549.731 220.486 556.539 219.904 563.307 219.326C570.076 218.769 576.797 218.128 583.482 217.65C590.17 217.193 596.808 216.74 603.393 216.29C609.98 215.871 616.501 215.326 622.978 215.021C629.453 214.707 635.867 214.396 642.212 214.089C648.559 213.819 654.83 213.435 661.037 213.269C667.242 213.1 673.372 212.932 679.42 212.767C685.467 212.607 691.431 212.45 697.306 212.294C703.184 212.263 708.973 212.232 714.665 212.202C720.356 212.184 725.951 212.167 731.443 212.15C732.816 212.147 734.182 212.145 735.542 212.142C736.902 212.168 738.255 212.195 739.602 212.221C742.295 212.274 744.962 212.326 747.601 212.378C752.878 212.482 758.046 212.583 763.096 212.683C768.146 212.818 773.081 212.789 777.886 213.09C787.496 213.556 796.611 213.998 805.178 214.414C807.319 214.518 809.426 214.62 811.497 214.721C813.567 214.832 815.6 215.017 817.598 215.158C821.592 215.459 825.443 215.749 829.143 216.027C836.54 216.584 843.335 217.095 849.471 217.557C861.722 218.759 871.326 219.906 877.88 220.597C884.43 221.316 887.924 221.699 887.924 221.699C887.924 221.699 873.902 220.727 849.363 219.026C843.222 218.75 836.423 218.445 829.02 218.113C825.32 217.947 821.47 217.774 817.475 217.595C815.477 217.515 813.446 217.392 811.376 217.344C809.306 217.306 807.2 217.268 805.06 217.229C796.503 217.074 787.399 216.908 777.8 216.734C773.003 216.598 768.078 216.708 763.039 216.69C758 216.701 752.845 216.713 747.579 216.724C744.947 216.73 742.288 216.736 739.601 216.742C738.258 216.745 736.908 216.748 735.552 216.751C734.196 216.783 732.833 216.816 731.464 216.849C725.988 216.986 720.41 217.125 714.736 217.267C709.063 217.396 703.293 217.528 697.435 217.661C691.58 217.908 685.635 218.159 679.609 218.414C673.583 218.673 667.475 218.936 661.292 219.203C655.11 219.466 648.86 219.948 642.539 220.317C636.218 220.703 629.829 221.094 623.378 221.488C616.926 221.853 610.427 222.459 603.865 222.939C597.306 223.45 590.691 223.965 584.03 224.484C577.37 225.024 570.675 225.727 563.932 226.346C557.191 226.986 550.409 227.63 543.594 228.278C536.786 229.011 529.944 229.747 523.075 230.486C516.208 231.249 509.305 231.919 502.399 232.765C495.494 233.613 488.568 234.463 481.629 235.316C467.74 236.929 453.849 238.977 439.935 240.839C432.973 241.731 426.032 242.785 419.094 243.803C412.156 244.823 405.224 245.842 398.307 246.859C384.495 249.047 370.73 251.192 357.098 253.471C329.852 258.126 303.03 262.699 277.183 267.73C251.314 272.641 226.366 277.701 202.734 282.639C190.94 285.204 179.445 287.609 168.363 290.1C162.817 291.326 157.365 292.532 152.014 293.715C146.671 294.936 141.428 296.134 136.292 297.308C115.756 302.035 96.963 306.514 80.321 310.562C63.691 314.653 49.217 318.329 37.326 321.463C25.4381 324.61 16.085 327.051 9.73401 328.807C3.38701 330.566 0 331.506 0 331.506Z",
    "M105.764 300.672L130.883 263.484L156.104 226.368L181.326 189.252L206.658 152.213L257.388 78.1809L282.753 41.1649L308.209 4.21094L311.11 0L313.073 4.77893C317.782 16.2429 323.156 27.6119 328.761 38.7679C334.395 49.9319 340.365 60.927 346.691 71.71C359.28 93.304 373.212 114.133 388.896 133.532C396.737 143.226 405.018 152.556 413.816 161.352C422.619 170.137 431.923 178.409 441.806 185.894C451.691 193.369 462.173 200.04 473.238 205.511C484.295 210.982 495.943 215.234 507.952 217.861C519.954 220.502 532.303 221.475 544.566 220.726C556.833 220.005 568.989 217.547 580.714 213.718L585.096 212.225L587.287 211.479C588.012 211.213 588.718 210.896 589.434 210.606C592.285 209.414 595.153 208.259 597.993 207.038L606.338 202.961C607.746 202.315 609.091 201.543 610.438 200.776L614.49 198.493L618.542 196.208L622.466 193.699C625.064 192 627.738 190.416 630.277 188.622L637.862 183.193L639.759 181.836C640.384 181.373 640.983 180.874 641.595 180.395L645.261 177.502C655.137 169.909 664.285 161.391 673.319 152.778L679.872 146.08L683.148 142.729C684.251 141.622 685.329 140.492 686.364 139.319L692.663 132.369C694.767 130.056 696.882 127.752 698.868 125.332L704.924 118.16L707.953 114.574C708.946 113.364 709.9 112.123 710.875 110.899L716.698 103.529C718.646 101.078 720.593 98.6249 722.429 96.0859C726.136 91.0359 729.951 86.063 733.572 80.948L744.342 65.532L745.823 63.4139L747.197 65.552C754.659 77.164 762.092 88.7959 769.481 100.456L791.695 135.407L813.908 170.358L836.016 205.377L812.998 170.95L790.085 136.454L767.172 101.958C759.519 90.47 751.91 78.9519 744.33 67.4159L747.184 67.4359L736.556 83.054C732.98 88.238 729.207 93.2859 725.541 98.4099C723.726 100.985 721.797 103.478 719.867 105.969L714.096 113.46C713.129 114.705 712.184 115.966 711.199 117.197L708.192 120.848L702.176 128.151C700.205 130.614 698.1 132.966 696.005 135.327L689.733 142.421C688.703 143.617 687.627 144.773 686.527 145.905L683.257 149.334L676.712 156.189C667.674 165.024 658.505 173.772 648.545 181.63C643.699 185.72 638.479 189.342 633.35 193.08C630.769 194.927 628.042 196.57 625.394 198.325L621.394 200.917L617.252 203.289L613.108 205.658C611.73 206.453 610.353 207.253 608.909 207.929L600.344 212.179C597.423 213.459 594.469 214.672 591.531 215.919C590.793 216.222 590.066 216.554 589.318 216.833L587.054 217.621L582.526 219.196C570.402 223.241 557.753 225.889 544.938 226.723C532.126 227.563 519.191 226.549 506.651 223.823C494.103 221.106 481.968 216.699 470.5 211.054C459.023 205.409 448.201 198.547 438.031 190.891C427.853 183.236 418.329 174.771 409.379 165.776C400.423 156.783 392.019 147.274 384.078 137.414C368.198 117.683 354.145 96.584 341.481 74.735C335.159 63.801 329.201 52.663 323.584 41.355C317.983 30.021 312.673 18.6209 307.906 6.80591L312.77 7.3739L287.044 44.1399L261.228 80.8429L209.596 154.249L183.747 190.929L157.787 227.532L131.828 264.136L105.764 300.672Z",
    "M24.373 301.197L48.8511 263.943L73.433 226.76L98.015 189.577L122.723 152.479L172.184 78.313L196.915 41.23L221.759 4.224L224.431 0.244995L226.611 4.5769C232.16 15.6019 238.429 26.4749 244.96 37.0719C251.487 47.6989 258.455 58.052 265.659 68.226C280.167 88.499 296.035 107.818 313.555 125.489C322.316 134.318 331.493 142.726 341.125 150.561C350.746 158.404 360.811 165.694 371.356 172.19C381.897 178.687 392.914 184.397 404.353 189.057C415.787 193.718 427.646 197.318 439.753 199.621C451.858 201.92 464.197 202.952 476.513 202.618C488.829 202.285 501.112 200.617 513.124 197.733C525.119 194.758 536.811 190.598 548.14 185.593L556.566 181.666L564.804 177.339C566.168 176.601 567.567 175.926 568.903 175.136L572.909 172.76C575.565 171.15 578.288 169.65 580.89 167.95C586.06 164.499 591.344 161.21 596.307 157.445C598.813 155.6 601.368 153.819 603.836 151.921L611.15 146.105L614.809 143.197L618.352 140.146L625.43 134.031C626.625 133.028 627.771 131.971 628.903 130.898L632.323 127.704L639.164 121.314C643.556 116.877 648.005 112.493 652.35 108.007C656.583 103.413 660.896 98.889 665.067 94.236C669.157 89.509 673.305 84.83 677.349 80.062L689.248 65.552L690.436 64.1029L691.597 65.51L734.086 116.967L755.325 142.7L776.478 168.505L754.612 143.3L732.832 118.023L689.282 67.4609L691.631 67.4189L679.901 82.178C675.897 87.023 671.786 91.7809 667.732 96.5879C663.594 101.323 659.311 105.933 655.107 110.613C650.787 115.188 646.361 119.664 641.988 124.193L635.167 130.729L631.755 133.997C630.625 135.095 629.482 136.177 628.288 137.206L621.213 143.478L617.669 146.608L614.004 149.599L606.671 155.582C604.195 157.537 601.627 159.377 599.109 161.281C594.123 165.161 588.797 168.576 583.583 172.15C580.959 173.913 578.204 175.478 575.52 177.152L571.468 179.624C570.117 180.447 568.697 181.155 567.315 181.926C564.527 183.427 561.763 184.977 558.952 186.438L550.357 190.513C538.79 195.715 526.81 200.068 514.472 203.212C502.116 206.266 489.433 208.076 476.69 208.504C463.947 208.937 451.149 207.957 438.621 205.583C426.089 203.227 413.829 199.531 402.037 194.755C390.24 189.979 378.907 184.133 368.09 177.499C346.432 164.223 326.885 147.835 309.135 129.865C291.375 111.874 275.352 92.2739 260.723 71.7379C253.436 61.4469 246.508 50.906 239.965 40.13C233.415 29.337 227.207 18.427 221.555 7.01196L226.406 7.36499L201.323 44.209L176.126 80.976L125.732 154.511L100.512 191.264L75.167 227.931L49.821 264.598L24.373 301.197Z",
    "M313.695 5.79492H307.791L308.031 41.194H226.979L227.23 5.79492H220.924L224.077 450.065L226.007 178.249H308.959L311.1 494.742L314.397 7.47498L313.695 5.79492ZM226.075 168.506L226.909 50.938H308.097L308.892 168.506H226.075Z"
  ]

  return (
    <div ref={mainRef} className="app-container">
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
      
      <motion.nav 
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={!isDrawing ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
      </motion.nav>

      <main>
        <section className="hero">
          <div className="container hero-container">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={!isDrawing ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
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

          <div className="hero-drawing-background">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 888 495" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="xMidYMid meet"
              className="hero-svg-drawing-large"
            >
              <g transform="scale(-1, 1) translate(-888, 0)">
                {bridgePaths.map((d, i) => (
                  <motion.path
                    key={i}
                    d={d}
                    stroke="white"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: 1, 
                      opacity: 0.6,
                      transition: { 
                        pathLength: { duration: 2, delay: 0.2 + (i * 0.15), ease: "easeInOut" },
                        opacity: { duration: 0.8, delay: 0.2 + (i * 0.15) }
                      }
                    }}
                  />
                ))}
              </g>
            </svg>
          </div>
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
                  title: 'Ponti', 
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 7V3.91C5.28 3.58 4.61 3.18 4 2.71V7H6ZM4 11H2V9H0V7H2V0H4V1.43C5.8 3 8.27 4 11 4C13.73 4 16.2 3 18 1.43V0H20V7H22V9H20V11H18V9H4V11ZM16 3.91V7H18V2.71C17.39 3.18 16.72 3.58 16 3.91ZM15 7V4.32C14.36 4.55 13.69 4.72 13 4.84V7H15ZM12 7V4.32C14.36 4.55 13.69 4.72 13 4.84V7H15ZM12 7V4.96L11 5L10 4.96V7H12ZM9 7V4.84C8.31 4.72 7.64 4.55 7 4.32V7H9Z" fill="currentColor"/>
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
                      <path d="M26.5989 3.49836H24.8216V2.14384C24.8216 1.92582 24.6422 1.74898 24.4208 1.74898H20.4492C20.2278 1.74898 20.0483 1.92582 20.0483 2.14384V3.49836H15.6246V2.14404C15.6246 1.92582 15.4452 1.74918 15.2238 1.74918H11.6533V0.394859C11.6533 0.176845 11.4738 0 11.2524 0H3.29301C3.07157 0 2.89194 0.176845 2.89194 0.394859V1.74918H0.40107C0.179626 1.74918 0 1.92582 0 2.14404V23.6053C0 23.8234 0.179626 24 0.40107 24H3.63249H3.6329C3.85435 24 4.03397 23.8234 4.03397 23.6053V13.3731C4.03397 12.5327 4.36645 11.7423 4.9696 11.1479C5.57378 10.5537 6.37633 10.2264 7.22955 10.2264C8.99203 10.2264 10.4258 11.6381 10.4258 13.3731V23.6053C10.4258 23.8234 10.6054 24 10.8268 24H10.8272H16.1728H16.1734C16.3948 24 16.5742 23.8234 16.5742 23.6053V13.3731C16.5742 13.268 16.5794 13.1638 16.5897 13.0606C16.6616 12.3382 16.9821 11.6681 17.5101 11.1479C18.1141 10.5537 18.9166 10.2264 19.77 10.2264C21.5323 10.2264 22.966 11.6381 22.966 13.3731V23.6053C22.966 23.8234 23.1457 24 23.3671 24H23.3677H26.5991C26.8206 24 27 23.8234 27 23.6053V10.3586C27 10.1406 26.8206 9.96375 26.5991 9.96375C26.3777 9.96375 26.1981 10.1406 26.1981 10.3586V23.2105H25.2453V13.3731C25.2453 10.4006 22.7891 7.98236 19.77 7.98236C16.751 7.98236 14.2947 10.4006 14.2947 13.3731V23.2105H12.7051V13.3731C12.7051 10.4006 10.2488 7.98236 7.22955 7.98236C4.21051 7.98236 1.75424 10.4006 1.75424 13.3731V16.6662C1.75424 16.8842 1.93387 17.0611 2.15531 17.0611C2.37675 17.0611 2.55618 16.8842 2.55618 16.6662V13.3731C2.55618 10.836 4.65278 8.77207 7.22955 8.77207C9.80653 8.77207 11.9031 10.836 11.9031 13.3731V23.2105H11.2277V13.3731C11.2277 11.2027 9.4341 9.43686 7.22955 9.43686C7.09628 9.43686 6.96382 9.44335 6.8326 9.45593C5.91511 9.54455 5.06394 9.93921 4.4025 10.5896C4.1792 10.8096 3.98639 11.0516 3.82448 11.31C3.81521 11.3244 3.80553 11.3384 3.79667 11.353C3.79296 11.3588 3.78987 11.3649 3.78637 11.3708C3.42506 11.9709 3.23183 12.6574 3.23183 13.3731V23.2105H2.55638V18.2454C2.55638 18.0274 2.37675 17.8506 2.15531 17.8506C1.93387 17.8506 1.75424 18.0274 1.75424 18.2454V23.2105H0.801933V6.03706H13.1156V6.99673H10.9387C10.7172 6.99673 10.5378 7.17357 10.5378 7.39159C10.5378 7.6096 10.7172 7.78624 10.9387 7.78624H18.2545C18.476 7.78624 18.6554 7.6096 18.6554 7.39159C18.6554 7.17357 18.476 6.99673 18.2545 6.99673H13.9178V6.03706H16.1627C16.3841 6.03706 16.5637 5.86022 16.5637 5.6422C16.5637 5.42419 16.3841 5.24755 16.1627 5.24755H2.70016V4.28768H3.64094C3.86238 4.28768 4.04201 4.11103 4.04201 3.89302C4.04201 3.67501 3.86238 3.49816 3.64094 3.49816H0.801933V2.5387H3.29301C3.51446 2.5387 3.69388 2.36206 3.69388 2.14404V0.789718H10.8513V1.74898H5.71323C5.49179 1.74898 5.31216 1.92582 5.31216 2.14384C5.31216 2.36185 5.49179 2.5387 5.71323 2.5387H8.65647V3.89322C8.65647 4.11124 8.8361 4.28788 9.05754 4.28788C9.27898 4.28788 9.4584 4.11124 9.4584 3.89322V2.53849H11.2487C11.2499 2.53849 11.2512 2.5387 11.2524 2.5387H14.8227V3.49816H11.9839C11.7624 3.49816 11.5828 3.67501 11.5828 3.89302C11.5828 4.11103 11.7624 4.28768 11.9839 4.28768H15.22C15.2213 4.28768 15.2225 4.28788 15.2238 4.28788H26.1981V5.24755H17.7667C17.5453 5.24755 17.3657 5.42419 17.3657 5.6422C17.3657 5.86022 17.5453 6.03706 17.7667 6.03706H26.1981V8.77917C26.1981 8.99719 26.3775 9.17403 26.5989 9.17403C26.8204 9.17403 27 8.99719 27 8.77917V3.89322C27 3.67521 26.8204 3.49836 26.5989 3.49836ZM20.8503 2.53849H24.0197V3.49816H20.8503V2.53849ZM15.0967 13.3731C15.0967 10.836 17.1931 8.77207 19.77 8.77207C22.347 8.77207 24.4434 10.836 24.4434 13.3731V23.2105H23.768V13.3731C23.768 11.2027 21.9744 9.43686 19.7698 9.43686C18.7026 9.43686 17.6986 9.84612 16.9428 10.5896C16.188 11.3335 15.7723 12.322 15.7723 13.3731V23.2105H15.7723 15.0967V13.3731ZM1.89803 4.28768V5.24755H0.801933V4.28768H1.89803Z" fill="currentColor"/>
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
        .navbar { height: var(--header-height); display: flex; align-items: center; position: fixed; top: 0; width: 100%; z-index: 1000; background: rgba(10, 10, 10, 0.8); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .nav-content { display: flex; justify-content: space-between; align-items: center; width: 100%; }
        .nav-links { display: flex; gap: 2.5rem; font-size: 0.9rem; font-weight: 500; text-transform: uppercase; letter-spacing: 1px; }
        .nav-links a { position: relative; padding: 0.5rem 0; transition: color 0.3s ease; }
        .nav-links a::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background-color: var(--accent-teal); transform: scaleX(0); transform-origin: right; transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .nav-links a:hover { color: var(--accent-teal); }
        .nav-links a:hover::after { transform: scaleX(1); transform-origin: left; }
        .hero { height: 100vh; width: 100%; display: flex; align-items: center; position: relative; overflow: hidden; background-color: var(--bg-primary); }
        .hero-container { position: relative; z-index: 10; display: flex; justify-content: flex-start; width: 100%; }
        .hero-content-wrapper { 
          max-width: 800px; 
          text-align: left; 
          z-index: 10; 
          padding: 4rem 10rem 4rem 2rem;
          margin-top: 10rem;
          background: linear-gradient(to right, rgba(10, 10, 10, 0.9) 0%, rgba(10, 10, 10, 0.7) 50%, transparent 100%);
        }
        .hero-drawing-background { 
          position: absolute; 
          top: var(--header-height); 
          right: 0; 
          width: 75%; 
          height: calc(100% - var(--header-height)); 
          z-index: 1; 
          display: flex; 
          align-items: center; 
          justify-content: flex-end;
          opacity: 0.8;
        }
        .hero-svg-drawing-large { 
          width: 100%; 
          height: auto; 
          max-height: 90%; 
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.05)); 
        }
        .academic-title { font-size: 1.2rem; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 4px; margin-bottom: 1rem; font-family: var(--font-sans); font-weight: 400; }
        .hero-main-title { font-size: clamp(3.5rem, 8vw, 5.5rem); margin-bottom: 2rem; }
        .hero-subtitle { font-size: 1.25rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 3rem; max-width: 600px; }
        .btn-primary { background: var(--white); color: var(--bg-primary); padding: 1rem 2.5rem; border-radius: 50px; font-weight: 600; border: none; cursor: pointer; transition: var(--transition-smooth); }
        .btn-primary:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 255, 255, 0.2); }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .grid-2-valign { display: grid; grid-template-columns: 2fr 1fr; gap: 4rem; align-items: center; }
        .grid-footer { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 4rem; padding-bottom: 4rem; }
        .section-tag { font-family: var(--font-sans); font-weight: 500; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 3px; font-size: 0.85rem; margin-bottom: 1rem; }
        .section-title { font-size: 3rem; margin-bottom: 2rem; }
        .lead-text { font-size: 1.4rem; line-height: 1.5; margin-bottom: 1.5rem; color: var(--white); }
        .body-text { color: var(--text-secondary); line-height: 1.8; font-size: 1.1rem; margin-bottom: 2rem; }
        .text-center { text-align: center; }
        .text-right { text-align: right; }
        .mb-5 { margin-bottom: 4rem; }
        .p-5 { padding: 4rem; }
        .sectors-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
        .sector-card { overflow: hidden; position: relative; }
        .sector-image { height: 250px; background-size: cover; background-position: center; filter: grayscale(1) brightness(0.7); transition: var(--transition-smooth); }
        .sector-card:hover .sector-image { filter: grayscale(0.5) brightness(0.9); transform: scale(1.05); }
        .sector-info { padding: 2rem; }
        .sector-icon { color: var(--accent-teal); margin-bottom: 1.5rem; }
        .sector-info h3 { font-size: 1.8rem; margin-bottom: 1rem; }
        .read-more { display: flex; align-items: center; gap: 0.5rem; font-weight: 500; margin-top: 1.5rem; color: var(--accent-teal); }
        .premium-numbers-section { background: linear-gradient(to bottom, var(--bg-primary), #0f0f0f); border-top: 1px solid rgba(255, 255, 255, 0.03); border-bottom: 1px solid rgba(255, 255, 255, 0.03); }
        .numbers-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4rem; text-align: center; }
        .number-item { display: flex; align-items: flex-end; justify-content: center; gap: 1.5rem; padding: 1rem; transition: transform 0.3s ease; }
        .number-item:hover { transform: translateY(-5px); }
        .number-col-1 { display: flex; align-items: baseline; }
        .number-value { font-size: 5rem; font-weight: 700; font-family: var(--font-serif); line-height: 0.85; }
        .number-suffix { font-size: 3rem; font-weight: 700; line-height: 1; }
        .number-col-2 { text-align: left; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; color: var(--white); line-height: 1.3; max-width: 120px; padding-bottom: 0.5rem; }
        .premium-section { background: linear-gradient(180deg, var(--bg-primary) 0%, #121212 100%); }
        .software-container { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .code-mockup { background: #1e1e1e; border-radius: 8px; border: 1px solid #333; box-shadow: 0 30px 60px rgba(0,0,0,0.5); overflow: hidden; }
        .code-header { background: #333; padding: 0.5rem 1rem; font-family: monospace; font-size: 0.8rem; color: #aaa; }
        .code-content { padding: 2rem; font-family: 'Courier New', monospace; color: var(--accent-teal); font-size: 0.9rem; line-height: 1.6; }
        .premium-badge { display: inline-block; background: rgba(35, 172, 181, 0.1); color: var(--accent-teal); padding: 4px 12px; border-radius: 4px; font-size: 0.75rem; font-weight: 700; letter-spacing: 1px; margin-bottom: 1.5rem; }
        .feature-list { margin-top: 2rem; }
        .feature-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-primary); }
        .partners-marquee { overflow: hidden; padding: 2rem 0; mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); }
        .partners-track { display: flex; width: max-content; animation: slide 30s linear infinite; }
        .partner-logo { padding: 0 4rem; font-size: 1.5rem; font-family: var(--font-serif); opacity: 0.4; white-space: nowrap; transition: opacity 0.3s; }
        .partner-logo:hover { opacity: 1; }
        @keyframes slide { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .footer { border-top: 1px solid rgba(255, 255, 255, 0.05); }
        .footer-logo { font-size: 1.8rem; margin-bottom: 1.5rem; }
        .footer-desc { color: var(--text-secondary); line-height: 1.6; margin-bottom: 2rem; }
        .footer-title { margin-bottom: 1.5rem; text-transform: uppercase; letter-spacing: 1px; font-size: 1rem; }
        .footer-contact-list li { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; color: var(--text-secondary); }
        .social-links { display: flex; gap: 1.5rem; }
        .social-links a { color: var(--text-secondary); font-size: 0.9rem; }
        .social-links a:hover { color: var(--white); }
        .footer-bottom { padding-top: 4rem; border-top: 1px solid rgba(255, 255, 255, 0.05); text-align: center; color: #555; font-size: 0.85rem; }
        .btn-secondary { display: inline-flex; align-items: center; gap: 0.75rem; padding: 0.8rem 2rem; border-radius: 4px; border: 1px solid var(--accent-teal); color: var(--accent-teal); font-weight: 500; transition: var(--transition-smooth); }
        .btn-secondary:hover { background: var(--accent-teal); color: var(--bg-primary); }
        @media (max-width: 968px) { .grid-2, .grid-footer, .software-container, .grid-2-valign { grid-template-columns: 1fr; gap: 3rem; } .d-none-mobile { display: none; } .sectors-grid, .numbers-grid { grid-template-columns: 1fr; } .hero-main-title { font-size: 3rem; } .section-title { font-size: 2.2rem; } .hero-drawing-background { display: none; } }
      `}</style>
    </div>
  )
}
