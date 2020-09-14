import { makeStyles } from "@material-ui/core/styles";
export const modalStyle = makeStyles(() => ({
  constainer: {
    position: "relative",
  },
  content: {
    width: "30rem",
    height: "20rem",
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "5px",
  },
  closeBtn: {
    width: "2rem",
    height: "2rem",
    position: "absolute",
    right: "0.1rem",
    top: "0.1rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    border: "none",
  },
  closeIcon: {
    color: "grey",
  },
}));
