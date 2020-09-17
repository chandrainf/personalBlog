import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100wh;
  display: flex;
  color: white;
  padding: 5% 5%;
  .title {
    padding-top: 50px;
    color: white;
    font-weight: 500;
    font-size: 50px;
  }
  .subTitle {
    margin-top: 50px;
    font-size: 1rem;
    opacity: 0.85;
  }
  .leftBanner {
    font-size: 20px;
    flex: 1;
  }
  .thumbnail {
    width: 50%;
    object-fit: contain;
    height: 100%;
    @media (max-width: 960px) {
      display: none;
    }
  }
  .btn {
    height: 60px;
    border-radius: 4px;
    color: white;
    line-height: 56px;
    font-size: 18px;
    font-weight: 500;
    margin-top: 50px;
    padding: 0px 20px;
    width: 190px;
    img {
      margin-bottom: 0px;
      margin-right: 10px;
    }
    &:hover {
      background: #ffffffbd;
      border-color: #ffffffbd;
      color: #000;
    }
  }
  .btnAppStore {
    background: rgb(237, 70, 71);
    border-color: rgb(237, 70, 71);
    margin-right: 20px;
  }
  .btnGooglePlay {
    background: rgb(2, 134, 226);
    border-color: rgb(2, 134, 226);
  }
`;
