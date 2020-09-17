import React from 'react';
import PropTypes from 'prop-types';
import {
 compose, withState, withHandlers, lifecycle,
} from 'recompose';
import { ThemeContext } from '..';

const Wrapper = ({ children, theme, toggleTheme }) => (
  <ThemeContext.Provider
    value={{
      theme,
      toggleTheme: () => toggleTheme(),
    }}
  >
    {children}
  </ThemeContext.Provider>
);

const enhance = compose(
  withState('theme', 'handleTheme', 'light'),
  withHandlers({
    toggleTheme: ({ theme, handleTheme }) => () => {
      if (theme === 'dark') {
        handleTheme('light');
        localStorage.setItem('theme', 'light');
      } else {
        handleTheme('dark');
        localStorage.setItem('theme', 'dark');
      }
    },
  }),
  lifecycle({
    componentDidMount() {
      const localTheme = localStorage.getItem('theme');
      if (localTheme) {
        this.props.handleTheme(localTheme);
      }
    },
  }),
);

Wrapper.propTypes = {
  children: PropTypes.any,
  theme: PropTypes.any,
  toggleTheme: PropTypes.any,
};

export const Provider = enhance(Wrapper);
