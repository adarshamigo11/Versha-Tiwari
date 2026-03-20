export default function About() {
  const achievements = [
    'Contributed to Assessment and Rating process, supporting the service in achieving Exceeding in Quality Area 2 – Children\'s Health and Safety',
    'Led and strengthened health and safety practices as Safety Advocate, promoting compliance with Child Safe Standards',
    'Planned and facilitated Bush Kinder and nature-based learning experiences, supporting children\'s inquiry, resilience and environmental awareness',
    'Supported implementation of School Readiness Funding initiatives, collaborating with allied professionals',
    'Mentored and guided educators through reflective practice and curriculum discussions',
    'Contributed to the Quality Improvement Plan (QIP) and continuous improvement aligned with the National Quality Standards',
    'Built strong partnerships with families and support services, supporting inclusive education for children with additional needs',
    'Top 3 Finalist — Safety Champion Award for our centre\'s safety and wellbeing culture',
  ]

  return (
    <section id="about" style={{ padding: '100px 60px', borderTop: '1px solid #e8e4de', background: '#faf8f5' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4a8fa8' }}>
          01 — About
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, lineHeight: 1.1, marginBottom: 48, color: '#1a1814' }}>
          Professional Summary
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }} className="grid-cols-1 md:grid-cols-2">
          <div>
            <p style={{ color: '#7a776f', lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              Passionate Early Childhood Education professional with over 7 years' experience in ECEC, including
              leadership roles as Acting Early Childhood Teacher, Assistant Director (2IC), Safety Advocate and Senior Educator.
            </p>
            <p style={{ color: '#7a776f', lineHeight: 1.9, marginBottom: 20, fontSize: 15 }}>
              Experienced in delivering high-quality kindergarten programs aligned with EYLF, VEYLDF and the National Quality Framework,
              with strong knowledge of NQS and Child Safe Standards. Skilled in curriculum leadership, mentoring educators,
              quality improvement planning and regulatory compliance.
            </p>
            <p style={{ color: '#7a776f', lineHeight: 1.9, fontSize: 15 }}>
              Currently undertaking a Master of Education (Leadership and Learning) at Deakin University to strengthen
              leadership capability. Committed to creating inclusive learning environments, supporting children's wellbeing
              and building strong partnerships with families and communities.
            </p>

            {/* Registrations */}
            <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {['VIT Registered ECT', 'Working With Children Check', 'National Police Check'].map((r) => (
                <span
                  key={r}
                  style={{
                    fontSize: 11, letterSpacing: '0.08em',
                    border: '1px solid #4a8fa8', color: '#4a8fa8',
                    padding: '6px 14px', textTransform: 'uppercase',
                  }}
                >
                  {r}
                </span>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <div style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1a1814', marginBottom: 20, fontWeight: 500 }}>
              Key Leadership Achievements
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {achievements.map((a, i) => (
                <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ color: '#4a8fa8', fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>◆</span>
                  <span style={{ color: '#7a776f', fontSize: 14, lineHeight: 1.75 }}>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
