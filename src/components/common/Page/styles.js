import styled from 'styled-components';

export const PageWrapper = styled.div`
  .page {
    @include margin-bottom(2);

    &__inner {
      padding: 25px 20px;
    }

    &__title {
      font-size: $typographic-base-font-size * 2.5;
      font-weight: 600;
      @include line-height(2);
      @include margin-top(0);
      @include margin-bottom(1.45);
    }

    &__body {
      font-size: $typographic-base-font-size;
      @include line-height(1);
      @include margin(0, 0, 1);
    }
  }

  @include breakpoint-sm {
    .page {
      lost-column: 7/12;

      &__inner {
        padding: 30px 20px;
      }
    }
  }

  @include breakpoint-md {
    .page {
      lost-column: 2/3;

      &__inner {
        padding: 40px 35px;
      }
    }
  }
`;
