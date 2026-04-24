/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'p-bg': '#04080F',
        'p-accent': '#507DBC',
        'p-surface': '#A1C6EA',
        'p-bg-alt': '#BBD1EA',
        'p-muted': '#DAE3E5',
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
