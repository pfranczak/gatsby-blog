module.exports = {
  siteMetadata: {
    title: 'Blog',
    description: 'IT blog'
  },
  plugins: [
    `gatsby-transformer-remark`, {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    }
  ]
}
