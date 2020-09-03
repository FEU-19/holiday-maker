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
<<<<<<< HEAD
  { path: "/residence/:id", component: Residence },
  { path: "/dropdown/:id", component: DropDown },
=======

  { path: "/residence/:id", component: SpecHotel },
  { path: "/dropdown/:id", component: DropDown },



>>>>>>> c4a9fca5c3481cea9d5b60bd4e62d193f41fb4e1
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
