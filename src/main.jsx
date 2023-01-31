import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import GlobalStyle from "./styles/globalStyles";
import { PokeProvider } from "./context";
import { Theme } from "./styles/ThemeProvider/ThemeProvider";

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
