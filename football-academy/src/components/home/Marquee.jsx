const words = ['Train', 'Compete', 'Win', 'Inspire', 'Repeat']

export default function Marquee() {
  const row = [...words, ...words, ...words, ...words]
  return (
    <div className="overflow-hidden border-y border-line bg-accent py-5 text-accent-fg">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-2xl font-bold uppercase tracking-tight md:text-4xl">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10">
            {w} <span aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}