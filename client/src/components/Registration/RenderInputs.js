import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

    form{
      display: flex;
      flex-wrap: wrap;
      width: 460px;
      #email{
        width: 410px;
      }

      #confirm_password.MuiInputBase-input{
        padding-right: 100px;
      }

      button {
        margin-top: 10px;
      }
    }  
`
   {/* className={classes.root} noValidate */}

const RenderInputs = ({ handleSubmit, newUser, handleInput }) => {
  return (
    <Container>
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e)}>

        <TextField
          id="first_name"
          label="First name"
          type="text"
          name="first_name"
          value={newUser.first_name}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="30"
        />
              
        <TextField
          id="surname"
          label="Last name"
          type="text"
          name="surname"
          value={newUser.surname}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="12"
        />

        <TextField
          id="phone_number"
          label="Phone number"
          type="text"
          name="phone_number"
          value={newUser.phone_number}
          onChange={handleInput}
          // required
          minLength="1" // 10
          maxLength="15"
        />
              
        <TextField
          id="social_security_number"
          label="social security number"
          type="text"
          name="social_security_number"
          value={newUser.social_security_number}
          onChange={handleInput}
          // required
          minLength="1" // 8
          maxLength="12"
        />
              
        <TextField
          id="city"
          label="City"
          type="text"
          name="city"
          value={newUser.city}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="30"
        />
              
        <TextField
          id="country"
          label="Country"
          type="text"
          name="country"
          value={newUser.country}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="30"
        />
        
        <TextField
          id="street"
          label="Street"
          type="text"
          name="street"
          value={newUser.street}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="20"
        />
              
        <TextField
          id="zip_code"
          label="Zip code"
          type="text"
          name="zip_code"
          value={newUser.zip_code}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="10"
        />
              
        <TextField
          id="email"
          label="Email"
          type="email"
          name="email"
          value={newUser.email}
          onChange={handleInput}
          // required
        />

        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          value={newUser.password}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="12"
        />

        <TextField
          id="confirm_password"
          label="Confirm Password"
          type="password"
          name="confirm_password"
          value={newUser.confirm_password}
          onChange={handleInput}
          // required
          minLength="1"
          maxLength="12"
        />
                   
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>

      </form>
    </Container>
  );
};

export default RenderInputs;