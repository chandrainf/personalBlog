import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import styled from 'styled-components';
import themeConfig from '../../../../config/theme';
import { ThemeContext } from '../..';

const CardHeader = ({ title, logo, category }) => {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <Wrapper theme={theme}>
          {logo && <img src={logo} className="logo" />}
          <h3>{title}</h3>
          <div className='iconRow'>{category && category.map(item => <Icon type={item.frontmatter.icon} />)}</div>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  );
};

CardHeader.propTypes = {
  title: PropTypes.any,
};

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
  img {
    margin-bottom: 0px;
    margin-right: 10px;
  }
  h3 {
    font-size: 0.9em;
    margin: 0;
    font-weight: 500;

    @media (max-width: 680px) {
      font-size: 1.2em;
    }
    color: ${({ theme }) => themeConfig[theme].text[0]};
  }
  .iconRow {
    text-align: right;
    flex: 1;
    i {
      color: #a0a2a6;
      margin-left: 5px;
    }
  }
`;

export default CardHeader;
