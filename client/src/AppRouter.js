import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import Residence from "./views/Residence"

// To add more routes use format as below and add to the routes array
const routes = [{ path: "/", component: Main },{path: "/residence", component: Residence}];

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
