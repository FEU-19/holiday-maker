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
    color: "#162c72", // darkBlue
    textAlign: "center",
  },
  header: {
    color: "#4ab0bd", // lightGreen
  },
  btnCtn: {
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#162c72", // darkBlue
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
    width: "50%",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    border: "1px solid black",
    margin: "0 auto",
    borderRadius: "10px",
    padding: "10px",
  },

  wrapper: {
    display: "flex",
    justifyContent: "space-around",
  },
  imgWrapper: {
    width: "10%",
    height: "50px",
    display: "flex",
    justifyContent: "flex-end",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  label: {
    width: "50%",
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

// booking info
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
