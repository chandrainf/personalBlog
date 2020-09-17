import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const Wrapper = styled.div`
  flex: 1;
`;

export const Img = styled.img`
  margin-right: 0.6rem;
`;

export const DetailsContainer = styled.div`
  padding-left: 1.5rem;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  color: ${({ theme }) => themeConfig[theme].text[0]};
`;

export const Text = styled.p`
  color: ${({ theme }) => themeConfig[theme].text[0]};
`;
