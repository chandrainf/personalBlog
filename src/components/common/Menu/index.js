import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';
import { MenuWrapper } from './styles';

const Menu = ({ menus }) => {
  const [active, setActiveMenu] = useState('0');
  useEffect(() => {}, [active]);
  const onPressMenu = key => {
    setActiveMenu(key);
  };
  return (
    <MenuWrapper>
      {menus.map((data, index) => (
        <MenuItem onClick={onPressMenu} key={String(index)} item={data} />
      ))}
    </MenuWrapper>
  );
};
Menu.propTypes = {
  menus: PropTypes.array,
};

export default Menu;
