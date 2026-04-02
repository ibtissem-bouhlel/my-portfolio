import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = 'service_1084tsb';
const TEMPLATE_ID = 'template_vgwq04t';
const PUBLIC_KEY  = 'kW4awVFyjRHPsZ1-w';

const contactButtons = [
  {
    icon: '📧',
    label: 'Email Me',
    value: 'ibtissembouhlel38@gmail.com',
    color: '#6C63FF',
    href: 'https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/ibtissem-bouhlel',
    color: '#00D4AA',
    href: 'https://www.linkedin.com/in/ibtissem-bouhlel-2aab8b199/',
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+216 53 132 001',
    color: '#FF6B6B',
    href: 'https://wa.me/21653132001',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Sousse, Tunisia',
    color: '#FFB347',
    href: null,
  },
];

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        form.current.reset();
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px 24px' }}>

      {/* TITLE */}
      <h2 style={{ fontSize: 40, fontWeight: 700, marginBottom: 8 }}>
        Contact <span style={{ color: '#6C63FF' }}>Me</span>
      </h2>
      <p style={{ color: '#888', marginBottom: 50 }}>
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>

        {/* LEFT — CONTACT FORM */}
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, color: '#ccc' }}>
            📩 Send Me a Message
          </h3>

          <form ref={form} onSubmit={sendEmail}
            style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              style={{
                background: '#13131f', border: '1px solid #1e1e2e',
                borderRadius: 8, padding: '14px 18px',
                color: '#fff', fontSize: 15, outline: 'none', width: '100%',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#6C63FF'}
              onBlur={e => e.currentTarget.style.borderColor = '#1e1e2e'}
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              style={{
                background: '#13131f', border: '1px solid #1e1e2e',
                borderRadius: 8, padding: '14px 18px',
                color: '#fff', fontSize: 15, outline: 'none', width: '100%',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#6C63FF'}
              onBlur={e => e.currentTarget.style.borderColor = '#1e1e2e'}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              style={{
                background: '#13131f', border: '1px solid #1e1e2e',
                borderRadius: 8, padding: '14px 18px',
                color: '#fff', fontSize: 15, outline: 'none', width: '100%',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#6C63FF'}
              onBlur={e => e.currentTarget.style.borderColor = '#1e1e2e'}
            />

            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              required
              style={{
                background: '#13131f', border: '1px solid #1e1e2e',
                borderRadius: 8, padding: '14px 18px',
                color: '#fff', fontSize: 15, outline: 'none',
                resize: 'vertical', width: '100%',
              }}
              onFocus={e => e.currentTarget.style.borderColor = '#6C63FF'}
              onBlur={e => e.currentTarget.style.borderColor = '#1e1e2e'}
            />

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: status === 'sending'
                  ? '#444' : 'linear-gradient(135deg, #6C63FF, #00D4AA)',
                color: '#fff', padding: '14px 40px',
                borderRadius: 8, border: 'none',
                fontWeight: 600, fontSize: 16,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                transition: 'opacity 0.2s',
              }}
            >
              {status === 'sending' ? '⏳ Sending...' : '🚀 Send Message'}
            </button>

            {/* STATUS MESSAGES */}
            {status === 'success' && (
              <div style={{
                background: '#00D4AA20', border: '1px solid #00D4AA44',
                color: '#00D4AA', padding: '12px 18px',
                borderRadius: 8, fontSize: 14, textAlign: 'center',
              }}>
                ✅ Message sent successfully! I will get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div style={{
                background: '#FF6B6B20', border: '1px solid #FF6B6B44',
                color: '#FF6B6B', padding: '12px 18px',
                borderRadius: 8, fontSize: 14, textAlign: 'center',
              }}>
                ❌ Something went wrong. Please try again or contact me directly.
              </div>
            )}

          </form>
        </div>

        {/* RIGHT — DIRECT CONTACT BUTTONS */}
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24, color: '#ccc' }}>
            📬 Contact Me Directly
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {contactButtons.map(c => (
              <div
                key={c.label}
                style={{
                  background: '#13131f',
                  border: `1px solid ${c.color}33`,
                  borderRadius: 12,
                  padding: '20px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  borderLeft: `4px solid ${c.color}`,
                  transition: 'transform 0.2s',
                  cursor: c.href ? 'pointer' : 'default',
                }}
                onClick={() => c.href && window.open(c.href, '_blank')}
                onMouseEnter={e => {
                  if (c.href) e.currentTarget.style.transform = 'translateX(6px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div style={{ fontSize: 28 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 13, color: c.color, fontWeight: 600, marginBottom: 4 }}>
                    {c.label}
                  </div>
                  <div style={{ fontSize: 14, color: '#aaa' }}>{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* AVAILABILITY */}
          <div style={{
            marginTop: 32, background: '#13131f',
            border: '1px solid #6C63FF33', borderRadius: 12,
            padding: '20px 24px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <span style={{
                width: 10, height: 10, borderRadius: '50%',
                background: '#00D4AA', display: 'inline-block',
              }} />
              <span style={{ color: '#00D4AA', fontWeight: 600, fontSize: 14 }}>
                Available for opportunities
              </span>
            </div>
            <p style={{ color: '#888', fontSize: 13, lineHeight: 1.7 }}>
            I am actively seeking new opportunities,
            Open to full-time positions in network administration, cybersecurity, and cloud infrastructure.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}