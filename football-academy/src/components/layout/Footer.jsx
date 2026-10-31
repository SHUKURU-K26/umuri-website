import { Link } from 'react-router-dom'
import { navLinks } from '../../data/nav'
import { academy } from '../../data/academy'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-14 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row">
        <div>
          <p className="font-display text-xl font-bold">
            UMURI<span className="text-muted">/Academy</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-muted">Lighting the way for young footballers since {academy.founded}.</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted hover:text-accent">{l.label}</Link>
          ))}
        </nav>
        <div className="text-sm text-muted">
          <p>{academy.address}</p>
          <p>{academy.email}</p>
          <p>{academy.phone}</p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-muted">© {new Date().getFullYear()} Umuri Academy. All rights reserved.</p>
    </footer>
  )
}