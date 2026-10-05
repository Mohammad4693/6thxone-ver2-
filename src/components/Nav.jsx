import React, { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#approach', label: 'Approach' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav-inner">
        <a className="wordmark" href="#top" aria-label="6thzone — home">
          6thzone<span className="wordmark-dot" aria-hidden="true" />
        </a>
        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="btn btn--ghost nav-cta" href="#contact">
          Book a conversation
        </a>
      </div>
    </header>
  )
}
