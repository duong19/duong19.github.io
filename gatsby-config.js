/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const config = require("./data/config.json");
const path = require("path");
module.exports = {
  /* Your site config here */
  siteMetadata: config,

  
  plugins: [
    
    'gatsby-plugin-sass',
    "gatsby-plugin-antd",
    "gatsby-plugin-react-svg",
    // {
    //   resolve: "gatsby-plugin-react-svg",
    //   options: {
    //     rule: {
    //       include: `${__dirname}/src/assets/svg/` // See below to configure properly
    //     }
    //   }
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${__dirname}/src/assets/images/`,
      },
  },
  `gatsby-plugin-react-helmet`,
   
  {
    resolve: `gatsby-transformer-remark`,
    options: {
        plugins: [
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                className: `link-class`
              },
            },
            {
              resolve: `gatsby-remark-katex`,
              options: {
                // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                strict: `ignore`
              }
            },
            {
                resolve: `gatsby-remark-images`,
                options: {
                    maxWidth: 590,
                    showCaptions: [‘title’, ‘alt’],
                    markdownCaptions: true,
                    withWebp: true,
                    linkImagesToOriginal: false
                },
            },
            {
                resolve: `gatsby-remark-prismjs`,
                options: {
                    classPrefix: "language-",
                    inlineCodeMarker: "~",
                    aliases: {},
                    showLineNumbers: true,
                    noInlineHighlight: false,
                },
            },
        ],
    },
  },
  `gatsby-remark-reading-time`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: 'data',
      path: `${__dirname}/data/posts`
    }
  },
  {
    resolve: `gatsby-plugin-typography`,
    options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
    },
  },
   
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`
  ],
}
