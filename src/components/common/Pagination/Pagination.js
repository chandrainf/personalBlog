import React from 'react';
import { Link } from 'gatsby';
import i18next from 'i18next';
import { PaginationWrapper } from './styles';

const Pagination = ({
 prevPagePath, nextPagePath, hasNextPage, hasPrevPage,
}) => {
  const prevClassName = `pagination__prev-link ${
    !hasPrevPage ? 'pagination__prev-link--disable' : ''
  }`;

  const nextClassName = `pagination__next-link ${
    !hasPrevPage ? 'pagination__next-link--disable' : ''
  }`;

  return (
    <PaginationWrapper>
      <div className="pagination">
        <div className="pagination__prev">
          <Link rel="prev" to={prevPagePath} className={prevClassName}>
            {i18next.t('button.prev')}
          </Link>
        </div>
        <div className="pagination__next">
          <Link rel="next" to={nextPagePath} className={nextClassName}>
            {i18next.t('button.next')}
          </Link>
        </div>
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;
