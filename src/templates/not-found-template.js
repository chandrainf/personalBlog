import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/common/Layout';
import Page from '../components/common/Page';

const NotFoundTemplate = ({ data }) => {
  const { title, subtitle } = data.site.siteMetadata;

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  );
};

export const query = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
`;

export default NotFoundTemplate;
