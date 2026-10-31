import { Link } from 'react-router-dom'
import { cn } from '../../lib/utils'

const variants = {
  clay: 'clay text-sm font-semibold',
  soft: 'soft text-sm font-medium',
  glass: 'glass text-sm font-medium hover:border-accent',
}

export default function Button({ to, href, variant = 'clay', className, children, ...rest }) {
  const cls = cn('inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 transition', variants[variant], className)
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}