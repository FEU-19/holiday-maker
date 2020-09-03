import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Redirect } from "react-router-dom";
import styled from "styled-components"
import axios from "axios";
import Popover  from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography"

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  //const [showErrorMsg, setShowErrorMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState(0)
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [buttonTarget, setButtonTarget] = useState(null)
  console.log(buttonTarget)

  const onChangeUser = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();   
    setButtonTarget()
    
    if (user) {
      axios.post("/api/login", { user })
      .then((res) => {
        if(res.status === 201){
          setButtonTarget(null)
          // return <Redirect to="/" />;
          // window.history.go(-1)
        }
      })
      .catch(err => {
        //window.history.go(-1)
        console.log("Error message" + err)
        //setShowErrorMsg(true)
        setErrorMsg( "hej")
        console.log("hej,hej")
        console.log(buttonTarget)
        setAnchorEl(buttonTarget)
      });
    }
  };
   const handleClose = (e) => {
    setAnchorEl(null);
   } 
      

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
        <Button type="submit">Login</Button>
      </form>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        >
        <Typography>{errorMsg}</Typography>
      </Popover>
    </Container>

  );
};

export default Login;