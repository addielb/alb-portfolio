/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'lt-yellow': '#fff5d8',
      'dark-green': '#263605',
      'md-yellow': '#f6d36a',
      'orange': '#bb7328',
      'dark-yellow': '#bd920e'
    }
  },
  plugins: [],
  corePugins: {
    preflight: false,
  }
}

