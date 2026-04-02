const certifications = [
  {
    icon: '🏆',
    title: 'CCSC — CvberSecurity Career Starter Certification',
    issuer: 'Hack & Fix Academy',
    date: '2026',
    status: 'Obtained',
    color: '#6C63FF',
    image: '/certificate1.png',
  },
  {
    icon: '🔒',
    title: 'CCPS — Phishing Prevention Specialist',
    issuer: 'Hack & Fix Academy',
    date: '2026',
    status: 'Obtained',
    color: '#FF6B6B',
    image: '/certificate2.png',
  },
  {
    icon: '☁️',
    title: 'Crash Course — AWS Basics ',
    issuer: 'KodeKloud',
    date: '2026',
    status: 'Obtained',
    color: '#00D4AA',
    image: '/aws.png',
  },
  {
    icon: '🎓',
    title: 'English Language Certificate',
    issuer: 'Elite School',
    date: '2026',
    status: 'Obtained',
    color: '#FFB347',
    image: '/eng.png',
  },
  {
    icon: '💻',
    title: 'CCNA v7',
    issuer: 'Cisco',
    date: '2022',
    status: 'Obtained',
    color: '#FFE350',
    image: '/ccna.png',
  },
];

export default function Certifications() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px' }}>

      {/* TITLE */}
      <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 8 }}>
        My <span style={{ color: '#6C63FF' }}>Certifications</span>
      </h2>
      <p style={{ color: '#888', marginBottom: 50 }}>
      
      </p>

      {/* CARDS GRID */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 24,
      }}>
        {certifications.map(c => (
          <div
            key={c.title}
            style={{
              background: '#13131f',
              border: '1px solid #1e1e2e',
              borderRadius: 12,
              padding: 30,
              borderTop: `3px solid ${c.color}`,
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = c.color}
            onMouseLeave={e => e.currentTarget.style.borderColor = '#1e1e2e'}
          >
            {/* ICON */}
            <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>

            {/* TITLE */}
            <h3 style={{
              fontSize: 17, fontWeight: 600,
              marginBottom: 8, color: c.color,
            }}>
              {c.title}
            </h3>

            {/* ISSUER */}
            <p style={{ color: '#888', fontSize: 14, marginBottom: 6 }}>
              🏢 {c.issuer}
            </p>

            {/* DATE */}
            <p style={{ color: '#888', fontSize: 14, marginBottom: 12 }}>
              📅 {c.date}
            </p>

            {/* STATUS BADGE */}
            <span style={{
              background: `${c.color}20`,
              color: c.color,
              padding: '4px 12px',
              borderRadius: 99,
              fontSize: 12,
              fontWeight: 600,
            }}>
              {c.status}
            </span>

            {/* CERTIFICATION IMAGE */}
            {c.image && (
              <div style={{
                marginTop: 20,
                borderTop: '1px solid #1e1e2e',
                paddingTop: 16,
              }}>
                <img
                  src={c.image}
                  alt={c.title}
                  onClick={() => window.open(c.image, '_blank')}
                  style={{
                    width: '100%',
                    borderRadius: 8,
                    border: `1px solid ${c.color}44`,
                    cursor: 'pointer',
                    transition: 'transform 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.borderColor = c.color;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = `${c.color}44`;
                  }}
                />
                <p style={{
                  color: '#888', fontSize: 12,
                  marginTop: 8, textAlign: 'center',
                }}>
                  🔍 Click to view full image
                </p>
              </div>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}