export default function Media({ src, label = '', className = '' }) {
  if (src) {
    return <img src={src} alt={label} loading="lazy" className={`h-full w-full object-cover ${className}`} />
  }
  return (
    <div className={`relative h-full w-full overflow-hidden bg-card ${className}`}>
      <div className="absolute -right-10 -top-10 h-2/3 w-2/3 rounded-full bg-accent/25 blur-3xl" />
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full text-accent opacity-50" fill="none" stroke="currentColor" strokeWidth="0.8">
        <circle cx="100" cy="100" r="46" />
        <circle cx="100" cy="100" r="3" fill="currentColor" />
        <line x1="0" y1="100" x2="200" y2="100" />
        <rect x="55" y="0" width="90" height="30" />
        <rect x="55" y="170" width="90" height="30" />
      </svg>
      {label && (
        <span className="absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.25em] text-muted">{label}</span>
      )}
    </div>
  )
}