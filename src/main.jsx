import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import GlobalStyle from "./styles/globalStyles";
import { PokeProvider } from "./context";
import { Theme } from "./styles/ThemeProvider/ThemeProvider";

//PokeProvider will fetch all 151 pokemons from the first gen, and provide it to the App tree
//GlobalStyles is provided to the application as a "generic css" normaly used to reset browser defaults or add basic styling
//Theme is used to provide to styledComponents

//BrowserRouter is used to provide proper routing to the app

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Theme>
        <PokeProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </PokeProvider>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
