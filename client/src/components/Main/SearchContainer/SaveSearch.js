import React from "react";
<<<<<<< HEAD
import { Button, makeStyles } from "@material-ui/core";
import {Bookmarks} from "@material-ui/icons";
=======
//import styled from "styled-components";
//import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
>>>>>>> f35a0cdfa2d671e402902964aab0066a1db1e435

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
    // Make post to server and save hotel ID in user bookmarkedHotels[]
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
