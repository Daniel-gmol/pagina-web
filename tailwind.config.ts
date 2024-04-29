import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CD163F',
        secondary: {
          'gold': '#F9C20A',
          'orange': '#F58025',
          'garnet': '#8D0034',
          'purple': '#5A2D81',
          'blue': '#003E7E',
          'light-blue': '#00AEEF',
          'green': '#77C14C',
          'grey': '#E1EBF4',
        },
      },
      fontFamily: {
        'barlow-thin': ['Barlow Thin', 'sans-serif'],
        'barlow-light': ['Barlow Light', 'sans-serif'],
        'barlow-regular': ['Barlow Regular', 'sans-serif'],
        'barlow-semibold': ['Barlow Semibold', 'sans-serif'],
        'barlow-bold': ['Barlow Bold', 'sans-serif'],
        'barlow-black': ['Barlow Black', 'sans-serif'],
        'barlow-italic': ['Barlow', 'sans-serif', 'italic'],
        'barlow-condensed-regular': ['Barlow Condensed Regular', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-linear-primary-1': 'linear-gradient(var(--primary), var(--secondary-orange))',
        'gradient-linear-primary-2': 'linear-gradient(var(--primary), var(--secondary-blue))',
        'gradient-linear-primary-3': 'linear-gradient(var(--primary), var(--secondary-garnet))',
        'gradient-linear-secondary-1': 'linear-gradient(var(--secondary-blue), var(--secondary-purple))',
        'gradient-linear-secondary-2': 'linear-gradient(var(--secondary-blue), var(--secondary-garnet))',
        'gradient-linear-secondary-3': 'linear-gradient(var(--secondary-blue), var(--secondary-green))',
        'gradient-linear-secondary-4': 'linear-gradient(var(--secondary-blue), var(--secondary-light-blue))',
        'gradient-linear-secondary-5': 'linear-gradient(var(--secondary-light-blue), var(--secondary-purple))',
        'gradient-linear-secondary-6': 'linear-gradient(var(--secondary-light-blue), var(--secondary-gree))',
        'gradient-linear-secondary-7': 'linear-gradient(var(--secondary-gold), var(--secondary-orange))',
        'gradient-linear-tonal-1': 'linear-gradient(white, var(--secondary-grey))',
        'gradient-linear-tonal-2': 'linear-gradient(var(--secondary-grey), black)',
      },
    },
  },
  plugins: [],
};
export default config;
