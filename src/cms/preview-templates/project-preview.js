import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Post from '../../components/common/Post';
import { Provider } from '../../components/common';

const PostPreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);
  const tags = entry.getIn(['data', 'tags']);
  const date = entry.getIn(['data', 'date']);
  // post
  const post = {
    html: body,
    frontmatter: {
      tags,
      title,
      date: moment(date).format('DD-MM-YYYY'),
    },
    fields: {
      // tagSlugs: tags.split(','),
      tagSlugs: tags,
      tags,
      next: '',
    },
  };
  return (
    <Provider>
      <div className="post">
        <Post post={post} />
      </div>
    </Provider>
  );
};

PostPreview.propTypes = {
  entry: PropTypes.any,
  widgetFor: PropTypes.func,
};

export default PostPreview;
