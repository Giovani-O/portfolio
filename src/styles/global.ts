import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inconsolata', monospace;
  }

  body {

    background: linear-gradient(to top, #09090b, #101013);
    background-attachment: fixed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, a {
    color: ${(props) => props.theme.colours.white};
  }

  p, span, button, input {
    color: ${(props) => props.theme.colours.offwhite};
  }
`;
