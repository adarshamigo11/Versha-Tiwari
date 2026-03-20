'use client'

export default function Contact() {
  const details = [
    { label: 'Phone', value: '0423 686 250', href: 'tel:0423686250' },
    { label: 'Email', value: 'er.vershashukla@gmail.com', href: 'mailto:er.vershashukla@gmail.com' },
    { label: 'Location', value: 'Croydon, VIC, Australia', href: null },
    { label: 'References', value: 'Available upon request', href: null },
  ]

  return (
    <section
      id="contact"
      style={{ padding: '100px 60px', borderTop: '1px solid #e8e4de', background: '#1a1814' }}
    >
      <div className="max-w-6xl mx-auto">
        <div
          style={{
            marginBottom: 8,
            fontSize: 11,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#4a8fa8',
          }}
        >
          05 — Contact
        </div>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#ffffff',
            marginBottom: 56,
          }}
        >
          Let&apos;s work<br />
          <em style={{ fontStyle: 'italic', color: '#4a8fa8' }}>together</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {details.map((d, i) => (
              <div
                key={i}
                style={{
                  padding: '24px 0',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#4a8fa8',
                  }}
                >
                  {d.label}
                </span>
                {d.href ? (
                  <a
                    href={d.href}
                    style={{
                      fontSize: 16,
                      color: 'rgba(255,255,255,0.8)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = '#4a8fa8')}
                    onMouseOut={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                  >
                    {d.value}
                  </a>
                ) : (
                  <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)' }}>{d.value}</span>
                )}
              </div>
            ))}
          </div>

          {/* Right side note */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 28,
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.25)',
                lineHeight: 1.5,
                marginBottom: 32,
              }}
            >
              "Open to new opportunities, leadership roles and collaborations in Early Childhood Education."
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {[
                'Acting ECT',
                'Safety Advocate',
                'Educational Leader',
                'Curriculum Mentor',
              ].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.5)',
                    padding: '6px 14px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
