import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  padding: 2rem;
  .logo {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin-bottom: 0px;
  }
  .projectName {
    color: white;
    margin-left: 1rem;
    flex: 1;
    font-size: 28px;
    font-weight: 400;
  }
`;
