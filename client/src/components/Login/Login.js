import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components"
import axios from "axios";
import SimpleDialog from '@material-ui/core/Dialog';



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
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState(0)
 
  const onChangeUser = (e) => {
    const { value } = e.target;
    const { name } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();  
    if (user) {
      const instance = axios.create({
        withCredentials: true,
      })

      const options = {
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
      };

      instance.post("http://localhost:3002/api/login/", {user}, options)
      .then((res) => {
        console.log(res);
        if(res.status === 201){
          console.log(user)
          // return <Redirect to="/" />;
          // window.history.go(-1)
        }
      })
      .catch(err => {
        //window.history.go(-1)
        console.log("Error message" + err.response.data.error[0].msg)
        //setShowErrorMsg(true)
        setOpen(true);
        setErrorMsg("Oops något blev fel");

      });
    }
  };

  const handleClose = () => {
    //setAnchorEl(null);
    setOpen(false)
    //setErrorMsg(value);
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
        <Button type="submit">Login</Button> 
        {open ? <SimpleDialog  selectedvalue={errorMsg} open={open} onClose={handleClose} > 
          {errorMsg}

      </SimpleDialog> : null}
      </form>
      <br />
     
    </Container>

  );
};

export default Login;