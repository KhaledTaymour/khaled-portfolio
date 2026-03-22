/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Background layers
        'void-black': '#090A0F',
        'abyss': '#0d0e13',
        'editor': '#121318',
        'editor-alt': '#1c1e26',
        'elevated': '#13151D',
        'border-dim': '#222436',
        'dim-surface': '#38393f',
        // Text hierarchy
        'lavender': '#A6ACCD',
        'faded-slate': '#4B526D',
        'ghost-green': '#efffe3',
        // Accents
        'terminal-green': '#39FF14',
        'cyber-cyan': '#00E5FF',
        'warm-amber': '#FF9E64',
        // Syntax highlighting
        'syn-keyword': '#c678dd',
        'syn-var': '#e06c75',
        'syn-string': '#98c379',
        'syn-fn': '#61afef',
        'syn-comment': '#5c6370',
        'syn-attr': '#d19a66',
        'syn-type': '#E5C07B',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        code: ['"Fira Code"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0px',
        none: '0px',
        sm: '0px',
        md: '0px',
        lg: '0px',
        xl: '0px',
        '2xl': '0px',
        full: '9999px',
      },
      boxShadow: {
        'neon-green': '0 0 8px rgba(57, 255, 20, 0.15)',
        'neon-green-md': '0 0 12px rgba(57, 255, 20, 0.3)',
        'neon-cyan': '0 0 8px rgba(0, 229, 255, 0.2)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(5px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
