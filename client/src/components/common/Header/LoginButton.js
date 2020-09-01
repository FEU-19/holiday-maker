import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

const LoginButton = () => {
  const [login, setLogin] = useState(false);

  const onLoginClick = () => {
    setLogin(true);
  };

  if (login) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <Button onClick={onLoginClick}>Login</Button>
    </div>
  );
};

export default LoginButton;




