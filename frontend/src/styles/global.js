import { createGlobalStyle } from 'styled-components';

import CIRCULAR_STD from './fonts/circularStd';

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
        line-height: 1;
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
        background: #f3f3f3;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4 {
        font-family: inherit;
        font-size: 2rem;
    }

    img {
        max-width: 100%;
        display: block;
        backface-visibility: hidden;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }
`;
