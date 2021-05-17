import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
  margin: 0 5px 0 5px;
`;

export const Content = styled.div`
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;

  width: 600px;
  max-width: 600px;

  @media screen and (max-width: 450px) {
    border: none;
    background: #fafafa;
  }
`;
