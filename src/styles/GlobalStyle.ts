import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    overflow: hidden;
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
    letter-spacing: -0.35px;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
