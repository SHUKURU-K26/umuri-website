import { MapPin, Trophy, Users } from 'lucide-react'
import Reveal from '../ui/Reveal'
import Media from '../ui/Media'
import Counter from '../ui/Counter'
import { images } from '../../data/images'
import { academy, stats } from '../../data/academy'

export default function Bento() {
  return (
    <section className="relative px-5 py-28 md:px-10 md:py-40">
      <div className="pointer-events-none absolute right-10 top-1/3 h-80 w-80 rounded-full bg-accent/15 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-accent">At a glance</p>
        <h2 className="mb-12 max-w-xl font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-tighter">
          Everything you need to know, <span className="text-muted">in one look.</span>
        </h2>

        <div className="grid auto-rows-[11rem] gap-4 md:grid-cols-4 md:grid-rows-3">
          <Reveal className="glass flex flex-col justify-between rounded-3xl p-7 md:col-span-2 md:row-span-2">
            <Users className="text-accent" />
            <div>
              <p className="font-display text-2xl tracking-tight md:text-3xl">A home for young footballers.</p>
              <p className="mt-3 max-w-sm text-sm text-muted">Coaching, medical care, nutrition and mentorship, all under one roof.</p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="clay flex flex-col justify-between rounded-3xl p-6">
            <Trophy size={22} />
            <p className="font-display text-4xl tracking-tighter"><Counter to={stats[1].value} /></p>
            <p className="text-xs uppercase tracking-widest opacity-70">Trophies</p>
          </Reveal>

          <Reveal delay={0.12} className="soft flex flex-col justify-between rounded-3xl p-6">
            <p className="text-xs uppercase tracking-widest text-muted">Since</p>
            <p className="font-display text-4xl tracking-tighter text-accent">{academy.founded}</p>
          </Reveal>

          <Reveal delay={0.1} className="overflow-hidden rounded-3xl md:col-span-2">
            <Media src={images.hero} label="Training day" />
          </Reveal>

          <Reveal delay={0.16} className="glass flex flex-col justify-between rounded-3xl p-6 md:col-span-2">
            <MapPin className="text-accent" />
            <div>
              <p className="font-display text-xl tracking-tight">{academy.address}</p>
              <p className="text-sm text-muted">{academy.hours}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}