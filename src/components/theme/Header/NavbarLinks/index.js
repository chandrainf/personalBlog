import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import night from '../../../../../static/icons/night.svg';
import day from '../../../../../static/icons/day.svg';
import { ThemeContext } from '../../../common';
import { Links, StyledButton } from './styles';

const NavbarLinks = ({ desktop }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Links desktop={desktop} theme={theme}>
          <Link to="/" activeClassName="current">
            Home
          </Link>
          <Link to="/about" activeClassName="current">
            About
          </Link>
          <Link to="/project" activeClassName="current">
            Project
          </Link>
          {/* <Link to="/blog/" activeClassName="current">
            Blog
          </Link> */}
          <Link to="/contact" activeClassName="current">
            Contact
          </Link>
          <StyledButton type="button" onClick={toggleTheme}>
            <img src={theme === 'dark' ? day : night} alt={theme} />
          </StyledButton>
        </Links>
      )}
    </ThemeContext.Consumer>
  );
};

NavbarLinks.propTypes = {
  desktop: PropTypes.any,
};

export default NavbarLinks;
