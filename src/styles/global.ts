import { createGlobalStyle } from 'styled-components'
import background from './../assets/background.png'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  html {
    background-color: ${(props) => props.theme.colours.secondary};
  }

  body {
    
    background: url(${background}) no-repeat fixed;
    background-position: center;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p, span, h1, h2, h3, h4, h5, h6, a, button, input {
    color: ${(props) => props.theme.colours.white};
  }
`
