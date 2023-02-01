import { createGlobalStyle } from "styled-components";

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
