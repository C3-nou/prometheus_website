/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'gray-soft': '#EAEAEA',
      'gray-middle': '#B5B5B5',
      'gray-hard': '#494949',
      'black-prom': '#1D2120',
      'green-soft': '#54FFCA',
      'green-middle': '#44C69B',
      'green-hard': '#2F7F62'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
