import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;

  align-items: flex-start;
  justify-content: center;
  padding: 15px;
`;

export const Content = styled.div`
  max-width: 380px;
  width: 100%;

  form {
    margin: 20px 0;
    text-align: left;

    h1 {
      margin-bottom: 24px;
      font-family: 'Open Sans', sans-serif;
    }

    /* input {
      background: #fff;
      border: 1px solid rgb(196, 207, 214);
      border-radius: 4px;
      padding: 18px;
      width: 100%;
    } */

    button {
      background: #4bb0ee;
      border-radius: 34px;
      border: none;
      padding: 18px;
      width: 100%;
      color: #fff;
      font-weight: 500;
      //margin-top: 18px;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#4bb0ee')};
      }
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  justify-content: left;
`;
