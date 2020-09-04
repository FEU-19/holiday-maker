import React, { useState } from "react";

import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import {
  PayForm,
  Table,
  RadioBtn__Container,
  RadioBtn__ContainerDiv,
  RadioBtn__ContainerInput,
  ImgContainer,
  IMG,
  CarNumContainer,
  CardNum,
  EXP_CVC_Container,
  EXP_CVC_Div,
  EXP_CVC_Input,
} from "./PaymentStyles";

function PaymentForm({ value }) {
  const [cardNum, setCardNum] = useState("");
  const [expire, setExpire] = useState("");
  const [cvc, setCvc] = useState("");
  const [type, setType] = useState("");

  const [radioValue, setRadioValue] = useState("");

  const handleRadio = (event) => {
    setRadioValue(event.target.value);
  };

  function onCreditCardTypeChanged(type) {
    setType(type);
  }

  return (
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
  );
}

export default PaymentForm;
