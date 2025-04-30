/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green-light': '#8BC34A',
        'primary-green-dark': '#4CAF50',
        'primary-teal-light': '#00BCD4',
        'primary-teal-dark': '#009688',
        'primary-blue-light': '#2196F3',
        'primary-blue-dark': '#3F51B5',
        'primary-indigo-light': '#673AB7',
        'primary-indigo-dark': '#5C6BC0',
        'primary-deepblue-light': '#3F51B5',
        'primary-deepblue-dark': '#512DA8',
      },
    },
  },
  plugins: [],
}
