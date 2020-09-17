import styled from 'styled-components';

export const TagWrapper = styled.div`
  .tags {
    &__list {
      list-style: none;
      margin: 0 -5px;
      padding: 0 10%;

      &-item {
        display: inline-block;
        margin: 10px 5px;
        background: white;
        border-radius: 3px;
        box-shadow: 0px 5px 30px 0 rgba(0, 0, 0, 0.2);
        &-link {
          display: inline-block;
          padding: 0 24px;
          font-weight: 500;
          text-decoration: none;
          color: #000;
          &:hover,
          &:focus {
            color: blue;
          }
        }
      }
    }
  }
`;
