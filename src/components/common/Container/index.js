import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '..';
import { ContainerWrapper } from './styles';

export const Container = (props) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => <ContainerWrapper theme={theme} {...props}/>}
    </ThemeContext.Consumer>
  );
};

Container.propTypes = {
  children: PropTypes.any,
};