import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useScrapbookMotion } from '../hooks/useScrapbookMotion'
import { Contact } from '../pages/Contact'
import { Experience } from '../pages/Experience'
import { Home } from '../pages/Home'
import { Projects } from '../pages/Projects'
import { Services } from '../pages/Services'
import { Stack } from '../pages/Stack'
import { DoodleBackdrop } from './DoodleBackdrop'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useRevealOnScroll(location.pathname)
  useScrapbookMotion()

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="app-root min-h-screen overflow-hidden">
      <DoodleBackdrop />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
