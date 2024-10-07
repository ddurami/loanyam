import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f0f0f0',
          text: '#333333',
          cardBg: '#ffffff',
          cardText: '#1a1a1a',
          cardHover: '#e6e6e6',
          dropdownBg: '#ffffff',
          dropdownText: '#333333',
          dropdownHover: '#e6e6e6',
        },
        dark: {
          background: '#1a1a1a',
          text: '#ffffff',
          cardBg: '#2c2c2c',
          cardText: '#e0e0e0',
          cardHover: '#3a3a3a',
          dropdownBg: '#2c2c2c',
          dropdownText: '#e0e0e0',
          dropdownHover: '#3a3a3a',
        },
        headerFooter: {
          background: '#2c3e50',
          text: '#ecf0f1',
          hover: '#34495e',
        },
      },
      zIndex: {
        '60': '60',
      },
    },
  },
  plugins: [],
};

export default config;
