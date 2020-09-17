import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const MainWrapper = styled.div`
  .responsiveVideo {
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;

    iframe,
    object,
    embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  a {
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea:focus {
    outline: none;
  }

  .shadow {
    box-shadow: 0 36px 64px 0 ${({ theme }) => themeConfig[theme].shadow[0]};
  }

  .shadow-light {
    box-shadow: 0 2px 40px 1px ${({ theme }) => themeConfig[theme].shadow[0]};
    transition: all 0.2s ease-in-out;
  }

  .shadow-light:hover {
    transform: scale(1.03);
  }

  .shadow-super-light {
    box-shadow: 0 5px 40px 0px ${({ theme }) => themeConfig[theme].shadow[1]};
    transition: all 0.2s ease-in-out;
  }

  .background-gradient {
    background: #00c3ff;
    /* background-image: linear-gradient(90deg,#f7962c,#f26122)!important; */
  }
`;
