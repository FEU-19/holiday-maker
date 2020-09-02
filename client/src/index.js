import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import { Helmet, HelmetProvider } from 'react-helmet-async';
=======
import { HelmetProvider } from "react-helmet-async";
>>>>>>> dd1e0a3afc0dbccb070e9ba088f9189eec0313ba
import AppRouter from "./AppRouter";

ReactDOM.render(
  <BrowserRouter>
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
