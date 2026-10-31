import Counter from '../ui/Counter'
import Reveal from '../ui/Reveal'
import { stats } from '../../data/academy'

export default function StatsBand({ title = true }) {
  return (
    <section className="relative px-5 py-24 md:px-10">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[110px]" />
      <div className="relative mx-auto max-w-7xl">
        {title && <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">Our records</p>}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.08}
              className={`rounded-3xl p-6 md:p-9 ${i === 0 ? 'clay' : 'glass'}`}
            >
              <p className={`font-display text-[clamp(2rem,5vw,3.6rem)] tracking-tighter ${i === 0 ? '' : 'text-accent'}`}>
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className={`mt-2 text-xs uppercase tracking-widest md:text-sm ${i === 0 ? 'opacity-70' : 'text-muted'}`}>{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}