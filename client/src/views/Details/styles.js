import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { green, orange } from "@material-ui/core/colors";

export const useStyle = makeStyles((style) => ({
  root: {
    flexGrow: 1,
  },
  section: {
    height: "auto",
  },
  rule: {
    margin: "10px auto",
  },
  carousel: {
    paddingTop: 70,
    outline: "none",
  },
  center: {
    backgroundColor: "#fcba03",
  },
  sticky: {
    width: "100%",
    height: 50,
    position: "sticky",
    bottom: 0,
    margin: 0,
  },

  hotelInfoCtn: {
    [style.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  hotelDetails: {
    marginLeft: "3rem",
    [style.breakpoints.down("sm")]: {
      width: "80vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "0",
    },
  },
  hotelImgCtn: {
    display: "flex",
    justifyContent: "center",
  },
  hotelImg: {
    width: "80%",
    borderRadius: "10px",
  },
  roomImg: {
    width: "100%",
    borderRadius: "10px",
    objectFit: "cover",
  },
}));

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
      height: "200px",
    },
    secondary: {
      main: green[500],
    },
  },
});
