import React from "react";
import { Button } from "@material-ui/core";

const SaveSearch = ({savedSearchParams}) => {
  function saveSearch(){
    // Make post to server with savedSearchParams
    console.log(savedSearchParams);
  }

  return(
      <Button 
        size = "small"
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
