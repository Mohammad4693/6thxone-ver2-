import React from 'react'

export default function Cta() {
  return (
    <section className="cta has-city has-city--bright" id="contact">
      <div className="container cta-inner" data-reveal>
        <p className="eyebrow eyebrow--light">Start a conversation</p>
        <h2 className="cta-title">Let&rsquo;s find your first win with AI.</h2>
        <p className="cta-body">
          Tell us where work slows down. We&rsquo;ll show you where an
          intelligence layer could help — practically and measurably.
        </p>
        <div className="cta-actions">
          <a
            className="btn btn--primary"
            href="mailto:hello@6thzone.com?subject=AI%20conversation%20with%206thzone"
          >
            Book a conversation
          </a>
          <a className="cta-mail" href="mailto:hello@6thzone.com">
            hello@6thzone.com
          </a>
        </div>
      </div>
    </section>
  )
}
