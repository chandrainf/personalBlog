import styled from 'styled-components';

export const ContentWrapper = styled.div`
  .content {
    margin: 0 auto;
    font-size: 17px;
    &__body {
      padding: 0 10%;
      margin-top: 50px;
      & figure {
        & blockquote {
          font-style: italic;
          text-align: center;
          margin-top: 0;

          & p {
            font-size: 20px;
            margin-top: 0;
            margin-bottom: 10px;
            line-height: 1.5;
          }
        }
      }

      & a {
        text-decoration: underline;
      }

      & * {
        margin-left: auto;
        margin-right: auto;
      }

      & img {
        max-width: 100%;
      }
      @media (max-width: 960px) {
        font-size: 14px;
        line-height: 1.25;
        margin-bottom: 12.5px;
      }
    }
  }
`;
