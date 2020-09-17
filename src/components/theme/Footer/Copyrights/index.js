import React from 'react';
import { Link } from 'gatsby';
import { SmallerContainer, GithubIcon, ThemeContext } from '../../../common';
import gatsbyIcon from '../../../../../static/footer/gatsby.svg';
import netlifyIcon from '../../../../../static/footer/netlify.svg';
import { Wrapper, Links, Item } from './styles';

const Copyrights = () => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper as={SmallerContainer} theme={theme}>
        <Links>
          ©
          {' '}
          <Item as={Link} to="/">
            doananh234
          </Item>
          {' '}
          2016-
          {`${new Date().getFullYear()} `}
        </Links>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

export default Copyrights;
