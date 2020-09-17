import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const Wrapper = styled.div`
  padding: 1rem 0;
  margin-bottom: 7rem;
  text-align: center;

  h2,
  p {
    color: ${({ theme }) => themeConfig[theme].text[0]};
  }
`;
