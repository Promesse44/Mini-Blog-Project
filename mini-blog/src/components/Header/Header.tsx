import './header.css'
import { useEffect, useState } from 'react'

function Header() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme')
      if (stored) {
        setDark(stored === 'dark')
        document.documentElement.classList.toggle('theme-dark', stored === 'dark')
      }
    } catch (e) {
      // ignore
    }
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch (e) {}
    document.documentElement.classList.toggle('theme-dark', next)
  }

  return (
    <header className="header">
      <h1>Dev Insights</h1>
      <nav>
        <a href="#new-post">New Post</a>
        <button onClick={toggle} className="theme-toggle" aria-pressed={dark}>
          {dark ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  )
}

export default Header
