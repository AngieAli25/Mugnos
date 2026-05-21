import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Studio } from './pages/Studio'
import { Settori } from './pages/Settori'
import { Progetti } from './pages/Progetti'
import { ProgettoDetail } from './pages/ProgettoDetail'
import { Pubblicazioni } from './pages/Pubblicazioni'
import { Eventi } from './pages/Eventi'
import { EventoDetail } from './pages/EventoDetail'
import { Contatti } from './pages/Contatti'

function App() {
  return (
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
  )
}

export default App
