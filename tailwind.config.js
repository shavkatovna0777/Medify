/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: { max: "1024px" },
      slg: { max: "1000px" },
      md: { max: "768px" },
      sm: { max: "500px" },
      xs: { max: "370px" },
    },
    extend: {
      boxShadow: {
        'custom-blue': '10px 7px 30px 0px rgba(0, 42, 106, 0.1)',
      },
      lineHeight: {
        60: "60px",
        30: "30px",
      },
      colors: {
        blue: "#54CED4",
        orange: "#FF9E21",
        darkBlue: "#0A3380",
        lightBlue: "#32ABF3",
        gray: "#9FA6B1",
      },
      transitionProperty: {
        custom: "all, background-color",
      },
      transitionDelay: {
        300: "300ms",
        600: "600ms",
        900: "900ms",
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateX(15%)",
            opacity: "0",
            scale: "1.1",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
            scale: "1",
          },
        },
      },
      animation: {
        "slide-in-1": "slideIn 500ms ease-out 100ms forwards",
        "slide-in-2": "slideIn 500ms ease-out 200ms forwards",
        "slide-in-3": "slideIn 500ms ease-out 300ms forwards",
        slideInLeft: 'slideInLeft 300ms ease-out',
      },
    },
  },
  plugins: [],
};
