import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async'
import AppRouter from "./AppRouter";

ReactDOM.render(
  <BrowserRouter>
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
