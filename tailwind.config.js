/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0E13',
          soft: '#11151C',
          raised: '#171C25',
          line: '#232A36',
        },
        paper: {
          DEFAULT: '#EDEFF2',
          muted: '#9AA4B2',
          faint: '#5B6472',
        },
        amber: {
          DEFAULT: '#F5A623',
          soft: '#FBCB7C',
        },
        mint: {
          DEFAULT: '#6EE7B7',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
