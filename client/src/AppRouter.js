import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Checkout from "./views/Checkout";
import SpecHotel from "./views/Details/SpecHotel";
import DropDown from "./components/common/DropDown/DropDown";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/checkout", component: Checkout },

  { path: "/residence/:id", component: SpecHotel },
  { path: "/dropdown/:id", component: DropDown },
];

function AppRouter() {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
    </Switch>
  );
}

export default AppRouter;
