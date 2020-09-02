import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./views/Login";
import Main from "./views/Main";
import Registration from "./views/Registration";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/registration", component: Registration },
];

function AppRouter() {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact path={path} component={component} key={path} />
      ))}
    </Switch>
  );
}

export default AppRouter;
