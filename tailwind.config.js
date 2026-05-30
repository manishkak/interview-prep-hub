const typography = require('@tailwindcss/typography')

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        soft: '0 8px 24px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: [typography]
}
