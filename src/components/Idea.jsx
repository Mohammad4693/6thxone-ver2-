import React from 'react'

const SYSTEMS = [
  {
    n: '01',
    title: 'People',
    body: 'AI that supports judgment, communication and decision-making across your team.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3 2.8-4.5 5.5-4.5S13.9 16 14.5 19" />
        <circle cx="16.5" cy="9" r="2.4" />
        <path d="M15.5 14.6c2.6.1 4.4 1.5 5 4.4" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Places',
    body: 'Physical and digital environments made visible, responsive and connected.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 21c-4-4.2-6.5-7.4-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 13.6 16 16.8 12 21Z" />
        <circle cx="12" cy="10.2" r="2.4" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Services',
    body: 'Faster, smarter delivery of the services your customers rely on.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 8.5a2 2 0 1 1 2-2c0 1.4-2 1.3-2 2.6M7 12.4v.4" />
        <path d="M17 15.5a2 2 0 1 0-2 2c0-1.4 2-1.3 2-2.6M17 11.6v-.4" />
        <path d="M4 4h16v16H4z" opacity="0" />
        <path d="M5 5h14v14H5z" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Data',
    body: 'One reliable view of performance, signals and opportunity.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 19V13M10 19V8M15 19v-8M20 19V5" />
      </svg>
    ),
  },
  {
    n: '05',
    title: 'Operations',
    body: 'Efficient, adaptable operations that improve as your business grows.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      </svg>
    ),
  },
]

export default function Idea() {
  return (
    <section className="idea has-city" id="about">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">The 6thzone idea</p>
            <h2>
              Five business systems.
              <br />
              One intelligence layer.
            </h2>
          </div>
          <p className="section-lead">
            Every business runs on five connected systems. 6thzone adds the
            intelligence layer that helps them work as one — strengthening your
            people and processes, not replacing them.
          </p>
        </div>

        <ol className="idea-grid" data-reveal>
          <li className="idea-line" aria-hidden="true" />
          {SYSTEMS.map((s) => (
            <li className="idea-item" key={s.n}>
              <span className="idea-node" aria-hidden="true" />
              <span className="idea-n">{s.n}</span>
              <span className="idea-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
