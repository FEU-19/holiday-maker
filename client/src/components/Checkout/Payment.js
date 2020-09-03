import React, { useState, Profiler } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import Modal from "../common/Modal/Modal";

// import "./Payment.css";
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
import TextInput from "./TextInput";

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

  const [radioValue, setRadioValue] = useState("");

  function onCreditCardTypeChanged(type) {
    setType(type);
  }

  const handleRadio = (event) => {
    setRadioValue(event.target.value);
  };

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

        <PayForm>
          <Table>
            <tr>
              <RadioBtn__Container>
                <RadioBtn__ContainerDiv>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={radioValue}
                    onChange={handleRadio}
                  >
                    <RadioBtn__ContainerInput
                      value="paypal"
                      control={<Radio />}
                      label="Paypal"
                    />
                  </RadioGroup>
                </RadioBtn__ContainerDiv>
                <IMG
                  src="https://lh3.googleusercontent.com/proxy/hYI0iYfNDK-dSz7htxguC_OsAmSt14QuNq5xD8RG9Mjm_aPmkRxxQ9DCpQJDhRkIn7ij51IyYTZpH2srbAP6H_snJBVXrQfWtg7Hb8SP6zJl5LgtNuQ"
                  alt="paypal logo"
                />
              </RadioBtn__Container>
            </tr>

            <tr>
              <RadioBtn__Container>
                <RadioBtn__ContainerDiv>
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={radioValue}
                    onChange={handleRadio}
                  >
                    <RadioBtn__ContainerInput
                      value="Debit/credit card"
                      control={<Radio />}
                      label="Debit/credit card"
                    />
                  </RadioGroup>
                </RadioBtn__ContainerDiv>
                <ImgContainer>
                  <IMG
                    src="https://cdn.iconscout.com/icon/free/png-512/visa-3-226460.png"
                    alt="visa logo"
                  />
                  <IMG
                    src="https://cdn.freebiesupply.com/logos/large/2x/mastercard-6-logo-png-transparent.png"
                    alt="mastercard logo"
                  />
                  <IMG
                    src="https://cdn0.iconfinder.com/data/icons/credit-8/512/21_credit-512.png"
                    alt="maestro logo"
                  />
                  <IMG
                    src="https://paymentweek.com/wp-content/uploads/2015/10/American-Express-copy.png"
                    alt="american-express logo"
                  />
                </ImgContainer>
              </RadioBtn__Container>
            </tr>

            <tr>
              <CarNumContainer>
                <p>Card number</p>
                <CardNum
                  placeholder="0000 0000 0000 0000"
                  options={{
                    creditCard: true,
                    onCreditCardTypeChanged,
                  }}
                  onChange={(e) => setCardNum(e)}
                />
              </CarNumContainer>
            </tr>

            <tr>
              <EXP_CVC_Container className="exp-cvc__container">
                <EXP_CVC_Div>
                  <p>Expire</p>
                  <EXP_CVC_Input
                    placeholder="MM/YY"
                    options={{ date: true, datePattern: ["m", "d"] }}
                    onChange={setExpire}
                    className="exp-cvc__input"
                  />
                </EXP_CVC_Div>

                <EXP_CVC_Div>
                  <p>CVC</p>
                  <EXP_CVC_Input
                    placeholder="CVV"
                    options={{
                      blocks: [3],
                      numericOnly: true,
                    }}
                    onChange={setCvc}
                    className="exp-cvc__input"
                  />
                </EXP_CVC_Div>
              </EXP_CVC_Container>
            </tr>
          </Table>
        </PayForm>
        <PayBtn
          onClick={() => setShowModal(true)}
          className="payBtn"
          type="submit"
        >
          Finish & Pay
        </PayBtn>
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
