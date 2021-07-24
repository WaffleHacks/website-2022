// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  purge: false,
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../images/background-overlay.png')",
      },
    },
    colors: require("tailwindcss/colors"),
  },
  variants: {},
  plugins: [],
}
