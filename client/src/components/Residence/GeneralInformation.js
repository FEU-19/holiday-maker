import React from "react";

const boxContainer = {
  alignItems: "center",
  width: "600px",
  padding: "30px, 30px, 50px, 30px",
  backgroundColor: "#EAEAEA",
};

const title = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "75px",
  backgroundColor: "lightgrey",
  color: "grey",
};

const content = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "75px",
  backgroundColor: "lightgrey",
  color: "grey",
};

const GeneralInformation = ({info}) => {
  return(
    <div>
      <div className="residence__generalInformationContainer" style={boxContainer}>
        <div className="residence__generalInformationContainer__title" style={title}>
          <h3>Residence Overview</h3>
        </div>
        <div className="residence__generalInformationContainer__content" style={content}>

        </div>
      </div>
    </div>
  );
};

export default GeneralInformation;
