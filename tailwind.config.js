
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './pages/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  theme: { extend: { colors: { brand: { 500: '#7c3aed', 400: '#8b5cf6' } } } },
  plugins: [],
}
