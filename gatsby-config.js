const fs = require('fs')
const _ = require('lodash')
const fetch = require('node-fetch')
const { buildClientSchema } = require('graphql')
const { createHttpLink } = require('apollo-link-http')
const config = require('./data/Config')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

if (!process.env.GITHUB_TOKEN) {
  require('dotenv').config({
    path: '.env',
  })
}

module.exports = {
  siteMetadata: {
    siteUrl: config.url,
    url: config.url,
    title: config.title,
    subtitle: config.subtitle,
    copyright: config.copyright,
    disqusShortname: config.disqusShortname,
    menu: config.menu,
    author: config.author,
    rssMetadata: {
      site_url: 'https://doananh234.com',
      siteUrl: config.url,
      feed_url: `${config.url}${config.siteRss}`,
      title: 'doananh234 | Blog',
      description: config.defaultDescription,
      image_url: 'https://doananh234.com/static/favicon/logo-512.png',
      author: config.author,
      copyright: `${config.defaultTitle} © ${new Date().getFullYear()}`,
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        createLink: () =>
          createHttpLink({
            uri: 'https://api.github.com/graphql',
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
        createSchema: async () => {
          const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
          return buildClientSchema(json.data)
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-mailchimp',
    //   options: {
    //     endpoint: process.env.MC_ENDPOINT,
    //   },
    // },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://doananh234.com',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `{
					site {
						siteMetadata {
              siteUrl,
              url,
              title,
              subtitle,
              copyright,
              disqusShortname,
              author,
							rssMetadata {
								site_url
								title
								author
								copyright
								description
							}
						}
					}
				}`,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: `${site.siteMetadata.rssMetadata.site_url}/${
                    edge.node.frontmatter.template
                  }/${_.kebabCase(edge.node.frontmatter.title)}/`,
                  guid: `${site.siteMetadata.rssMetadata.site_url}/${
                    edge.node.frontmatter.template
                  }/${_.kebabCase(edge.node.frontmatter.title)}/`,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                })
              })
            },
            query: `{
							allMarkdownRemark(
								limit: 1000,
								sort: { order: DESC, fields: [frontmatter___date] },
              ) {
								edges {
									node {
										excerpt
										html
										frontmatter {
                      title
                      date(formatString: "MMMM DD, YYYY")
                      template
                      draft
                      description
                      thumbnail
										}
									}
								}
							}
						}`,
            output: config.siteRss,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'posts',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1080,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './static/favicon/logo-512x512.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
          {
            site {
              siteMetadata {
                url
                siteUrl
              }
            }
            allSitePage(
              filter: {
                path: { regex: "/^(?!/404/|/404.html|/dev-404-page/)/" }
              }
            ) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `,
        output: '/sitemap.xml',
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => ({
            url: site.siteMetadata.url + edge.node.path,
            changefreq: 'daily',
            priority: 0.7,
          })),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'doananh234',
        short_name: 'doananh234',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicon/logo-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/favicon/logo-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
  mapping: {
    'MarkdownRemark.frontmatter.category': 'MarkdownRemark.frontmatter.title',
  },
}
