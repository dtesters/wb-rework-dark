/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './components/**/*.{js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'primary': 'rgb(var(--color-primary) / <alpha-value>)',
        'secondary': 'rgb(var(--color-secondary) / <alpha-value>)',
        'accent': 'rgb(var(--color-accent) / <alpha-value>)',
        'text-main': 'rgb(var(--color-text-main) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        'border-color': 'rgb(var(--color-border-color) / <alpha-value>)',
      },
      // --- ADD THIS NEW SECTION FOR THE GLOW EFFECT ---
      boxShadow: {
        'glow': '0 0 15px 0 rgb(var(--color-accent) / 0.5)',
      }
    }
  },
  plugins: [],
  darkMode: "class"
}