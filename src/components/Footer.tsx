import React from 'react';

const Footer: React.FC = () => (
  <footer className="pt-8 pb-16 lg:pb-24">
    <p className="text-xs font-mono" style={{ color: 'rgba(218,227,229,0.2)' }}>
      Built by Hamza Latif, inspired by{' '}
      <a
        href="https://brittanychiang.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200"
        style={{ color: 'rgba(218,227,229,0.4)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-accent)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(218,227,229,0.4)')}
      >
        Brittany Chiang's portfolio
      </a>
      .
    </p>
  </footer>
);

export default Footer;
