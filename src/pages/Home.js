export default function Home() {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexDirection: 'column', textAlign: 'center',
        padding: '60px 20px', background: 'radial-gradient(ellipse at top, #1a1030 0%, #0a0a0f 60%)' }}>
  
        <p style={{ color: '#00D4AA', fontSize: 14, letterSpacing: 3,
          textTransform: 'uppercase', marginBottom: 16 }}>Welcome to my portfolio</p>
  
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 500,
          lineHeight: 1.15, marginBottom: 20 }}>
          Hi, I'm <span style={{ color: '#6C63FF' }}>Ibtissem Bouhlel</span> <br />
          Junior Cloud & Network Security Specialist
        </h1>
  
        <p style={{ color: '#888', fontSize: 18, maxWidth: 560, marginBottom: 40, lineHeight: 1.7 }}>
        Motivated and adaptable graduate with strong skills in network security and cloud infrastructure,
         and a strong interest in cloud computing and computer networks. Experienced in technical support,
          effective communication, and teamwork, with a customer-focused approach.
           I am currently seeking new opportunities to further develop my professional career.
        </p>
  
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="/projects" style={{ background: '#6C63FF', color: '#fff',
            padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
            fontWeight: 600, fontSize: 15 }}>View My Work</a>

             <a  href="/IbtiResume.pdf"
  download="Ibtissem_Bouhlel_Resume.pdf" style={{ background: '#6C63FF', color: '#fff',
            padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
            fontWeight: 600, fontSize: 15 }}>Download my Resume</a>
            
          <a href="/contact" style={{ border: '1px solid #6C63FF', color: '#6C63FF',
            padding: '14px 32px', borderRadius: 8, textDecoration: 'none',
            fontWeight: 600, fontSize: 15 }}>Contact Me</a>
        </div>
  
        <div style={{ display: 'flex', gap: 40, marginTop: 80 }}>
          {[['2024', 'Fresh Graduate'], ['1+',' year Experience'], ['100%', 'Passion & Motivation']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#6C63FF' }}>{n}</div>
              <div style={{ color: '#888', fontSize: 14 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }