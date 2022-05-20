module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backimg': "url('/src/assets/m2_bg.jpg')",
        'whiteimg': "url('/src/assets/m2_bg_sp100.jpg')",
        'topimg': "url('/src/assets/m2_bg_sp101.png')",
        'bottomimg': "url('/src/assets/m2_bg_sp102.png')",
      },
    },
  },
  plugins: [],
}
