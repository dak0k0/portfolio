import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light_evergreen': '#C7E2DB',
        'evergreen': '#016145',
        'dark_evergreen': '#023F2F',
        'dark_gray': '#24201F',
        'offwhite': '#EFECE7'
      },

      animation: {
        flip: 'flip 1s forwards'
      },

      keyframes: {
        flip: {
          '0%' : { transform: 'rotate3d(-1, 1, 0, 0deg)'},
          '100%' : { transform: 'rotate3d(-1, 1, 0, 180deg)'}
        }
      },

      screens: {
        'normal-phones': '400px'
      }
    },
  },
  plugins: [
    require('tailwindcss-3d'),
    require("tailwindcss-animation-delay")
  ],
};
export default config;
