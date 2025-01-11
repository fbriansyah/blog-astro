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
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        // Dark mode custom colors
        dark: {
          bg: '#0f172a',
          surface: '#1e293b',
          primary: '#38bdf8',
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
