import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

export const useGrid = makeStyles((grid) => ({
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
    outline: 0,
  },
  center: {
    backgroundColor: "#fcba03",
  },
}));

export const useTheme = createMuiTheme((theme) => ({
  palette: {
    Primary: "black",
    Secondary: "orange",
  },
}));
