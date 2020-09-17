import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const StyledHeader = styled.div`
  width: 100%;
  z-index: 1;
  position: fixed;
  margin-bottom: unset;
  background: ${({ theme }) => themeConfig[theme].background.content};

  box-shadow: 0px 2px 20px 0 ${({ theme }) => themeConfig[theme].shadow[1]};
`;

export const Overlay = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: none;
  transition: 0.4s;

  ${({ sidebar }) => sidebar
    && `
display: block;
z-index: 4;
`}
`;
