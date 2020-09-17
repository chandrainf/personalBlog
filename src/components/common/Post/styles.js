import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const PostWrapper = styled.div`
  .post {
    &__footer {
      margin: 0 auto;
    }

    &__home-button {
      display: block;
      max-width: 90px;
      padding: 0 24px;
      text-align: center;
      font-weight: normal;
      margin-left: auto;
      margin-right: auto;

      &:hover,
      &:focus {
      }
    }
  }
  .headerImg {
    width: 80%;
    margin-top: 20px;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    height: 200px;
    object-fit: cover;
  }
`;

export const ArticleWrapper = styled.div`
  a {
    text-decoration: none;
    color: rgb(0, 119, 255);
  }

  i {
    color: #a7a7a7;
  }

  h1 {
    font-family: 'Merriweather', serif;
    text-align: center;
  }
  color: ${({ theme }) => {
    return themeConfig[theme].text[0];
  }};
`;

export const Back = styled.div`
  margin-top: 2rem;
  margin-left: 10%;
`;

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const Comments = styled.div`
  margin-top: 2rem;
`;

export const ArticleDate = styled.div`
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 1rem;

  i {
    font-size: 0.9em;

    &:first-child {
      margin-right: 0.2rem;
    }
  }
`;
