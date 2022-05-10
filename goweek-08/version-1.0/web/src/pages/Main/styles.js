import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  min-width: 320px;
  height: 100vh;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 100px;
    padding: 10px;
    border-radius: 4px;
    background: #fff;
    opacity: 0.5;
    font-size: 10rem;
  }
`;
