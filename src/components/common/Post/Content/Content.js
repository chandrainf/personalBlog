import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper } from './styles';

const Content = ({ body }) => (
  <ContentWrapper>
    <div className="content">
      {typeof body === 'string' ? (
        <div className="content__body" dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <div className="content__body">{body}</div>
      )}
    </div>
  </ContentWrapper>
);

Content.propTypes = {
  body: PropTypes.string,
};

export default Content;
