import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./views/Main";
import axios from "axios";
import Checkout from "./views/Checkout";
import DropDown from "./components/common/DropDown/DropDown";
import Residence from "./views/Residence";
import UserContext from "./context/userContext";

// To add more routes use format as below and add to the routes array
const routes = [
  { path: "/", component: Main },
  { path: "/checkout/", component: Checkout },
  { path: "/residence/:hotelId", component: Residence },
  { path: "/dropdown/:id", component: DropDown },
];

function AppRouter() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      console.log("heejj", token);
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:8080/api/tokenIsValid/",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:8080/api/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
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
