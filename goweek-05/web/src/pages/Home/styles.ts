import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  background-color: rgba(247, 249, 250, 0.8);

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Tweet = styled.div`
  background: #fff;
  border: 1px solid rgba(38, 38, 38, 0.1);

  max-width: 600px;
  width: 600px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 10px;

  div {
    display: flex;
    align-items: center;

    height: 94px;
    width: 100%;

    margin-top: 75px;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    textarea {
      border-radius: 5px;
      font-size: 18px;
      padding: 15px;
      width: 100%;
      resize: none;
      border: none;
    }
  }

  button {
    background: #4bb0ee;
    width: 76px;
    height: 42px;
    border-radius: 38px;
    border: none;
    color: #fff;
    font-weight: 500;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#4bb0ee')};
    }
  }
`;
