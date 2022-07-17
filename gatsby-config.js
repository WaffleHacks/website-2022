module.exports = {
  siteMetadata: {
    title: 'WaffleHacks',
    description: "We're hackers with hears",
    siteUrl: 'https://wafflehacks.org'
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
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-react-helmet",
  ],
};
