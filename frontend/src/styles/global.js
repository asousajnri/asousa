import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        box-shadow: none;
        outline: none;
    }

    html,
    body {
        height: 100%;
    }

    html {
        font-size: 61.5%;
    }

    body {
        background: #e9ebee;
    }

    ul {
        list-style: none;
    }
`;
