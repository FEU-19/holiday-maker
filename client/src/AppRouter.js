import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Checkout from "./views/Checkout";
import DropDown from "./components/common/DropDown/DropDown";
import Residence from "./views/Residence";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/checkout/", component: Checkout },
  { path: "/residence/:hotelId", component: Residence },
  { path: "/dropdown/:id", component: DropDown },
];

function AppRouter() {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact path={path} key={path + component} component={component} />
      ))}
    </Switch>
  );
}

export default AppRouter;
