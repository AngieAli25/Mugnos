import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Home2 } from './pages/Home2'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  )
}

export default App
