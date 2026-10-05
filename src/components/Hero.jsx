import React from 'react'

const HUD_ROWS = [
  { label: 'Workflow automation', value: '38%' },
  { label: 'Agent tasks / day', value: '1,240' },
  { label: 'Manual handling', value: '−12%' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <img src="/img/hero-city.jpg" alt="" />
      </div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-frame" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy" data-reveal>
          <p className="eyebrow eyebrow--light">Applied AI · Built for operations</p>
          <h1 className="hero-title">
            AI that connects
            <br />
            the whole business.
          </h1>
          <p className="hero-lead">
            We turn scattered systems into intelligent, connected operations.
          </p>
          <p className="hero-body">
            6thzone designs and delivers AI strategy, intelligent digital
            experiences, workflow automation and AI agents — technology that
            works where your work actually happens.
          </p>
        </div>

        <aside className="hero-hud" data-reveal data-reveal-delay="1">
          <div className="hud-panel">
            <div className="hud-head">
              <span>AI layer</span>
              <span className="hud-live">
                <i aria-hidden="true" /> Connected
              </span>
            </div>
            <div className="hud-metric">
              <strong>42</strong>
              <span>systems in view</span>
            </div>
            <svg className="hud-spark" viewBox="0 0 220 44" aria-hidden="true">
              <polyline
                points="0,34 22,30 44,32 66,24 88,26 110,18 132,20 154,12 176,14 198,7 220,9"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <ul className="hud-rows">
              {HUD_ROWS.map((r) => (
                <li key={r.label}>
                  <span>{r.label}</span>
                  <b>{r.value}</b>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="hero-note" data-reveal data-reveal-delay="2">
          <p className="hero-note-title">
            Real operations.
            <br />
            Connected intelligence.
          </p>
          <p className="hero-note-body">
            One AI layer across the systems your business already runs on —
            visible, measurable, improving.
          </p>
        </div>

        <a className="hero-scroll" href="#about">
          <span className="hero-scroll-dot" aria-hidden="true" />
          Scroll to explore
        </a>
      </div>
    </section>
  )
}
