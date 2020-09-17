import styled from 'styled-components';
import themeConfig from '../../../config/theme';

export const Wrapper = styled.div`
	height: 100%;
  padding: 5px;
  .gatsby-image-wrapper {
    background: white;
    padding: auto;
    img {
      object-fit: cover;
    }
  }
	${({ id }) => id === 0
    && `
		@media (max-width: 680px) {
			grid-row: 3;
		}
	`}

	${({ id }) => id === 1
    && `
		@media (max-width: 680px) {
			grid-row: 2;
		}
	`}

	${({ id }) => id === 2
    && `
		@media (max-width: 680px) {
			grid-row: 1;
		}
	`}
`;

export const StyledCard = styled.div`
  height: 100%;
  border-radius: 2px;
  transition: 0.3s;
  display: flex;
  flex-direction: column;
  .max-lines {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  &:hover {
    box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.09);
    transition: 0.3s;

    .gatsby-image-wrapper {
      transform: scale(1.05);
      transition: 0.3s;
      box-shadow: 0 17px 46px -5px rgba(0, 0, 0, 0.2);
      border-radius: 5px;

      img {
        border-radius: 5px;
        transition: 0.3s;
      }
    }
  }
  color: ${({ theme }) => themeConfig[theme].text[0]};
  background: ${({ theme }) => themeConfig[theme].background.content};
`;
