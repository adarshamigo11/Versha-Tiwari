'use client'
import { useState, useEffect } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#nqs', label: 'NQS Areas' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <div className="font-cormorant text-xl font-light tracking-wide" style={{fontFamily:'Cormorant Garamond,serif'}}>
          Versha Tiwari
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-muted hover:text-ink transition-colors duration-200"
              style={{color:'#7a776f'}}
              onMouseOver={e => (e.currentTarget.style.color='#1a1814')}
              onMouseOut={e => (e.currentTarget.style.color='#7a776f')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} style={{background:'#1a1814'}} />
          <span className={`block w-5 h-px bg-ink transition-all ${menuOpen ? 'opacity-0' : ''}`} style={{background:'#1a1814'}} />
          <span className={`block w-5 h-px bg-ink transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} style={{background:'#1a1814'}} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-line px-6 pb-6 flex flex-col gap-4" style={{background:'#faf8f5', borderColor:'#e8e4de'}}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase py-2"
              style={{color:'#7a776f'}}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
