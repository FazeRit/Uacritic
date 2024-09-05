// tailwind.config.js

import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                'sm': '280px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            },
            colors: {
                buttonPrimary: '#3FC1C9',
                primaryText: '#364F6B',
                inputHeader: '#FFFDFD',
                bgMain: '#F5F5F5',
                lineMain: '#646363'
            },
            boxShadow: {
                'text': '2px 2px 4px rgba(0, 0, 0, 0.5)',
            },
        },
    },
    plugins: [],
};

export default config;