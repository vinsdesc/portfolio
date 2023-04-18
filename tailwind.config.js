/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,html}",
  ],
  theme: {
    fontFamily: {
      'bold': ['neue-montreal-bold', 'ui-sans-serif', 'system-ui'],
      'medium': ['neue-montreal-medium', 'ui-sans-serif', 'system-ui'],
      'regular': ['neue-montreal-regular', 'ui-sans-serif', 'system-ui'],
      'light': ['neue-montreal-light', 'ui-sans-serif', 'system-ui'],
    },
    cursor: {
      pointer: 'url(/assets/img/cursor.svg), pointer',
    },
    extend: {},
    borderWidth: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
  plugins: [],
}