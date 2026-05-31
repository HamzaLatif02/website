import React, { useEffect, useRef } from 'react';
import { useSmooth } from '../hooks/useSmooth';

interface Props {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
];

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const LeftPanel: React.FC<Props> = ({ activeSection }) => {
  const { scrollToSection } = useSmooth();
  const vantaRef = useRef<HTMLElement>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    const initVanta = () => {
      if (window.VANTA && window.THREE && vantaRef.current) {
        vantaEffect.current = window.VANTA.WAVES({
          el:            vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls:  false,
          minHeight:     200,
          minWidth:      200,
          scale:         1.0,
          scaleMobile:   1.0,
          color:         0x04080f,
        });
      }
    };

    const loadVanta = () => {
      if (!window.VANTA) {
        const s = document.createElement('script');
        s.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js';
        s.async = true;
        s.onload = initVanta;
        document.head.appendChild(s);
      } else {
        initVanta();
      }
    };

    if (!window.THREE) {
      const s = document.createElement('script');
      s.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      s.async = true;
      s.onload = loadVanta;
      document.head.appendChild(s);
    } else {
      loadVanta();
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <aside
      ref={vantaRef}
      className="relative px-8 py-16 lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:px-12 lg:py-24"
      style={{ backgroundColor: '#04080f' }}
    >
      <div className="relative z-10 lg:flex lg:flex-col lg:justify-between lg:h-full">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight mb-2 w-fit px-6 py-4 rounded-2xl bg-[#04080f]/70 backdrop-blur-sm" style={{ color: 'var(--color-muted)' }}>
            Hamza Latif
          </h1>
          <p className="text-base font-mono mb-6 w-fit px-5 py-3 rounded-xl bg-[#04080f]/60 backdrop-blur-sm" style={{ color: 'var(--color-accent)' }}>
            Software Engineer
          </p>
          <p className="text-sm font-mono leading-relaxed max-w-xs px-4 py-2 rounded-lg bg-[#04080f]/50 backdrop-blur-sm" style={{ color: 'rgba(218,227,229,0.45)' }}>
            MSc Data Science (Distinction), King's College London.
            Building full-stack products and ML systems.
          </p>

          <nav className="mt-12 hidden lg:block" aria-label="Page sections">
            <ul className="space-y-5">
              {NAV_ITEMS.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <button
                      onClick={() => scrollToSection(id)}
                      className="flex items-center gap-4"
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span
                        className="block h-px"
                        style={{
                          width: isActive ? '64px' : '32px',
                          backgroundColor: isActive
                            ? 'var(--color-accent)'
                            : 'rgba(218,227,229,0.2)',
                          transition: 'width 0.3s ease, background-color 0.3s ease',
                        }}
                      />
                      <span
                        className="text-xs font-mono uppercase tracking-widest"
                        style={{
                          color: isActive ? 'var(--color-accent)' : 'rgba(218,227,229,0.35)',
                          transition: 'color 0.3s ease',
                        }}
                      >
                        {label}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-5 mt-10 lg:mt-0">
          <a
            href="https://github.com/HamzaLatif02"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200"
            style={{ color: 'rgba(218,227,229,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(218,227,229,0.35)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/latif-hamza/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200"
            style={{ color: 'rgba(218,227,229,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(218,227,229,0.35)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="mailto:lhamza1020@gmail.com"
            aria-label="Email"
            className="transition-colors duration-200"
            style={{ color: 'rgba(218,227,229,0.35)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-muted)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'rgba(218,227,229,0.35)')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
          <a
            href="/CV_HamzaLatif.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download CV"
            className="text-xs font-mono uppercase tracking-widest border px-3 py-1.5 transition-colors duration-200"
            style={{
              color: 'rgba(218,227,229,0.35)',
              borderColor: 'rgba(218,227,229,0.15)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = 'var(--color-accent)';
              e.currentTarget.style.borderColor = 'var(--color-accent)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = 'rgba(218,227,229,0.35)';
              e.currentTarget.style.borderColor = 'rgba(218,227,229,0.15)';
            }}
          >
            CV
          </a>
        </div>
      </div>
    </aside>
  );
};

export default LeftPanel;
