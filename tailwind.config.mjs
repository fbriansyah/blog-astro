/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
      },
      colors: {
        // Light mode colors
        primary: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        // Dark mode colors
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          primary: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
          secondary: '#94a3b8',
          accent: '#f472b6',
          text: '#f1f5f9',
        }
      },
      backgroundColor: {
        light: '#ffffff',
        dark: '#0f172a',
      },
      textColor: {
        light: '#1e293b',
        dark: '#f1f5f9',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
