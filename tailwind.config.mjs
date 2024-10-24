import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter Variable', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        /**
         * 'steel-blue': '#3d5a80',
        'light-blue-sky': '#98c1d9',
        'pale-aqua': '#e0fbfc',
        'sunset-orange': '#ee6c4d',
        'midnight-navy': '#293241',
        'primary-dark': '#273b59'
         */
        child: {
          primary: '#FFB6C1',  // Colores suaves para niños
          background: '#FFF0F5',
        },
        teen: {
          primary: '#ADD8E6',  // Colores frescos para adolescentes
          background: '#F0F8FF',
        },
        adult: {
          primary: '#4682B4',  // Colores más formales para adultos
          background: '#E6E6FA',
        },
      }
    },
    fontFamily: {
      sans: ['Figtree', 'sans-serif']
    }
  },
  plugins: []
}
