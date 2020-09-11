import Cleave from "cleave.js/react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const PaymentPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border-radius: 10px;
`;

const PaymentContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 0;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  padding: 10px;
  color: #162c72;
`;

const Title = styled.h2`
  color: #4ab1bb;
`;

const HR = styled.hr`
  border: none;
  background-color: #162c72;
  height: 1.5px;
  margin: 50px auto 20px auto;
  width: 90%;
`;

const SmlHR = styled.hr`
  border: none;
  background-color: white;
  height: 0.5px;
  margin: 0px auto;
  width: 90%;
`;

const CarNumContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border: 1px solid #162c72;
  width: 100%;
  border-radius: 10px 10px 0 0;
  margin-top: 15px;
`;

const CardNum = styled(Cleave)`
  border: none;
  outline: none;
  margin-left: 10px;
  width: auto;
  background: transparent;
  width: 40%;
`;

const InfoForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 80%;
`;

const FormDiv = styled.div`
  width: 100%;
  display: flex;
  justify-conent: space-around;
  margin-top: 15px;
  padding: 5px;
`;

const PayForm = styled.form`
  width: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

const InputContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 0;
  display: inline-block;
`;

const ImgContainer = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
`;

const IMG = styled.img`
  height: 100%;
  object-fit: contain;
`;

const PayLabel = styled.p`
  color: #162c72;
`;

const EXPCVCContainer = styled.div`
  display: flex;
  padding: 10px 20px;
  border: 1px solid #162c72;
  border-top: none;
  width: 100%;
  border-radius: 0px 0px 10px 10px;
`;

const EXPCVCDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
`;

const EXPCVCInput = styled(Cleave)`
  margin-left: 10px;
  border: none;
  outline: none;
  background-color: transparent;
  width: 30%;
`;

const PayBtn = styled.button`
  font-size: 22px;
  background-color: #162c72;
  border-radius: 20px;
  padding: 10px 110px;
  color: #fff;
  border: 1px solid;
  margin: 40px 0;
  cursor: pointer;
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
  PaymentPage,
  PaymentContainer,
  H1,
  Title,
  HR,
  SmlHR,
  CarNumContainer,
  CardNum,
  InfoForm,
  FormDiv,
  PayForm,
  PayLabel,
  InputContainer,
  ImgContainer,
  IMG,
  EXPCVCContainer,
  EXPCVCDiv,
  EXPCVCInput,
  PayBtn,
  BookingInfoDiv,
  BookingInfoContainer,
  BookingInfoBoxDiv,
  BookingInfoTextAlign,
  BookingInfoTitle,
  BookingInfoText,
  BookingInfoList,
  BookingInfoItems,
};

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
