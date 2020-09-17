import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import themeConfig from '../../../../config/theme';
import { ThemeContext } from '../..';

const CardFooter = ({ description }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <Wrapper theme={theme}>
        <p className="max-lines">{description}</p>
      </Wrapper>
    )}
  </ThemeContext.Consumer>
);

CardFooter.propTypes = {
  description: PropTypes.string,
};

const Wrapper = styled.div`
  padding: 16px 24px;
  max-height: 120px;
  p {
    font-size: 16px;
    line-height: 1.46429em;
    margin-bottom: 1rem;
    color: ${({ theme }) => themeConfig[theme].text[4]};
  }
`;

export default CardFooter;
