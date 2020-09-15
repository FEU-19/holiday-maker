import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const FooterCont = styled.footer`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #162c72;
  color: white;
  padding: 20px;
  border-radius: 1px;

  .MuiGrid-spacing-xs-2 > .MuiGrid-item{
      padding: 1px 10px 0px 0px;
  }

`;

const Footer = () => {
  return (
    <FooterCont>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} align="center">
          <Typography variant="subtitle1" >Copyright by HolidayMaker 2020</Typography>
        </Grid>
        <Grid item xs={1} sm={1} align="right">
          <InstagramIcon></InstagramIcon>
        </Grid>
        <Grid item xs={4} sm={11}>
          <Typography variant="body1">
            holidaymaker
          </Typography>
        </Grid>
        
         <Grid item xs={1} sm={1} align="right">
          <TwitterIcon></TwitterIcon>
        </Grid>
        <Grid item xs={4} sm={11}>
          <Typography variant="body1">
            holidaymaker
          </Typography>
        </Grid>
      </Grid>
    </FooterCont>
  );
};

export default Footer;
