import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    overflow: hidden;
    height: 100%;
  }
  body {
    font-family: -apple-system, 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif;
    font-size: ${theme.fontSizes.default};
    letter-spacing: -0.35px;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  button {
    outline: none;
    border: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
