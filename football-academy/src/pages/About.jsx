import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Target, Eye, Flag, Quote } from 'lucide-react'
import Reveal from '../components/ui/Reveal'
import Media from '../components/ui/Media'
import Chip from '../components/ui/Chip'
import ScrollText from '../components/ui/ScrollText'
import StaffCard from '../components/shared/StaffCard'
import StatsBand from '../components/home/StatsBand'
import ContactCta from '../components/home/ContactCta'
import { images } from '../data/images'
import { founder, staff, values, pillars } from '../data/academy'

const ease = [0.76, 0, 0.24, 1]
const icons = { Target, Eye, Flag }
const groups = ['All', 'Coaching', 'Support']

function Hero() {
  const lines = ['We build', 'players', 'and people.']
  return (
    <header className="relative flex min-h-[85vh] items-end overflow-hidden px-5 pb-16 pt-36 md:px-10">
      <div className="pointer-events-none absolute -left-24 top-20 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      <svg
        viewBox="0 0 200 200"
        className="animate-spin-slow pointer-events-none absolute -right-24 top-24 h-[34rem] w-[34rem] text-accent opacity-30"
        fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 3"
      >
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="45" />
        <line x1="5" y1="100" x2="195" y2="100" />
      </svg>

      <div className="relative mx-auto w-full max-w-7xl">
        <motion.p
          className="mb-5 text-xs uppercase tracking-[0.3em] text-accent"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        >
          About Umuri Academy
        </motion.p>
        <h1 className="font-display text-[clamp(2.4rem,7vw,6rem)] uppercase leading-[0.92] tracking-tighter">
          {lines.map((l, i) => (
            <span key={l} className="block overflow-hidden pb-1.5">
              <motion.span
                className={`block ${i === 1 ? 'text-outline' : ''} ${i === 2 ? 'text-accent' : ''}`}
                initial={{ y: '110%' }} animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.5 + i * 0.12 }}
              >
                {l}
              </motion.span>
            </span>
          ))}
        </h1>
      </div>
    </header>
  )
}

export default function About() {
  const [group, setGroup] = useState('All')
  const list = [...staff]
    .sort((a, b) => a.order - b.order)
    .filter((m) => group === 'All' || m.group === group)

  return (
    <>
      <Hero />

      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-accent">Who we are</p>
          <ScrollText
            className="font-display text-[clamp(1.5rem,3.6vw,2.9rem)] leading-[1.15] tracking-tight"
            text="Umuri means light. Since the day we opened our gates, our purpose has been simple: to light the way for young footballers with great coaching, strong values and a real pathway forward."
          />
        </div>
      </section>

      <section className="relative px-5 pb-28 md:px-10">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[110px]" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-4 lg:h-[26rem] lg:flex-row">
          {pillars.map((p, i) => {
            const Icon = icons[p.icon]
            return (
              <Reveal
                key={p.title}
                delay={i * 0.08}
                className="glass group relative min-h-[16rem] overflow-hidden rounded-3xl p-8 transition-[flex] duration-500 lg:flex-1 lg:hover:flex-[1.8]"
              >
                <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-accent/10 blur-3xl transition group-hover:bg-accent/25" />
                <span className="clay grid h-12 w-12 place-items-center rounded-full">
                  <Icon size={20} />
                </span>
                <span className="absolute right-6 top-4 font-display text-6xl text-outline">0{i + 1}</span>
                <h3 className="relative mt-16 font-display text-xl uppercase tracking-tight">{p.title}</h3>
                <p className="relative mt-3 max-w-sm text-sm text-muted">{p.text}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <StatsBand />

      <section className="px-5 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 h-full w-full rounded-3xl border border-accent" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                <Media src={images.founder || founder.photo} label="Our founder" />
              </div>
              <div className="clay absolute -right-3 top-8 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest">
                Est. {founder.since}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">The founder</p>
            <Quote className="mb-4 text-accent" size={34} />
            <blockquote className="font-display text-[clamp(1.3rem,2.6vw,2.1rem)] leading-tight tracking-tight">
              {founder.quote}
            </blockquote>
            <div className="mt-8 space-y-4 font-light text-muted">
              {founder.bio.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <p className="font-display text-lg uppercase tracking-tight">{founder.name}</p>
              <p className="text-sm text-accent">{founder.role}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Our staff</p>
              <h2 className="font-display text-[clamp(1.8rem,4vw,3.2rem)] uppercase leading-none tracking-tighter">
                The people behind <span className="text-outline">the players</span>
              </h2>
            </div>
            <div className="flex gap-3">
              {groups.map((g) => (
                <Chip key={g} active={group === g} onClick={() => setGroup(g)}>{g}</Chip>
              ))}
            </div>
          </div>

          <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {list.map((m, i) => (
                <motion.div
                  key={m.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                >
                  <StaffCard member={m} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">What we stand for</p>
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05}>
              <div className="group flex flex-col gap-3 border-t border-line py-7 transition-colors hover:bg-accent/5 md:flex-row md:items-center md:justify-between md:px-4">
                <div className="flex items-baseline gap-5">
                  <span className="text-xs text-accent">0{i + 1}</span>
                  <h3 className="font-display text-[clamp(1.4rem,3vw,2.4rem)] uppercase tracking-tighter transition-transform duration-300 group-hover:translate-x-3 group-hover:text-accent">
                    {v.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm text-muted md:text-right">{v.text}</p>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-line" />
        </div>
      </section>

      <ContactCta />
    </>
  )
}