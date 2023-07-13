import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
      width: 100%;
      min-height: 100vh;
      background-color: ${(props) => props.theme.colors.gray};
      justify-content: center;
      display: flex;
      font-size: 14px;
  }

  /* @font-face {
    font-family: 'Pretendard-regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
  } */

  * {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
