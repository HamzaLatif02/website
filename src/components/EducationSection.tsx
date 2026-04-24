import React from 'react';

const EDUCATION = [
  {
    period: '2024 — 2025',
    degree: 'MSc Data Science',
    institution: "King's College London",
    grade: 'Distinction',
    description:
      'Specialisations in NLP, machine learning, and AI systems. Thesis: benchmarking 6 LLMs on temporal reasoning across 300+ years of UK legislation.',
  },
  {
    period: '2021 — 2024',
    degree: 'BSc Computer Science',
    institution: 'City, University of London',
    grade: 'First Class Honours',
    description:
      'Core modules in algorithms, databases, software engineering, and computer vision. Final year project on ternary deepfake detection across 8 architectures.',
  },
];

const EducationSection: React.FC = () => (
  <section id="education" className="mb-28 scroll-mt-16 lg:scroll-mt-24">
    <p
      className="text-xs uppercase tracking-widest font-mono mb-8 lg:hidden"
      style={{ color: 'var(--color-accent)' }}
    >
      Education
    </p>
    <div className="space-y-8">
      {EDUCATION.map((edu) => (
        <div
          key={edu.degree}
          className="sm:grid sm:grid-cols-[140px_1fr] gap-6 rounded-lg p-4 -mx-4"
          style={{ transition: 'background-color 0.15s ease' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(80,125,188,0.06)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <p className="text-xs font-mono mt-1 mb-2 sm:mb-0 whitespace-nowrap" style={{ color: 'rgba(218,227,229,0.3)' }}>
            {edu.period}
          </p>
          <div>
            <h3 className="text-sm font-semibold font-mono mb-0.5" style={{ color: 'var(--color-muted)' }}>
              {edu.degree}
            </h3>
            <p className="text-sm font-mono mb-1.5" style={{ color: 'var(--color-accent)' }}>
              {edu.institution}
            </p>
            <p className="text-xs font-mono mb-3" style={{ color: 'rgba(218,227,229,0.35)' }}>
              {edu.grade}
            </p>
            <p className="text-xs font-mono leading-relaxed" style={{ color: 'rgba(218,227,229,0.45)' }}>
              {edu.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
