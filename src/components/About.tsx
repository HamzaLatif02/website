import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-32 bg-gray-50 dark:bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-4">About</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Who I am.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
              I'm a software engineer and data scientist with a passion for building things that
              actually work in the real world — from full-stack web products to machine learning
              systems. I recently completed an{' '}
              <span className="text-gray-900 dark:text-white font-semibold">
                MSc in Data Science with Distinction
              </span>{' '}
              at King's College London, following a{' '}
              <span className="text-gray-900 dark:text-white font-semibold">
                First Class BSc in Computer Science
              </span>{' '}
              from City, University of London.
            </p>

            <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
              My work sits at the intersection of software engineering and data. I've built live
              analytics platforms (Roleprint), financial analysis tools with AI-generated reports
              (FinPipe), benchmarked six frontier LLMs on legal reasoning for my MSc thesis, and
              trained computer vision models for deepfake detection.
            </p>

            <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
              I care about the full stack: clean backend architecture, thoughtful APIs, and UIs that
              don't make you think too hard. I'm particularly drawn to NLP, data pipelines, and
              problems where software and intelligence meet.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                ['7', 'Projects built'],
                ['2', 'Live products'],
                ['6', 'LLMs benchmarked'],
                ['103', 'Tests written'],
              ].map(([num, label]) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-white dark:bg-navy-card border border-gray-200 dark:border-navy-border"
                >
                  <div className="font-display font-bold text-3xl text-gradient mb-1">{num}</div>
                  <div className="text-sm text-gray-500 dark:text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            <p className="section-label mb-6">Education</p>

            <EducationCard
              icon={<GraduationCap className="w-6 h-6 text-primary-light" />}
              degree="MSc Data Science"
              grade="Distinction"
              institution="King's College London"
              years="2024 — 2025"
              highlight="Thesis: LLM benchmarking on temporal reasoning in UK legislation and GDPR. Advanced coursework in ML, statistical modelling, NLP, and data analytics."
              delay={0.4}
              inView={inView}
            />

            <EducationCard
              icon={<Award className="w-6 h-6 text-primary-light" />}
              degree="BSc Computer Science"
              grade="First Class Honours"
              institution="City, University of London"
              years="2021 — 2024"
              highlight="Specialisation in software engineering, algorithms, and databases. Final year project: deepfake detection with ResNet and SE-ResNet architectures."
              delay={0.55}
              inView={inView}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface EducationCardProps {
  icon: React.ReactNode;
  degree: string;
  grade: string;
  institution: string;
  years: string;
  highlight: string;
  delay: number;
  inView: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({
  icon,
  degree,
  grade,
  institution,
  years,
  highlight,
  delay,
  inView,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay }}
    className="p-7 rounded-2xl bg-white dark:bg-navy-card border border-gray-200 dark:border-navy-border hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 group"
  >
    <div className="flex items-start gap-4 mb-4">
      <div className="p-2.5 rounded-xl bg-primary/10 flex-shrink-0 group-hover:bg-primary/15 transition-colors">
        {icon}
      </div>
      <div>
        <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white leading-tight">
          {degree}
        </h3>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <span className="text-primary dark:text-primary-light font-semibold text-sm">
            {institution}
          </span>
          <span className="text-gray-300 dark:text-slate-600">·</span>
          <span className="text-sm text-gray-500 dark:text-slate-500">{years}</span>
        </div>
      </div>
    </div>

    <div className="mb-4">
      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary-light text-xs font-bold tracking-wide">
        {grade}
      </span>
    </div>

    <p className="text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{highlight}</p>
  </motion.div>
);

export default About;
