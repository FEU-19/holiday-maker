import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import HelmetProvider from "react-helmet-async";

ReactDOM.render(
  <BrowserRouter>
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
