import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: "#5F30A0",
        primary_hover: "#639A28B3", 
        secondary: "#381766", 
        addresscard:"#F9F6FE", 
        productcard:"#ECE7F4", 
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 30s linear infinite',
      },
      fontFamily: {
      baloo: ['Baloo', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      auralyess: ['Auralyess', 'sans-serif'], 
      segoeui: ['sf-pro-rounded', 'sans-serif'], 
    },
    },
  },
  plugins: [],
} satisfies Config;
