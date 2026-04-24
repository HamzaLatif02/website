import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';
import { useSmooth } from '../hooks/useSmooth';

const ROLES = ['Software Engineer', 'Data Analyst', 'Data Scientist'];

const SOCIAL = [
  { icon: <Github size={20} />, href: 'https://github.com/HamzaLatif02', label: 'GitHub' },
  { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/latif-hamza/', label: 'LinkedIn' },
  { icon: <Mail size={20} />, href: 'mailto:lhamza1020@gmail.com', label: 'Email' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Hero: React.FC = () => {
  const { scrollToSection } = useSmooth();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white dark:bg-navy"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-0 dark:opacity-100" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-cyan/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Availability pill */}
          <motion.div variants={itemVariants} className="mb-10">
            <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-slow" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-gray-900 dark:text-white leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', letterSpacing: '-0.03em' }}
          >
            Hamza
            <br />
            <span className="text-gradient-warm">Latif.</span>
          </motion.h1>

          {/* Role pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
            {ROLES.map(role => (
              <span
                key={role}
                className="px-4 py-2 rounded-full border border-gray-200 dark:border-navy-border bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-slate-300 text-sm font-medium"
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* Education */}
          <motion.p
            variants={itemVariants}
            className="text-base text-gray-500 dark:text-slate-500 mb-12 font-medium"
          >
            <span className="text-gray-700 dark:text-slate-300">MSc Distinction</span>
            {' · '}King's College London
            {'  '}
            <span className="mx-2 text-gray-300 dark:text-slate-600">|</span>
            <span className="text-gray-700 dark:text-slate-300">BSc First Class Honours</span>
            {' · '}City, University of London
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
            <button
              onClick={() => scrollToSection('featured')}
              className="btn-primary px-8 py-4 rounded-xl text-base"
            >
              View My Work
            </button>
            <a
              href="/CV.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 rounded-xl border border-gray-300 dark:border-white/15 text-gray-700 dark:text-slate-300 font-semibold text-base hover:border-gray-400 dark:hover:border-white/30 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            {SOCIAL.map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex items-center gap-2 text-gray-500 dark:text-slate-500 hover:text-primary dark:hover:text-primary-light transition-colors duration-200"
              >
                {link.icon}
                <span className="text-sm font-medium hidden sm:inline">{link.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        onClick={() => scrollToSection('featured')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-slate-600 hover:text-primary dark:hover:text-primary-light transition-colors duration-200 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </motion.button>
    </section>
  );
};

export default Hero;
