module.exports = {
  siteMetadata: {
    title: `Landing Page`,
    siteUrl: `https://www.wafflehacks.tech`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/MdxLayout.js"),
        },
        extensions: [".mdx", ".md"],
      },
    },
    "gatsby-plugin-sitemap"
  ],
};
