/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'p-bg': '#050505',
        'p-accent': '#1B9AAA',
        'p-surface': '#DDDBCB',
        'p-bg-alt': '#F5F1E3',
        'p-text': '#FFFFFF',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      screens: {
        xs: '475px',
      },
    },
  },
  plugins: [],
};
