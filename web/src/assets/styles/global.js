import { createGlobalStyle } from "styled-components";

import fonts from "./fonts";

export default createGlobalStyle`
  ${fonts};

  :root {
    font-size: 62.5%;

    --background-color: #E9EBEE;
    --primary-color: #EA178C;
    --secondary-color: #1CB517;

    --background-profile-info: #FFFFFF;
    --color-text: #000000;
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
    background-color: var(--background-color);
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
`;
