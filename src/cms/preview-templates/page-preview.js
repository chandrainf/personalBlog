import React from 'react';
import { Provider } from '../../components/common';

const PagePreview = ({ entry, widgetFor }) => {
  const body = widgetFor('body');
  const title = entry.getIn(['data', 'title']);

  return (
    <Provider>
      <div className="page">
        <h1 className="page__title">{title}</h1>
        <div className="page__body">{body}</div>
      </div>
    </Provider>
  );
};

export default PagePreview;
