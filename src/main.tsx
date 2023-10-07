import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ResetStyle } from "./styles/resetStyles.ts";
import { GlobalStyle } from "./styles/globalStyles.ts";
import { MainProvider } from "./provider/main.provider.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <BrowserRouter>
      <MainProvider>
        <App />
      </MainProvider>
    </BrowserRouter>
  </React.StrictMode>
);
