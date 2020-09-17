import styled from 'styled-components';
import { palette, key } from 'styled-theme';
import themeConfig from '../../../config/theme';

export const MagicalButton = styled.a`
  color: ${palette('button', 0)};
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: ${palette('primary', 0)};
  border-radius: 0.3rem;
  transition: 0.5s;
  font-size: 17px;
  &:hover {
    color: ${palette('button', 0)};
  }

  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  &:first-child {
    margin-right: 1rem;
    background: ${palette('grayscale', 6)};
    color: ${palette('primary', 0)};
    @media (max-width: 380px) {
      margin: 0 auto 1.5rem auto;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 0 10%;
  algin-items: center;
  .leftIntro {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .rightIntro {
    flex: 1;
  }

  @media (max-width: 875px) {
    text-align: center;
    flex-direction: column-reverse;
    algin-items: center;
  }
  color: ${theme => key([theme.theme, 'text', 0])(theme)};
  h1 {
    color: ${({ theme }) => themeConfig[theme].text[0]};
  }
  p {
    color: ${palette('grayscale', 1)};
    margin-bottom: 2rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 875px) {
    justify-content: center;
  }
  @media (max-width: 380px) {
    flex-direction: column;
  }
`;
