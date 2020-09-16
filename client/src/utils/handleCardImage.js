export function onCreditCardTypeChanged(type, setCardImg) {
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
