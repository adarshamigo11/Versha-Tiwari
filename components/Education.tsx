const education = [
  {
    degree: 'Master of Education (Leadership and Learning)',
    institution: 'Deakin University, Australia',
    period: 'Currently Undertaking',
    status: 'In Progress',
  },
  {
    degree: 'Graduate Diploma in Early Childhood Education and Care',
    institution: 'Southern Cross University',
    period: '2023 – 2025',
    status: 'Completed',
  },
  {
    degree: 'Diploma of Early Childhood Education and Care',
    institution: 'Selmar Institute',
    period: '2020 – 2021',
    status: 'Completed',
  },
  {
    degree: 'Certificate III in Early Childhood Education and Care',
    institution: 'TMG Box Hill',
    period: '2017 – 2018',
    status: 'Completed',
  },
]

const registrations = [
  { label: 'VIT Registered Early Childhood Teacher', note: 'Provisional' },
  { label: 'Working With Children Check', note: 'Victoria' },
  { label: 'National Police Check', note: '' },
]

export default function Education() {
  return (
    <section id="education" style={{ padding: '100px 60px', borderTop: '1px solid #e8e4de', background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4a8fa8' }}>
          04 — Education
        </div>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#1a1814',
            marginBottom: 56,
          }}
        >
          Academic &amp;<br />
          <em style={{ fontStyle: 'italic', color: '#4a8fa8' }}>Qualifications</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}>
          {/* Education timeline */}
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1a1814',
                fontWeight: 500,
                marginBottom: 28,
              }}
            >
              Qualifications
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {education.map((e, i) => (
                <div
                  key={i}
                  style={{
                    padding: '28px 0',
                    borderBottom: '1px solid #e8e4de',
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    gap: 20,
                    alignItems: 'start',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: 21,
                        fontWeight: 400,
                        color: '#1a1814',
                        lineHeight: 1.25,
                        marginBottom: 6,
                      }}
                    >
                      {e.degree}
                    </div>
                    <div style={{ fontSize: 13, color: '#7a776f', marginBottom: 4 }}>{e.institution}</div>
                    <div style={{ fontSize: 12, color: '#7a776f' }}>{e.period}</div>
                  </div>
                  <span
                    style={{
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '5px 12px',
                      border: `1px solid ${e.status === 'In Progress' ? '#4a8fa8' : '#e8e4de'}`,
                      color: e.status === 'In Progress' ? '#4a8fa8' : '#7a776f',
                      whiteSpace: 'nowrap',
                      height: 'fit-content',
                    }}
                  >
                    {e.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Registrations */}
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#1a1814',
                fontWeight: 500,
                marginBottom: 28,
              }}
            >
              Professional Registration
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {registrations.map((r, i) => (
                <div
                  key={i}
                  style={{
                    padding: '24px 0',
                    borderBottom: '1px solid #e8e4de',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#4a8fa8',
                      flexShrink: 0,
                      display: 'block',
                    }}
                  />
                  <div>
                    <div style={{ fontSize: 15, color: '#1a1814', lineHeight: 1.4 }}>{r.label}</div>
                    {r.note && (
                      <div style={{ fontSize: 12, color: '#7a776f', marginTop: 2 }}>{r.note}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote / philosophy */}
            <div
              style={{
                marginTop: 48,
                padding: '32px',
                background: '#faf8f5',
                borderLeft: '3px solid #4a8fa8',
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 22,
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: '#1a1814',
                  lineHeight: 1.6,
                  marginBottom: 12,
                }}
              >
                "Every child deserves a safe, inclusive and stimulating environment where they can thrive."
              </p>
              <span style={{ fontSize: 12, color: '#7a776f', letterSpacing: '0.06em' }}>— Versha Tiwari</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
