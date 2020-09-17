import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const Wrapper = styled.div`
    height: 100%;

    ${({ id }) => id === 0
      && `@media (max-width: 680px) {
grid-row: 3;
}
`}

    ${({ id }) => id === 1
      && `
@media (max-width: 680px) {
grid-row: 2;
}
`}

    ${({ id }) => id === 2
      && `
@media (max-width: 680px) {
grid-row: 1;
}
`}
`;

export const StyledRepository = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  padding: 1rem 1.5rem;
  border-radius: 2px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.09);
    transition: 0.3s;
  }
  color: ${({ theme }) => themeConfig[theme].text[0]};
  background: ${({ theme }) => themeConfig[theme].background.content};
`;

export const Header = styled.div`
  padding: 1rem 0;

  h3 {
    font-size: 0.9em;
    margin: 0;
    font-weight: normal;

    @media (max-width: 680px) {
      font-size: 1.2em;
    }
    color: ${({ theme }) => themeConfig[theme].text[0]};
  }
`;

export const Description = styled.div`
  padding: 1rem 0;

  p {
    font-size: 16px;
    line-height: 1.46429em;
    margin: 0;
    color: ${({ theme }) => themeConfig[theme].text[0]};
  }
`;

export const Stars = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  img {
    margin-right: 0.5rem;
    margin-bottom: 0;

    &:last-child {
      margin: 0 0.5rem 0 1rem;
    }
  }
  color: ${({ theme }) => themeConfig[theme].text[0]};
`;
