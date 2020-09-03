import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./components/Registration/RegisterButton"

const Header = () => {
  return <header>
      <LoginButton />
      <RegisterButton />
  </header>;
};

export default Header;
