'use client'
import { useState } from 'react'

const nqsAreas = [
  {
    number: '01',
    title: 'Educational Programs & Planning',
    subtitle: 'Quality Area 1',
    color: '#4a8fa8',
    items: [
      'Delivered high-quality kindergarten programs aligned with EYLF and VEYLDF, supporting children\'s learning, development and wellbeing',
      'Led curriculum planning, documentation and assessment using reflective practice and child-centred pedagogy',
      'Planned and facilitated Bush Kinder sessions — teaching children about road safety through nature-based excursions',
      'Completed all documentation for Bush Kinder: risk assessments, parent consent forms, parent communications and staff training',
      'Organised the first excursion for 3-year-olds in 7 years, including comprehensive risk assessments and paperwork',
      'Supported children\'s development through play-based learning, inquiry projects, ECERS and SSTEW frameworks',
      'Facilitated critical reflection discussions with the team to strengthen curriculum quality and improve learning outcomes',
      'Embedded nature-based learning through Bush Kinder sessions, promoting inquiry, physical development and environmental responsibility',
    ],
  },
  {
    number: '02',
    title: 'Children\'s Health & Safety',
    subtitle: 'Quality Area 2 — Exceeding',
    color: '#e07b54',
    items: [
      'Contributed to Assessment and Rating process — service achieved Exceeding in Quality Area 2',
      'Led risk assessments across all rooms through monthly safety audits, ensuring safe environments for all children',
      'Conducted and documented 6+ emergency risk assessments: Sleep, Emergency Evacuation, Lockdown, Bomb Threat, Earthquake, Gas Leak and Flooding',
      'Helped Centre Director secure funding to renovate the yard for children\'s safety — completed all risk assessments and paperwork',
      'Developed and implemented emergency response procedures including evacuation drills, lockdown practices and off-site evacuation planning',
      'Reviewed medical management plans, ASCIA action plans and medication administration procedures to ensure compliance',
      'Monitored health and hygiene practices, supporting effective management of incidents, injuries, illness and infection control',
      'Top 3 Finalist — Safety Champion Award recognising excellence in centre safety and wellbeing culture',
    ],
  },
  {
    number: '03',
    title: 'Physical Environment',
    subtitle: 'Quality Area 3',
    color: '#6a9e6f',
    items: [
      'Set up the indoor and outdoor learning environment to intentionally support children\'s learning and developmental needs',
      'Ensured equipment, learning resources and environments met safety standards appropriate for children\'s developmental stages',
      'Secured funding for yard renovation — submitted the full report and supporting documentation for approval',
      'Conducted regular safety inspections of indoor and outdoor environments, identifying hazards and implementing preventative strategies',
      'Embedded nature-based learning spaces through Bush Kinder, supporting physical development and environmental responsibility',
    ],
  },
  {
    number: '04',
    title: 'Staffing Arrangements',
    subtitle: 'Quality Area 4 — Assistant Director Role',
    color: '#9b72aa',
    items: [
      'Supported the Centre Director in maintaining compliance with the National Quality Framework and National Quality Standards',
      'Assisted with centre operations: staffing coordination, room management, enrolments and administration',
      'Managed centre operations during the Director\'s absence, ensuring smooth daily operations',
      'Mentored educators and supported professional practice and team collaboration',
      'Strengthened supervision strategies and manual handling practices, reducing risks to both children and staff',
    ],
  },
  {
    number: '05',
    title: 'Relationships with Children',
    subtitle: 'Quality Area 5',
    color: '#c4894a',
    items: [
      'Built warm, respectful and responsive relationships with children, supporting their social-emotional development',
      'Supported children with additional needs by implementing strategies developed through the Inclusion Support Programme',
      'Provided positive behaviour guidance and social-emotional development support',
      'Fostered inclusive learning environments by embedding cultural competence in curriculum planning',
      'Delivered play-based learning experiences grounded in child developmental milestones',
    ],
  },
  {
    number: '06',
    title: 'Collaborative Partnerships',
    subtitle: 'Quality Area 6 — Families & Community',
    color: '#4a8fa8',
    items: [
      'Organised excursions to build community connections and family engagement:',
      '→ Aged Care Facility excursion (intergenerational connection)',
      '→ School excursion (transition to school readiness)',
      '→ Community Woodland Park excursion (nature exploration)',
      '→ Chesterfield Farm excursion (animal and farm learning)',
      'Maintained strong partnerships with families through regular communication and sharing of learning documentation',
      'Supported family engagement, centre tours and enrolment processes',
      'Collaborated with allied professionals to strengthen children\'s communication, self-regulation and wellbeing under School Readiness Funding',
    ],
  },
  {
    number: '07',
    title: 'Governance & Leadership',
    subtitle: 'Quality Area 7',
    color: '#6a9e6f',
    items: [
      'Contributed to the Quality Improvement Plan (QIP) and continuous improvement aligned with National Quality Standards',
      'Ensured compliance with the National Quality Framework, National Regulations and Child Safe Standards',
      'Implemented Child Safe Standards across the centre and translated safety policies into daily practice',
      'Engaged families and educators in safety awareness through communication, training and continuous improvement initiatives',
      'Promoted a strong health and safety culture by collaborating with leadership and educators',
    ],
  },
]

export default function NQSAreas() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="nqs" style={{ padding: '100px 60px', borderTop: '1px solid #e8e4de', background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto">
        <div style={{ marginBottom: 8, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4a8fa8' }}>
          02 — Work Highlights
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, lineHeight: 1.1, color: '#1a1814', marginBottom: 16 }}>
          7 National Quality<br />
          <em style={{ fontStyle: 'italic', color: '#4a8fa8' }}>Standard Areas</em>
        </h2>
        <p style={{ color: '#7a776f', fontSize: 14, maxWidth: 540, marginBottom: 56, lineHeight: 1.8 }}>
          My practice is organised across all 7 NQS quality areas — click each to explore specific achievements and contributions.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 2 }}>
          {nqsAreas.map((area, i) => (
            <div
              key={i}
              style={{
                background: active === i ? area.color : '#faf8f5',
                padding: '32px 28px',
                cursor: 'pointer',
                transition: 'background 0.25s ease',
                borderBottom: `3px solid ${active === i ? 'transparent' : area.color}`,
              }}
              onClick={() => setActive(active === i ? null : i)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <span
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 40,
                    fontWeight: 300,
                    lineHeight: 1,
                    color: active === i ? 'rgba(255,255,255,0.3)' : area.color,
                    transition: 'color 0.25s',
                  }}
                >
                  {area.number}
                </span>
                <span style={{ color: active === i ? 'rgba(255,255,255,0.7)' : '#7a776f', fontSize: 18, transition: 'color 0.25s' }}>
                  {active === i ? '−' : '+'}
                </span>
              </div>

              <div
                style={{
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: active === i ? 'rgba(255,255,255,0.7)' : '#7a776f',
                  marginBottom: 8,
                  transition: 'color 0.25s',
                }}
              >
                {area.subtitle}
              </div>
              <div
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 22,
                  fontWeight: 400,
                  color: active === i ? '#ffffff' : '#1a1814',
                  lineHeight: 1.25,
                  transition: 'color 0.25s',
                }}
              >
                {area.title}
              </div>

              {active === i && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0' }}>
                  {area.items.map((item, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        gap: 10,
                        alignItems: 'flex-start',
                        marginBottom: 10,
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ flexShrink: 0, marginTop: 2 }}>◦</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
