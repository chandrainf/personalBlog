import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const Item = styled.div`
  max-width: 32%;
  width: 100%;
  margin-bottom: 1rem;
  height: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
  @media (max-width: 960px) {
    max-width: 48%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

export const Post = styled.div`
  border-radius: 20px;
  cursor: pointer;
  transition: 0.7s;
  height: 100%;
  overflow: hidden;

  @media (max-width: 680px) {
    display: flex;
    align-items: center;
  }

  &:hover,
  &:focus {
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
    transition: 0.7s;
  }
  background: ${({ theme }) => themeConfig[theme].background.content};
`;

export const ArticleContent = styled.div`
  padding: 1rem;
  @media (max-width: 680px) {
    flex: 2;
    overflow: hidden;
    padding: 0 1rem;
  }
`;

export const ArticleImg = styled.div`
  height: 300px;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.2);
  }
  .gatsby-image-wrapper {
    height: 100%;
  }

  @media (max-width: 992px) {
    height: 300px;
  }

  @media (max-width: 680px) {
    height: 100px;
    width: auto;
    flex: 1;
  }
`;

export const ArticleTitle = styled.h2`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 680px) {
    margin-bottom: 0.1rem;
    font-size: 12pt;
  }
  color: ${({ theme }) => themeConfig[theme].text[0]};
`;

export const Paragraph = styled.p`
  height: 150px;
  overflow-y: hidden;

  @media (max-width: 680px) {
    height: 20px;
    overflow-y: hidden;
    margin-bottom: 0.1rem;
    font-size: 10pt;
  }
  color: ${({ theme }) => themeConfig[theme].text[4]};
`;

export const Info = styled.i`
  font-size: 0.8em;

  @media (max-width: 680px) {
    font-size: 0.6em;
  }
  color: ${({ theme }) => themeConfig[theme].text[0]};
`;

export const StyledSpan = styled.span`
  margin-left: 10px;
`;
