import { motion, useMotionValue, useMotionTemplate, useSpring } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import Button from '../ui/Button'
import { images } from '../../data/images'

const ease = [0.76, 0, 0.24, 1]
const lines = ['Where talent', 'finds its', 'light.']

const draw = (delay) => ({
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: { duration: 2.2, delay, ease: 'easeInOut' },
})

export default function Hero() {
  const px = useMotionValue(600)
  const py = useMotionValue(300)
  const dx = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 })
  const dy = useSpring(useMotionValue(0), { stiffness: 50, damping: 20 })
  const spotlight = useMotionTemplate`radial-gradient(480px circle at ${px}px ${py}px, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%)`

  const onMove = (e) => {
    px.set(e.clientX)
    py.set(e.clientY)
    dx.set((e.clientX / window.innerWidth - 0.5) * 40)
    dy.set((e.clientY / window.innerHeight - 0.5) * 40)
  }

  return (
    <section onMouseMove={onMove} className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-32 md:px-10">
      {images.hero && <img src={images.hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
      <motion.div className="pointer-events-none absolute inset-0" style={{ background: spotlight }} />

      <motion.div
        className="absolute -right-32 top-10 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-[130px]"
        animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.svg
        style={{ x: dx, y: dy }}
        className="absolute right-[-15%] top-1/2 h-[115%] -translate-y-1/2 text-accent opacity-30 md:right-0 md:opacity-50"
        viewBox="0 0 600 800" fill="none" stroke="currentColor" strokeWidth="1.5"
      >
        <motion.circle cx="300" cy="400" r="190" {...draw(0.4)} />
        <motion.circle cx="300" cy="400" r="6" fill="currentColor" {...draw(0.8)} />
        <motion.line x1="0" y1="400" x2="600" y2="400" {...draw(0.6)} />
        <motion.path d="M110 40 A190 190 0 0 0 490 40" {...draw(1)} />
        <motion.path d="M110 760 A190 190 0 0 1 490 760" {...draw(1)} />
        <motion.rect x="160" y="0" width="280" height="130" {...draw(1.2)} />
        <motion.rect x="160" y="670" width="280" height="130" {...draw(1.2)} />
      </motion.svg>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <motion.p
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.25em] text-muted"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          Football Academy · Kigali
        </motion.p>

        <h1 className="font-display text-[clamp(2.4rem,7.5vw,6.5rem)] uppercase leading-[0.92] tracking-tighter">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden pb-1.5">
              <motion.span
                className={`block ${i === 1 ? 'text-outline' : ''} ${i === 2 ? 'text-accent' : ''}`}
                initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: 0.4 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-8 flex max-w-lg flex-col gap-7"
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-base font-light text-muted md:text-lg">
            Umuri Academy shapes young footballers on and off the pitch, with elite coaching, discipline and a
            clear pathway to the next level.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button to="/about">Discover our story <ArrowRight size={16} /></Button>
            <Button to="/contact" variant="glass">Find us</Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="glass absolute bottom-10 right-6 hidden h-36 w-36 rounded-full p-3 md:block lg:right-14"
        initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
      >
        <svg viewBox="0 0 200 200" className="animate-spin-slow h-full w-full text-fg">
          <defs>
            <path id="badge" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
          </defs>
          <text fontSize="14" letterSpacing="5" fill="currentColor" className="font-display uppercase">
            <textPath href="#badge">Umuri Academy • Train • Compete • Win •</textPath>
          </text>
        </svg>
        <ArrowDown className="absolute inset-0 m-auto text-accent" size={22} />
      </motion.div>
    </section>
  )
}