import styled from 'styled-components';

export const IphoneSketchWrapper = styled.div`
  transform: scale(1.05);
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 45rem;
  width: 22rem;
  min-width: 22rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 20px 50px, rgba(0, 0, 0, 0.06) 0px 2px 5px,
    rgba(0, 0, 0, 0.1) 0px -3.20073px 5.33454px inset;
  background: rgb(255, 255, 255);
  border-radius: 3.2rem;
  .ip-footer-line {
    position: absolute;
    top: 0.8rem;
    left: 0px;
    right: 0px;
    height: 1.6rem;
    width: 10.7rem;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    border-radius: 0px 0px 12.1px 12.1px;
  }
  .ip-footer-line {
    position: absolute;
    top: 0.8rem;
    left: 0px;
    right: 0px;
    height: 1.6rem;
    width: 10.7rem;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    border-radius: 0px 0px 12.1px 12.1px;
  }
  .ip-content-wrapper {
    position: relative;
    width: 20rem;
    height: 95%;
    transform: translateZ(0px);
    border-radius: 21.34px;
    overflow: hidden;
    background: rgb(255, 255, 255);
  }
  .ip-footer-content {
    position: absolute;
    bottom: 0.8rem;
    width: 6rem;
    height: 0.3rem;
    left: 0px;
    right: 0px;
    z-index: 3;
    background: rgb(217, 217, 217);
    margin: 0px auto;
  }
  .ip-footer-wrapper {
    transform: translateZ(0px);
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
  }
  .ip-sketch {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
    transition: opacity 0.5s ease 0.5s;
  }
  .ip-content {
    background: rgb(240, 17, 17);
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
  }
  .gatsby-image-wrapper {
    overflow: hidden;
  }
  .ip-hender {
    width: 100%;
    padding-bottom: 88.58447488584476%;
  }
`;
