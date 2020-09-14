import { makeStyles } from "@material-ui/core/styles";

import styled from "styled-components"; // need to convert to material ui styles

//Payment page
export const PageStyle = makeStyles(() => ({
  wrapper: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: 30,
  },
  pageTitle: {
    /*color: "#162c72", // darkBlue */
    color: "#E57D7C", // warm-pink
    textAlign: "center",
  },
  header: {
    /*color: "#4ab0bd", // lightGreen */
    color: "#9B7F7E", //warm sandy
  },
  btnCtn: {
    textAlign: "center",
  },
  btn: {
    /*backgroundColor: "#162c72", // darkBlue */
    backgroundColor: "#6B8D97", // warm greenBlue
    color: "white",
  },
}));

// Account info Form
export const InfoFormStyle = makeStyles(() => ({
  form: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
}));

// TextInput style
export const InputStyle = makeStyles(() => ({
  input: {
    minWidth: "180px",
    width: "30%",
    flex: 1,
    margin: "10px",
  },
}));

// Payment Form style

export const paymentFormStyle = makeStyles((theme) => ({
  form: {
    width: "350px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid #162c72",
    margin: "0 auto",
    borderRadius: "10px",
    padding: "20px",
  },

  wrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  imgWrapper: {
    width: "130px",
    height: "50px",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "5px",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  label: {
    margin: "5px",
    width: "130px",
    maxWidth: "180px",
    display: "flex",
    flexDirection: "column",
  },
  inputCardNum: {
    width: "160px",
    margin: "5px 0 5px 0",
    lineHeight: "16px",
    fontSize: "16px",
  },
  inputDate: {
    width: "60px",
    margin: "5px 0 5px 0",
    lineHeight: "16px",
    fontSize: "16px",
  },
  inputCVC: {
    width: "30px",
    margin: "5px 0 5px 0",
    lineHeight: "16px",
    fontSize: "16px",
  },
}));

// Modal style
export const ModalStyle = makeStyles(() => ({
  constainer: {
    position: "relative",
  },
  content: {
    width: "30rem",
    height: "20rem",
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "5px",
  },
  closeBtn: {
    width: "2rem",
    height: "2rem",
    position: "absolute",
    right: "0.1rem",
    top: "0.1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
  },
  closeIcon: {
    color: "grey",
  },
  errorIcon: {
    color: "red",
    fontSize: "3rem",
  },
  checkIcon: {
    color: "green",
    fontSize: "3rem",
  },
}));

export const InputStyles = makeStyles(() => ({
  label: {
    color: "#162c72",
    "&focusedLabel": {
      color: "#162c72",
    },
  },
}));

// Modal icon style
export const iconStyle = makeStyles(() => ({
  errorIcon: {
    color: "red",
    fontSize: "5rem",
  },
  checkIcon: {
    color: "green",
    fontSize: "5rem",
  },
}));

// the following code need to convert to material ui component
/* booking info  beach style


const Title = styled.h2`
  color: #4ab1bb;
`;

const SmlHR = styled.hr`
  border: none;
  background-color: white;
  height: 0.5px;
  margin: 0px auto;
  width: 90%;
`;


const BookingInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BookingInfoContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-direction: column;
`;


const BookingInfoBoxDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  background-color: #9db0c6;
  padding: 0 15px;
  box-shadow: 0px 1px 1px grey;
`;

const BookingInfoTextAlign = styled.div`
  text-align: left;
`;

const BookingInfoTitle = styled.h3`
  color: #162c72;
  display: flex;
  align-items: center;
  width: 100px;
`;

const BookingInfoList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 10px auto;
`;

const BookingInfoItems = styled.li`
  width: 46%;
  text-align: left;
  margin-top: 5px;
`;
const BookingInfoText = styled.p`
  font-weight: 700;
  align-self: flex-end;
  margin-right: 40px;
  color: whitesmoke;
  font-weight: 700;
`;


*/

// warm beach style

const Title = styled.h2`
  color: #9b7f7e;
`;

const SmlHR = styled.hr`
  border: none;
  background-color: whitesmoke;
  height: 0.5px;
  margin: 0px auto;
  width: 90%;
`;

const BookingInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BookingInfoContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  flex-direction: column;
`;

// #6B8D97 greenblue
const BookingInfoBoxDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  background-color: #6b8d97;
  padding: 0 15px;
  box-shadow: 0px 1px 1px grey;
`;

const BookingInfoTextAlign = styled.div`
  text-align: left;
`;

const BookingInfoTitle = styled.h3`
  color: #e55b5b;
  display: flex;
  align-items: center;
  width: 100px;
`;

const BookingInfoList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 10px auto;
`;

const BookingInfoItems = styled.li`
  width: 46%;
  text-align: left;
  margin-top: 5px;
`;
const BookingInfoText = styled.p`
  font-weight: 700;
  align-self: flex-end;
  margin-right: 40px;
  color: whitesmoke;
  font-weight: 700;
`;

export {
  Title,
  SmlHR,
  BookingInfoDiv,
  BookingInfoContainer,
  BookingInfoBoxDiv,
  BookingInfoTextAlign,
  BookingInfoTitle,
  BookingInfoText,
  BookingInfoList,
  BookingInfoItems,
};
