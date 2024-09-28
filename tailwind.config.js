module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E9BC73",
        secondary: "#1F1F1F",
        accent: "#323232",
      },
      boxShadow: {
        topbar: "inset 5px 5px 36px #0c0c0c, inset -5px -5px 36px #323232",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
        "10xl": "104rem",
      },
      minHeight: {
        screen: "100vh",
      },
      backgroundColor: {
        transparent: "transparent",
      },
      textShadow: {
        "glow-white-sm": "0 0 8px #ffffff",
        "glow-white-md": "0 0 10px #ffffff",
        "glow-white-lg": "0 0 12px #ffffff",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow-white-sm': {
          textShadow: '0 0 8px #ffffff',
        },
        '.text-shadow-glow-white-md': {
          textShadow: '0 0 10px #ffffff',
        },
        '.text-shadow-glow-white-lg': {
          textShadow: '0 0 12px #ffffff',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};
