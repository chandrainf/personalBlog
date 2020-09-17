import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeContext, Provider, Subscribe } from '..';
import { Header, Footer } from '../../theme';
import 'antd/dist/antd.css';
import './layout.css';

import { MainWrapper } from './main';

export const Layout = ({ children }) => {
  return (
    <Provider>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <MainWrapper theme={theme}>
            <Header />
            <LayoutStyled theme={theme}>
              {children}
              <Subscribe />
            </LayoutStyled>
            <Footer />
          </MainWrapper>
        )}
      </ThemeContext.Consumer>
    </Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

const LayoutStyled = styled.div`
  width: 100%;
  padding-top: 7rem;

  ${({ theme }) => theme === 'dark' && 'background: #212121;'};
`;

export default Layout;
