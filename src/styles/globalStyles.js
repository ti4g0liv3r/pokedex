import { createGlobalStyle } from "styled-components";

//Default styles that will be used across the page.
//Here is a nice place to reset browser's default config.

const GlobalStyle = createGlobalStyle`
html{
  overflow-y: scroll;
}
  body {
    margin: auto;
    height: 100%;
    padding: 0;
      background-color: #f7f7f7;
    font-family: Montserrat, Helvetica, Sans-Serif;
  }

  #root{
    height: 100%;
  }
`;

export default GlobalStyle;
