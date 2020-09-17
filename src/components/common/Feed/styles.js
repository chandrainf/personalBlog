import styled from 'styled-components';

export const FeedWrapper = styled.div`
  .feed {
    padding: 20 0px;
    &__item {
      margin-bottom: 1.25px;
      padding: 20px;
      border-radius: 20px;
      &:last-child {
        margin-bottom: 0.5px;
      }

      &-title {
        line-height: 1.5;
        margin-top: 0px;
        margin-bottom: 0.5px;
        &-link {
          &:hover,
          &:focus {
          }
        }
      }

      &-description {
        line-height: 1px;
        margin-bottom: 0.75px;
      }

      &-meta {
        &-time {
          font-weight: 600;
          text-transform: uppercase;
        }

        &-divider {
          margin: 0 5px;
        }

        &-category {
          &-link {
            font-weight: 600;
            text-transform: uppercase;

            &:hover,
            &:focus {
            }
          }
        }
      }

      &-readmore {
        &:hover,
        &:focus {
        }
      }
    }
  }
`;
