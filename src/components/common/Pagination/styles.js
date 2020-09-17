import styled from 'styled-components';

export const PaginationWrapper = styled.div`
  .pagination {
    margin-top: 2px;
    display: flex;

    &__prev {
      width: 50%;
      text-align: left;

      &-link {
        font-size: 26px;
        font-weight: bold;

        &:hover,
        &:focus {
        }

        &--disable {
          pointer-events: none;
        }
      }
    }

    &__next {
      width: 50%;
      text-align: right;

      &-link {
        font-size: 26px;
        font-weight: bold;

        &:hover,
        &:focus {
        }

        &--disable {
          pointer-events: none;
        }
      }
    }
  }
`;
