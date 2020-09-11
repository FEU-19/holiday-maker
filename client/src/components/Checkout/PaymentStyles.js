import Cleave from "cleave.js/react";

import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

const PaymentPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  background-color: #4ab2bbc2;
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
`;

const HR = styled.hr`
  border: none;
  background-color: #162c72;
  height: 2px;
  margin: 50px auto;
  width: 90%;
`;

const CarNumContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  border: 1px solid;
  width: 100%;
`;

const CardNum = styled(Cleave)`
  border: none;
  outline: none;
  margin-left: 10px;
  width: auto;
  background: transparent;
`;

const InfoForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
  width: 100%;
`;

const FormDiv = styled.div`
  width: 100%;
  display: flex;
  justify-conent: space-around;
  padding: 5px;
`;

const PayForm = styled.form`
  width: 40%;
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
  height: 50px;
  width: 50px;
`;

const IMG = styled.img`
  height: 100%;
  object-fit: contain;
  margin-left: 5px;
`;

const EXPCVCContainer = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid;
  border-top: none;
  width: 100%;
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
  width: 100px;
  background-color: transparent;
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

const BookingInfoDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const BookingInfoContainer = styled.div`
  display: flex;
  width: 80%;
  border: 1px solid brown;
  border-radius: 10px;
`;

const BookingInfoBoxDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const BookingInfoTextAlign = styled.div`
  text-align: left;
`;

const BookingInfoH1 = styled.h1`
  text-decoration: underline;
`;

export {
  PaymentPage,
  PaymentContainer,
  H1,
  HR,
  CarNumContainer,
  CardNum,
  InfoForm,
  FormDiv,
  PayForm,
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
  BookingInfoH1,
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
