import axios from "axios";
import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import RegistrationComp from "./Registration/RegistrationComp";
import LoginComp from "./Login/Login";
import UserContext from "../../context/UserContext";

import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={"span"}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const LoginModal = () => {
  const [context, setContext] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleModalOpen = () => {
    setOpen(true);
    setValue(0);
  };

  const handleModalRegistration = () => {
    setOpen(true);
    setValue(1);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const onLogout = (e) => {
    e.preventDefault();

    axios
      .delete("http://localhost:8080/api/logout/", { withCredentials: true })
      .then(() => {
        setContext((context) => ({ ...context, user: {}, loggedIn: false }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {!context.loggedIn ? (
        <Wrapper>
          <Button variant="contained" color="secondary">
            <Link to={{ pathname: "/" }}>Main</Link>
          </Button>

          <Button className="login" variant="contained" color="secondary" onClick={handleModalOpen}>
            Login
          </Button>

          <Button
            className="login"
            variant="contained"
            color="secondary"
            onClick={handleModalRegistration}
          >
            Registration
          </Button>
        </Wrapper>
      ) : (
        <Wrapper>
          <Button variant="contained" color="secondary">
            <Link to={{ pathname: "/" }}>Main</Link>
          </Button>

          <Button variant="contained" color="secondary">
            <Link to={{ pathname: "/mybookings" }}>My Bookings</Link>
          </Button>

          <Button
            className="login"
            variant="contained"
            color="secondary"
            onClick={(e) => onLogout(e)}
          >
            <Link to={{ pathname: "/" }}>Logout</Link>
          </Button>
        </Wrapper>
      )}
      <Dialog open={open} onClose={handleModalClose} aria-labelledby="form-dialog-title">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Registration" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <LoginComp handleModalClose={handleModalClose} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RegistrationComp setValue={setValue} />
        </TabPanel>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default LoginModal;
