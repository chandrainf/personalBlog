import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Project } from '../../../common';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        sideProjects: allMarkdownRemark(
          filter: {
            frontmatter: {
              template: { eq: "project" }
              draft: { ne: true }
              isHighlight: { ne: false }
            }
          }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 20
        ) {
          edges {
            node {
              id
              excerpt(pruneLength: 230)
              fields {
                slug
              }
              frontmatter {
                name
                title
                logo
                description
                category {
                  id
                  frontmatter {
                    icon
                  }
                }
                date(formatString: "MMM DD, YYYY")
                thumbnail
                screenShort
              }
            }
          }
        }
      }
    `}
    render={({ sideProjects }) => (
      <Project projects={sideProjects} color="#000" side footerSide="/project" />
    )}
  />
);
