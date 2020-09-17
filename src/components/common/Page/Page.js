import React, { useRef, useEffect } from 'react';
import { PageWrapper } from './styles';

const Page = ({ title, children }) => {
  const pageRef = useRef();

  useEffect(() => {
    pageRef.current.scrollIntoView();
  });

  return (
    <PageWrapper>
      <div ref={pageRef} className="page">
        <div className="page__inner">
          {title && <h1 className="page__title">{title}</h1>}
          <div className="page__body">{children}</div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
