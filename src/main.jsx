import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import GlobalStyle from "./styles/globalStyles";
import { PokeProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <PokeProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </PokeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
