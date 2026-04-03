import { Link, useLocation } from 'react-router-dom';

const navStyle = {
  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
  padding: '18px 60px', background: '#0d0d1a',
  borderBottom: '1px solid #1e1e2e', position: 'sticky', top: 0, zIndex: 100,
};

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/certifications', label: 'Certifications' },
  { path: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav style={navStyle}>
      <span style={{ color: '#6C63FF', fontWeight: 700, fontSize: 20 }}>
         Ibtissem Bouhlel
      </span>
      <div style={{ display: 'flex', gap: 32 }}>
        {links.map(l => (
          <Link key={l.path} to={l.path} style={{
            color: pathname === l.path ? '#6C63FF' : '#aaa',
            textDecoration: 'none', fontWeight: pathname === l.path ? 600 : 400,
            fontSize: 15, transition: 'color 0.2s',
          }}>{l.label}</Link>
        ))}
      </div>
    </nav>
  );
}