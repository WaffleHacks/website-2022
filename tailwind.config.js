// See https://next.tailwindcss.com/docs/configuration for details

const production = process.env.NODE_ENV === "production"

module.exports = {
  purge: production,
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-pattern": "url('../images/background-overlay6.png')",
      }),
    },
    colors: require("tailwindcss/colors"),
  },
  variants: {},
  plugins: [],
}
