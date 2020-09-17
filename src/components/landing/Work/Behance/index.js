import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { BehanceIcon, Project } from '../../../common';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        projects: allBehanceYaml {
          edges {
            node {
              id
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 630) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
              link
              description
            }
          }
        }
      }
    `}
    render={({ projects }) => (
      <Project
        icon={BehanceIcon}
        title="Shared on Behance"
        projects={projects}
        link="https://www.behance.net/ismail16sm9991"
        color="rgb(0, 119, 255)"
      />
    )}
  />
);
