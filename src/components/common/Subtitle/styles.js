import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const StyledSubtitle = styled.h2`
  margin-bottom: 2rem;
  transition: 0.3s;

  ${({ active }) => active
    && `
opacity: .3;
transition: .3s;
`};
  color: ${({ theme }) => themeConfig[theme].text[0]};
`;
