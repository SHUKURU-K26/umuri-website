import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'
import MenuOverlay from './MenuOverlay'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > last && y > 120)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-[80] px-3 pt-3 md:px-6 md:pt-5"
        animate={{ y: hidden && !open ? '-130%' : 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full py-2 pl-5 pr-2 md:pl-7">
          <Link to="/" className="flex items-center gap-2 font-display text-lg tracking-tight">
            <span className="h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_16px_var(--accent)]" />
            UMURI<span className="text-muted">/Academy</span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button to="/contact" className="hidden !px-5 !py-2.5 sm:inline-flex">Get in touch</Button>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="soft flex h-11 items-center gap-3 rounded-full pl-5 pr-4 text-sm font-medium"
            >
              <span className="hidden sm:block">{open ? 'Close' : 'Menu'}</span>
              <span className="relative block h-3 w-6">
                <motion.span className="absolute left-0 h-0.5 w-6 bg-current" animate={{ top: open ? 5 : 0, rotate: open ? 45 : 0 }} />
                <motion.span className="absolute left-0 h-0.5 w-6 bg-current" animate={{ top: open ? 5 : 10, rotate: open ? -45 : 0 }} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}