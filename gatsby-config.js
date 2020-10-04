module.exports = {
  siteMetadata: {
    title: `Maria's Recipes`,
    description: `A place to keep recipes so I don't forget them`,
    author: `Maria Aveiro`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-plugin-sass",
            options: {
              data: `@import "${__dirname}/src/styles";`,
            },
          },
          {
            resolve: "gatsby-remark-relative-images",
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              maxWidth: 300,
              name: `gatsby-starter-default`,
              short_name: `starter`,
              start_url: `/`,
              background_color: `#033F63`,
              theme_color: `#033F63`,
              display: `minimal-ui`,
              icon: `src/images/logo@2x.png`,
            },
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
