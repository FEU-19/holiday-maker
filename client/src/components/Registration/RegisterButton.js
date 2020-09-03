import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Redirect } from "react-router-dom";

const RegistrationButoon = () => {
  const [register, setRegister] = useState(false);

  const onRegisterClick = () => {
    setRegister(true);
  };

  if (register) {
    return <Redirect to="/registration" />;
  }
  return (
    <div>
      <Button onClick={onRegisterClick}>Create Account</Button>
    </div>
  );
};

export default RegistrationButoon;
