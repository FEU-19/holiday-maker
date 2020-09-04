import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Modal from "../common/Modal/Modal";

import Country_ropdownList from "./Country_DropdownList";
import DoneIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

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
import Country_DropdownList from "./Country_DropdownList";

function Payment() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

  const classes = useStyles();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [adress, setAdress] = useState("");

  // Check if payment confirmed
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [redirect, setRedirect] = useState(false);

  // Close modal
  const [showModal, setShowModal] = useState(false);

  const controlCloseModal = (status) => {
    setShowModal(false);
    // if payment is sucessful redirect to booking details page
    status ? setRedirect(true) : setRedirect(false);
  };

  if (redirect) {
    // url needs to change to booking details page
    return <Redirect to="/" />;
  }

  return (
    <PaymentPage className={classes.root} noValidate autoComplete="off">
      <PaymentContainer>
        <H1>Payment</H1>
        <InfoForm>
          <TextInput
            label="First name"
            onchange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
          <TextInput
            label="Last name"
            onchange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
          <TextInput
            label="E-mail name"
            onchange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextInput
            label="Phone number"
            onchange={(e) => setPhoneNum(e.target.value)}
            value={phoneNum}
          />
        </InfoForm>
        <br />
        <HR />

        <InfoForm>
          <InputContainer>
            <Country_DropdownList />
          </InputContainer>

          <TextInput
            label="City"
            onchange={(e) => setCity(e.target.value)}
            value={city}
          />
          <TextInput
            label="Zip code"
            onchange={(e) => setZipCode(e.target.value)}
            value={zipcode}
          />
          <TextInput
            label="Adress"
            onchange={(e) => setAdress(e.target.value)}
            value={adress}
          />
        </InfoForm>

        <br />
        <HR />

        <PaymentForm />

        <PayBtn
          onClick={() => setShowModal(true)}
          className="payBtn"
          type="submit"
        >
          Finish & Pay
        </PayBtn>
      </PaymentContainer>
      <Modal
        onClose={() => controlCloseModal(paymentSuccess)}
        showModal={showModal}
      >
        {paymentSuccess && (
          <div className="modal__container">
            <DoneIcon className="doneIcon" />
            <h1>Thank you!</h1>
            <h2>for booking with Holiday Maker.</h2>
            <p>Booking confirmation has been sent to your email.</p>
          </div>
        )}
        {!paymentSuccess && (
          <div className="modal__container">
            <CancelIcon className="cancelIcon" />
            <h1>Error!</h1>
            <h3>Your payment hasn't been confirmed, please try again.</h3>
          </div>
        )}
      </Modal>
    </PaymentPage>
  );
}

export default Payment;
