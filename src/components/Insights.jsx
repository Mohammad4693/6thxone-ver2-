import React from 'react'

const NOTES = [
  {
    n: '01',
    title: 'Where AI creates value first',
    body: 'The fastest wins rarely come from the flashiest use case. Start where the work repeats.',
  },
  {
    n: '02',
    title: 'Your website is an AI surface',
    body: 'Intelligent digital experiences turn a brochure into an operator.',
  },
  {
    n: '03',
    title: 'Agents earn their autonomy',
    body: 'Agentic systems gain scope through measurement and supervision, not promises.',
  },
]

export default function Insights() {
  return (
    <section className="insights" id="insights">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Insights</p>
            <h2>Notes from the field.</h2>
          </div>
          <p className="section-lead">
            Short observations from 6thzone projects — more coming soon.
          </p>
        </div>

        <div className="insights-grid">
          {NOTES.map((note, i) => (
            <article className="insight" key={note.n} data-reveal data-reveal-delay={String(i % 3)}>
              <span className="card-n">{note.n}</span>
              <h3>{note.title}</h3>
              <p>{note.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
