import Cleave from "cleave.js/react";

import styled from "styled-components";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const PaymentPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;

const PaymentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const H1 = styled.h1`
  margin-bottom: 20px;
  padding: 10px;
`;

const HR = styled.hr`
  border: none;
  background-color: gray;
  height: 2px;
  margin: 50px 0;
`;

const CarNumContainer = styled.td`
  display: flex;
  justify-content: space-around;
  padding: 5px 80px;
  border: 1px solid;
`;

const CardNum = styled(Cleave)`
  border: none;
  outline: none;
`;

const InfoForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const PayForm = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  flex: 1;
  text-align: center;
  margin: 0;
  display: inline-block;
`;

const RadioBtnContainer = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 25px;
  border: 1px solid;
`;

const RadioBtnContainerDiv = styled.div`
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const RadioBtnContainerInput = styled(FormControlLabel)`
  height: 20px;
  width: 20px;
  margin-right: 15px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IMG = styled.img`
  height: 50px;
  object-fit: contain;
  margin-left: 5px;
`;

const Table = styled.table`
  width: 65%;
  border-collapse: collapse;
`;

const EXPCVCContainer = styled.td`
  display: flex;
`;

const EXPCVCDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  padding: 5px 10px;
  border: 1px solid;
`;

const EXPCVCInput = styled(Cleave)`
  border: none;
  outline: none;
`;

const PayBtn = styled.button`
  font-size: 22px;
  background-color: rgb(59, 27, 202);
  border-radius: 20px;
  padding: 10px 110px;
  color: #fff;
  border: 1px solid;
  margin: 40px 0;
  cursor: pointer;
`;

export {
  PaymentPage,
  PaymentContainer,
  H1,
  HR,
  CarNumContainer,
  CardNum,
  InfoForm,
  PayForm,
  InputContainer,
  RadioBtnContainer,
  RadioBtnContainerDiv,
  RadioBtnContainerInput,
  ImgContainer,
  IMG,
  Table,
  EXPCVCContainer,
  EXPCVCDiv,
  EXPCVCInput,
  PayBtn,
};
