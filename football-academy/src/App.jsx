import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import Loader from './components/layout/Loader'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageTransition from './components/layout/PageTransition'
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Staff from './pages/Staff'
import Records from './pages/Records'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Styleguide from './pages/Styleguide'
import PagePlaceholder from './pages/PagePlaceholder'

export default function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 })
    let id
    const raf = (t) => { lenis.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis.destroy() }
  }, [])

  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      <div className="grain" />
      {loading && <Loader onDone={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
              <Route path="/staff" element={<PageTransition><Staff /></PageTransition>} />
              <Route path="/records" element={<PageTransition><Records /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              <Route path="/styleguide" element={<PageTransition><Styleguide /></PageTransition>} />
              <Route path="*" element={<PageTransition><PagePlaceholder /></PageTransition>} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  )
}