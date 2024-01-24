/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "1280px",
    },
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
    },
    fontSize: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      44: "2.75rem",
      48: "3rem",
      56: "3.5rem",
      64: "4rem",
    },
    lineHeight: {
      tight: "1.15",
      snug: "1.35",
      loose: "1.65",
    },
    letterSpacing: {
      tight: "-0.01em",
      normal: "0em",
      loose: "0.02em",
    },
    colors: {
      transparent: "transparent",
      "neutral-bg": "rgba(250, 250, 250)",
      black: "rgb(0,0,0)",
      "neutral-white": "rgba(255, 255, 255)",
      "neutral-black": "rgba(0, 27, 51)",
      primaryBackground: "rgb(21, 21, 21)",
      "primary-blue": "rgba(0, 133, 255)",
      "primary-hover": "rgba(0, 106, 251)",
      green: "#04A971",
      zinc: "rgb(250,250,250)",
      grey: "rgba(0, 27, 51,.3)",
      "green-ltp": "rgba(4, 169, 113, 1)",
      "red-ltp": "rgba(222, 32, 32, 1)",
      "teal":  "rgb(20 184 166)"
      
    },
    opacity: {
      4: ".04",
      8: ".08",
      12: ".12",
      16: ".16",
      20: ".20",
      24: ".24",
      32: ".32",
      40: ".40",
      60: ".60",
      80: ".80",
      100: "1.00",
    },
    extend: {
      maxWidth: {
        xs: "calc(414px + (6.25% * 2))",
        md: "768px",
        lg: "1280px",
      },
      spacing: {
        mobile: "6.25%",
        128: "8rem",
        76: "4.75rem",
        30: "1.875rem",
        60: "3.75rem",
        120: "7.5rem",
      },
      borderRadius: {
        16: "16px",
        20: "20px",
        24: "24px",
        32: "32px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
