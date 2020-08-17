import { createGlobalStyle } from 'styled-components';

import fonts from './fonts';

export default createGlobalStyle`
  ${fonts};

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: ${props =>
      props.theme.background_body};
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Circular Std;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`;
