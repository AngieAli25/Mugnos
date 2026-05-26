import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Studio } from './pages/Studio'
import { Settori } from './pages/Settori'
import { Progetti } from './pages/Progetti'
import { ProgettoDetail } from './pages/ProgettoDetail'
import { Pubblicazioni } from './pages/Pubblicazioni'
import { Eventi } from './pages/Eventi'
import { EventoDetail } from './pages/EventoDetail'
import { Contatti } from './pages/Contatti'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/settori" element={<Settori />} />
      <Route path="/progetti" element={<Progetti />} />
      <Route path="/progetti/:id" element={<ProgettoDetail />} />
      <Route path="/pubblicazioni" element={<Pubblicazioni />} />
      <Route path="/eventi" element={<Eventi />} />
      <Route path="/eventi/:id" element={<EventoDetail />} />
      <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </>
  )
}

export default App
