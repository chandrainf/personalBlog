import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Author from './Author';
import Content from './Content';
import Tags from './Tags';
import {
 PostWrapper, ArticleWrapper, Back, ArticleDate,
} from './styles';
import { PageTitle } from '../PageTitle';
import { ThemeContext } from '../ThemeContext';

const Post = ({ post }) => {
  const { html, frontmatter, fields } = post;
  const {
 tags, title, date, thumbnail,
} = frontmatter;

  const { tagSlugs } = fields;

  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        return (
          <PostWrapper theme={theme}>
            <ArticleWrapper theme={theme}>
              <PageTitle theme={theme}>{title}</PageTitle>
              <ArticleDate>
                <div>
                  <i>{`${date}`}</i>
                </div>
                <img className="headerImg" alt={thumbnail} src={thumbnail} />
              </ArticleDate>
              <div className="post__content">
                <Content body={html} />
              </div>
              <div className="post__footer">
                <Tags tags={tags} tagSlugs={tagSlugs} />
                <Author theme={theme} />
              </div>
              <Back>
                <Link to={fields.next}>Previous article</Link>
              </Back>
            </ArticleWrapper>
          </PostWrapper>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
