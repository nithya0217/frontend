import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      black: '#000000',
      gray: {
        50: '#fafafa',
        100: '#f5f5f5',
        150: '#f0f0f0',
        200: '#eeeeee',
        300: '#e0e0e0',
        400: '#bdbdbd',
        500: '#9e9e9e',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
