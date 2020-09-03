import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SimpleDialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const LoginModal = () =>{
  const [open, setOpen] = useState(false);
  const [cookie, setCookie] = useState(document.cookie);
  const [value, setValue] = React.useState(0);


  
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
          <Typography>{children}</Typography>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const handleChange = (event, newValue) => {
  setValue(newValue);
};


  const handleModalOpen = () =>{
    setOpen(true);
  }

  const handleModalClose = () =>{
    setOpen(false);
  }

  return(
    <div>
      {!cookie ? <Button variant="outlined" color="primary" onClick={handleModalOpen}>
        Login
      </Button> : <Button variant="outlined" color="primary" onClick={handleModalClose}>
        Logout
      </Button>}
      <Dialog open={open} onClose={handleModalClose} aria-labelledby="form-dialog-title">
        <AppBar position="static">
          <Tabs  value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Login"  {...a11yProps(0)}/>
            <Tab label="Registration"  {...a11yProps(1)}/>
          </Tabs>
        </AppBar>
        <TabPanel  value={value} index={0}>
          <form className="login__Main">
              <TextField
                required
                name="email"
                id="email"
                label="email"
                type="email"
              
              />
              <TextField
                required
                name="password"
                id="password"
                label="password"
                type="password"
              
              />
              <Button type="submit">Login</Button> 
            </form>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <form autoComplete="off">

        <TextField
          id="first_name"
          label="First name"
          type="text"
          name="first_name"
          
          // required
          minLength="1"
          maxLength="30"
        />
              
        <TextField
          id="last_name"
          label="Last name"
          type="text"
          name="last_name"
         
          minLength="1"
          maxLength="12"
        />

        <TextField
          id="phone_number"
          label="Phone number"
          type="text"
          name="phone_number"
         
          // required
          minLength="1" // 10
          maxLength="15"
        />
              
        <TextField
          id="social_security_number"
          label="social security number"
          type="text"
          name="social_security_number"
          
          // required
          minLength="1" // 8
          maxLength="12"
        />
              
        <TextField
          id="city"
          label="City"
          type="text"
          name="city"
          
          // required
          minLength="1"
          maxLength="30"
        />
              
        <TextField
          id="country"
          label="Country"
          type="text"
          name="country"
          
          // required
          minLength="1"
          maxLength="30"
        />
        
        <TextField
          id="street"
          label="Street"
          type="text"
          name="street"
          
          // required
          minLength="1"
          maxLength="20"
        />
              
        <TextField
          id="zip_code"
          label="Zip code"
          type="text"
          name="zip_code"
          
          // required
          minLength="1"
          maxLength="10"
        />
              
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          
          // required
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          
          // required
          minLength="1"
          maxLength="12"
        />

        <TextField
          id="confirm_password"
          label="Confirm Password"
          type="password"
          name="confirm_password"
          
          // required
          minLength="1"
          maxLength="12"
        />
                   
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>

      </form>
        </TabPanel>
        <DialogContent>
            
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleModalClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default LoginModal;