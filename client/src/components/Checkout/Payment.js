import React, { useState, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import axios from "axios";

import CheckIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import { ModalStyle } from "./PaymentStyles";

import { makeStyles } from "@material-ui/core/styles";

// import Modal from "../common/Modal/Modal";
import { Modal, Box } from "@material-ui/core";

import {
  PaymentPage,
  PaymentContainer,
  H1,
  HR,
  InfoForm,
  InputContainer,
  PayBtn,
} from "./PaymentStyles";
import TextInput from "./TextInput";
import PaymentForm from "./PaymentForm";
import CountryDropdownList from "./CountryDropdownList";

function Payment() {
  const [user, setUser] = useState({
    firstName: "",
    surname: "",
    email: "",
    zipCode: "",
    phoneNumber: "",
    city: "",
    adress: "",
  });

  useEffect(() => {
    let userId = "5f5aa3bc7bd3af45e0c97964";
    axios
      .get(`http://localhost:8080/api/users/${userId}`)
      .then((response) => {
        const {
          firstName,
          surname,
          email,
          zipCode,
          phoneNumber,
          city,
        } = response.data.data;
        const data = {
          firstName,
          surname,
          email,
          zipCode,
          phoneNumber,
          city,
          adress: "copacana fixa adressfält!!!",
        };

        return data;
      })
      .then((data) => {
        setUser(data);
      });
  }, []);
  const { state } = useLocation();

  console.log(state);

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();
  const modalStyle = ModalStyle();

  //Payment States

  function handleChange(e) {
    let userData = {
      ...user,
      [e.target.name]: e.target.value,
    };

    setUser(userData);
  }

  const [cardNum, setCardNum] = useState("");
  const [expire, setExpire] = useState("");
  const [cvc, setCvc] = useState("");
  const [type, setType] = useState("");

  // Check if payment confirmed
  const [paymentSuccess, setPaymentSuccess] = useState(true);

  const [redirect, setRedirect] = useState(false);

  // Close modal
  const [showModal, setShowModal] = useState(false);

  const controlCloseModal = () => {
    setShowModal(!showModal);
    // if payment is sucessful redirect to booking details page
    true ? setRedirect(true) : setRedirect(false);
  };

  if (redirect) {
    // url needs to change to booking details page
    return <Redirect to="/" />;
  }
  console.log(user);

  return (
    <PaymentPage className={classes.root} noValidate autoComplete="off">
      <PaymentContainer>
        <H1>Payment</H1>
        <InfoForm>
          <TextInput
            name="firstName"
            label="First name"
            value={user.firstName}
            onchange={handleChange}
          />
          <TextInput
            name="surname"
            label="Last name"
            onchange={handleChange}
            value={user.surname}
          />
          <TextInput
            name="email"
            label="E-mail name"
            onchange={handleChange}
            value={user.email}
          />
          <TextInput
            name="phoneNumber"
            label="Phone number"
            onchange={handleChange}
            value={user.phoneNumber}
          />
        </InfoForm>
        <br />
        <HR />

        <InfoForm>
          <InputContainer>
            <CountryDropdownList />
          </InputContainer>

          <TextInput
            name="city"
            label="City"
            onchange={handleChange}
            value={user.city}
          />
          <TextInput
            name="zipCode"
            label="Zip code"
            onchange={handleChange}
            value={user.zipCode}
          />
          <TextInput
            name="adress"
            label="Adress"
            onchange={handleChange}
            value={user.adress}
          />
        </InfoForm>

        <br />
        <HR />

        <PaymentForm
          setCardNum={setCardNum}
          setExpire={setExpire}
          setCvc={setCvc}
          setType={setType}
        />

        <PayBtn
          onClick={() => setShowModal(true)}
          className="payBtn"
          type="submit"
        >
          Finish & Pay
        </PayBtn>
      </PaymentContainer>

      <Modal onClose={() => controlCloseModal(paymentSuccess)} open={showModal}>
        <Box className={modalStyle.content}>
          <button className={modalStyle.closeBtn}>
            <CloseIcon
              className={modalStyle.closeIcon}
              onClick={() => controlCloseModal(paymentSuccess)}
            />
          </button>
          {paymentSuccess ? (
            <div className="modal__container">
              <CheckIcon className={modalStyle.checkIcon} />
              <h1>Thank you!</h1>
              <h2>for booking with Holiday Maker.</h2>
              <p>Booking confirmation has been sent to your email.</p>
            </div>
          ) : (
            <div className="modal__container">
              <ErrorIcon className={modalStyle.errorIcon} />
              <h1>Error!</h1>
              <h3>Your payment hasn't been confirmed, please try again.</h3>
            </div>
          )}
        </Box>
      </Modal>
    </PaymentPage>
  );
}

export default Payment;
