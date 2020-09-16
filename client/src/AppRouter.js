import React from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Main from "./views/Main";
import Checkout from "./views/Checkout";
import DropDown from "./components/common/DropDown/DropDown";
import Residence from "./views/Residence";
import HeaderComp from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/checkout/", component: Checkout },
  { path: "/residence/:hotelId", component: Residence },
  { path: "/dropdown/:id", component: DropDown },
];

const DivRoot = styled.div`
  min-height: 100vh;
  position: relative;
`;

function AppRouter() {
  return (
    <DivRoot>
      <HeaderComp />
      <Switch>
        {routes.map(({ path, component }) => (
          <Route
            exact
            path={path}
            key={path + component}
            component={component}
          />
        ))}
      </Switch>
      <Footer />
    </DivRoot>
  );
}

export default AppRouter;
