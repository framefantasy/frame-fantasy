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
    },
  },
  plugins: [],
};
