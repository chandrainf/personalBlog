import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0)
    url('https://res.cloudinary.com/goeat-me/image/upload/c_fill,dpr_auto,w_1440/v1543996249/web-assets/web/landing/bg.jpg')
    no-repeat scroll 50% 50% / cover padding-box border-box;
  position: relative;
  .darkLayer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #000;
    opacity: 0.2;
  }
  .navs {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    margin: 30px 10%;
    padding-top: 30px;
    padding-bottom: 30px;
    .nav {
      padding: 0.92857143em 1.14285714em;
      margin-left: 15px;
      font-size: 16px;
      font-weight: 400;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #fff;
      &.btnRegister {
        display: flex;
        align-items: center;
        border-radius: 20px;
        height: 40px;
        font-weight: 500;
        padding: auto 20px;
        border: 1px solid #fff;
      }
    }
    z-index: 1;
  }
`;
