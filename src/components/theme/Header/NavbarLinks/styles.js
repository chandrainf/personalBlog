import styled from 'styled-components';
import themeConfig from '../../../../config/theme';

export const Links = styled.div`
  a {
    color: ${({ theme }) => themeConfig[theme].text[5]};
    text-decoration: none;

    &.current {
      font-weight: bold;
      color: ${({ theme }) => themeConfig[theme].text[0]};
    }
  }

  ${({ desktop }) => desktop
      ? `
        @media (max-width: 960px) {
            display: none;
        }

        a {
            margin-right: 1rem;

            &:last-child {
                margin-right: unset;
            }
        }
    `
      : `
        padding: 3rem;
        display: flex;
        flex-direction: column;

        a {
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: unset;
            }
        }
    `}
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  position: relative;
  background: none;
  text-align: left;

  img {
    margin: 0;
  }
`;
