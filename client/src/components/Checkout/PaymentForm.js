import React, { useState } from "react";

import {
  PayForm,
  ImgContainer,
  IMG,
  CarNumContainer,
  CardNum,
  EXPCVCContainer,
  EXPCVCDiv,
  EXPCVCInput,
} from "./PaymentStyles";

function PaymentForm({ setCardNum, setExpire, setCvc, setType }) {
  const [cardImg, setCardImg] = useState("");

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

  return (
    <PayForm>
      <CarNumContainer>
        <p>Card Number</p>
        <CardNum
          placeholder="0000 0000 0000 0000"
          options={{
            creditCard: true,
            onCreditCardTypeChanged,
          }}
          onChange={handleCardNum}
        />
        <ImgContainer>
          <IMG src={cardImg} />
        </ImgContainer>
      </CarNumContainer>

      <EXPCVCContainer className="exp-cvc__container">
        <EXPCVCDiv>
          <p>Expire</p>
          <EXPCVCInput
            placeholder="MM / YY"
            options={{ date: true, datePattern: ["m", "d"] }}
            onChange={(e) => setExpire(e.target.value)}
            className="exp-cvc__input"
          />
        </EXPCVCDiv>

        <EXPCVCDiv>
          <p>CVC</p>
          <EXPCVCInput
            placeholder="CVV"
            options={{
              blocks: [3],
              numericOnly: true,
            }}
            onChange={(e) => setCvc(e.target.value)}
            className="exp-cvc__input"
          />
        </EXPCVCDiv>
      </EXPCVCContainer>
    </PayForm>
  );
}

export default PaymentForm;
