import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Main from "./views/Main";
import Checkout from "./views/Checkout";
import MyBookings from "./views/MyBookings";
import Residence from "./views/Residence";
import Flight from "./views/Flight";

import DropDown from "./components/common/DropDown/DropDown";
import HeaderComp from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

import UserContext, { initialUserContext } from "./context/UserContext";

const routes = [
  { path: "/", component: Main },
  { path: "/checkout/", component: Checkout },
  { path: "/residence/:hotelId", component: Residence },
  { path: "/dropdown/:id", component: DropDown },
  { path: "/flight/", component: Flight },
  { path: "/mybookings/", component: MyBookings },
];

const DivRoot = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

document.body.style.margin = 0;

const MainContent = styled.div`
  position: relative;
  flex-grow: 1;
`;

function AppRouter() {
  const [context, setContext] = useState(initialUserContext);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      try {
        const response = await axios.get("http://localhost:8080/api/users/", {
          headers: { "x-auth-token": token },
        });
        console.log(response, "RESPONSE");

        setContext({ token, user: response.data.user });
      } catch (error) {
        return console.log("user not logged in");
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={[context, setContext]}>
      <DivRoot>
        <HeaderComp />
        <MainContent>
          <Switch>
            {routes.map(({ path, component }) => (
              <Route exact path={path} key={path + component} component={component} />
            ))}
          </Switch>
        </MainContent>
        <Footer />
      </DivRoot>
    </UserContext.Provider>
  );
}

export default AppRouter;
