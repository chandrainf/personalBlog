const path = require('path');
const _ = require('lodash');
const createCategoriesPages = require('./pagination/create-categories-pages.js');
const createTagsPages = require('./pagination/create-tags-pages.js');
const createPostsPages = require('./pagination/create-posts-pages.js');

const createPages = async({ graphql, actions }) => {
  const { createPage } = actions;

  // 404
  createPage({
    path: '/404',
    component: path.resolve('./src/pages/404.js'),
  });

  // Tags list
  createPage({
    path: '/tags',
    component: path.resolve('./src/templates/tags-list-template.js'),
  });

  // Posts and pages from markdown
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              next
              template
              thumbnail
            }
          }
        }
      }
    }
  `);

  const { edges } = result.data.allMarkdownRemark;

  _.each(edges, edge => {
    let page = {};
    const { frontmatter } = edge.node;
    const slug = `/${frontmatter.template}/${_.kebabCase(frontmatter.title)}/`;
    switch (_.get(edge, 'node.frontmatter.template')) {
      case 'post':
        page = {
          path: slug,
          component: path.resolve('./src/templates/post-template.js'),
          context: { slug },
        };
        break;
      case 'project':
        page = {
          path: slug,
          component: path.resolve('./src/templates/project-template.js'),
          context: { slug },
        };
        break;
      case 'page':
        page = {
          path: slug,
          component: path.resolve('./src/templates/page-template.js'),
          context: { slug },
        };
        break;
      default:
        page = {
          path: slug,
          component: path.resolve('./src/templates/page-template.js'),
          context: { slug },
        };
    }
    createPage(page);
  });

  // Feeds
  await createTagsPages(graphql, actions);
  await createPostsPages(graphql, actions);
};

module.exports = createPages;
