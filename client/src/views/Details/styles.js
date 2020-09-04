import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export const useStyle = makeStyles((style) => ({
  root: {
    flexGrow: 1,
  },
  section: {
    height: "90vh",
    width: "100",
  },
  rule: {
    margin: 30,
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
}));

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});
