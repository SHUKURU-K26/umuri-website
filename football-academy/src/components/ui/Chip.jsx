import { cn } from '../../lib/utils'

export default function Chip({ active, children, ...props }) {
  return (
    <button
      {...props}
      className={cn('rounded-full px-5 py-2 text-sm transition', active ? 'soft-inset text-accent' : 'soft text-muted hover:text-fg')}
    >
      {children}
    </button>
  )
}