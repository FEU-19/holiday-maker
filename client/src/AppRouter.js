import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import axios from "axios";
import Checkout from "./views/Checkout";
import DropDown from "./components/common/DropDown/DropDown";
import Residence from "./views/Residence";
import UserContext from "./context/userContext";
import MyBookings from "./views/MyBookings";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/checkout/", component: Checkout },
  { path: "/residence/:hotelId", component: Residence },
  { path: "/dropdown/:id", component: DropDown },
  { path: "/mybookings/", component: MyBookings },
];

function AppRouter() {
  const [userData, setUserData] = useState({
    user: {},
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const user = await axios.get("http://localhost:8080/api/users/", {
          withCredentials: true,
        });
        setUserData({ user });
      } catch (err) {
        console.log(err);
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
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
    </UserContext.Provider>
  );
}

export default AppRouter;
