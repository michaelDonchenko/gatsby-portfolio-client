/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mike dev",
    description:
      "Fullstack web development portfolio created with gatsby and strapi headless CMS.",
    author: "Michael Donchenko",
    titleTemplate: "%s | Mike dev",
    siteUrl: "http://localhost:8000",
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://portfolio-strapi-backend01.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`job`, `project`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Montserrat", "sans-serif"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}
