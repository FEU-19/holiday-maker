import React from "react";

import PaymentForm from "./PaymentForm";

const PaymentOptionWrapper = ({
  option,
  onCreditCardTypeChanged,
  handleCredit,
  cvc,
  expire,
  cardNum,
  cardImg,
}) => {
  switch (option) {
    case "credit card":
      return (
        <PaymentForm
          onCreditCardTypeChanged={onCreditCardTypeChanged}
          handleCredit={handleCredit}
          cvc={cvc}
          expire={expire}
          cardNum={cardNum}
          cardImg={cardImg}
        />
      );
    case "invoice":
      return; /* <Invoice /> */
    default:
      return null;
  }
};

export default PaymentOptionWrapper;
