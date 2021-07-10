import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
}

body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    height: 100vh;
    background-color: #fafafa;
}

a {
    text-decoration: none;
}
`;
