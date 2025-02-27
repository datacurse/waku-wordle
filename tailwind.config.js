/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: { DEFAULT: '#161512', dark: '#13120e' },
        popup: '#3F3F3F',
        sf: {
          DEFAULT: '#818384',
          active: '#424749',
          right: {
            DEFAULT: '#538d4e',
            active: '#396835',
          },
          misplaced: {
            DEFAULT: '#b59f3b',
            active: '#8e7b33',
          },
          wrong: {
            DEFAULT: '#3a3a3c',
            active: '#333334',
          },
        },
        text: {
          DEFAULT: '#B3B3B3',
          light: '#FFFFFF',
          dark: '#656463'
        },
        board: {
          dark: {
            DEFAULT: '#B58863',
            highlighted: '#AAA23A',
          },
          light: {
            DEFAULT: '#F0D9B5',
            highlighted: '#CDD26A',
          },
        },
        timer: {
          DEFAULT: '#262626',
          green: '#384722',
          red: '#502826',
        },
        online: '#759900',
        check: '#759900',
        cross: '#AC524F',
      }
    },
  },
};
