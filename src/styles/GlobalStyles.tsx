import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #d9e3e0;
        font-family: 'Inter', sans-serif;
        /* line-height: 20px; */
    }
`