import { motion } from 'framer-motion'

const ease = [0.76, 0, 0.24, 1]

export default function PageHeader({ eyebrow, title, text }) {
  return (
    <header className="relative overflow-hidden px-5 pb-16 pt-36 md:px-10 md:pt-44">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/20 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.p
          className="mb-4 text-xs uppercase tracking-[0.3em] text-accent"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        >
          {eyebrow}
        </motion.p>
        <h1 className="overflow-hidden pb-2 font-display text-[clamp(2rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-tighter">
          <motion.span
            className="block"
            initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 0.9, ease, delay: 0.5 }}
          >
            {title}
          </motion.span>
        </h1>
        {text && (
          <motion.p
            className="mt-6 max-w-2xl text-muted"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          >
            {text}
          </motion.p>
        )}
      </div>
    </header>
  )
}