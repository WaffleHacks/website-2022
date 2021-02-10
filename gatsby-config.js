module.exports = {
  siteMetadata: {
    title: "Waffle Hacks",
    description: "We're hackers with hearts.",
    siteUrl: "https://wafflehacks.tech",
    // Twitter handle
    author: `@wafflehacks`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://cms.wafflehacks.tech",
        queryLimit: 1000,
        contentTypes: [],
        singleTypes: [],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Waffle Hacks`,
        start_url: `/`,
        background_color: `#9d6832`,
        theme_color: `#f1af49`,
        display: `browser`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
