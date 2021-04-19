import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  background: #fafafa;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 450px) {
    background-color: #fff;
  }
`;
