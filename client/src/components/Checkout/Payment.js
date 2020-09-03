import React, { useState, Profiler } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Cleave from "cleave.js/react";

import Modal from "../common/Modal/Modal";

import "./Payment.css";
import Country_DropdownList from "./Country_DropdownList";

import DoneIcon from "@material-ui/icons/Done";
import CancelIcon from "@material-ui/icons/Cancel";

import {
  PaymentPage,
  PaymentContainer,
  H1,
  HR,
  CarNumContainer,
  CardNum,
  InfoForm,
  PayForm,
  InputContainer,
  RadioBtn__Container,
  RadioBtn__ContainerDiv,
  RadioBtn__ContainerInput,
  ImgContainer,
  IMG,
  Table,
  EXP_CVC_Container,
  EXP_CVC_Div,
  EXP_CVC_Input,
  PayBtn,
} from "./PaymentStyles";

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

  // Pay info
  const [cardNum, setCardNum] = useState("");
  const [expire, setExpire] = useState("");
  const [cvc, setCvc] = useState("");
  const [type, setType] = useState("");

  // Check if payment confirmed
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentFail, setPaymentFail] = useState(false);

  // Close modal
  const [showModal, setShowModal] = useState(false);

  function onCreditCardTypeChanged(type) {
    setType(type);
  }

  return (
    <PaymentPage className={classes.root} noValidate autoComplete="off">
      <PaymentContainer>
        <H1>Payment</H1>
        <InfoForm>
          <InputContainer>
            <TextField
              id="standard-basic"
              label="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <p>Last name</p>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              id="standard-basic"
              label="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <TextField
              id="standard-basic"
              label="Phone number"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
            />
          </InputContainer>
        </InfoForm>
        <br />
        <HR />

        <form className="info__form">
          <InputContainer>
            <p>Country</p>
            <Country_DropdownList />
          </InputContainer>
          <InputContainer>
            <p>City</p>
            <input
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <p>Zip code</p>
            <input
              type="text"
              name="zipCode"
              value={zipcode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <p>Adress</p>
            <input
              type="text"
              name="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </InputContainer>
        </form>

        <br />
        <hr />

        <form className="pay__form">
          <table>
            <tr>
              <div className="radioBtn__container">
                <div>
                  <input type="radio" name="payMethod" value="paypal" />
                  <label htmlFor="paypal">Paypal</label>
                </div>
                <img
                  src="https://lh3.googleusercontent.com/proxy/hYI0iYfNDK-dSz7htxguC_OsAmSt14QuNq5xD8RG9Mjm_aPmkRxxQ9DCpQJDhRkIn7ij51IyYTZpH2srbAP6H_snJBVXrQfWtg7Hb8SP6zJl5LgtNuQ"
                  alt="paypal logo"
                />
              </div>
            </tr>

            <tr>
              <div className="radioBtn__container">
                <div>
                  <input
                    type="radio"
                    name="payMethod"
                    value="debit/creditCard"
                  />
                  <label htmlFor="paypal">Debit/credit card</label>
                </div>
                <div className="img__conatiner">
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/visa-3-226460.png"
                    alt="visa logo"
                  />
                  <img
                    src="https://cdn.freebiesupply.com/logos/large/2x/mastercard-6-logo-png-transparent.png"
                    alt="mastercard logo"
                  />
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/credit-8/512/21_credit-512.png"
                    alt="maestro logo"
                  />
                  <img
                    src="https://paymentweek.com/wp-content/uploads/2015/10/American-Express-copy.png"
                    alt="american-express logo"
                  />
                </div>
              </div>
            </tr>

            <tr>
              <div className="cardNum__container">
                <p>Card number</p>
                <Cleave
                  placeholder="0000 0000 0000 0000"
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged,
                  }}
                  onChange={(e) => setCardNum(e)}
                  className="cardNum"
                />
              </div>
            </tr>

            <tr>
              <div className="exp-cvc__container">
                <div>
                  <p>Expire</p>
                  <Cleave
                    placeholder="MM/YY"
                    options={{ date: true, datePattern: ["m", "d"] }}
                    onChange={setExpire}
                    className="exp-cvc__input"
                  />
                </div>

                <div>
                  <p>CVC</p>
                  <Cleave
                    placeholder="CVV"
                    options={{
                      blocks: [3],
                      numericOnly: true,
                    }}
                    onChange={setCvc}
                    className="exp-cvc__input"
                  />
                </div>
              </div>
            </tr>
          </table>
        </form>
        <button
          onClick={() => setShowModal(true)}
          className="payBtn"
          type="submit"
        >
          Finish & Pay
        </button>
      </PaymentContainer>
      <Modal onClose={() => setShowModal(false)} showModal={showModal}>
        {paymentSuccess && (
          <div className="modal__container">
            <DoneIcon className="doneIcon" />
            <h1>Thank you!</h1>
            <h2>for booking with Holiday Maker.</h2>
            <p>Booking confirmation has been sent to your email.</p>
          </div>
        )}
        {paymentFail && (
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
