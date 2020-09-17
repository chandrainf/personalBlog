import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import { AuthorWrapper } from './styles';
import { SocialShare } from '../../SocialShare';

export const PureAuthor = ({ data }) => {
  const { author } = data.site.siteMetadata;
  const { frontmatter } = data.site;

  return (
    <AuthorWrapper>
      <div className="author">
        <div className="author__bio">
          {author}
          <SocialShare {...frontmatter} />
        </div>
      </div>
    </AuthorWrapper>
  );
};

PureAuthor.propTypes = {
  data: PropTypes.object,
};

export const Author = props => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author
          }
        }
      }
    `}
    render={data => <PureAuthor {...props} data={data} />}
  />
);

export default Author;
