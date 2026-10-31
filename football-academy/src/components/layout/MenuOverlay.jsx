import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { navLinks } from '../../data/nav'

const ease = [0.76, 0, 0.24, 1]
const origin = '92% 6%'

export default function MenuOverlay({ open, onClose }) {
  const [hovered, setHovered] = useState(null)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] overflow-y-auto bg-bg"
          initial={{ clipPath: `circle(0px at ${origin})` }}
          animate={{ clipPath: `circle(2600px at ${origin})` }}
          exit={{ clipPath: `circle(0px at ${origin})` }}
          transition={{ duration: 0.8, ease }}
        >
          <div className="pointer-events-none absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]" />

          <div className="relative mx-auto flex min-h-full max-w-7xl flex-col justify-between gap-10 px-5 pb-10 pt-32 md:flex-row md:px-10">
            <nav className="flex flex-col" onMouseLeave={() => setHovered(null)}>
              {navLinks.map((link, i) => (
                <div key={link.to} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.35 + i * 0.06 }}
                  >
                    <Link
                      to={link.to}
                      onClick={onClose}
                      onMouseEnter={() => setHovered(i)}
                      className="group flex items-baseline gap-4 py-1 font-display text-[clamp(1.6rem,4.2vw,3.2rem)] uppercase leading-[1.05] tracking-tighter transition-all duration-300"
                      style={{ opacity: hovered === null || hovered === i ? 1 : 0.25 }}
                    >
                      <span className="text-xs font-medium tracking-normal text-accent">0{i + 1}</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-4 group-hover:text-accent">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.aside
              className="glass flex flex-col justify-end gap-6 rounded-3xl p-6 text-sm text-muted md:w-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-accent">Visit</p>
                <p>Kigali, Rwanda</p>
              </div>
              <div>
                <p className="mb-1 text-xs uppercase tracking-widest text-accent">Contact</p>
                <p>info@umuriacademy.com</p>
                <p>+250 000 000 000</p>
              </div>
              <Link to="/contact" onClick={onClose} className="inline-flex items-center gap-2 font-semibold text-fg hover:text-accent">
                Find us on the map <ArrowUpRight size={16} />
              </Link>
            </motion.aside>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}