import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import CheckIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import { ModalStyle } from "./PaymentStyles";

import { makeStyles } from "@material-ui/core/styles";

// import Modal from "../common/Modal/Modal";
import { Modal, Box, Container, Button, Divider } from "@material-ui/core";

import PaymentForm from "./PaymentForm";

import BookingInfo from "./BookingInfo";
import InfoForm from "./InfoForm";

function Payment() {
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
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

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

  return (
    <Container>
      <h1>Payment</h1>
      <BookingInfo />
      <Divider />
      <InfoForm
        firstName={firstName}
        lastName={lastName}
        email={email}
        address={address}
        city={city}
        phoneNum={phoneNum}
        zipcode={zipcode}
        setAddress={setAddress}
        setCity={setCity}
        setZipCode={setZipCode}
        setLastName={setLastName}
        setFirstName={setFirstName}
        setPhoneNum={setPhoneNum}
        setEmail={setEmail}
      />

      <Divider />

      <PaymentForm />

      <Button
        onClick={() => setShowModal(true)}
        className="payBtn"
        type="submit"
      >
        Finish & Pay
      </Button>

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
    </Container>
  );
}

export default Payment;
