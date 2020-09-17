import styled from 'styled-components';
import themeConfig from '../../../../config/theme';

export const Social = styled.div`
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => themeConfig[theme].text[0]};

    @media (max-width: 960px) {
      justify-content: center;
    }
  }

  img {
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-bottom: unset;
    margin-right: 0.5rem;

    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }
`;
