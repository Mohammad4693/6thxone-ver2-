import React from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#solutions', label: 'Solutions' },
  { href: '#approach', label: 'Approach' },
  { href: '#insights', label: 'Insights' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a className="wordmark" href="#top">
            6thzone<span className="wordmark-dot" aria-hidden="true" />
          </a>
          <p>AI for businesses that run on real operations.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <p className="footer-legal">© 2026 6thzone. All rights reserved.</p>
      </div>
    </footer>
  )
}
