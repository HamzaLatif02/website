import React from 'react';

const EXPERIENCE = [
  {
    period: 'Aug 2025 — Present',
    title: 'Software Engineer',
    company: 'Premier Services AI',
    bullets: [
      'Developed and deployed live production platforms, processing 50,000+ records and reducing analysis workflows from hours to under 30 seconds through Python, React, PostgreSQL, WebSockets, and Docker-based architectures.',
      'Engineered end-to-end NLP and data pipelines using spaCy, NLTK, BERTopic, and PostgreSQL, enabling automated trend analysis and structured reporting across 10+ datasets and analytical workflows.',
      'Integrated 4+ third-party AI APIs (OpenAI, Claude, Gemini, Together AI), handling 1,000+ requests during testing by implementing authentication, retry logic, and structured response parsing for reliable automation.',
      'Developed a scalable legal AI benchmarking platform, reducing model evaluation time by 70% through automated ETL pipelines, dataset generation, evaluation workflows, and reporting systems.',
      'Improved system reliability by reducing runtime failures by 30% through implementing robust error handling, fallback logic, database persistence strategies, and escalation mechanisms in high-volume production environments.',
    ],
  },
  {
    period: 'Aug 2023 — Nov 2023',
    title: 'Data Analyst',
    company: 'OESON',
    bullets: [
      'Developed Python scripts to process and analyse 20k+ records, reducing manual data preparation time by 50% by automating cleaning and transformation workflows.',
      'Built dashboards and visual outputs (Tableau/Matplotlib) used to track 5+ key metrics, improving clarity of insights and supporting faster data-driven decision-making.',
      'Implemented and evaluated predictive models (e.g., regression, classification), achieving up to 72% accuracy and improving model performance tracking through structured metric logging.',
    ],
  },
];

const ExperienceSection: React.FC = () => (
  <section id="experience" className="mb-28 scroll-mt-16 lg:scroll-mt-24">
    <p
      className="text-xs uppercase tracking-widest font-mono mb-8 lg:hidden"
      style={{ color: 'var(--color-accent)' }}
    >
      Experience
    </p>
    <div className="space-y-8">
      {EXPERIENCE.map((role) => (
        <div
          key={role.company}
          className="sm:grid sm:grid-cols-[140px_1fr] gap-6 rounded-lg p-4 -mx-4"
          style={{ transition: 'background-color 0.15s ease' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(80,125,188,0.06)')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          <p className="text-xs font-mono mt-1 mb-2 sm:mb-0 whitespace-nowrap" style={{ color: 'rgba(218,227,229,0.3)' }}>
            {role.period}
          </p>
          <div>
            <h3 className="text-sm font-semibold font-mono mb-0.5" style={{ color: 'var(--color-muted)' }}>
              {role.title}
            </h3>
            <p className="text-sm font-mono mb-3" style={{ color: 'var(--color-accent)' }}>
              {role.company}
            </p>
            <ul className="space-y-2">
              {role.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-xs font-mono leading-relaxed" style={{ color: 'rgba(218,227,229,0.45)' }}>
                  <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
