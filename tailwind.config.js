/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'sorbus': {
        '50': '#fffaec',
        '100': '#fff3d3',
        '200': '#ffe4a5',
        '300': '#ffce6d',
        '400': '#ffae32',
        '500': '#ff930a',
        '600': '#ff7b00',
        '700': '#cc5902',
        '800': '#a1450b',
        '900': '#823b0c',
        '950': '#461b04',
      },
      'blue': {
        '50': '#e8f7ff',
        '100': '#d5efff',
        '200': '#b3dfff',
        '300': '#85c7ff',
        '400': '#56a0ff',
        '500': '#2f79ff',
        '600': '#0c4bff',
        '700': '#0040ff',
        '800': '#063bcd',
        '900': '#103a9f',
        '950': '#0a205c',
    },
    },
  },
  plugins: [],
}

