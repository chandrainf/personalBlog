import React from 'react';
import i18next from 'i18next';
import { StaticQuery, graphql } from 'gatsby';
import {
 Layout, Container, SEO, PageTitle, Project,
} from '../components/common';

const ProjectPage = () => (
  <StaticQuery
    query={graphql`
      query {
        sideProjects: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "project" }, draft: { ne: true } } }
          sort: { order: ASC, fields: [frontmatter___date] }
          limit: 20
        ) {
          edges {
            node {
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
      <Layout>
        <Container>
          <SEO title="Project" type="Organization" location="/roject" />
          <PageTitle>{i18next.t('work.sideProjects')}</PageTitle>
          <Project projects={sideProjects} side />
        </Container>
      </Layout>
    )}
  />
);

export default ProjectPage;
