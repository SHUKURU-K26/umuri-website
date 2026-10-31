import { useLocation } from 'react-router-dom'

export default function PagePlaceholder() {
  const { pathname } = useLocation()
  return (
    <section className="grid min-h-screen place-items-center px-5 text-center">
      <h1 className="font-display text-[clamp(2.5rem,9vw,7rem)] font-bold uppercase tracking-tighter">
        {pathname.replace('/', '') || 'page'} <span className="text-accent">soon</span>
      </h1>
    </section>
  )
}