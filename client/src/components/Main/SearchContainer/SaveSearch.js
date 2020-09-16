import React from "react";
//import styled from "styled-components";
//import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

const SaveSearch = ({savedSearchParams}) => {

  function saveSearch(){
    // Make post to server and save hotel ID in user bookmarkedHotels[]
    console.log(savedSearchParams);
  }

  return(
      <Button
        type="button"
        variant="contained"
        color="primary"
        placeholder="Save search"
        onClick={saveSearch}
      >
        Save search
      </Button>
  );
}

export default SaveSearch;
