import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
 href, title, key, onPressMenu,
}) => {
  return (
    <a onClick={() => onPressMenu(key)} href={href}>
      <div className="menuItem">{title}</div>
    </a>
  );
};
MenuItem.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  key: PropTypes.string,
  onPressMenu: PropTypes.func,
};

export default MenuItem;
