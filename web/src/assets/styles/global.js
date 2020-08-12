import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";

export default createGlobalStyle`
  ${fonts};

  :root {
    font-size: 60%;

    --background-color: #E9EBEE;
    --primary-color: #EA178C;
    --secundary-color: #1CB517;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: bordex-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    background-color: var(--background-color);
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Circular Std;
  }
`;
