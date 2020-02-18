import { createGlobalStyle } from "styled-components";

import CIRCULAR_STD from "./fonts/circularStd";

export default createGlobalStyle`
    /* Font Family */
    ${CIRCULAR_STD}

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
        font-family: Circular Std;
        background: #e9ebee;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4 {
        font-family: inherit;
    }
`;
