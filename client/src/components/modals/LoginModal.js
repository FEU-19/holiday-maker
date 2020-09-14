import axios from "axios";
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';

import RegistrationComp from "./Registration/RegistrationComp";
import LoginComp from "./Login/Login";

import { cookieFinder } from "../../utils/findCookie"

const LoginModal = () =>{
  const [open, setOpen] = useState(false);
  const [cookie, setCookie] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setCookie(cookieFinder());
  }, [open])

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

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

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

  const options = {
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
  };

  const instance = axios.create({
    withCredentials: true,
  });

  const onLogout = (e) => {
    e.preventDefault();
    let cookie = document.cookie;
    instance
      .post("http://localhost:8080/api/logout/", { cookie }, options)
      .then((res) => {
        setCookie(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {!cookie ? (
        <div>
          <Button variant="outlined" color="primary" onClick={handleModalOpen}>
            Login
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleModalRegistration}
          >
            Registration
          </Button>
        </div>
      ) : (
        <Button variant="outlined" color="primary" onClick={(e) => onLogout(e)}>
          Logout
        </Button>
      )}
      <Dialog
        open={open}
        onClose={handleModalClose}
        aria-labelledby="form-dialog-title"
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Login" {...a11yProps(0)} />
            <Tab label="Registration" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <LoginComp handleModalClose={handleModalClose} options={options} />
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
