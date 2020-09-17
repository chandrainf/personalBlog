import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { TagWrapper } from './styles';

const Tags = ({ tags, tagSlugs }) => {
  if (Array.isArray(tagSlugs)) {
    return (
      <TagWrapper>
        <div className="tags">
          <ul className="tags__list">
            {tagSlugs.map((slug, i) => (
              <li className="tags__list-item" key={tags[i]}>
                <Link to={slug} className="tags__list-item-link">
                  {tags[i]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </TagWrapper>
    );
  }
  return <span />;
};

Tags.propTypes = {
  tags: PropTypes.array,
  tagSlugs: PropTypes.array,
};

export default Tags;
