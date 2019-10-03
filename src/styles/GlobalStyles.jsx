import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  html,
  body {
    height: 100%;
  }
`;
