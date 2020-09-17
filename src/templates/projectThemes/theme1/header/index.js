import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const Header = props => {
  const NAVS = [
    {
      title: 'Home',
      url: './home',
    },
    {
      title: 'For restaurant',
      url: './forRestaurant',
    },
    {
      title: 'Download',
      url: './Download',
    },
  ];
  return (
    <Wrapper>
      <div className="darkLayer" />
      <div className="navs">
        {NAVS.map(nav => (
          <a className="nav" href={nav.url}>
            {nav.title}
          </a>
        ))}
        <a href="./" className="nav btnRegister">
          Register
        </a>
        <a href="./" className="nav">
          Login
        </a>
      </div>
    </Wrapper>
  );
};
Header.propTypes = {};

export default Header;
