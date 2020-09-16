import React, { useState, useContext } from "react";

import { Redirect, useLocation } from "react-router-dom";
import CheckIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { iconStyle, PageStyle, BookingInfoStyle } from "./PaymentStyles";
import Modal from "../common/Modal/Modal";
import { Container, Button, Divider, Box, Typography } from "@material-ui/core";

import InfoForm from "./InfoForm";
import BookingInfo from "./BookingInfo";
import PaymentPicker from "./PaymentPicker";
import PaymentOptionWrapper from "./PaymentOptionWrapper";
import UserContext from "../../context/UserContext";
import { onCreditCardTypeChanged } from "../../utils/handleCardImage";

function Payment() {
  // styles
  const IconStyle = iconStyle();
  const pageStyle = PageStyle();
  const style = BookingInfoStyle();

  // card payment states
  const [credit, setCredit] = useState({
    creditCard: "",
    expire: "",
    cvc: "",
  });
  const [cardImg, setCardImg] = useState("");
  const [type, setType] = useState("");

  // flight and rooms state
  const { state } = useLocation();

  // User context
  const [{ user }] = useContext(UserContext);

  console.log(user);

  // Cleave credit
  function handleCredit(e) {
    let creditData = {
      ...credit,
      [e.target.name]: e.target.value,
    };
    if (!creditData.creditCard) setCardImg("");
    setCredit(creditData);
  }

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
    return <Redirect to="/mybookings/" />;
  }

  return (
    <Container className={pageStyle.root}>
      <Typography variant="h4" className={pageStyle.pageTitle}>
        Payment
      </Typography>

      <BookingInfo info={state} />
      <Divider />
      <Box className={pageStyle.wrapper}>
        <Typography variant="h5" className={style.InfoTitle}>
          Account Information
        </Typography>
        <InfoForm {...user} />
      </Box>
      <Divider />
      <Box className={pageStyle.wrapper}>
        <Typography variant="h5" className={style.InfoTitle}>
          Payment Method
        </Typography>
        <PaymentPicker handleChange={handleChange} />

        <PaymentOptionWrapper
          option={user.paymentPicker}
          handleCredit={handleCredit}
          onCreditCardTypeChanged={() =>
            onCreditCardTypeChanged(type, setType, setCardImg)
          }
          cardNum={credit.creditCard}
          cvc={credit.cvc}
          expire={credit.expire}
          cardImg={cardImg}
        />
      </Box>
      <Box className={pageStyle.btnCtn}>
        <Button
          onClick={() => {
            setShowModal(true);
            setPaymentSuccess(true);
          }}
          className={pageStyle.btn}
          type="submit"
        >
          Finish & Pay
        </Button>
      </Box>
      <Modal
        onClose={() => controlCloseModal(paymentSuccess)}
        paymentO
        open={showModal}
      >
        {paymentSuccess ? (
          <div className="modal__container">
            <CheckIcon className={IconStyle.checkIcon} />
            <h1>Thank you!</h1>
            <h2>for booking with Holiday Maker.</h2>
            <p>Invoice will be sent by post to the address provided.</p>
          </div>
        ) : (
          <div className="modal__container">
            <ErrorIcon className={IconStyle.errorIcon} />
            <h1>Oops Something went wrong!</h1>
            <h3>Your payment hasn't been confirmed, please try again.</h3>
          </div>
        )}
      </Modal>
    </Container>
  );
}

export default Payment;
