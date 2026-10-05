import React from 'react'

const SOLUTIONS = [
  {
    n: '01',
    title: 'AI Strategy & Integration',
    body: 'A clear roadmap that connects AI to your systems, teams and goals — from first assessment to working integration.',
  },
  {
    n: '02',
    title: 'Intelligent Websites & Digital Experiences',
    body: 'Websites and digital products that understand visitors, personalise content and turn attention into pipeline.',
  },
  {
    n: '03',
    title: 'Workflow Automation',
    body: 'We map how work actually happens, then automate the repetitive steps so your team can focus on judgment.',
  },
  {
    n: '04',
    title: 'AI Agents & Agentic Systems',
    body: 'Supervised agents that handle research, monitoring, follow-ups and operations — measured, not promised.',
  },
]

export default function Solutions() {
  return (
    <section className="solutions has-city has-city--dim" id="solutions">
      <div className="container">
        <div className="section-head" data-reveal>
          <div>
            <p className="eyebrow">Solutions</p>
            <h2>Built for the way your business works.</h2>
          </div>
          <p className="section-lead">
            Four practices, one goal: AI that is useful on day one and more
            useful every month after.
          </p>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS.map((s, i) => (
            <article className="card" key={s.n} data-reveal data-reveal-delay={String(i % 4)}>
              <span className="card-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <a className="card-link" href="#contact" aria-label={`Discuss ${s.title} with 6thzone`}>
                Start here
                <svg viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M3 10h13M11 5l5 5-5 5" fill="none" strokeWidth="1.5" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
