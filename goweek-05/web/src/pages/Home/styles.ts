import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: rgba(247, 249, 250, 0.8);

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Tweet = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 600px;
  margin-top: 75px;
  padding: 10px;

  background: #fff;
  border: 1px solid rgba(38, 38, 38, 0.1);

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  div {
    min-width: 500px;
  }
`;
