import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

//Payment page
export const PageStyle = makeStyles(() => ({
  wrapper: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
    marginBottom: 30,
  },
  pageTitle: {
    color: "#162c72", // darkBlue
    textAlign: "center",
  },
  btnCtn: {
    textAlign: "center",
  },
  btn: {
    backgroundColor: "#162c72", // darkBlue
    color: "white",
  },
}));

// Account info Form
export const InfoFormStyle = makeStyles(() => ({
  form: {
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    paddingLeft: 20,
  },
}));

// TextInput style
export const InputStyle = makeStyles(() => ({
  input: {
    minWidth: "180px",
    width: "30%",
    flex: 1,
    margin: "10px",
  },
}));

// Payment Form style

export const paymentFormStyle = makeStyles((theme) => ({
  form: {
    width: "350px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid #162c72",
    margin: "0 auto",
    borderRadius: "10px",
    padding: "20px",
  },

  wrapper: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  imgWrapper: {
    width: "130px",
    height: "50px",
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "5px",
  },
  image: {
    width: "100%",
    objectFit: "contain",
  },
  label: {
    margin: "5px",
    width: "130px",
    maxWidth: "180px",
    display: "flex",
    flexDirection: "column",
  },
  inputCardNum: {
    width: "160px",
    margin: "5px 0 5px 0",
    lineHeight: "16px",
    fontSize: "16px",
  },
  inputDate: {
    width: "60px",
    margin: "5px 0 5px 0",
    lineHeight: "16px",
    fontSize: "16px",
  },
  inputCVC: {
    width: "30px",
    margin: "5px 0 5px 0",
    lineHeight: "16px",
    fontSize: "16px",
  },
}));

// Modal style
export const ModalStyle = makeStyles(() => ({
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
  errorIcon: {
    color: "red",
    fontSize: "3rem",
  },
  checkIcon: {
    color: "green",
    fontSize: "3rem",
  },
}));

export const InputStyles = makeStyles(() => ({
  label: {
    color: "#162c72",
    "&focusedLabel": {
      color: "#162c72",
    },
  },
}));

// Modal icon style
export const iconStyle = makeStyles(() => ({
  errorIcon: {
    color: "red",
    fontSize: "5rem",
  },
  checkIcon: {
    color: "green",
    fontSize: "5rem",
  },
}));

// BookingInfo
export const BookingInfoStyle = makeStyles(() => ({
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    display: "flex",
    width: "80%",
    justifyContent: "center",
    flexDirection: "column",
  },

  title: {
    color: "#4AB0BD",
    display: "flex",
    alignItems: "center",
    width: "100px",
    margin: "1% 0 0 0",
    fontWeight: "700",
  },

  boxDiv: {
    display: "flex",
    flex: "1",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "5%",
    borderRadius: "10px",
    backgroundColor: "#F5F5F5",
    padding: "10px 15px",
    boxShadow: "0px 1px 1px grey",
  },

  ul: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    listStyle: "none",
    margin: "10px auto",
    marginTop: "0",
  },

  li: {
    width: "46%",
    textAlign: "left",
    marginTop: "5px",
  },

  hr: {
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    height: "0.5px",
    margin: "0px auto",
    width: "90%",
  },

  p: {
    fontWeight: "700",
    alignSelf: "flex-end",
    marginRight: "40px",
    padding: " 10px 0",
  },

  InfoTitle: {
    color: "#f23622",
    margin: "5% auto",
  },
  TotalAmount: {
    fontWeight: "700",
    alignSelf: "flex-end",
    margin: "0 60px 10px 0px",
  },
}));

export const radioTheme = createMuiTheme({
  palette: {
    primary: { main: "#162c72" }, // Purple and green play nicely together.
    secondary: { main: "#11cb5f" }, // This is just green.A700 as hex.
  },
});

// Payment picker
export const paymentPicker = makeStyles(() => ({
  box: {
    marginBottom: "10px",
  },

  radio: {
    "&$checked": {
      color: "#162c72",
    },
    border: "1px solid #162c72",
    padding: "10px 50px",
  },
}));
