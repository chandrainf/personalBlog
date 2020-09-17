import styled from 'styled-components';

export const AuthorWrapper = styled.div`
  padding: 0 10%;
  .author {
    padding-top: 20px;
    &__bio {
      font-size: 24px;
      font-weight: bold;
      &-twitter {
        display: block;
        text-decoration: underline;
      }
    }
  }

  @include breakpoint-sm {
    .author {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
