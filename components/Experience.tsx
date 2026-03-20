'use client'

const roles = [
  {
    title: 'Acting Early Childhood Teacher (3–4 Year Kindergarten)',
    org: 'Goodstart Early Learning – Croydon South',
    period: 'Apr 2025 – Present',
    tag: 'Current',
  },
  {
    title: 'Safety Advocate',
    org: 'Goodstart Early Learning – Croydon South',
    period: 'Apr 2025 – Present',
    tag: 'Current',
  },
  {
    title: 'Assistant Director (Secondment / 2IC)',
    org: 'Goodstart Early Learning – Croydon South',
    period: 'Jul 2024 – Nov 2024',
    tag: 'Leadership',
  },
  {
    title: 'Safety Champion',
    org: 'Goodstart Early Learning – Croydon South',
    period: 'Jul 2023 – Mar 2025',
    tag: 'Safety',
  },
  {
    title: 'Senior Educator',
    org: 'Goodstart Early Learning – Croydon South',
    period: 'Jun 2022 – Mar 2025',
    tag: 'Educator',
  },
  {
    title: 'Educator',
    org: 'Goodstart Early Learning – Croydon South',
    period: 'Mar 2019 – May 2022',
    tag: 'Educator',
  },
]

const skills = [
  'Kindergarten Program Planning aligned with EYLF and VEYLDF',
  'National Quality Framework (NQF), NQS and Assessment & Rating preparation',
  'Inclusive Education and Early Intervention strategies (Inclusion Support Programme)',
  'Play-based learning and child developmental milestones',
  'Educational leadership, team collaboration and staff mentoring',
  'Child Safe Standards, safeguarding and child wellbeing',
  'Positive behaviour guidance and social-emotional development support',
  'Family and community engagement',
  'Reflective practice and professional growth',
]

const profDev = [
  'Child Protection Training',
  'First Aid / CPR',
  'Anaphylaxis Management',
  'Asthma Training',
  'Responding to Child Abuse, Neglect and Harm',
  'Child Safe Standards and Reportable Conduct Scheme (Victoria)',
]

const platforms = ['Storypark', 'XAP', 'iAuditor', 'Dimensions', 'Microsoft Office', 'Microsoft Teams']

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 60px', borderTop: '1px solid #e8e4de', background: '#faf8f5' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4a8fa8' }}>
          03 — Experience & Skills
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, lineHeight: 1.1, color: '#1a1814', marginBottom: 56 }}>
          Professional<br /><em style={{ fontStyle: 'italic', color: '#4a8fa8' }}>Experience</em>
        </h2>

        {/* Roles timeline */}
        <div style={{ marginBottom: 80 }}>
          {roles.map((r, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '120px 1fr auto',
                alignItems: 'center',
                gap: 32,
                padding: '28px 0',
                borderBottom: '1px solid #e8e4de',
                transition: 'padding-left 0.3s',
              }}
              onMouseOver={e => (e.currentTarget.style.paddingLeft = '10px')}
              onMouseOut={e => (e.currentTarget.style.paddingLeft = '0')}
            >
              <div style={{ fontSize: 12, color: '#7a776f', fontWeight: 300 }}>{r.period}</div>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 400, color: '#1a1814', marginBottom: 4 }}>
                  {r.title}
                </div>
                <div style={{ fontSize: 13, color: '#7a776f' }}>{r.org}</div>
              </div>
              <div
                style={{
                  fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: r.tag === 'Current' ? '#4a8fa8' : '#7a776f',
                  border: `1px solid ${r.tag === 'Current' ? '#4a8fa8' : '#e8e4de'}`,
                  padding: '5px 12px', whiteSpace: 'nowrap',
                }}
              >
                {r.tag}
              </div>
            </div>
          ))}
        </div>

        {/* Skills + Professional Dev + Digital Platforms */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }} className="grid-cols-1 md:grid-cols-3">
          {/* Key Skills */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a1814', fontWeight: 500, marginBottom: 20 }}>
              Key Skills
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {skills.map((s, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <span style={{ color: '#4a8fa8', flexShrink: 0 }}>◆</span>
                  <span style={{ fontSize: 13, color: '#7a776f', lineHeight: 1.65 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Development */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a1814', fontWeight: 500, marginBottom: 20 }}>
              Professional Development
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {profDev.map((p, i) => (
                <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <span style={{ color: '#4a8fa8', flexShrink: 0 }}>◆</span>
                  <span style={{ fontSize: 13, color: '#7a776f', lineHeight: 1.65 }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Digital Platforms */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a1814', fontWeight: 500, marginBottom: 20 }}>
              Digital Platforms
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {platforms.map((p) => (
                <span
                  key={p}
                  style={{
                    fontSize: 12, color: '#4a8fa8',
                    border: '1px solid #4a8fa8',
                    padding: '6px 14px',
                    letterSpacing: '0.05em',
                  }}
                >
                  {p}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div style={{ marginTop: 36 }}>
              <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a1814', fontWeight: 500, marginBottom: 16 }}>
                Languages
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                {['English', 'Hindi'].map((l) => (
                  <span key={l} style={{ fontSize: 12, border: '1px solid #e8e4de', padding: '6px 14px', color: '#7a776f' }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
