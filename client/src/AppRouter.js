import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import axios from "axios";
import Checkout from "./views/Checkout";
import DropDown from "./components/common/DropDown/DropDown";
import Residence from "./views/Residence";
import Flight from "./views/Flight";
import UserContext, { initialUserContext } from "./context/UserContext";
import MyBookings from "./views/MyBookings";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/checkout/", component: Checkout },
  { path: "/residence/:hotelId", component: Residence },
  { path: "/dropdown/:id", component: DropDown },
  { path: "/flight/", component: Flight },
  { path: "/mybookings/", component: MyBookings },
];

function AppRouter() {
  const [context, setContext] = useState(initialUserContext);

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");

      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }

      const response = await axios.get("http://localhost:8080/api/users/", {
        headers: { "x-auth-token": token },
      });

      setContext({ token, user: response.data.user });
    };

    checkLoggedIn();
  }, []);

  console.log(context);

  return (
    <UserContext.Provider value={[context, setContext]}>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route exact path={path} key={path + component} component={component} />
        ))}
      </Switch>
    </UserContext.Provider>
  );
}

export default AppRouter;
