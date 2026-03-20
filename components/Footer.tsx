export default function Footer() {
  return (
    <footer
      style={{
        padding: '24px 60px',
        borderTop: '1px solid #e8e4de',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#faf8f5',
        fontSize: 12,
        color: '#7a776f',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      <span>© 2025 Versha Tiwari. All rights reserved.</span>
      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 14 }}>
        Early Childhood Teacher · VIT Registered · Croydon, VIC
      </span>
    </footer>
  )
}
