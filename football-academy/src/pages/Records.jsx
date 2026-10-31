import PageHeader from '../components/ui/PageHeader'
import Reveal from '../components/ui/Reveal'
import StatsBand from '../components/home/StatsBand'
import Journey from '../components/home/Journey'
import { achievements } from '../data/academy'

export default function Records() {
  return (
    <>
      <PageHeader eyebrow="Records" title="What we have achieved" text="Numbers and milestones since the day we were founded." />
      <StatsBand title={false} />
      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-accent">Honours</p>
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.06}>
              <div className="flex items-baseline gap-6 border-t border-line py-6">
                <span className="font-display text-2xl font-bold text-accent">{a.year}</span>
                <span className="font-display text-lg uppercase tracking-tight md:text-2xl">{a.title}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Journey />
    </>
  )
}