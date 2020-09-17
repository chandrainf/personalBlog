import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import {
 Layout, Container, SEO, PageTitle, CardPost,
} from '../components/common';

const Blog = () => (
  <StaticQuery
    query={graphql`
      query BlogQuery {
        allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 20
        ) {
          edges {
            node {
              excerpt(pruneLength: 230)
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "MMM DD, YYYY")
                thumbnail
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Container>
          <SEO title="Blog" type="Organization" location="/blog" />
          <PageTitle>Articles</PageTitle>
          <Row>
            {data.allMarkdownRemark.edges.map(post => (
              <CardPost key={post.node.fields.slug} {...post} />
            ))}
          </Row>
        </Container>
      </Layout>
    )}
  />
);

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  &:after {
    content: '';
    max-width: 32%;
    width: 100%;

    @media (max-width: 960px) {
      content: unset;
    }
  }
`;

export default Blog;
