import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
    form{
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const onChangeUser = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user) {
      axios.post("http://localhost:3002/api/login", { user }, /*{ headers: {
        Cookie: "cookie1=value; cookie2=value; cookie3=value;"
    }}*/)
      .then((res) => {
        console.log(res);
        if(res.status === 201){
          // return <Redirect to="/" />;
          // window.history.go(-1)
        }
      })
      .catch(err => {
        //window.history.go(-1)
        console.log("Error message" + err)
      });
    }
  };
  
  return (
    <Container>
      <form className="login__Main" onSubmit={onSubmit}>
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
        <Button type="submit">Login</Button>
      </form>
    </Container>
  );
};

export default Login;