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
                background: {
                    DEFAULT: "#F3F3F3",
                    secondary: "#E9E9E9",
                },
                text: {
                    primary: "#212121",
                    secondary: "#3E3E3D",
                },
                accent: {
                    DEFAULT: "#90F0BC",
                },
                success: "#2e7d32",
                warning: "#f57c00",
                error: "#d32f2f",
                border: "#E9E9E9",
            },
            fontFamily: {
                sans: ["var(--font-manrope)", "sans-serif"],
                serif: ["var(--font-playfair)", "serif"],
            },
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
        },
    },
    plugins: [],
};
export default config;
