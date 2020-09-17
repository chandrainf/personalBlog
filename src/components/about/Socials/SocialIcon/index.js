import React from 'react';
import PropTypes from 'prop-types';
import { Social } from './styles';

const SocialIcon = ({
 name, link, icon, theme,
}) => (
  <Social theme={theme}>
    <a href={link} rel="noopener noreferrer" target="_blank">
      <img src={icon} alt={name} />
      {name}
    </a>
  </Social>
);

SocialIcon.propTypes = {
  name: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.any,
  theme: PropTypes.any,
};

export default SocialIcon;
