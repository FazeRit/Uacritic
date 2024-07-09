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
        buttonPrimary:'#3FC1C9',
        primaryText:'#364F6B',
        inputHeader:'#FFFDFD',
        bgMain:'#F5F5F5'
      }
    },
    boxShadow: {
      'text': '2px 2px 4px rgba(0, 0, 0, 0.5)'
    },
  },
  plugins: [],
};
export default config;
