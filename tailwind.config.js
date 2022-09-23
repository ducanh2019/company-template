/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html',],
  theme: {
    extend: {},
    backgroundColor: {
      'bg-search' : 'rgba(255,255,255,.2)'
    }
  },
  plugins: [],
}
