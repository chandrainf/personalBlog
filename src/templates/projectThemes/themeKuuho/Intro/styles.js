import styled from 'styled-components';

export const IntroWrapper = styled.div`
  background: transparent;
  margin: 50px 5%;
  .itroItemWrapper {
    text-align: center;
    margin-bottom: 10px;

    .divider {
      height: 5px;
      width: 85px;
      margin: auto;
      margin-bottom: 30px;
    }
  }
  .introItem {
    height: 100%;
    text-align: center;
    h2 {
      font-size: 23px;
      text-align: center;
      font-weight: 400;
      font-style: normal;
    }
    p {
      color: rgba(0, 0, 0, 0.6);
      font-size: 17px;
    }
  }
`;
