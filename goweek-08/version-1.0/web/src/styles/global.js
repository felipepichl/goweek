import { createGlobalStyle } from 'styled-components';

import background from '../assets/images/backgroud.jpg';

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap'); */
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%; /* 1rem = 10px */
  }

  body {
    /* background: url(${background}) no-repeat center center fixed; */
    /* background-size: cover; */
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
