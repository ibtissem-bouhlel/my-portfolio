const skills = [
    { name: 'Cisco / CCNA', color: '#6C63FF', level: '90%' },
    { name: 'Network Security', color: '#00D4AA', level: '70%' },
    { name: 'Linux / Windows Server', color: '#FF6B6B', level: '80%' },
    { name: 'Firewall & VPN', color: '#FFB347', level: '50%' },
    { name: 'TCP/IP & Routing', color: '#6C63FF', level: '90%' },
    { name: 'Virtualization & Cloud', color: '#00D4AA', level: '70%' },
  ];
  const languages = [
    { name: 'Arabic', color: '#6C63FF', level: '100%', label: 'Native' },
    { name: 'French', color: '#00D4AA', level: '90%', label: 'Bilingual' },
    { name: 'English', color: '#FF6B6B', level: '80%', label: 'Intermediate' },
  ];
  
  export default function About() {
    return (
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 8 }}>About <span style={{ color: '#6C63FF' }}>Me</span></h2>
        <p style={{ color: '#888', marginBottom: 50 }}></p>
  
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
          <img
  src="/me.png"
  alt="ibtissem"
  style={{
    width: 180,
    height: 180,
    borderRadius: '40%',
    objectFit: 'cover',
    marginBottom: 30,
    border: '3px solid #6C93FF',
  }}
/>

            <h3 style={{ fontSize: 24, marginBottom: 12 }}>Ibtissem Bouhlel</h3>
            <p style={{ color: '#888', lineHeight: 1.8, marginBottom: 20 }}>
            I am a graduate with a Professional Master's Degree in Security and Computer Networks from the Higher Institute of Computer and Communication Technologies, Sousse.
             I also hold a Bachelor's Degree in Computer Science and Systems Engineering, with a specialization in the Internet of Things.<br />
              Currently, I work as a Customer Advisor at the Mediterranean Teleservices Company, a subcontractor of Orange France,
               where I assist clients with the installation and implementation of optical fiber solutions.  <br />
               I am passionate about advancing in my main field, with a strong interest in cybersecurity and cloud computing.
                I am currently working on new projects and continuously learning new skills to grow in the industry.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[['📍', 'Location', 'Tunisia, Sousse'], ['📧', 'Email', 'Ibtissembouhlel38@gmail.com'], ['🎓', 'Degree', 'Professional Master']].map(([icon, label, value]) => (
                <div key={label} style={{ display: 'flex', gap: 10, color: '#ccc', fontSize: 14 }}>
                  <span>{icon}</span><span style={{ color: '#888' }}>{label}:</span><span>{value}</span>
                </div>
              ))}
            </div>
          </div>
  
          <div>
            <h3 style={{ fontSize: 22, marginBottom: 24, fontWeight: 600 }}>Technical Skills</h3>
            {skills.map(s => (
              <div key={s.name} style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 14, color: '#ccc' }}>{s.name}</span>
                  <span style={{ fontSize: 13, color: s.color }}>{s.level}</span>
                </div>
                <div style={{ background: '#1e1e2e', borderRadius: 99, height: 8 }}>
                  <div style={{ width: s.level, background: s.color, height: 8, borderRadius: 99, transition: 'width 1s' }} />
                </div>
              </div>
            ))}
          

          {/* LANGUAGES */}
<div style={{ marginTop: 40 }}>
  <h3 style={{ fontSize: 22, marginBottom: 24, fontWeight: 600 }}>Languages</h3>
  {languages.map(l => (
    <div key={l.name} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
        <span style={{ fontSize: 14, color: '#ccc' }}>{l.name}</span>
        <span style={{ fontSize: 13, color: l.color }}>{l.label}</span>
      </div>
      <div style={{ background: '#1e1e2e', borderRadius: 99, height: 8 }}>
        <div style={{
          width: l.level,
          background: l.color,
          height: 8,
          borderRadius: 99,
        }} />
      </div>
    </div>
  ))}
</div>
</div>
        </div>
      </div>
    );
  }