import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Layout } from '../components/common/Layout';
import Post from '../components/common/Post';

const PostTemplate = ({ data }) => {
  const { title: siteTitle, subtitle: siteSubtitle } = data.site.siteMetadata;

  const { title: postTitle, description: postDescription } = data.markdownRemark.frontmatter;
  const metaDescription = postDescription !== null ? postDescription : siteSubtitle;

  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        author
        subtitle
        title
        url
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        tags
        title
        thumbnail
      }
    }
  }
`;

export default PostTemplate;
