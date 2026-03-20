'use client'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '60px', paddingRight: '60px', background: '#faf8f5' }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 420, height: 420, border: '1px solid #e8e4de', opacity: 0.4 }}
      />
      <div
        className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: 300, height: 300, border: '1px solid #e8e4de', opacity: 0.4, marginRight: 60, marginTop: -60 }}
      />

      <div className="max-w-6xl w-full mx-auto">
        <div style={{ maxWidth: 720 }}>
          {/* Tag */}
          <div
            className="flex items-center gap-3 text-xs tracking-widest uppercase mb-6"
            style={{ color: '#4a8fa8', letterSpacing: '0.18em' }}
          >
            <span style={{ display: 'block', width: 32, height: 1, background: '#4a8fa8' }} />
            Early Childhood Teacher · VIT Registered · Safety Advocate
          </div>

          {/* Name */}
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(52px, 8vw, 88px)',
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: '-0.01em',
              marginBottom: 28,
              color: '#1a1814',
            }}
          >
            Versha<br />
            <em style={{ fontStyle: 'italic', color: '#4a8fa8' }}>Tiwari</em>
          </h1>

          {/* Tagline */}
          <p
            style={{
              fontSize: 16,
              color: '#7a776f',
              lineHeight: 1.85,
              maxWidth: 520,
              marginBottom: 48,
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 300,
            }}
          >
            Passionate Early Childhood Education professional with over 7 years' experience in ECEC.
            Delivering high-quality kindergarten programs aligned with EYLF, VEYLDF and the National Quality Framework.
          </p>

          {/* Stats row */}
          <div className="flex gap-10 flex-wrap" style={{ marginBottom: 48 }}>
            {[
              { num: '7+', label: 'Years Experience' },
              { num: 'Top 3', label: 'Safety Champion Finalist' },
              { num: 'Exceeding', label: 'NQS Quality Area 2' },
            ].map((s) => (
              <div key={s.label} style={{ borderTop: '1px solid #e8e4de', paddingTop: 16 }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, fontWeight: 300, color: '#4a8fa8', lineHeight: 1 }}>
                  {s.num}
                </div>
                <div style={{ fontSize: 11, color: '#7a776f', letterSpacing: '0.06em', marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="#nqs"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                textDecoration: 'none', color: '#1a1814',
                fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
                borderBottom: '1px solid #1a1814', paddingBottom: 4,
              }}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#contact"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                textDecoration: 'none', color: '#4a8fa8',
                fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase',
                borderBottom: '1px solid #4a8fa8', paddingBottom: 4,
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
