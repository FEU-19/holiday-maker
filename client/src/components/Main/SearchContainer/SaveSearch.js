import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import {Bookmarks} from "@material-ui/icons";

const useStyle = makeStyles(() => ({
  bookmarks: {
    marginTop: "5px",
    "&:hover" : {
      cursor: "pointer",
      opacity:"0.8",

    }
  }
}))
const SaveSearch = ({savedSearchParams}) => {
  const classes = useStyle();

  function saveSearch(){
    // Make post to server with savedSearchParams
    console.log(savedSearchParams);
  }

  return(
      <Bookmarks className = {classes.bookmarks}
        color="primary"
        placeholder="Save search"
        onClick={saveSearch}
      />
  );
}

export default SaveSearch;
