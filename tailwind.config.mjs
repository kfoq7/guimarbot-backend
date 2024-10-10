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
        'steel-blue': '#3d5a80',
        'light-blue-sky': '#98c1d9',
        'pale-aqua': '#e0fbfc',
        'sunset-orange': '#ee6c4d',
        'midnight-navy': '#293241',
        'primary-dark': '#273b59'
      }
    },
    fontFamily: {
      sans: ['Figtree', 'sans-serif']
    }
  },
  plugins: []
}
