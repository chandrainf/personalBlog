import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  padding: 8rem 1rem 7rem 1rem;
  clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
  text-align: center;
  color: ${({ theme }) => themeConfig[theme].text[0]};
  background: ${({ theme }) => themeConfig[theme].background.content};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 0;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Tech = styled.div`
  text-align: left;

  a {
    text-decoration: underline;
    color: ${({ theme }) => themeConfig[theme].text[0]};
  }
`;
