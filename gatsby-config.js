require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")
const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
)
module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: `Royale Station 13`,
    description: `Space Station 13 Battle Royale - Fight to the death!`,
    author: `itsmeow`,
  },
  flags: {
    FAST_DEV: true,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx"],
        exclude: ["node_modules", ".cache", "public"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    /*{
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: ``,
        head: true,
        anonymize: false,
      },
    },*/
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `babel-preset-gatsby`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Royale Station 13`,
        short_name: `RoyaleStation`,
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#121212`,
        display: `standalone`,
        icon: `src/data/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
}
