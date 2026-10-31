import TiltCard from '../ui/TiltCard'
import Media from '../ui/Media'

export default function StaffCard({ member, index }) {
  return (
    <TiltCard className="h-full">
      <article className="soft group relative flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[4/5] overflow-hidden">
          <div className="h-full w-full transition duration-700 group-hover:scale-110">
            <Media src={member.photo} label={member.role} />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--soft)] via-transparent to-transparent" />
          <span className="glass absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] uppercase tracking-widest">
            {member.group}
          </span>
          <span className="absolute right-4 top-2 font-display text-5xl text-outline">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <div className="relative flex flex-1 flex-col p-6">
          <p className="text-xs uppercase tracking-widest text-accent">{member.role}</p>
          <h3 className="mt-1 font-display text-lg uppercase tracking-tight">{member.name}</h3>
          <p className="mt-3 flex-1 text-sm text-muted">{member.bio}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {member.tags.map((t) => (
              <span key={t} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">{t}</span>
            ))}
          </div>
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
        </div>
      </article>
    </TiltCard>
  )
}