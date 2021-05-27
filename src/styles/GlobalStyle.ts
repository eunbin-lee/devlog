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
    font-family: -apple-system, "Apple SD Gothic Neo", "Noto Sans KR", "Noto Sans CJK KR", "Malgun Gothic", "맑은 고딕", sans-serif;
    box-sizing: border-box;
  }
  * {
    box-sizing: inherit;
  }

  
`;

export default GlobalStyle;
