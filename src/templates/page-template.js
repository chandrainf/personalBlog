import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/common/Layout';
// import Page from '../components/common/Page';

const PageTemplate = ({ data }) => {
  // const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  // const { title: pageTitle, description: pageDescription } = data.markdownRemark?.frontmatter;

  // const { html: pageBody } = data.markdownRemark;

  // const metaDescription = pageDescription !== null ? pageDescription : siteSubtitle;

  return (
    <Layout title="" description="">
      {/* <Page title={pageTitle}>
        <div dangerouslySetInnerHTML={{ __html: pageBody }} />
      </Page> */}
    </Layout>
  );
};

export const query = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
      }
    }
  }
`;

export default PageTemplate;
