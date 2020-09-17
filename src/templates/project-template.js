import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ThemeKuuho from './projectThemes/themeKuuho';

const ProjectTemplate = ({ data }) => {
  return <ThemeKuuho project={data.markdownRemark} />;
};

ProjectTemplate.propTypes = {
  data: PropTypes.object,
};

export const query = graphql`
  query ProjectBySlug($slug: String!) {
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
        name
        subTitle
        title
        date
        tags
        description
        logo
        screenShort
        thumbnail
        links {
          android
          ios
          web
        }
        contactInfo {
          address
          email
          phoneNubmer
        }
        intro {
          title
          description
        }
        service {
          title
          description
        }
        feature {
          title
          description
        }
      }
    }
  }
`;

export default ProjectTemplate;
