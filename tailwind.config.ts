import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#223976",
        oldPrimary: "#023047",
        secondary: "#28A44A",
        header: "#111827",
        bgGraySection: "#f9f9f9",
        placeholder: "#02304780"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-gradient": "linear-gradient(40deg, rgba(0,157,78,0.1881127450980392) 0%, rgba(248,250,252,1) 19%);",
      },
      boxShadowColor: {
        "myShadow": '#00000080',
        "myShadow2": '#0000001A'
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(10px)' },
        },
      },
      animation: {
        breathe: 'breathe 3s ease-in-out infinite alternate-reverse both',
      }, 
    },
    screens: {
      xs: '280px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
};
export default config;
