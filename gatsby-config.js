module.exports = {
  siteMetadata: {
    title: `Central Food`,
    description: `Todos los menùs quue ofrecemos en Central Food`,
    author: `Jefferson Campos <CjDev544/>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `noto serif\:400,700`,
          //`source sans pro\:300,400,400i,700`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Central Food Menú`,
        short_name: `Central Food Menù`,
        start_url: `/`,
        background_color: `#666666`,
        theme_color: `#666666`,
        display: `minimal-ui`,
        icon: `src/images/central-food.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
