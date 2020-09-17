import styled from 'styled-components';
import { key } from 'styled-theme';
import themeConfig from '../../../../config/theme';

export const Wrapper = styled.div`
  text-align: left;
  width: 100%;
  height: 100%;
  display: flex;
  @media (max-width: 680px) {
    margin-bottom: 2rem;
    text-align: center;

    &:last-child {
      margin-bottom: unset;
    }
  }

  &.row-reverse {
    flex-direction: row-reverse;
    text-align: right;
  }
  @media only screen and (max-width: 600px) {
    padding: 2rem 0rem;
    flex-direction: column;
    &.row-reverse {
      flex-direction: column;
      text-align: center;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10%;
    flex: 1;
  }
  .subtitle {
    font-size: 1.2rem !important;
    color: ${({ theme }) => themeConfig[theme].text[5]};
    font-weight: 400;
    @media only screen and (max-width: 600px) {
      font-size: 0.875rem !important;
    }
  }
  p: ${({ theme }) => themeConfig[theme].text[5]};
`;

export const Grow = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
  img {
    width: 100%;
    max-width: 100%;
    min-width: 130px;
    transition: all 0.2s ease-in-out;
    margin: 0 auto 1rem auto;
    @media only screen and (max-width: 600px) {
      width: 15rem !important;
    }
    &:hover {
      transform: scale(1.1);
      transition: all 0.2s ease-in-out;
    }
  }

  @media (max-width: 680px) {
    height: 160px;

    img {
      width: 160px;
    }
  }
`;

export const Title = styled.h4`
  font-weight: 600;
  font-size: 1.2rem !important;
  color: ${theme => key([theme.theme, 'text', 0])(theme)};
  @media only screen and (max-width: 600px) {
    font-size: 1.5rem !important;
  }
`;
