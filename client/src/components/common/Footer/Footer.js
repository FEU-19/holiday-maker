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
  position: relative;
  border-radius: 1px;
  
  .MuiGrid-spacing-xs-2 > .MuiGrid-item{
      padding: 1px 10px 0px 0px;
  }

`;

const Logo = styled.img`
  object-fit: contain;
  max-width: 43%;
  max-height: 43%;
  width: auto;
  height: auto;
  padding-left: 0px;
  position: absolute;
`;

const Footer = () => {
  return (
    <FooterCont>
      <Grid container spacing={2}>
        <Grid item xs={1} sm={1} align="right">
          <InstagramIcon style={{
            color: "#F23622"
          }}></InstagramIcon>
        </Grid>
        <Grid item xs={4} sm={11}>
          <Typography variant="body1">
            holidaymaker
          </Typography>
        </Grid>

         <Grid item xs={1} sm={1} align="right">
          <TwitterIcon style={{
            color: "#F23622"
          }}></TwitterIcon>
        </Grid>
        <Grid item xs={4} sm={3}>
          <Typography variant="body1">
            holidaymaker
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8} align="right">
          <Typography variant="caption" >Copyright by Holidaymaker 2020</Typography>
        </Grid>
      </Grid>
      <Logo src={process.env.PUBLIC_URL + '/Holidaymaker-logo-BIG.png'} />
    </FooterCont>
  );
};

export default Footer;
