/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  safelist: ["dark"], 
  content: [
		"./pages/**/*.{ts,tsx}",
		"./pages/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./styles/**/*.css",
	],
  theme: {
    extend: {},
  },
  plugins: [],
}
