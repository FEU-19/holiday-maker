import React, { useState } from "react";

import {
  PayForm,
  Table,
  ImgContainer,
  IMG,
  CarNumContainer,
  CardNum,
  EXP_CVC_Container,
  EXP_CVC_Div,
  EXP_CVC_Input,
} from "./PaymentStyles";

function PaymentForm() {
  const [cardNum, setCardNum] = useState("");
  const [expire, setExpire] = useState("");
  const [cvc, setCvc] = useState("");
  const [type, setType] = useState("");
  const [cardImg, setCardImg] = useState("");

  const handleCardNum = (e) => {
    setCardNum(e.target.value);

    if (e.target.value === "") setCardImg("");
  };

  function onCreditCardTypeChanged(type) {
    setType(type);

    const visaCard =
      "https://cdn.iconscout.com/icon/free/png-512/visa-3-226460.png";

    const masterCard =
      "https://lh3.googleusercontent.com/proxy/dmvFcHAdPHPbRyhhg1GAivix2C6xFQUpeZDJEVNMBQ7NeA1w1_jygSEgnpP6Gv2Kyz2iBF-oj8yN0VeivB_eDlehPTAS890p6rqnu1_IavgM7efA3U3nbIhlyj90ci1jTuSHAA";

    const maestroCard =
      "https://cdn0.iconfinder.com/data/icons/credit-8/512/21_credit-512.png";

    const AMEX =
      "https://paymentweek.com/wp-content/uploads/2015/10/American-Express-copy.png";

    const discover =
      "https://img.pngio.com/atm-card-credit-card-debit-card-discover-icon-discover-card-png-512_512.png";

    const JCB =
      "https://www.jcbusa.com/wp-content/uploads/2017/10/cropped-favicon.png";

    const dinnersCard =
      "https://lh3.googleusercontent.com/proxy/Jw1N_BUB_ZnnPy8k7msnklKWEdRIbWkj1tQwfOzSHJz6JC31ZZFd0L4atnBqfKTzm1GUYDKkK9rqC2rrwS7GO5SovOE4qZZy5CGtgMWXY48ZurVEljMj1Q";

    const instaPay =
      "https://lh3.googleusercontent.com/XsGvw5zwKGRs4S6o3ma4ika8WXk_cdwJajEEZhxUlPCJGnjBtMuHAXQRjdPQhMdErPoB";

    const UATP =
      "https://uatp.com/wp-content/uploads/2016/08/website_UATPLogo.png";

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
      <Table>
        <tbody>
          <tr>
            <CarNumContainer>
              <p>Card number</p>
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
          </tr>

          <tr>
            <EXP_CVC_Container className="exp-cvc__container">
              <EXP_CVC_Div>
                <p>Expire</p>
                <EXP_CVC_Input
                  placeholder="MM/YY"
                  options={{ date: true, datePattern: ["m", "d"] }}
                  onChange={(e) => setExpire(e.target.value)}
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
                  onChange={(e) => setCvc(e.target.value)}
                  className="exp-cvc__input"
                />
              </EXP_CVC_Div>
            </EXP_CVC_Container>
          </tr>
        </tbody>
      </Table>
    </PayForm>
  );
}

export default PaymentForm;
