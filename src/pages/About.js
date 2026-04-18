import { useEffect, useState } from "react";

const roles = [
  "Network Administrator",
  "Cloud Enthusiast",
  "Cybersecurity Learner",
  "Junior Network Specialist",
];

const bullets = [
  { icon: "🎓", text: "Master in Security & Computer Networks — ISITC Sousse" },
  { icon: "💼", text: "Customer Advisor @ Mediterranean Teleservices (Fiber Optic Migration — Orange France)" },
  { icon: "🛡️", text: "Passionate about Cybersecurity & Cloud Infrastructure" },
  { icon: "🚀", text: "Currently building hands-on network & cloud projects" },
];

const skills = [
  { name: 'Cisco / CCNA', icon: 'https://cdn.simpleicons.org/cisco/6C63FF', bg: '#1a1730' },
  { name: 'Network Security', icon: 'https://cdn.simpleicons.org/springsecurity/00D4AA', bg: '#0d2420' },
  { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624', bg: '#2d1a1a' },
  { name: 'Windows Server', icon: 'https://cdn.simpleicons.org/serverless/FD5750', bg: '#1a1730' },
  { name: 'Firewall & VPN', icon: 'https://cdn.simpleicons.org/openvpn/EA7E20', bg: '#2d2210' },
  { name: 'TCP/IP & Routing', icon: 'https://cdn.simpleicons.org/cisco/6C63FF', bg: '#1a1730' },
  { name: 'Virtualization', icon: 'https://cdn.simpleicons.org/vmware/00D4AA', bg: '#0d2420' },
  { name: 'AWS / Cloud', icon: 'https://cdn.simpleicons.org/icloud/3693F3', bg: '#0d1f35' },
  { name: 'Wireshark', icon: 'https://cdn.simpleicons.org/wireshark/6C63FF', bg: '#1a1730' },
];

const languages = [
  { name: 'Arabic', color: '#6C63FF', level: '100%', label: 'Native' },
  { name: 'French', color: '#00D4AA', level: '90%', label: 'Bilingual' },
  { name: 'English', color: '#FF6B6B', level: '80%', label: 'Intermediate' },
];

function TypingAnimation() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      return () => clearTimeout(t);
    }
    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 1500);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
  }, [displayed, deleting, roleIndex]);

  return (
    <>
      <style>{`@keyframes blink { 50% { border-color: transparent; } }`}</style>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
        <span style={{ color: "#888", fontSize: 15 }}>I am a</span>
        <span style={{
          color: "#6C63FF",
          fontSize: 15,
          fontWeight: 600,
          borderRight: "2px solid #6C63FF",
          paddingRight: 4,
          minWidth: 180,
          animation: "blink 0.7s step-end infinite",
        }}>
          {displayed}
        </span>
      </div>
    </>
  );
}

export default function About() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
      <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 8 }}>
        About <span style={{ color: '#6C63FF' }}>Me</span>
      </h2>
      <p style={{ color: '#888', marginBottom: 50 }}></p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>

        {/* LEFT COLUMN */}
        <div>
          <img
            src="/me.png"
            alt="ibtissem"
            style={{
              width: 180,
              height: 180,
              borderRadius: '40%',
              objectFit: 'cover',
              marginBottom: 20,
              border: '3px solid #6C93FF',
            }}
          />

          <h3 style={{ fontSize: 24, marginBottom: 8 }}>Ibtissem Bouhlel</h3>

          {/* TYPING ANIMATION */}
          <TypingAnimation />

          {/* BULLET POINTS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {bullets.map((b, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  background: '#1a1a2e',
                  border: '0.5px solid #333',
                  borderRadius: 10,
                  padding: '10px 14px',
                }}
              >
                <span style={{ fontSize: 16, lineHeight: 1.5 }}>{b.icon}</span>
                <span style={{ color: '#ccc', fontSize: 13, lineHeight: 1.5 }}>{b.text}</span>
              </div>
            ))}
          </div>

          {/* INFO ROW */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['📍', 'Location', 'Tunisia, Sousse'],
              ['📧', 'Email', 'Ibtissembouhlel38@gmail.com'],
              ['🎓', 'Degree', 'Professional Master'],
            ].map(([icon, label, value]) => (
              <div key={label} style={{ display: 'flex', gap: 10, color: '#ccc', fontSize: 14 }}>
                <span>{icon}</span>
                <span style={{ color: '#888' }}>{label}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div>
          <h3 style={{ fontSize: 22, marginBottom: 24, fontWeight: 600 }}>Technical Skills</h3>

          {/* SKILL CARDS GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 10,
            marginBottom: 40,
          }}>
            {skills.map(s => (
              <div
                key={s.name}
                style={{
                  background: s.bg,
                  border: '0.5px solid #333',
                  borderRadius: 12,
                  padding: '14px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                  transition: 'border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = '#555'}
                onMouseLeave={e => e.currentTarget.style.borderColor = '#333'}
              >
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background: '#ffffff10',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src={s.icon} alt={s.name} width={22} height={22} />
                </div>
                <span style={{
                  fontSize: 11,
                  fontWeight: 500,
                  color: '#ccc',
                  textAlign: 'center',
                  lineHeight: 1.3,
                }}>
                  {s.name}
                </span>
              </div>
            ))}
          </div>

          {/* LANGUAGES */}
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
  );
}