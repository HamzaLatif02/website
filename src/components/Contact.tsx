import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { ContactForm } from '../types';

// ⚠️  Replace this with your Formspree form ID.
// Create a free form at https://formspree.io and paste the ID here.
const FORMSPREE_ID = 'mqewwoaz';

type Status = 'idle' | 'sending' | 'success' | 'error';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [form, setForm] = useState<ContactForm>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-white dark:bg-navy-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="section-label mb-4">Contact</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 dark:text-white">
            Let's work together.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — copy + links */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
              I'm open to full-time roles, freelance projects, and interesting collaborations.
              Whether you have a specific opportunity or just want to connect — send a message
              and I'll get back to you within 24 hours.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:lhamza1020@gmail.com"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-navy-border bg-gray-50 dark:bg-navy hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <Mail className="text-primary-light w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-500 font-medium mb-0.5">Email</p>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm">
                    lhamza1020@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/latif-hamza/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 dark:border-navy-border bg-gray-50 dark:bg-navy hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-200 group"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <Linkedin className="text-primary-light w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-slate-500 font-medium mb-0.5">LinkedIn</p>
                  <p className="text-gray-900 dark:text-white font-semibold text-sm">
                    linkedin.com/in/latif-hamza
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-navy-border bg-gray-50 dark:bg-navy">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-12 gap-4"
                >
                  <div className="p-4 rounded-full bg-emerald-500/10">
                    <CheckCircle className="text-emerald-400 w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white">
                    Message sent!
                  </h3>
                  <p className="text-gray-600 dark:text-slate-400">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-sm text-primary dark:text-primary-light hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {status === 'error' && (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                      <AlertCircle size={16} className="flex-shrink-0" />
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Your Name"
                      id="name"
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      error={errors.name}
                      onChange={handleChange}
                    />
                    <Field
                      label="Email Address"
                      id="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      error={errors.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the role, project, or collaboration..."
                      className={`w-full px-4 py-3 rounded-xl text-sm resize-none input-dark ${
                        errors.message
                          ? 'border-red-500/50 focus:border-red-500'
                          : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-red-400 text-xs">
                        <AlertCircle size={13} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface FieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Field: React.FC<FieldProps> = ({ label, id, type, placeholder, value, error, onChange }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 rounded-xl text-sm input-dark ${
        error ? 'border-red-500/50 focus:border-red-500' : ''
      }`}
    />
    {error && (
      <p className="mt-1.5 flex items-center gap-1.5 text-red-400 text-xs">
        <AlertCircle size={13} />
        {error}
      </p>
    )}
  </div>
);

export default Contact;
