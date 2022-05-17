import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px */
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #f5f5f5;
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font-family:  Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
