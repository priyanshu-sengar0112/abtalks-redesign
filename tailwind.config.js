/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ab: {
          bg: '#0a0f1a',
          surface: '#111827',
          card: '#1a2234',
          border: '#243049',
          muted: '#8b9ab8',
          text: '#e8edf5',
          accent: '#ff6b35',
          'accent-hover': '#ff8555',
          glow: '#ff6b3540',
          success: '#22c55e',
          track: {
            web: '#3b82f6',
            ai: '#a855f7',
            dsa: '#f59e0b',
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
