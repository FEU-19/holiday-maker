import React, { useState } from "react";

import { Redirect, useLocation } from "react-router-dom";
import CheckIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";

import { makeStyles } from "@material-ui/core/styles";
import { useStyles, iconStyle } from "./PaymentStyles";
import Modal from "../common/Modal/Modal";
import { Container, Button, Divider } from "@material-ui/core";

// import PaymentForm from "./PaymentForm";
import PaymentForm from "./PaymentForm2";

import BookingInfo from "./BookingInfo";
import InfoForm from "./InfoForm";

function Payment() {
  const { state } = useLocation();

  const IconStyle = iconStyle();
  console.log(state);

  //Payment States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const [cardNum, setCardNum] = useState("");
  const [expire, setExpire] = useState("");
  const [cvc, setCvc] = useState("");
  const [type, setType] = useState("");
  const [cardImg, setCardImg] = useState("");

  // cleave payment function
  const handleCardNum = (e) => {
    setCardNum(e.target.value);

    if (e.target.value === "") setCardImg("");
  };

  function onCreditCardTypeChanged(type) {
    setType(type);

    const visaCard = "https://i.ibb.co/vVYd6Xq/visa-3-226460.png";

    const masterCard = "https://i.ibb.co/HFg4VgG/Master-Card.png";

    const maestroCard = "https://i.ibb.co/vQm4yLR/21-credit-512.png";

    const AMEX = "https://i.ibb.co/FXP29n4/American-Express-copy.png";

    const discover =
      "https://i.ibb.co/bXPV1nH/atm-card-credit-card-debit-card-discover-icon-discover-card-png-512-512.png";

    const JCB = "https://i.ibb.co/5nhStm0/cropped-favicon.png";

    const dinnersCard = "https://i.ibb.co/WVqdBMS/Diners-Club1950.png";

    const instaPay =
      "https://i.ibb.co/1Jmrn7Q/Xs-Gvw5zw-KGRs4-S6o3ma4ika8-WXk-cdw-Jaj-EEZhx-Ul-PCJGnj-Bt-Mu-HAXQRjd-PQh-Md-Er-Po-B.png";

    const UATP = "https://i.ibb.co/kJ2BGzZ/website-UATPLogo.png";

    type === "visa" && setCardImg(visaCard);
    type === "mastercard" && setCardImg(masterCard);
    type === "amex" && setCardImg(AMEX);
    type === "diners" && setCardImg(dinnersCard);
    type === "jcb" && setCardImg(JCB);
    type === "uatp" && setCardImg(UATP);
    type === "discover" && setCardImg(discover);
    type === "maestro" && setCardImg(maestroCard);
    type === "instapayment" && setCardImg(instaPay);
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

      <PaymentForm
        handleCardNum={handleCardNum}
        onCreditCardTypeChanged={onCreditCardTypeChanged}
        cardNum={cardNum}
        cardImg={cardImg}
        setType={setType}
        setCardImg={setCardImg}
        setCvc={setCvc}
        setExpire={setExpire}
      />

      <Button
        onClick={() => setShowModal(true)}
        className="payBtn"
        type="submit"
      >
        Finish & Pay
      </Button>

      <Modal onClose={() => controlCloseModal(paymentSuccess)} open={showModal}>
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
