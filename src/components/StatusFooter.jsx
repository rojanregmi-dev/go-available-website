import React, { useState } from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';

export default function StatusFooter() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  };

  return (
    <>
      <section id="waitlist" style={{ padding: '5rem 0', borderBottom: '1px solid var(--border-glass)', background: '#021126' }}>
        <div className="container" style={{ maxWidth: '840px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '1.25rem', letterSpacing: 0 }}>
            Join the coming soon list
          </h2>
          <p style={{ color: '#FFFFFF', fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            Get early access when GO Available launches.
          </p>
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: '10px',
              maxWidth: '560px',
              margin: '0 auto 1.5rem'
            }}
          >
            <label htmlFor="waitlist-email" style={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
              Email address
            </label>
            <input
              id="waitlist-email"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setJoined(false);
              }}
              placeholder="Your email"
              style={{
                minHeight: '48px',
                border: '1px solid rgba(207, 235, 255, 0.28)',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                padding: '0 18px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                minHeight: '48px',
                border: 0,
                borderRadius: '999px',
                background: 'var(--go-green)',
                color: 'var(--text-dark)',
                padding: '0 18px',
                fontWeight: '800',
                cursor: 'pointer'
              }}
            >
              Join list
              <ArrowRight size={17} />
            </button>
          </form>
          {joined && (
            <p style={{ color: 'var(--go-green)', fontWeight: '800', marginBottom: '1.5rem' }}>
              You are on the coming soon list.
            </p>
          )}
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Coming soon. No public app yet.
          </p>
        </div>
      </section>

      <footer style={{ padding: '2.5rem 0', background: 'var(--bg-deep)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontWeight: '800', fontSize: '1.1rem', letterSpacing: 0 }}>
              GO AVAILABLE <span style={{ color: 'var(--neon-green)' }}>•</span> GO AVI
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Earn. Meet. Plan nearby.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'background 0.2s'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </footer>
    </>
  );
}
