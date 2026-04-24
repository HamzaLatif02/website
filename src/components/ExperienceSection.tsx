import React from 'react';

const EXPERIENCE = [
  {
    period: 'Jun 2025 — Present',
    title: 'Data Analyst',
    company: 'Premier Services Associate Ltd',
    bullets: [
      'Integrated 4+ third-party APIs (OpenAI, Claude, Gemini, Together AI), handling 1,000+ requests during testing, by implementing authentication, retry logic, and structured response parsing for reliable automation.',
      'Designed modular data pipelines processing 10k+ data points across structured and unstructured datasets, improving code maintainability and reducing iteration time for experiments by 40%.',
      'Developed automated evaluation and reporting components, generating 500+ model outputs and reducing manual analysis effort by 50% through reproducible scripts.',
      'Used Google Cloud Platform for data storage and processing, enabling scalable experimentation and reducing local compute dependency for large dataset processing.',
      'Improved system reliability by identifying and resolving key pipeline and API issues (e.g., rate limits, inconsistent outputs), reducing runtime errors by 30%.',
      'Collaborated with cross-functional teams to deliver 3+ end-to-end analytical workflows under tight deadlines, improving documentation coverage and reducing onboarding time for new contributors.',
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
