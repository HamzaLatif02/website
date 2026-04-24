import React from 'react';

const AboutSection: React.FC = () => (
  <section id="about" className="mb-28 scroll-mt-16 lg:scroll-mt-24">
    <p
      className="text-xs uppercase tracking-widest font-mono mb-8 lg:hidden"
      style={{ color: 'var(--color-accent)' }}
    >
      About
    </p>
    <div className="space-y-5 text-sm font-mono leading-relaxed max-w-xl" style={{ color: 'rgba(218,227,229,0.55)' }}>
      <p>
        I'm a software engineer and data scientist based in the UK, with an MSc in Data Science
        (Distinction) from King's College London and a BSc in Computer Science (First Class) from
        City, University of London.
      </p>
      <p>
        I build end-to-end systems — from scrapers and ML pipelines to React dashboards and REST
        APIs — with a focus on correctness, observability, and clean design. Recent work includes a
        real-time NLP job market analytics platform and a financial analysis tool that pairs
        quantitative metrics with AI-generated report narratives.
      </p>
      <p>
        I'm open to full-time roles in software engineering, data analysis, and data science.
      </p>
      <p>
        <a
          href="mailto:lhamza1020@gmail.com"
          className="font-semibold transition-colors duration-200"
          style={{ color: 'var(--color-accent)' }}
        >
          Get in touch →
        </a>
      </p>
    </div>
  </section>
);

export default AboutSection;
