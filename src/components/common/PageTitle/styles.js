import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 36px;
  font-weight: 800;
  @media (max-width: 960px) {
  }
  color: ${({ theme }) => themeConfig[theme].text[0]};
`;
