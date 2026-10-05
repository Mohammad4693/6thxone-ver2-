import React from 'react'

const STEPS = [
  {
    n: '01',
    title: 'Understand the business',
    body: 'We start with your operations, data and goals — not with the technology.',
  },
  {
    n: '02',
    title: 'Design the right system',
    body: 'We design the smallest system that creates real value, and a clear path to scale it.',
  },
  {
    n: '03',
    title: 'Implement and improve',
    body: 'We ship, integrate and measure — improving the system as your business changes.',
  },
]

export default function Approach() {
  return (
    <section className="approach has-city has-city--bright" id="approach">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Our approach</p>
            <h2>Understand, design, implement.</h2>
          </div>
          <p className="section-lead">
            A short, deliberate path from first conversation to a system your
            team relies on.
          </p>
        </div>

        <ol className="steps" data-reveal>
          {STEPS.map((s) => (
            <li className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
