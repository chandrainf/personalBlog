import styled from 'styled-components';
import themeConfig from '../../../config/theme';

const ContainerWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 90%;
  color: ${({ theme }) => themeConfig[theme].text[0]};

  @media (min-width: 601px) {
    width: 90%;
  }

  @media (min-width: 993px) {
    width: 80%;
  }
`;
export { ContainerWrapper }