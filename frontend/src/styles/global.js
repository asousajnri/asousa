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

    /* Change autocomplete styles in WebKit */
    /* input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
        -webkit-text-fill-color: white;
        -webkit-box-shadow: none;
        transition: background-color 5000s ease-in-out 0s;
    } */

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
`;
