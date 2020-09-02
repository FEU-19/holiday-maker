import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Checkout from "./views/Checkout";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/checkout", component: Checkout },
];

function AppRouter() {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact path={path} component={component} />
      ))}
    </Switch>
  );
}

export default AppRouter;
