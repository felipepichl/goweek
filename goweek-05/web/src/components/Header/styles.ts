import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  border: 1px solid rgba(38, 38, 38, 0.1);
  max-width: 600px;
  width: 600px;
  padding: 18px;

  position: fixed;

  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;
