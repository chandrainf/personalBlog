import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '..';
import { StyledSubtitle } from './styles';

export const Subtitle = ({ children, active }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <StyledSubtitle theme={theme} active={active}>
        {children}
      </StyledSubtitle>
    )}
  </ThemeContext.Consumer>
);

Subtitle.propTypes = {
  children: PropTypes.any,
  active: PropTypes.any,
};
