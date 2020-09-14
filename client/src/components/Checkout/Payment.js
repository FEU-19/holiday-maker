import React, { useState, useEffect } from "react";
import axios from "axios";

import { Redirect, useLocation } from "react-router-dom";
import CheckIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import { iconStyle, PageStyle } from "./PaymentStyles";
import Modal from "../common/Modal/Modal";
import { Container, Button, Divider, Box } from "@material-ui/core";

// import PaymentForm from "./PaymentForm";
import PaymentForm from "./PaymentForm";

import BookingInfo from "./BookingInfo";
import InfoForm from "./InfoForm";

function Payment() {
  const IconStyle = iconStyle();
  const pageStyle = PageStyle();

  const [user, setUser] = useState({
    firstName: "",
    surname: "",
    email: "",
    zipCode: "",
    phoneNumber: "",
    city: "",
    adress: "",
    country: "",
  });

  const [credit, setCredit] = useState({
    creditCard: "",
    expire: "",
    cvc: "",
  });
  const [cardImg, setCardImg] = useState("");
  const [type, setType] = useState("");
  let userId = "5f5aa3bc7bd3af45e0c97964";

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/users/${userId}`)
      .then((response) => {
        let user = response.data.data;
        const data = {
          firstName: user.firstName,
          surname: user.surname,
          email: user.email,
          zipCode: user.zipCode,
          phoneNumber: user.phoneNumber,
          city: user.city,
          adress: "copacana fixa adressfält!!!",
          country: "Sweden",
        };

        return data;
      })
      .then((data) => {
        setUser(data);
      });
  }, []);

  // User data.
  function handleChange(e) {
    let userData = {
      ...user,
      [e.target.name]: e.target.value,
    };

    setUser(userData);
  }

  // Cleave credit
  function handleCredit(e) {
    let creditData = {
      ...credit,
      [e.target.name]: e.target.value,
    };
    if (!creditData.creditCard) setCardImg("");
    setCredit(creditData);
  }

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
    <Container className={pageStyle.root}>
      <h1 className={pageStyle.pageTitle}>Payment</h1>
      <BookingInfo />
      <Divider />
      <Box className={pageStyle.wrapper}>
        <h2 className={pageStyle.header}>Account Information</h2>
        <InfoForm
          firstName={user.firstName}
          lastName={user.surname}
          email={user.email}
          address={user.adress}
          city={user.city}
          phoneNum={user.phoneNumber}
          zipcode={user.zipCode}
          handleChange={handleChange}
          country={user.country}
        />
      </Box>
      <Divider />
      <Box className={pageStyle.wrapper}>
        <h2 className={pageStyle.header}>Payment Method</h2>
        <PaymentForm
          handleCredit={handleCredit}
          onCreditCardTypeChanged={onCreditCardTypeChanged}
          cardNum={credit.creditCard}
          cvc={credit.cvc}
          expire={credit.expire}
          cardImg={cardImg}
        />
      </Box>
      <Box className={pageStyle.btnCtn}>
        <Button
          onClick={() => setShowModal(true)}
          className={pageStyle.btn}
          type="submit"
        >
          Finish & Pay
        </Button>
      </Box>
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
