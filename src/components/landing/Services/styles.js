import styled from 'styled-components';
import { key } from 'styled-theme';
import themeConfig from '../../../config/theme';

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  padding: 8rem 0 8rem 0;
  clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
  text-align: center;
  @media (max-width: 680px) {
    padding: 12rem 0 14rem 0;
  }
  color: ${({ theme }) => themeConfig[theme].text[0]};
  background: ${({ theme }) => themeConfig[theme].background.container};
`;

export const Grid = styled.div`
  padding: 2rem 0;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 4fr;
  gap: 1.2rem 3rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
