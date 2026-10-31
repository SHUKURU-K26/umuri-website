import { useState, useCallback } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', next === 'dark')
    try { localStorage.setItem('umuri-theme', next) } catch {}
    setTheme(next)
  }, [theme])

  return { theme, toggle }
}