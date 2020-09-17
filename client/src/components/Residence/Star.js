import React from "react";
import Rating from "@material-ui/lab/Rating";

const Star = ({ value }) => {
  return <Rating max={1} value={value} readOnly />;
};

export default Star;
