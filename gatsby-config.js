module.exports = {
  siteMetadata: {
    title: `NiyasRahman`,
    description: `.`,
    author: `@niyasrahman`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "json",
        path: "./data.json"
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NiyasRahman`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `@abhishekjakhar`,
        limit: 200
      }
    }
  ]
};
