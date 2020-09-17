import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import axios from "axios";
import SimpleDialog from "@material-ui/core/Dialog";

import UserContext from "../../../context/UserContext";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .loginBtn {
    margin-top: 20px;
  }
`;

const Login = (props) => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [open, setOpen] = useState(false);
  const [errorMsg] = useState(0);

  const [, setContext] = useContext(UserContext);

  const onChangeUser = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        const loginRes = await axios.post(
          "http://localhost:8080/api/login/",
          {
            user,
          },
          { withCredentials: true }
        );

        setUserData({
          token: loginRes.data.token,
          user: loginRes.data.user,
        });
        // localStorage.setItem("auth-token", loginRes.data.token);
        props.handleModalClose();
      } catch (err) {
        setOpen(true);
        setErrorMsg(err.message);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <form className="login__Main" onSubmit={(e) => onSubmit(e)}>
        <TextField
          required
          name="email"
          id="email"
          label="email"
          type="email"
          value={user.email}
          onChange={onChangeUser}
        />
        <TextField
          required
          name="password"
          id="password"
          label="password"
          type="password"
          value={user.password}
          onChange={onChangeUser}
        />
        <Button className="loginBtn" type="submit" variant="contained" color="primary">
          Login
        </Button>
        {open ? (
          <SimpleDialog selectedvalue={errorMsg} open={open} onClose={handleClose}>
            {errorMsg}
          </SimpleDialog>
        ) : null}
      </form>
    </Container>
  );
};

export default Login;