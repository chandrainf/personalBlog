import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { FeedWrapper } from './styles';

const Feed = ({ edges }) => (
  <FeedWrapper>
    <div className="feed">
      {edges.map(edge => (
        <div className="feed__item shadow-light" key={edge.node.fields.slug}>
          <div className="feed__item-meta">
            <time
              className="feed__item-meta-time"
              dateTime={moment(edge.node.frontmatter.date).format('MMMM D, YYYY')}
            >
              {moment(edge.node.frontmatter.date).format('MMMM YYYY')}
            </time>
            <span className="feed__item-meta-divider" />
          </div>
          <h2 className="feed__item-title">
            <Link className="feed__item-title-link" to={edge.node.fields.slug}>
              {edge.node.frontmatter.title}
            </Link>
          </h2>
          <p className="feed__item-description">{edge.node.frontmatter.description}</p>
          <Link className="feed__item-readmore" to={edge.node.fields.slug}>
            Read
          </Link>
        </div>
      ))}
    </div>
  </FeedWrapper>
);

export default Feed;
