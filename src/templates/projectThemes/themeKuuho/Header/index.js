import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../../components/common/Menu';
import { HeaderWrapper } from './styles';

const MENUS = [
  {
    title: 'Trang chủ',
    href: '#',
  },
  {
    title: 'Tính năng',
    href: '#',
  },
  {
    title: 'Cách Hoạt động',
    href: '#',
  },
  {
    title: 'Liên hệ',
    href: '#',
  },
];
const HeaderContainer = ({ logo, name }) => {
  return (
    <HeaderWrapper>
      <img alt={logo} src={logo} className="logo" />
      <div className="projectName">{name}</div>
      <Menu menus={MENUS} />
    </HeaderWrapper>
  );
};
HeaderContainer.propTypes = {
  logo: PropTypes.string,
  name: PropTypes.string,
};

export default HeaderContainer;
